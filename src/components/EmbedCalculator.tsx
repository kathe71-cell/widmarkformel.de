import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  DrinkItem, 
  UserProfile, 
  PRESET_DRINKS, 
  calculateWidmark,
  calculateAlcoholGrams 
} from '../utils/widmark';
import { 
  Plus, 
  Minus, 
  AlertTriangle, 
  ExternalLink 
} from 'lucide-react';

export const EmbedCalculator: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    hoursSinceDrinkingEnd: 1,
  });

  // State for drinks
  const [drinks, setDrinks] = useState<DrinkItem[]>([
    { ...PRESET_DRINKS[1], count: 2 }, // 2x 0.5l Bier
  ]);

  const updateDrinkCount = (id: string, delta: number) => {
    setDrinks(prev => prev.map(d => {
      if (d.id === id) {
        return { ...d, count: Math.max(0, d.count + delta) };
      }
      return d;
    }));
  };

  const addPreset = (preset: DrinkItem) => {
    setDrinks(prev => {
      const exists = prev.find(d => d.id === preset.id);
      if (exists) {
        return prev.map(d => d.id === preset.id ? { ...d, count: d.count + 1 } : d);
      }
      return [...prev, { ...preset, count: 1 }];
    });
  };

  const results = useMemo(() => {
    return calculateWidmark(profile, drinks);
  }, [profile, drinks]);

  const totalPureAlcohol = useMemo(() => {
    return calculateAlcoholGrams(drinks);
  }, [drinks]);

  const totalElapsed = profile.drinkingDurationHours + profile.hoursSinceDrinkingEnd;

  // PostMessage for iframe auto-resizing with origin security
  useEffect(() => {
    const notifyParent = () => {
      if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
        const height = containerRef.current ? containerRef.current.scrollHeight + 30 : document.body.scrollHeight;
        window.parent.postMessage({ type: 'widmark-embed-resize', height }, '*');
      }
    };

    notifyParent();
    window.addEventListener('resize', notifyParent);
    return () => window.removeEventListener('resize', notifyParent);
  }, [drinks, profile, results]);

  return (
    <div ref={containerRef} className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 text-slate-900 font-sans text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-mono font-black flex items-center justify-center text-xs">
            c=A/pr
          </div>
          <div>
            <h2 className="font-extrabold text-sm text-slate-950">
              Widmark Promillerechner
            </h2>
            <span className="text-[10px] text-slate-500">
              Theoretisches Lehrmodell (Widmark &amp; Watson)
            </span>
          </div>
        </div>
        <a 
          href="https://www.widmarkformel.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[11px] font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
        >
          <span>widmarkformel.de</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Safety Notice */}
      <div className="my-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-950 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Orientierendes Lehrmodell:</strong> Dieser Rechner ist nicht zur Entscheidung über das Führen von Fahrzeugen geeignet. Fahren Sie niemals nach Alkoholkonsum!
        </p>
      </div>

      {/* Quick Physiological Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
        {/* Gender */}
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <label className="block text-[10px] font-bold text-slate-600 mb-1">Geschlecht</label>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setProfile(p => ({ ...p, gender: 'male' }))}
              className={`flex-1 py-1 rounded text-[11px] font-bold ${profile.gender === 'male' ? 'bg-slate-900 text-white' : 'bg-white border text-slate-700'}`}
            >
              Männlich
            </button>
            <button
              type="button"
              onClick={() => setProfile(p => ({ ...p, gender: 'female' }))}
              className={`flex-1 py-1 rounded text-[11px] font-bold ${profile.gender === 'female' ? 'bg-slate-900 text-white' : 'bg-white border text-slate-700'}`}
            >
              Weiblich
            </button>
          </div>
        </div>

        {/* Weight */}
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
            <span>Gewicht</span>
            <span className="font-mono text-slate-900">{profile.weightKg} kg</span>
          </div>
          <input
            type="range"
            min="45"
            max="140"
            step="1"
            value={profile.weightKg}
            onChange={e => setProfile(p => ({ ...p, weightKg: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Duration */}
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
            <span>Trinkdauer</span>
            <span className="font-mono text-slate-900">{profile.drinkingDurationHours} h</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="8"
            step="0.5"
            value={profile.drinkingDurationHours}
            onChange={e => setProfile(p => ({ ...p, drinkingDurationHours: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Time since end */}
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
            <span>Seit Ende</span>
            <span className="font-mono text-slate-900">{profile.hoursSinceDrinkingEnd} h</span>
          </div>
          <input
            type="range"
            min="0"
            max="16"
            step="0.5"
            value={profile.hoursSinceDrinkingEnd}
            onChange={e => setProfile(p => ({ ...p, hoursSinceDrinkingEnd: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>

      {/* Drink Presets & Counter */}
      <div className="my-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-bold text-slate-800 text-[11px]">Getränke auswählen:</span>
          <span className="text-[10px] text-slate-500">Gesamt: <strong className="font-mono text-slate-800">{totalPureAlcohol.toFixed(1)} g</strong> Alkohol</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PRESET_DRINKS.slice(0, 3).map(preset => {
            const current = drinks.find(d => d.id === preset.id);
            const count = current ? current.count : 0;
            return (
              <div key={preset.id} className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="min-w-0 pr-1">
                  <div className="font-bold text-slate-900 truncate text-[11px]">{preset.name.split('(')[0].trim()}</div>
                  <div className="text-[10px] text-slate-500">{preset.alcoholByVolume} %</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => updateDrinkCount(preset.id, -1)}
                    className="w-6 h-6 rounded bg-white border text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-4 text-center font-mono font-bold text-xs">{count}</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (!current) addPreset(preset);
                      else updateDrinkCount(preset.id, 1);
                    }}
                    className="w-6 h-6 rounded bg-amber-500 text-slate-950 hover:bg-amber-400 flex items-center justify-center font-bold"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary Result Display */}
      <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white text-center shadow-md">
        <div className="text-[11px] text-slate-400 uppercase tracking-wider">
          Geschätzte Rest-BAK (nach {totalElapsed.toFixed(1)} h)
        </div>
        <div className="my-1 font-mono text-4xl sm:text-5xl font-black tracking-tight text-white flex items-baseline justify-center gap-1">
          <span>{results.currentBacPermille.toFixed(2)}</span>
          <span className="text-xl font-bold text-amber-400">‰</span>
        </div>
        <div className="text-[10px] text-slate-400">
          Theoretische Spitzen-BAK: <strong className="text-slate-200 font-mono">{results.maxBacPermille.toFixed(2)} ‰</strong> &bull; β₆₀: {profile.eliminationRate.toFixed(2)} ‰/h
        </div>

        {/* Status Text Box */}
        <div className="mt-3 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-left text-[11px] leading-relaxed">
          <div className="font-extrabold text-amber-300 text-xs mb-0.5">
            {results.drivingStatus.title}
          </div>
          <div className="text-slate-300 text-[10px]">
            {results.drivingStatus.description}
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
        <span>Berechnung nach Widmark &amp; Watson</span>
        <a 
          href="https://www.widmarkformel.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-800 hover:text-amber-950 font-bold underline"
        >
          Vollständigen Rechner auf widmarkformel.de öffnen
        </a>
      </div>

    </div>
  );
};
