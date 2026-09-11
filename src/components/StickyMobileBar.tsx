import React, { useState, useEffect } from 'react';
import { Calculator, ArrowUpRight, Scale } from 'lucide-react';

interface StickyMobileBarProps {
  onScrollToCalculator: () => void;
  onScrollToLimits: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ 
  onScrollToCalculator,
  onScrollToLimits 
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-300 p-3 shadow-2xl animate-in slide-in-from-bottom-5">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        <button
          onClick={onScrollToLimits}
          className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0"
        >
          <Scale className="w-3.5 h-3.5 text-slate-700" />
          <span>Grenzwerte (DE)</span>
        </button>

        <button
          onClick={onScrollToCalculator}
          className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 border border-amber-600 active:scale-95 transition-all"
        >
          <Calculator className="w-4 h-4" />
          <span>BAK berechnen *</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="text-[10px] text-center text-slate-500 mt-1 font-medium">
        * Modellrechnung. Keine Rechts- oder Haftungsübernahme für Fahrtüchtigkeit.
      </div>
    </div>
  );
};
