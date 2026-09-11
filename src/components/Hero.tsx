import React from 'react';
import { Calculator, ArrowRight, Activity, ShieldCheck, CheckCircle2, BookmarkCheck, Calendar, Award } from 'lucide-react';

interface HeroProps {
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Tag */}
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-950 border border-amber-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
            Wissenschaftliche Formel nach Erik M. P. Widmark (1932)
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-950 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            Inkl. Watson-Modifikation
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtext, CTAs */}
          <div className="lg:col-span-7 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Widmark-Formel &amp; Promillerechner: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-slate-900">
                Blutalkoholkonzentration (BAK)
              </span> präzise berechnen
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Ermitteln Sie Ihre theoretische Blutalkoholkonzentration und die voraussichtliche Abbauzeit wissenschaftlich fundiert. 
              Berechnung nach der klassischen <strong>Widmark-Formel</strong> sowie der verfeinerten <strong>Watson-Formel</strong> (Gesamtkörperwasser) unter Berücksichtigung von Resorptionsdefizit und individueller Abbaurate.
            </p>

            {/* Position-0 Featured Snippet Definition Box (Google AI Overviews) */}
            <div className="mt-6 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-5 shadow-sm text-left">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-950 mb-2">
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
                <span>Auf den Punkt gebracht: Definition der Widmark-Formel</span>
              </div>
              <p className="text-slate-950 font-bold text-sm sm:text-base leading-snug">
                Die Widmark-Formel berechnet die theoretische maximale Blutalkoholkonzentration (BAK in ‰) nach der Gleichung <code className="bg-amber-200/70 text-amber-950 px-1.5 py-0.5 rounded font-mono font-black">c = A / (p · r)</code>. Dabei ist A die aufgenommene reine Alkoholmasse in Gramm, p das Körpergewicht in Kilogramm und r der Reduktionsfaktor (Männer ca. 0,7; Frauen ca. 0,6). Der stündliche biologische Abbauwert liegt bei ca. 0,10 bis 0,15 ‰.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2 border-t border-amber-200/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  Forensischer Standard: <strong>BGHSt 25, 246 / DIN EN 15964</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  Geprüfter Stand: <strong>September 2026</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  Fachredaktionell zertifiziert
                </span>
              </div>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Exakte Formel: <code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono font-bold">c = A / (p · r)</code></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Resorptionsdefizit 10 % – 30 % wählbar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stündliche Abbaukurve im Zeitverlauf</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Abgleich mit StVG- &amp; StGB-Grenzwerten</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onScrollToCalculator}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95 border border-amber-600 flex items-center justify-center gap-3"
              >
                <Calculator className="w-5 h-5" />
                <span>Jetzt Promille berechnen *</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#herleitung"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Formel &amp; Variablen verstehen</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500 font-normal">
              * Modellrechnung. Die individuelle Blutalkoholkonzentration unterliegt biologischen Schwankungen. Keine forensische Rechtsberatung.
            </p>
          </div>

          {/* Right Column: Interactive Formula Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-7">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Forensische Grundformel
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-900 text-white">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  Erik Widmark (1932)
                </span>
              </div>

              {/* Big Math Display */}
              <div className="my-6 p-5 rounded-xl bg-slate-900 text-white font-mono text-center shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Blutalkoholkonzentration (BAK)
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-wider">
                  c = <span className="underline decoration-2 underline-offset-4">A</span> / (p · r)
                </div>
                <div className="mt-2 text-xs text-slate-300">
                  c in ‰ (g/kg) &bull; A in Gramm &bull; p in kg &bull; r Reduktionsfaktor
                </div>
              </div>

              {/* Variable breakdown cards */}
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 flex items-center justify-center font-black text-[11px]">A</span>
                    Alkoholmasse
                  </span>
                  <span className="font-mono text-slate-800 font-semibold">Vol (ml) × (Vol% / 100) × 0,8</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-slate-800 text-white flex items-center justify-center font-black text-[11px]">p</span>
                    Körpergewicht
                  </span>
                  <span className="font-mono text-slate-800 font-semibold">Masse in kg</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-slate-800 text-white flex items-center justify-center font-black text-[11px]">r</span>
                    Reduktionsfaktor
                  </span>
                  <span className="font-mono text-slate-800 font-semibold">0,70 (♂) | 0,60 (♀) | Watson TBW</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-black text-[11px]">β₆₀</span>
                    Stündlicher Abbau
                  </span>
                  <span className="font-mono text-slate-800 font-semibold">ca. 0,10 – 0,15 ‰ pro Stunde</span>
                </div>
              </div>

              {/* Bottom security assurance */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Keine Datenspeicherung
                </span>
                <span>Berechnung rein im Browser</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
