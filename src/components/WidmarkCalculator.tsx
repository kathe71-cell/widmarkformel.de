import React, { useState, useMemo } from 'react';
import { 
  DrinkItem, 
  UserProfile, 
  PRESET_DRINKS, 
  calculateWidmark,
  calculateAlcoholGrams 
} from '../utils/widmark';
import { 
  Calculator, 
  Plus, 
  Minus, 
  RotateCcw, 
  Clock, 
  Activity, 
  Car,
  Flame,
  Info
} from 'lucide-react';

export const WidmarkCalculator: React.FC = () => {
  // State for user profile
  const [profile, setProfile] = useState<UserProfile>({
    gender: 'male',
    weightKg: 80,
    heightCm: 180,
    age: 35,
    stomachCondition: 'normal',
    formulaType: 'watson',
    eliminationRate: 0.15,
    drinkingDurationHours: 2,
    hoursSinceDrinkingStart: 3,
  });

  // State for drinks
  const [drinks, setDrinks] = useState<DrinkItem[]>([
    { ...PRESET_DRINKS[1], count: 2 }, // 2x 0.5l Beer by default
  ]);

  // State for custom drink form
  const [customName, setCustomName] = useState('');
  const [customVolume, setCustomVolume] = useState<number>(300);
  const [customAbv, setCustomAbv] = useState<number>(5.5);
  const [showCustomModal, setShowCustomModal] = useState(false);

  // Drink counter actions
  const updateDrinkCount = (id: string, delta: number) => {
    setDrinks(prev => prev.map(d => {
      if (d.id === id) {
        const next = Math.max(0, d.count + delta);
        return { ...d, count: next };
      }
      return d;
    }));
  };

  const addPresetIfNotPresent = (preset: DrinkItem) => {
    setDrinks(prev => {
      const exists = prev.find(d => d.id === preset.id);
      if (exists) {
        return prev.map(d => d.id === preset.id ? { ...d, count: d.count + 1 } : d);
      }
      return [...prev, { ...preset, count: 1 }];
    });
  };

  const handleAddCustomDrink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim() || customVolume <= 0 || customAbv <= 0) return;
    const newDrink: DrinkItem = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      category: 'custom',
      volumeMl: customVolume,
      alcoholByVolume: customAbv,
      count: 1,
    };
    setDrinks(prev => [...prev, newDrink]);
    setCustomName('');
    setShowCustomModal(false);
  };

  const handleReset = () => {
    setDrinks([
      { ...PRESET_DRINKS[1], count: 2 },
    ]);
    setProfile({
      gender: 'male',
      weightKg: 80,
      heightCm: 180,
      age: 35,
      stomachCondition: 'normal',
      formulaType: 'watson',
      eliminationRate: 0.15,
      drinkingDurationHours: 2,
      hoursSinceDrinkingStart: 3,
    });
  };

  // Perform calculation
  const results = useMemo(() => {
    return calculateWidmark(profile, drinks);
  }, [profile, drinks]);

  const totalPureAlcohol = useMemo(() => {
    return calculateAlcoholGrams(drinks);
  }, [drinks]);

  // Max value for SVG chart scaling
  const chartMaxY = Math.max(1.6, results.maxBacPermille * 1.25);
  const chartHeight = 220;
  const chartWidth = 600;
  const paddingX = 45;
  const paddingY = 25;

  const pointsString = useMemo(() => {
    if (!results.timeSeries.length) return '';
    const maxHour = results.timeSeries[results.timeSeries.length - 1].hour || 1;
    return results.timeSeries.map(pt => {
      const x = paddingX + (pt.hour / maxHour) * (chartWidth - paddingX * 2);
      const y = (chartHeight - paddingY) - (pt.bac / chartMaxY) * (chartHeight - paddingY * 2);
      return `${x},${y}`;
    }).join(' ');
  }, [results.timeSeries, chartMaxY]);

  // Current time point on graph
  const currentPointCoordinates = useMemo(() => {
    if (!results.timeSeries.length) return null;
    const maxHour = results.timeSeries[results.timeSeries.length - 1].hour || 1;
    const currentH = Math.min(profile.hoursSinceDrinkingStart, maxHour);
    const x = paddingX + (currentH / maxHour) * (chartWidth - paddingX * 2);
    const y = (chartHeight - paddingY) - (results.currentBacPermille / chartMaxY) * (chartHeight - paddingY * 2);
    return { x, y };
  }, [profile.hoursSinceDrinkingStart, results.timeSeries, results.currentBacPermille, chartMaxY]);

  return (
    <section id="rechner" className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-950 border border-amber-300 mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Interaktiver Rechner nach Erik Widmark &amp; Watson
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Blutalkohol &amp; Abbauzeit berechnen
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Geben Sie Ihre physiologischen Daten und konsumierten Getränke ein. Der Rechner ermittelt sofort die theoretische Maximal-BAK, den stündlichen Abbau und den aktuellen Restpromillewert.
          </p>
        </div>

        {/* Main Grid: Inputs (Left) & Live Results (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT COLUMN: INPUTS ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Physiological Profile Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Körperliche Kenndaten
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setProfile(p => ({ ...p, formulaType: p.formulaType === 'classic' ? 'watson' : 'classic' }))}
                    className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors"
                    title="Umschalten zwischen klassischem Widmark-Faktor und Watson-Gesamtkörperwasser"
                  >
                    Modell: <span className="text-amber-800 font-extrabold">{profile.formulaType === 'watson' ? 'Watson (TBW)' : 'Widmark (klassisch)'}</span>
                  </button>
                </div>
              </div>

              {/* Gender selector */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProfile(p => ({ ...p, gender: 'male' }))}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    profile.gender === 'male'
                      ? 'bg-slate-900 text-white border-slate-900 shadow'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>Männlich</span>
                  <span className="text-xs font-normal opacity-80">(r ≈ 0,70)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProfile(p => ({ ...p, gender: 'female' }))}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    profile.gender === 'female'
                      ? 'bg-slate-900 text-white border-slate-900 shadow'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>Weiblich</span>
                  <span className="text-xs font-normal opacity-80">(r ≈ 0,60)</span>
                </button>
              </div>

              {/* Weight, Height, Age sliders */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Weight */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="weight-slider" className="text-xs font-bold text-slate-700">Gewicht (p)</label>
                    <span className="font-mono text-sm font-black text-slate-900">{profile.weightKg} kg</span>
                  </div>
                  <input
                    id="weight-slider"
                    aria-label="Körpergewicht in Kilogramm"
                    type="range"
                    min="40"
                    max="150"
                    step="1"
                    value={profile.weightKg}
                    onChange={e => setProfile(p => ({ ...p, weightKg: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Height */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="height-slider" className="text-xs font-bold text-slate-700">Körpergröße</label>
                    <span className="font-mono text-sm font-black text-slate-900">{profile.heightCm} cm</span>
                  </div>
                  <input
                    id="height-slider"
                    aria-label="Körpergröße in Zentimetern"
                    type="range"
                    min="140"
                    max="210"
                    step="1"
                    value={profile.heightCm}
                    onChange={e => setProfile(p => ({ ...p, heightCm: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Age */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="age-slider" className="text-xs font-bold text-slate-700">Alter</label>
                    <span className="font-mono text-sm font-black text-slate-900">{profile.age} Jahre</span>
                  </div>
                  <input
                    id="age-slider"
                    aria-label="Alter in Jahren"
                    type="range"
                    min="16"
                    max="90"
                    step="1"
                    value={profile.age}
                    onChange={e => setProfile(p => ({ ...p, age: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>

              {/* Stomach condition (Resorption deficit) */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Magenfüllung / Nahrungsaufnahme (Resorptionsdefizit):
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setProfile(p => ({ ...p, stomachCondition: 'empty' }))}
                    className={`p-2.5 rounded-lg border font-semibold text-center transition-all ${
                      profile.stomachCondition === 'empty'
                        ? 'bg-amber-100 border-amber-400 text-amber-950 font-extrabold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Nüchtern
                    <span className="block text-[10px] font-normal text-slate-500">10% Defizit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfile(p => ({ ...p, stomachCondition: 'normal' }))}
                    className={`p-2.5 rounded-lg border font-semibold text-center transition-all ${
                      profile.stomachCondition === 'normal'
                        ? 'bg-amber-100 border-amber-400 text-amber-950 font-extrabold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Normale Mahlzeit
                    <span className="block text-[10px] font-normal text-slate-500">20% Defizit (Standard)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfile(p => ({ ...p, stomachCondition: 'full' }))}
                    className={`p-2.5 rounded-lg border font-semibold text-center transition-all ${
                      profile.stomachCondition === 'full'
                        ? 'bg-amber-100 border-amber-400 text-amber-950 font-extrabold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Reichhaltig / Fettig
                    <span className="block text-[10px] font-normal text-slate-500">30% Defizit</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Drink Selection Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Konsumierte Getränke
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCustomModal(true)}
                  className="text-xs font-extrabold px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Eigenes Getränk
                </button>
              </div>

              {/* Quick Add Presets Bar */}
              <div className="mt-4 flex flex-wrap gap-2">
                {PRESET_DRINKS.map(preset => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => addPresetIfNotPresent(preset)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 flex items-center gap-1 transition-colors"
                  >
                    <Plus className="w-3 h-3 text-amber-600" />
                    {preset.name.split('(')[0].trim()}
                  </button>
                ))}
              </div>

              {/* Active Drinks Table / List */}
              <div className="mt-5 space-y-3">
                {drinks.map(drink => {
                  const alcoholInDrink = drink.volumeMl * (drink.alcoholByVolume / 100) * 0.8 * drink.count;
                  return (
                    <div 
                      key={drink.id}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm truncate">
                            {drink.name}
                          </span>
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800 shrink-0">
                            {drink.alcoholByVolume} Vol.-%
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {drink.volumeMl} ml &bull; {alcoholInDrink > 0 ? `${alcoholInDrink.toFixed(1)} g reiner Alkohol gesamt` : '0 g'}
                        </div>
                      </div>

                      {/* Counter Controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => updateDrinkCount(drink.id, -1)}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center active:scale-95 transition-all"
                          aria-label="Menge verringern"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-mono font-black text-base text-slate-900">
                          {drink.count}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateDrinkCount(drink.id, 1)}
                          className="w-8 h-8 rounded-lg bg-amber-500 border border-amber-600 text-slate-950 font-bold hover:bg-amber-400 flex items-center justify-center active:scale-95 transition-all shadow-sm"
                          aria-label="Menge erhöhen"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total Pure Alcohol Summary */}
              <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                <span className="font-bold text-amber-950 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  Reine Alkoholmasse (A):
                </span>
                <span className="font-mono font-black text-sm text-amber-950">
                  {totalPureAlcohol.toFixed(1)} Gramm
                </span>
              </div>
            </div>

            {/* Step 3: Time & Elimination Rate Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Zeitraum &amp; Abbaugeschwindigkeit
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Zurücksetzen
                </button>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Elapsed time since start */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="elapsed-time-slider" className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-600" />
                      Verstrichene Zeit seit Trinkbeginn
                    </label>
                    <span className="font-mono text-sm font-black text-slate-900">
                      {profile.hoursSinceDrinkingStart} h
                    </span>
                  </div>
                  <input
                    id="elapsed-time-slider"
                    aria-label="Verstrichene Zeit seit Trinkbeginn in Stunden"
                    type="range"
                    min="0.5"
                    max="18"
                    step="0.5"
                    value={profile.hoursSinceDrinkingStart}
                    onChange={e => setProfile(p => ({ ...p, hoursSinceDrinkingStart: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Gerade eben</span>
                    <span>6 Std.</span>
                    <span>12 Std.</span>
                    <span>18 Std.</span>
                  </div>
                </div>

                {/* Elimination Rate (beta60) */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="beta60-slider" className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-slate-600" />
                      Abbaurate pro Stunde (β₆₀)
                    </label>
                    <span className="font-mono text-sm font-black text-slate-900">
                      {profile.eliminationRate.toFixed(2)} ‰/h
                    </span>
                  </div>
                  <input
                    id="beta60-slider"
                    aria-label="Abbaugeschwindigkeit pro Stunde in Promille"
                    type="range"
                    min="0.10"
                    max="0.20"
                    step="0.01"
                    value={profile.eliminationRate}
                    onChange={e => setProfile(p => ({ ...p, eliminationRate: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>0,10 ‰ (langsam)</span>
                    <span className="font-bold text-slate-700">0,15 ‰ (Mittelwert)</span>
                    <span>0,20 ‰ (zügig)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>


          {/* ================= RIGHT COLUMN: SCIENTIFIC RESULTS ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Result Hero Card */}
            <div className="bg-white rounded-2xl border-2 border-slate-900 p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Modellrechnung-Ergebnis *
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  Live kalkuliert
                </span>
              </div>

              {/* Current BAC Meter */}
              <div className="mt-5 text-center">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Geschätzte Rest-BAK (nach {profile.hoursSinceDrinkingStart} h)
                </div>
                <div className="mt-1 font-mono text-5xl sm:text-6xl font-black tracking-tight text-slate-950 flex items-baseline justify-center gap-1">
                  <span>{results.currentBacPermille.toFixed(2)}</span>
                  <span className="text-2xl font-bold text-amber-600">‰</span>
                </div>

                <div className="mt-2 text-xs text-slate-600">
                  Theoretische Spitzen-BAK: <strong className="font-mono text-slate-900">{results.maxBacPermille.toFixed(2)} ‰</strong>
                </div>
              </div>

              {/* Legal Status Alert Box */}
              <div className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${
                results.currentBacPermille >= 1.1
                  ? 'bg-rose-50 border-rose-300 text-rose-950'
                  : results.currentBacPermille >= 0.5
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : results.currentBacPermille >= 0.3
                  ? 'bg-yellow-50 border-yellow-300 text-yellow-950'
                  : 'bg-emerald-50 border-emerald-300 text-emerald-950'
              }`}>
                <Car className="w-5 h-5 shrink-0 mt-0.5 text-slate-900" />
                <div>
                  <div className="text-sm font-extrabold text-slate-950">
                    {results.drivingStatus.title}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {results.drivingStatus.description}
                  </p>
                </div>
              </div>

              {/* Time Projection Cards */}
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[11px] font-bold text-slate-600">Unter 0,5 ‰</span>
                  <span className="font-mono text-sm sm:text-base font-black text-slate-950">
                    {results.currentBacPermille <= 0.5 ? 'Bereits unter 0,5' : `in ca. ${((results.currentBacPermille - 0.5) / profile.eliminationRate).toFixed(1)} h`}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[11px] font-bold text-slate-600">Unter 0,3 ‰</span>
                  <span className="font-mono text-sm sm:text-base font-black text-slate-950">
                    {results.currentBacPermille <= 0.3 ? 'Bereits unter 0,3' : `in ca. ${((results.currentBacPermille - 0.3) / profile.eliminationRate).toFixed(1)} h`}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="block text-[11px] font-bold text-emerald-900">Vollständig 0,0 ‰</span>
                  <span className="font-mono text-sm sm:text-base font-black text-emerald-950">
                    {results.currentBacPermille === 0 ? 'Nüchtern (0,00)' : `in ca. ${(results.currentBacPermille / profile.eliminationRate).toFixed(1)} h`}
                  </span>
                </div>
              </div>

              {/* Scientific Parameter Breakdown Table */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs">
                <div className="font-extrabold text-slate-900 mb-2">Formel-Zwischenschritte:</div>
                
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Reiner Alkohol gesamt (A):</span>
                  <span className="font-mono font-bold text-slate-900">{results.pureAlcoholGrams} g</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Resorptionsdefizit:</span>
                  <span className="font-mono font-bold text-slate-900">-{results.resorptionDeficitPercent} % ({results.effectiveAlcoholGrams} g eff.)</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Reduktionsfaktor (r):</span>
                  <span className="font-mono font-bold text-slate-900">
                    {results.reductionFactor} ({profile.formulaType === 'watson' ? 'Watson-Modell' : 'Widmark-Klassik'})
                  </span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="text-slate-600">Elimination pro Stunde (β₆₀):</span>
                  <span className="font-mono font-bold text-slate-900">-{profile.eliminationRate.toFixed(2)} ‰/h</span>
                </div>
              </div>

              {/* Mandatory Master-Prompt Disclaimer */}
              <div className="mt-5 p-3 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-600 leading-normal flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  * Modellrechnung. Die tatsächliche Höhe hängt vom individuellen Nutzungsverhalten, Mageninhalt, individueller Enzymausstattung (ADH/ALDH) und weiteren biologischen Faktoren ab. Dieser Rechner ersetzt keine forensische Blutuntersuchung.
                </p>
              </div>

            </div>

            {/* Dynamic SVG Abbaukurve / Elimination Graph */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-600" />
                  <h4 className="font-bold text-slate-900 text-sm">
                    Abbaukurve im Zeitverlauf
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  c(t) = c₀ - β₆₀ · t
                </span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full overflow-x-auto">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-auto min-w-[320px] max-h-[260px]"
                >
                  {/* Grid Lines */}
                  {/* 1.1 permille line */}
                  <line
                    x1={paddingX}
                    y1={(chartHeight - paddingY) - (1.1 / chartMaxY) * (chartHeight - paddingY * 2)}
                    x2={chartWidth - paddingX}
                    y2={(chartHeight - paddingY) - (1.1 / chartMaxY) * (chartHeight - paddingY * 2)}
                    stroke="#f43f5e"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={chartWidth - paddingX + 5}
                    y={(chartHeight - paddingY) - (1.1 / chartMaxY) * (chartHeight - paddingY * 2) + 3}
                    fontSize="9"
                    fontWeight="bold"
                    fill="#e11d48"
                  >
                    1,1 ‰
                  </text>

                  {/* 0.5 permille line */}
                  <line
                    x1={paddingX}
                    y1={(chartHeight - paddingY) - (0.5 / chartMaxY) * (chartHeight - paddingY * 2)}
                    x2={chartWidth - paddingX}
                    y2={(chartHeight - paddingY) - (0.5 / chartMaxY) * (chartHeight - paddingY * 2)}
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={chartWidth - paddingX + 5}
                    y={(chartHeight - paddingY) - (0.5 / chartMaxY) * (chartHeight - paddingY * 2) + 3}
                    fontSize="9"
                    fontWeight="bold"
                    fill="#d97706"
                  >
                    0,5 ‰
                  </text>

                  {/* 0.3 permille line */}
                  <line
                    x1={paddingX}
                    y1={(chartHeight - paddingY) - (0.3 / chartMaxY) * (chartHeight - paddingY * 2)}
                    x2={chartWidth - paddingX}
                    y2={(chartHeight - paddingY) - (0.3 / chartMaxY) * (chartHeight - paddingY * 2)}
                    stroke="#eab308"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <text
                    x={chartWidth - paddingX + 5}
                    y={(chartHeight - paddingY) - (0.3 / chartMaxY) * (chartHeight - paddingY * 2) + 3}
                    fontSize="9"
                    fontWeight="bold"
                    fill="#ca8a04"
                  >
                    0,3 ‰
                  </text>

                  {/* Base axis */}
                  <line
                    x1={paddingX}
                    y1={chartHeight - paddingY}
                    x2={chartWidth - paddingX}
                    y2={chartHeight - paddingY}
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />

                  {/* Elimination curve polyline */}
                  {pointsString && (
                    <polyline
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth="3"
                      points={pointsString}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {/* Current Position Marker */}
                  {currentPointCoordinates && (
                    <g>
                      <circle
                        cx={currentPointCoordinates.x}
                        cy={currentPointCoordinates.y}
                        r="6"
                        fill="#f59e0b"
                        stroke="#0f172a"
                        strokeWidth="2"
                      />
                      <line
                        x1={currentPointCoordinates.x}
                        y1={currentPointCoordinates.y}
                        x2={currentPointCoordinates.x}
                        y2={chartHeight - paddingY}
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                      <text
                        x={currentPointCoordinates.x}
                        y={Math.max(15, currentPointCoordinates.y - 10)}
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="bold"
                        fill="#0f172a"
                      >
                        Jetzt: {results.currentBacPermille.toFixed(2)} ‰
                      </text>
                    </g>
                  )}

                  {/* Bottom Labels */}
                  <text x={paddingX} y={chartHeight - 8} fontSize="9" fill="#64748b" textAnchor="start">
                    0h (Beginn)
                  </text>
                  <text x={chartWidth / 2} y={chartHeight - 8} fontSize="9" fill="#64748b" textAnchor="middle">
                    Zeitlicher Abbauverlauf
                  </text>
                  <text x={chartWidth - paddingX} y={chartHeight - 8} fontSize="9" fill="#64748b" textAnchor="end">
                    0,00 ‰ (Nüchtern)
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-rose-500 inline-block"></span>
                  1,1 ‰ (Straftat)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-amber-500 inline-block"></span>
                  0,5 ‰ (Fahrverbot)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-yellow-500 inline-block"></span>
                  0,3 ‰ (Rel. Fahruntüchtigkeit)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-slate-900 inline-block"></span>
                  Aktueller Status
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for adding custom drink */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl border border-slate-300 shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95">
            <h4 className="text-lg font-black text-slate-950 mb-4">
              Individuelles Getränk hinzufügen
            </h4>

            <form onSubmit={handleAddCustomDrink} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Name / Bezeichnung
                </label>
                <input
                  type="text"
                  placeholder="z.B. Starkbier, Gin Tonic..."
                  value={customName}
                  onChange={e => setCustomName(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Volumen (ml)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="2000"
                    step="10"
                    value={customVolume}
                    onChange={e => setCustomVolume(Number(e.target.value))}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-mono focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Alkoholgehalt (Vol.-%)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    max="90"
                    step="0.1"
                    value={customAbv}
                    onChange={e => setCustomAbv(Number(e.target.value))}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-mono focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                Alkoholmasse: <strong className="font-mono text-slate-900">{((customVolume * (customAbv / 100)) * 0.8).toFixed(1)} g</strong> reiner Ethanol
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCustomModal(false)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md"
                >
                  Hinzufügen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
