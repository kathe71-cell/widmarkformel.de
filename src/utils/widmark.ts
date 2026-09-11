export interface DrinkItem {
  id: string;
  name: string;
  category: 'beer' | 'wine' | 'spirits' | 'cocktail' | 'custom';
  volumeMl: number;
  alcoholByVolume: number; // e.g. 5.0 for 5%
  count: number;
  icon?: string;
}

export interface UserProfile {
  gender: 'male' | 'female';
  weightKg: number;
  heightCm: number;
  age: number;
  stomachCondition: 'empty' | 'normal' | 'full'; // 10%, 20%, 30% resorptionsdefizit
  formulaType: 'classic' | 'watson';
  eliminationRate: number; // typically 0.15 permille per hour (range: 0.10 - 0.20)
  drinkingDurationHours: number; // hours of drinking session
  hoursSinceDrinkingStart: number; // for current estimated status
}

export interface CalculationResult {
  pureAlcoholGrams: number;
  reductionFactor: number;
  resorptionDeficitPercent: number;
  effectiveAlcoholGrams: number;
  maxBacPermille: number; // Theoretical peak BAK (Blutalkoholkonzentration)
  currentBacPermille: number; // BAK right now
  hoursToZero: number; // hours from start to 0.00
  hoursTo03: number; // hours until 0.30 permille (relative Fahruntüchtigkeit)
  hoursTo05: number; // hours until 0.50 permille (§ 24a StVG limit)
  timeSeries: { hour: number; bac: number; label: string }[];
  drivingStatus: {
    status: 'safe' | 'caution' | 'danger' | 'crime';
    title: string;
    description: string;
    color: string;
  };
}

export const PRESET_DRINKS: DrinkItem[] = [
  { id: 'beer-small', name: 'Bier / Pils (0,33 l)', category: 'beer', volumeMl: 330, alcoholByVolume: 4.9, count: 0 },
  { id: 'beer-large', name: 'Bier / Helles (0,5 l)', category: 'beer', volumeMl: 500, alcoholByVolume: 5.0, count: 0 },
  { id: 'wine-glass', name: 'Wein / Weißwein / Rotwein (0,2 l)', category: 'wine', volumeMl: 200, alcoholByVolume: 12.0, count: 0 },
  { id: 'sparkling-wine', name: 'Sekt / Prosecco (0,1 l)', category: 'wine', volumeMl: 100, alcoholByVolume: 11.5, count: 0 },
  { id: 'spirits-shot', name: 'Schnaps / Likör (4 cl)', category: 'spirits', volumeMl: 40, alcoholByVolume: 40.0, count: 0 },
  { id: 'cocktail', name: 'Longdrink / Cocktail (0,25 l)', category: 'cocktail', volumeMl: 250, alcoholByVolume: 11.0, count: 0 },
];

/**
 * Calculates pure alcohol mass in grams:
 * A = Volume (ml) * (Vol% / 100) * 0.8 g/ml (density of ethanol)
 */
export function calculateAlcoholGrams(drinks: DrinkItem[]): number {
  return drinks.reduce((total, drink) => {
    if (drink.count <= 0) return total;
    const drinkAlcohol = drink.volumeMl * (drink.alcoholByVolume / 100) * 0.8 * drink.count;
    return total + drinkAlcohol;
  }, 0);
}

/**
 * Calculates the reduction factor r:
 * - Classic Widmark: 0.70 for men, 0.60 for women
 * - Watson TBW (Total Body Water):
 *   Male TBW = 2.447 - (0.09516 * age) + (0.1074 * height) + (0.3362 * weight)
 *   Female TBW = -2.097 + (0.1069 * height) + (0.2466 * weight)
 *   r = TBW / (0.8 * weight)
 */
export function calculateReductionFactor(profile: UserProfile): number {
  if (profile.formulaType === 'classic') {
    return profile.gender === 'male' ? 0.70 : 0.60;
  }

  // Watson formula
  let tbw = 0;
  if (profile.gender === 'male') {
    tbw = 2.447 - (0.09516 * profile.age) + (0.1074 * profile.heightCm) + (0.3362 * profile.weightKg);
  } else {
    tbw = -2.097 + (0.1069 * profile.heightCm) + (0.2466 * profile.weightKg);
  }

  const r = tbw / (0.8 * profile.weightKg);
  // Forensic boundary check (Watson usually ranges between 0.55 and 0.80)
  return Math.min(Math.max(r, 0.48), 0.88);
}

/**
 * Comprehensive Widmark calculation with elimination curve
 */
