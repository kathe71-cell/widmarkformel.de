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
  stomachCondition: 'empty' | 'normal' | 'full'; // Empirische Schätzwerte: 10%, 20%, 30% Resorptionsdefizit
  formulaType: 'classic' | 'watson';
  eliminationRate: number; // typisch 0,15 ‰/h (forensische Bandbreite: 0,10 - 0,20 ‰/h)
  drinkingDurationHours: number; // Trinkdauer (Zeitspanne zwischen erstem und letztem Getränk)
  hoursSinceDrinkingEnd: number; // Zeit seit Trinkende bis zum Auswertungszeitpunkt
}

export interface CalculationResult {
  pureAlcoholGrams: number;
  reductionFactor: number;
  resorptionDeficitPercent: number;
  effectiveAlcoholGrams: number;
  maxBacPermille: number; // Theoretische Maximal-BAK
  currentBacPermille: number; // Modellierte BAK zum Auswertungszeitpunkt
  timeSeries: { hour: number; bac: number; label: string }[];
  drivingStatus: {
    status: 'zero' | 'caution' | 'danger' | 'crime';
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
 * Berechnet die reine Alkoholmasse A in Gramm:
 * A = Volumen (ml) * (Vol.-% / 100) * 0,8 g/ml
 * (Dichte von reinem Ethanol bei Raumtemperatur ca. 0,789 g/ml, in der Praxis auf 0,8 g/ml gerundet).
 */
export function calculateAlcoholGrams(drinks: DrinkItem[]): number {
  return drinks.reduce((total, drink) => {
    if (drink.count <= 0) return total;
    const drinkAlcohol = drink.volumeMl * (drink.alcoholByVolume / 100) * 0.8 * drink.count;
    return total + drinkAlcohol;
  }, 0);
}

/**
 * Berechnet den Reduktionsfaktor r (Verteilungsfaktor):
 * - Klassische Widmark-Formel (1932):
 *   Fester Mittelwert r = 0,70 für Männer, r = 0,60 für Frauen.
 * - Watson-Formel (1980):
 *   Berechnung des Gesamtkörperwassers (Total Body Water, TBW in Litern)
 *   unter Einbeziehung von Alter, Körpergröße und Gewicht:
 *   TBW_männlich = 2,447 - (0,09516 * Alter) + (0,1074 * Größe_cm) + (0,3362 * Gewicht_kg)
 *   TBW_weiblich = -2,097 + (0,1069 * Größe_cm) + (0,2466 * Gewicht_kg)
 *   r = TBW / (0,8 * Gewicht_kg)   [0,8 = Wasseranteil des Vollbluts]
 * 
 * Anwendungsgrenzen: Bei extremem Über- oder Untergewicht (stark abweichender BMI),
 * Dehydratation oder außergewöhnlicher Muskelmasse treten naturgemäß Modellabweichungen auf.
 */
export function calculateReductionFactor(profile: UserProfile): number {
  if (profile.formulaType === 'classic') {
    return profile.gender === 'male' ? 0.70 : 0.60;
  }

  // Watson TBW
  let tbw = 0;
  if (profile.gender === 'male') {
    tbw = 2.447 - (0.09516 * profile.age) + (0.1074 * profile.heightCm) + (0.3362 * profile.weightKg);
  } else {
    tbw = -2.097 + (0.1069 * profile.heightCm) + (0.2466 * profile.weightKg);
  }

  const r = tbw / (0.8 * profile.weightKg);
  // Plausibilitätsgrenzen (forensische Bandbreite des Verteilungsfaktors)
  return Math.min(Math.max(r, 0.48), 0.88);
}

/**
 * Orientierende Modellrechnung nach Widmark & Watson.
 * 
 * Zeitlogik & Resorptionskinetik:
 * - Trinkdauer (t_drink): Zeitspanne zwischen erstem und letztem Getränk.
 * - Resorptionsverzögerung: Der Resorptionsgipfel tritt typischerweise 30–60 Minuten
 *   (bei voller Mahlzeit bis zu 120 Minuten) nach Trinkende ein.
 * - Während des Trinkens erfolgt bereits eine kontinuierliche Resorption und ein
 *   zeitgleicher Beginn der Elimination.
 * - Elimination: Lineare Kinetik (0. Ordnung) mit beta60 (0,10 - 0,20 ‰/h, Standard 0,15 ‰/h).
 * 
 * HINWEIS: Dies ist eine vereinfachte didaktische Modellrechnung und liefert keine forensische
 * Sicherheit für Fahrtauglichkeitsentscheidungen.
 */
export function calculateWidmark(profile: UserProfile, drinks: DrinkItem[]): CalculationResult {
  const totalAlcoholGrams = calculateAlcoholGrams(drinks);
  const r = calculateReductionFactor(profile);

  // Empirische Resorptionsdefizit-Schätzwerte:
  // Nüchtern: ca. 10 %
  // Normale Mahlzeit: ca. 20 %
  // Fettig / reichhaltig: ca. 30 %
  // (Dienen als Populationsrichtwerte, unterliegen individueller biologischer Streuung)
  const deficitMap = {
    empty: 0.10,
    normal: 0.20,
    full: 0.30,
  };
  const resorptionDeficitPercent = (deficitMap[profile.stomachCondition] || 0.20) * 100;
  const effectiveAlcoholGrams = totalAlcoholGrams * (1 - (resorptionDeficitPercent / 100));

  // Theoretische Spitzen-BAK: c0 = A_eff / (p * r)
  const weight = Math.max(profile.weightKg, 30);
  const maxBacPermille = effectiveAlcoholGrams > 0 ? effectiveAlcoholGrams / (weight * r) : 0;

  // Zeitparameter
  const duration = Math.max(0.1, profile.drinkingDurationHours);
  const postEnd = Math.max(0, profile.hoursSinceDrinkingEnd);
  const totalElapsedFromStart = duration + postEnd;

  // Resorptionsverzögerung nach Trinkende abhängig vom Magenzustand
  const postEndLag = profile.stomachCondition === 'full' ? 1.0 : profile.stomachCondition === 'normal' ? 0.75 : 0.5;
  const peakTimeFromStart = duration + postEndLag;

  const beta60 = profile.eliminationRate;

  // Modellierte BAK zum aktuellen Zeitpunkt
  let currentBacPermille = 0;
  if (maxBacPermille > 0) {
    if (totalElapsedFromStart <= peakTimeFromStart) {
      // Anflutungs- / Resorptionsphase
      const fraction = Math.min(1, Math.max(0, totalElapsedFromStart / peakTimeFromStart));
      // Während des Anflutens wird bereits ein Teil abgebaut
      const grossBac = maxBacPermille * Math.sqrt(fraction); // Typische konkave Anflutungskurve
      const eliminationDuringIntake = Math.max(0, (totalElapsedFromStart - 0.5) * beta60 * 0.5);
      currentBacPermille = Math.max(0, grossBac - eliminationDuringIntake);
    } else {
      // Post-Peak Eliminationsphase
      const hoursPastPeak = totalElapsedFromStart - peakTimeFromStart;
      currentBacPermille = Math.max(0, maxBacPermille - (hoursPastPeak * beta60));
    }
  }

  // Generierung der hypothetischen Modellkurve für das Diagramm (bis 24 h oder Rechner-Nullwert)
  const estimatedHoursToZero = maxBacPermille > 0 ? peakTimeFromStart + (maxBacPermille / beta60) : 0;
  const maxHoursGraph = Math.min(24, Math.max(8, Math.ceil(estimatedHoursToZero) + 2));
  const timeSeries: { hour: number; bac: number; label: string }[] = [];

  for (let h = 0; h <= maxHoursGraph; h += 0.5) {
    let bacAtH = 0;
    if (maxBacPermille > 0) {
      if (h <= peakTimeFromStart) {
        const frac = Math.min(1, Math.max(0, h / peakTimeFromStart));
        const gross = maxBacPermille * Math.sqrt(frac);
        const elim = Math.max(0, (h - 0.5) * beta60 * 0.5);
        bacAtH = Math.max(0, gross - elim);
      } else {
        bacAtH = Math.max(0, maxBacPermille - ((h - peakTimeFromStart) * beta60));
      }
    }
    timeSeries.push({
      hour: h,
      bac: Number(bacAtH.toFixed(3)),
      label: `+${h}h`,
    });
  }

  // Rechtliche Einordnung des Modellwerts nach deutschem Recht (StVG / StGB)
  // WICHTIG: Keine Fahrfreigaben, keine Bestätigung tatsächlicher Nüchternheit!
  let drivingStatus: CalculationResult['drivingStatus'] = {
    status: 'zero',
    title: 'Rechnerisch 0,00 ‰ (Modellwert)',
    description: 'Das Modell ergibt rechnerisch 0,00 ‰. Tatsächliche Nüchternheit und Fahrtüchtigkeit werden dadurch nicht bestätigt.',
    color: 'slate',
  };

  if (currentBacPermille >= 1.1) {
    drivingStatus = {
      status: 'crime',
      title: 'Modellwert im Bereich absoluter Fahruntüchtigkeit (§ 316 StGB)',
      description: 'Ab 1,10 ‰ gilt jeder Fahrzeugführer im Straßenverkehr unwiderlegbar als fahruntüchtig. Es drohen Strafverfahren, Entzug der Fahrerlaubnis und Geld- oder Freiheitsstrafe.',
      color: 'rose',
    };
  } else if (currentBacPermille >= 0.5) {
    drivingStatus = {
      status: 'danger',
      title: 'Modellwert im Bereich der Regelsanktion nach § 24a StVG',
      description: 'Ab 0,50 ‰ (bzw. 0,25 mg/l AAK) liegt bei Kraftfahrzeugen eine Ordnungswidrigkeit vor (Regelsanktion ab 500 € Bußgeld, 2 Punkte, 1 Monat Fahrverbot).',
      color: 'amber',
    };
  } else if (currentBacPermille >= 0.3) {
    drivingStatus = {
      status: 'caution',
      title: 'Modellwert im Bereich relativer Fahruntüchtigkeit (§ 316 StGB)',
      description: 'Ab 0,30 ‰ droht bei Fahrfehlern, alkoholbedingten Ausfallerscheinungen oder einem Unfall ein Strafverfahren wegen Trunkenheit im Verkehr.',
      color: 'yellow',
    };
  } else if (currentBacPermille > 0.0) {
    drivingStatus = {
      status: 'caution',
      title: 'Modellwert über 0,00 ‰ (Gesetzliches Verbot für Fahranfänger & U21)',
      description: 'Für Fahrer in der Probezeit und Personen unter 21 Jahren gilt nach § 24c StVG ein striktes Alkoholverbot. Auch geringe Konzentrationen können die Reaktionszeit beeinträchtigen.',
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
    timeSeries,
    drivingStatus,
  };
}

