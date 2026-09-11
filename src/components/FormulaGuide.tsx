import React from 'react';
import { Layers, Cpu, FlaskConical } from 'lucide-react';

export const FormulaGuide: React.FC = () => {
  return (
    <section id="herleitung" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
            Biophysikalische Grundlagen
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Wissenschaftliche Herleitung &amp; Formelaufbau
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Die Bestimmung der Blutalkoholkonzentration (BAK) basiert auf den grundlegenden Arbeiten des schwedischen Chemikers Erik M. P. Widmark (1932) sowie den modernen Verfeinerungen nach Watson et al. (1980).
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Erik Widmark */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl mb-4 shadow">
              1932
            </div>
            <h3 className="text-lg font-black text-slate-950 mb-2">
              Klassische Widmark-Formel
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Erik Matteo Prochet Widmark veröffentlichte 1932 an der Universität Lund die Standardformel <code className="font-mono text-xs bg-slate-200 px-1 py-0.5 rounded font-bold">c = A / (p · r)</code>. Sie bildete die weltweite Grundlage für Gerichtsmedizin und Verkehrssicherheit.
            </p>
          </div>

          {/* Card 2: Dichte & Alkoholmasse */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-xl mb-4 shadow">
              0,8
            </div>
            <h3 className="text-lg font-black text-slate-950 mb-2">
              Dichte des Ethanols (ρ)
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Alkohol ist leichter als Wasser: Reines Ethanol besitzt bei Raumtemperatur eine Dichte von ca. <strong className="text-slate-900">0,8 g/cm³</strong> (0,789 g/ml). Daher entsprechen 500 ml 5 %iges Bier genau 20 Gramm reinem Alkohol.
            </p>
          </div>

          {/* Card 3: Watson TBW Modifikation */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl mb-4 shadow">
              TBW
            </div>
            <h3 className="text-lg font-black text-slate-950 mb-2">
              Watson-Formel (1980)
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              P. E. Watson ersetzte den starren Reduktionsfaktor durch das reale Gesamtkörperwasser (<em className="italic">Total Body Water</em>), welches Alter, Größe und Gewicht einbezieht, da Fettgewebe kaum wasserlöslich ist.
            </p>
          </div>

        </div>

        {/* Detailed Mathematical Decomposition */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Mathematischer Tiefgang
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
              Die Variablen der Widmark-Formel im Detail
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Um eine Blutalkoholkonzentration präzise zu ermitteln, werden vier biophysikalische Parameter miteinander verknüpft:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-mono font-black text-sm flex items-center justify-center">
                  A
                </span>
                <span className="font-extrabold text-white text-base">Aufgenommener Alkohol (Gramm)</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Berechnung: <code className="font-mono bg-slate-900 px-2 py-1 rounded text-amber-300 text-xs">A = V (ml) · (Vol.-% / 100) · 0,8 g/ml</code>.
                Beispiel: 200 ml Wein mit 12 Vol.-% = <code className="font-mono text-white">200 · 0,12 · 0,8 = 19,2 g</code> Ethanol.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-mono font-black text-sm flex items-center justify-center">
                  p
                </span>
                <span className="font-extrabold text-white text-base">Körpergewicht (kg)</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Das Körpergewicht in Kilogramm bestimmt das grundlegende Lösungsvolumen. Da Alkohol hydrophil (wasserlöslich) und lipophob (fettunlöslich) ist, verteilt er sich primär in der wässrigen Körpermasse.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-mono font-black text-sm flex items-center justify-center">
                  r
                </span>
                <span className="font-extrabold text-white text-base">Reduktionsfaktor (Verteilungsfaktor)</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Gibt den Anteil des Körpergewichts an, in dem sich der Alkohol verteilt. Männer besitzen im Schnitt ca. 60–70 % Wasseranteil (<code className="font-mono text-amber-300">r ≈ 0,70</code>), Frauen wegen eines höheren Fettgewebeanteils ca. 55–60 % (<code className="font-mono text-amber-300">r ≈ 0,60</code>).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-mono font-black text-sm flex items-center justify-center">
                  β₆₀
                </span>
                <span className="font-extrabold text-white text-base">Eliminationsrate pro Stunde</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Der menschliche Körper eliminiert Alkohol weitgehend linear (Kinetik 0. Ordnung) mit durchschnittlich <strong className="text-white">0,10 bis 0,20 ‰ pro Stunde</strong>. In der Rechtsmedizin wird zugunsten des Beschuldigten meist mit <code className="font-mono text-amber-300">0,10 ‰/h</code> gerechnet.
              </p>
            </div>

          </div>
        </div>

        {/* Resorption Deficit & Watson Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Resorption Deficit Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-5 h-5 text-amber-600" />
              <h4 className="font-black text-slate-950 text-lg">
                Das Resorptionsdefizit (10 % bis 30 %)
              </h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nicht der gesamte getrunkene Alkohol erreicht die Blutbahn. Ein messbarer Anteil wird bereits in der Magenschleimhaut und beim ersten Durchqueren der Leber (First-Pass-Effekt) abgebaut oder unresorbiert über Lunge und Schweiß ausgeschieden.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-800 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Nüchterner Magen:</strong> ca. 10 % Resorptionsdefizit (schnelle Anflutung).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Normale Mahlzeit:</strong> ca. 20 % Resorptionsdefizit (Standardannahme).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Reichhaltige / fettige Nahrung:</strong> bis zu 30 % Resorptionsdefizit (stark verzögerte Resorption).</span>
              </li>
            </ul>
          </div>

          {/* Forensic Comparison Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-slate-900" />
              <h4 className="font-black text-slate-950 text-lg">
                Widmark vs. Watson vs. Seidl
              </h4>
            </div>
            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">Widmark (1932):</strong>
                Verwendet feste Koeffizienten (0,70 / 0,60). Sehr einfach, aber bei hohem Körperfettanteil unpräzise.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">Watson et al. (1980):</strong>
                Berechnet das Körperwasser (<em className="italic">Total Body Water</em>) anhand von Alter, Größe und Gewicht. Goldstandard moderner Rechner.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">Seidl et al. (2000):</strong>
                Deutsche gerichtsmedizinische Validierung für europäische Populationen mit Geschlechter- und Body-Mass-Index-Differenzierung.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
