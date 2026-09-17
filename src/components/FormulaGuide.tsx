import React from 'react';
import { Layers, Cpu, FlaskConical, Clock } from 'lucide-react';

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

        {/* Resorption Deficit, Watson Comparison & Kinetic Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Resorption Deficit Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-5 h-5 text-amber-600" />
              <h4 className="font-black text-slate-950 text-lg">
                Das Resorptionsdefizit (10 % bis 30 %)
              </h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nicht das gesamte getrunkene Ethanol erreicht die Blutbahn. Ein messbarer Anteil wird bereits in der Magenschleimhaut und beim ersten Leberdurchlauf (First-Pass-Effekt) abgebaut oder unresorbiert ausgeschieden. 
              <strong>Wichtig:</strong> Die Prozentwerte (10 %, 20 %, 30 %) sind empirische Schätzkorridore für Populationen, keine unveränderlichen individuellen Naturkonstanten.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-800 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Nüchterner Magen:</strong> ca. 10 % Defizit (rasche Magenpassage in das Duodenum).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Normale Mischkost:</strong> ca. 20 % Defizit (forensische Standardannahme).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Fett- / proteinreiche Nahrung:</strong> bis zu 30 % Defizit (verzögerte Magenentleerung).</span>
              </li>
            </ul>
          </div>

          {/* Model Comparison & Application Limits */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-slate-900" />
              <h4 className="font-black text-slate-950 text-lg">
                Watson-Formel &amp; Anwendungsgrenzen
              </h4>
            </div>
            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">Watson-Gleichung (1980):</strong>
                Ermittelt das Gesamtkörperwasser (TBW in Liter): <br />
                <code className="font-mono text-[11px] block mt-1 bg-slate-50 p-1.5 rounded border border-slate-200">
                  TBW_m = 2,447 - 0,09516·Alter + 0,1074·Größe(cm) + 0,3362·Gewicht(kg)<br />
                  TBW_w = -2,097 + 0,1069·Größe(cm) + 0,2466·Gewicht(kg)<br />
                  r = TBW / (0,8 · Gewicht)  [0,8 = Wasseranteil im Blut]
                </code>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">Grenzen der Modellgültigkeit:</strong>
                Die Formeln basieren auf standardisierten Stichproben. Bei extremem Body-Mass-Index (starke Adipositas oder Untergewicht), ausgeprägter Hypertrophie (Kraftsportler), Dehydratation oder Lebererkrankungen weichen reale Blutwerte deutlich vom Modell ab.
              </div>
            </div>
          </div>

        </div>

        {/* Pharmacokinetic Multi-Phase Box: Resorption, Peak & Effective Elimination */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-amber-400" />
            <h4 className="font-black text-white text-xl">
              Pharmakokinetik: Anflutung, Resorptionsgipfel &amp; effektive Abbauzeit
            </h4>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            In der Praxis darf die lineare Eliminationsgleichung nicht blind über die gesamte Zeit seit Trinkbeginn angewandt werden. Reale Blutalkoholkurven gliedern sich in zwei fundamentale Phasen:
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="font-bold text-amber-400 text-sm mb-1">1. Anflutung (Resorptionsphase)</div>
              <p className="text-slate-300 leading-relaxed">
                Während des Konsums (<code className="text-white font-mono">t_Trink</code>) und in der anschließenden Resorptionsverzögerung (<code className="text-white font-mono">Δt_Lag</code>: ca. 30–60 Min., bei voller Mahlzeit bis 120 Min.) strömt kontinuierlich Alkohol aus dem Magen-Darm-Trakt ins Blut. Der Blutspiegel steigt an.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="font-bold text-amber-400 text-sm mb-1">2. Resorptionsgipfel (c_max)</div>
              <p className="text-slate-300 leading-relaxed">
                Der Spitzenwert <code className="text-white font-mono">c_max</code> tritt erst bei <code className="text-white font-mono">t_Gipfel = t_Trink + Δt_Lag</code> ein. Bei 2 h Trinken und normaler Mahlzeit (45 Min. Nachlauf) liegt der Gipfel erst ca. <strong>2,75 h nach Trinkbeginn</strong>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="font-bold text-amber-400 text-sm mb-1">3. Effektive Elimination (Post-Peak)</div>
              <p className="text-slate-300 leading-relaxed">
                Rechnerischer linearer Abbau unter die Spitze findet erst nach Erreichen des Gipfels statt: <code className="text-amber-300 font-mono">t_eff = t_gesamt − t_Gipfel</code>. Bei 3 h Gesamtdauer beträgt die effektive Abbauzeit: <code className="text-white font-mono">3,0 − 2,75 = 0,25 h</code> (15 Minuten).
              </p>
            </div>
          </div>
          <div className="mt-5 p-4 rounded-xl bg-slate-800/90 border border-amber-400/30 text-xs text-slate-200">
            <strong className="text-amber-300 font-semibold block mb-1">Die exakte Kinetik-Gleichung der Eliminationsphase:</strong>
            <div className="font-mono text-xs sm:text-sm text-white bg-slate-950 p-2.5 rounded-lg border border-slate-700 overflow-x-auto">
              c(t) = c_max − β₆₀ · max(0, t_gesamt − t_Gipfel) &emsp; mit &emsp; t_Gipfel = t_Trink + Δt_Lag
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Beispiel: Ein Spitzenwert von <code className="text-slate-200">0,56 ‰</code> bei 3 h Gesamtdauer (2 h Trinken + 1 h nach Ende) führt nicht zu <code className="text-slate-200">0,56 − 3 · 0,15 = 0,11 ‰</code>, sondern zu <code className="text-amber-300">0,56 − (0,15 · 0,25 h) ≈ 0,53 ‰</code>, da die Person erst seit 15 Minuten den Resorptionsgipfel überschritten hat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