export function calculateWidmark(profile: UserProfile, drinks: DrinkItem[]): CalculationResult {
  const totalAlcoholGrams = calculateAlcoholGrams(drinks);
  const r = calculateReductionFactor(profile);

  // Resorption deficit:
  // Empty stomach = 10% (0.10)
  // Normal meal = 20% (0.20)
  // Full/rich meal = 30% (0.30)
  const deficitMap = {
    empty: 0.10,
    normal: 0.20,
    full: 0.30,
  };
  const resorptionDeficitPercent = (deficitMap[profile.stomachCondition] || 0.20) * 100;
  const effectiveAlcoholGrams = totalAlcoholGrams * (1 - (resorptionDeficitPercent / 100));

  // Theoretical Peak BAC: c0 = A_eff / (weight * r)
  const weight = Math.max(profile.weightKg, 30);
  const maxBacPermille = effectiveAlcoholGrams > 0 ? effectiveAlcoholGrams / (weight * r) : 0;

  // Elimination kinetics:
  // Elimination typically starts approx. 0.5h after drinking begins.
  // Rate beta60 is between 0.10 and 0.20 ‰/h (default 0.15 ‰/h).
  const beta60 = profile.eliminationRate;

  // Current BAC calculation
  // Hours of elimination elapsed since consumption started minus initial absorption delay (0.5h)
  const elapsedHours = Math.max(profile.hoursSinceDrinkingStart, 0);
  const effectiveEliminationHours = Math.max(0, elapsedHours - 0.5);
  const eliminatedSoFar = effectiveEliminationHours * beta60;
  const currentBacPermille = Math.max(0, maxBacPermille - eliminatedSoFar);

  // Time calculations from start of drinking
  const hoursToZeroFromStart = maxBacPermille > 0 ? (maxBacPermille / beta60) + 0.5 : 0;
  const hoursTo03FromStart = maxBacPermille > 0.3 ? ((maxBacPermille - 0.3) / beta60) + 0.5 : 0;
  const hoursTo05FromStart = maxBacPermille > 0.5 ? ((maxBacPermille - 0.5) / beta60) + 0.5 : 0;

  // Generate hourly time series for graph (up to 24 hours or until zero)
  const maxHoursGraph = Math.min(24, Math.max(8, Math.ceil(hoursToZeroFromStart) + 2));
  const timeSeries: { hour: number; bac: number; label: string }[] = [];

  for (let h = 0; h <= maxHoursGraph; h += 0.5) {
    let bacAtH = 0;
    if (h < 0.5) {
      // Absorption ramp-up phase
      bacAtH = maxBacPermille * (h / 0.5);
    } else {
      bacAtH = Math.max(0, maxBacPermille - ((h - 0.5) * beta60));
    }
    timeSeries.push({
      hour: h,
      bac: Number(bacAtH.toFixed(3)),
      label: `+${h}h`,
    });
  }

  // Legal status assessment for Germany
  let drivingStatus: CalculationResult['drivingStatus'] = {
    status: 'safe',
    title: 'Kein messbarer Alkohol',
    description: '0,00 ‰ – Sie befinden sich im nüchternen Normbereich.',
    color: 'emerald',
  };

  if (currentBacPermille >= 1.1) {
    drivingStatus = {
      status: 'crime',
      title: 'Absolute Fahruntüchtigkeit (Straftat § 316 StGB)',
      description: 'Ab 1,10 ‰ gilt jeder Fahrzeugführer ausnahmslos als absolut fahruntüchtig. Es drohen Führerscheinentzug, hohe Geldstrafe und 3 Punkte in Flensburg.',
      color: 'rose',
    };
  } else if (currentBacPermille >= 0.5) {
    drivingStatus = {
      status: 'danger',
      title: 'Ordnungswidrigkeit (§ 24a StVG)',
      description: 'Ab 0,50 ‰ ist das Führen von Kraftfahrzeugen verboten. Mindestens 500 € Bußgeld, 2 Punkte und 1 Monat Fahrverbot.',
      color: 'amber',
    };
  } else if (currentBacPermille >= 0.3) {
    drivingStatus = {
      status: 'caution',
      title: 'Relative Fahruntüchtigkeit (§ 316 StGB)',
      description: 'Ab 0,30 ‰ droht bei Fahrfehlern, Ausfallerscheinungen oder einem Unfall bereits ein Strafverfahren wegen Trunkenheit im Verkehr.',
      color: 'yellow',
    };
  } else if (currentBacPermille > 0.0) {
    drivingStatus = {
      status: 'caution',
      title: 'Alkohol messbar (0,0 ‰ für Fahranfänger)',
      description: 'In der Führerschein-Probezeit und für Fahrer unter 21 Jahren gilt nach § 24c StVG ein striktes Alkoholverbot (0,00 ‰).',
      color: 'blue',
    };
  }

  return {
    pureAlcoholGrams: Number(totalAlcoholGrams.toFixed(1)),
    reductionFactor: Number(r.toFixed(3)),
    resorptionDeficitPercent,
    effectiveAlcoholGrams: Number(effectiveAlcoholGrams.toFixed(1)),
    maxBacPermille: Number(maxBacPermille.toFixed(2)),
    currentBacPermille: Number(currentBacPermille.toFixed(2)),
    hoursToZero: Number(hoursToZeroFromStart.toFixed(1)),
    hoursTo03: Number(hoursTo03FromStart.toFixed(1)),
    hoursTo05: Number(hoursTo05FromStart.toFixed(1)),
    timeSeries,
    drivingStatus,
  };
}
