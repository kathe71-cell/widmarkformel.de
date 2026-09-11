import React, { useState } from 'react';
import { Scale, Car, Bike, Zap } from 'lucide-react';

export const LegalLimitsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pkw' | 'escooter' | 'fahrrad'>('pkw');

  return (
    <section id="promillegrenzen" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-950 border border-amber-300 mb-3">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            Rechtslage in Deutschland (StVG, StGB &amp; FeV)
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Gesetzliche Promillegrenzen &amp; Strafen
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            In Deutschland unterscheidet der Gesetzgeber strikt zwischen Ordnungswidrigkeiten und Straftatbeständen. Ein Überblick über Schwellenwerte, Bußgelder, Punkte in Flensburg und MPU-Vorgaben.
          </p>
        </div>

        {/* Vehicle Type Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('pkw')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'pkw'
                  ? 'bg-slate-900 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Pkw &amp; Kraftfahrzeuge</span>
            </button>
            <button
              onClick={() => setActiveTab('escooter')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'escooter'
                  ? 'bg-slate-900 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>E-Scooter (eKFV)</span>
            </button>
            <button
              onClick={() => setActiveTab('fahrrad')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'fahrrad'
                  ? 'bg-slate-900 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Fahrrad &amp; Pedelec</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content based on Tab */}
        {activeTab === 'pkw' && (
          <div className="space-y-4">
            
            {/* 0.0 Promille */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-blue-100 text-blue-950 border border-blue-300 font-mono font-black text-lg">
                    0,00 ‰
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      Null-Promille-Grenze für Fahranfänger &amp; U21
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">Rechtsgrundlage: § 24c StVG</span>
                  </div>
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 self-start sm:self-auto">
                  Strikte Null-Toleranz
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Geltungsbereich:</strong>
                  Fahrer in der zweijährigen Führerschein-Probezeit sowie alle Personen vor Vollendung des 21. Lebensjahres.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Sanktionen:</strong>
                  250 € Bußgeld, 1 Punkt in Flensburg, behördliche Anordnung eines Aufbauseminars (Kosten ca. 300–500 €).
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Führerschein-Folgen:</strong>
                  Automatische Verlängerung der Probezeit von 2 auf 4 Jahre.
                </div>
              </div>
            </div>

            {/* 0.3 Promille */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-yellow-100 text-yellow-950 border border-yellow-400 font-mono font-black text-lg">
                    0,30 ‰
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      Relative Fahruntüchtigkeit (bei Ausfallerscheinungen)
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">Rechtsgrundlage: § 316 StGB / § 315c StGB</span>
                  </div>
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-50 text-yellow-900 border border-yellow-300 self-start sm:self-auto">
                  Straftatbestand möglich
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Voraussetzung:</strong>
                  Bereits ab 0,3 ‰ liegt eine Straftat vor, wenn alkoholbedingte Fahrfehler (Schlangenlinien, Missachtung der Vorfahrt) oder ein Unfall auftreten.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Strafmaß:</strong>
                  Geldstrafe (meist 1 Monatsgehalt) oder Freiheitsstrafe bis zu 1 Jahr (bei Gefährdung bis zu 5 Jahre), 3 Punkte in Flensburg.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Fahrerlaubnis:</strong>
                  Sofortige Beschlagnahme des Führerscheins, gerichtlicher Entzug der Fahrerlaubnis und Sperrfrist (ca. 6 bis 12 Monate).
                </div>
              </div>
            </div>

            {/* 0.5 Promille */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-950 border border-amber-400 font-mono font-black text-lg">
                    0,50 ‰
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      Ordnungswidrigkeit (§ 24a StVG – Gesetzliche Regelschwelle)
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">Rechtsgrundlage: § 24a Abs. 1 StVG</span>
                  </div>
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 self-start sm:self-auto">
                  Fahrverbot garantiert
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">1. Verstoß:</strong>
                  <span className="font-bold text-slate-900">500 € Bußgeld</span>, 2 Punkte in Flensburg, 1 Monat Fahrverbot.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">2. Verstoß (Wiederholung):</strong>
                  <span className="font-bold text-slate-900">1.000 € Bußgeld</span>, 2 Punkte in Flensburg, 3 Monate Fahrverbot.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">3. Verstoß:</strong>
                  <span className="font-bold text-slate-900">1.500 € Bußgeld</span>, 2 Punkte in Flensburg, 3 Monate Fahrverbot + MPU-Anordnung.
                </div>
              </div>
            </div>

            {/* 1.1 Promille */}
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-rose-100 text-rose-950 border border-rose-400 font-mono font-black text-lg">
                    1,10 ‰
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      Absolute Fahruntüchtigkeit (Schwere Straftat)
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">Rechtsgrundlage: § 316 StGB (Trunkenheit im Verkehr)</span>
                  </div>
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-950 border border-rose-300 self-start sm:self-auto">
                  Unwiderlegbare Unfähigkeit
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Beweisführung:</strong>
                  Kein Nachweis von Ausfallerscheinungen erforderlich. Die Rechtsprechung unterstellt die Unfähigkeit zum sicheren Führen absolut.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Strafen &amp; Punkte:</strong>
                  Freiheitsstrafe bis zu 1 Jahr oder hohe Geldstrafe (ca. 40–60 Tagessätze), 3 Punkte im Fahreignungsregister.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Fahrerlaubnis:</strong>
                  Vollständiger Entzug der Fahrerlaubnis (kein bloßes Fahrverbot!) mit Sperrfrist von mindestens 6 Monaten bis zu mehreren Jahren.
                </div>
              </div>
            </div>

            {/* 1.6 Promille */}
            <div className="bg-white rounded-2xl border-2 border-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono font-black text-lg">
                    1,60 ‰
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      Zwingende MPU-Anordnung vor Neuerteilung
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">Rechtsgrundlage: § 13 Nr. 2 Buchstabe c FeV</span>
                  </div>
                </div>
                <div className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-500 text-slate-950 self-start sm:self-auto">
                  MPU-Pflicht
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Medizinische Relevanz:</strong>
                  Wer mit ≥ 1,6 ‰ noch in der Lage ist, ein Fahrzeug zu lenken, weist eine erhebliche Giftgewöhnung (Alkoholtoleranz) auf.
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Voraussetzung für Neuerteilung:</strong>
                  Erfolgreiches Bestehen einer MPU inklusive 6–12 Monaten nachgewiesener Alkoholabstinenz (Haar-/Urinanalysen).
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Wichtiger Länder-Hinweis:</strong>
                  In einigen Bundesländern (z. B. Bayern und Baden-Württemberg) ordnen Führerscheinstellen bei Wiederholungstätern die MPU bereits ab 1,1 ‰ an.
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'escooter' && (
          <div className="bg-white rounded-2xl border-2 border-amber-400 p-6 sm:p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  Achtung: E-Scooter sind Kraftfahrzeuge im Sinne des StVG!
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Viele Nutzer unterliegen dem fatalen Irrtum, dass für Elektrokleinstfahrzeuge dieselben lockeren Schwellenwerte wie für Fahrräder gelten. <strong>Das ist falsch!</strong>
                </p>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block mb-1">0,0 ‰ für Fahranfänger:</strong>
                    Auch auf dem E-Scooter droht bei Verstößen während der Probezeit ein Punkt, 250 € Bußgeld und eine 2-jährige Verlängerung der Pkw-Probezeit!
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block mb-1">0,5 ‰ = Fahrverbot:</strong>
                    Ab 0,50 ‰ droht der reguläre Führerscheinverlust (1 Monat Fahrverbot für Auto &amp; Motorrad + 500 € Bußgeld).
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block mb-1">1,1 ‰ = Straftat:</strong>
                    Ab 1,10 ‰ wird der Pkw-Führerschein per Gerichtsbeschluss entzogen (§ 316 StGB).
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fahrrad' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Bike className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  Promilleregelungen für Fahrrad- &amp; Pedelecfahrer
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Auf dem herkömmlichen Fahrrad (sowie Pedelecs bis 25 km/h Unterstützung) gilt kein 0,5-Promille-Fahrverbot. Dennoch drohen empfindliche Strafen und der Verlust des Autoführerscheins:
                </p>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block mb-1">Ab 0,3 ‰ (Relative Fahruntüchtigkeit):</strong>
                    Wer betrunken Fahrrad fährt und Schlangenlinien zieht oder einen Unfall verursacht, macht sich nach § 316 StGB strafbar (Geldstrafe, 3 Punkte in Flensburg).
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block mb-1">Ab 1,6 ‰ (Absolute Fahruntüchtigkeit):</strong>
                    Straftat ohne Ausnahme. Die Fahrerlaubnisbehörde ordnet zwingend eine MPU an. Wird diese nicht bestanden, wird die Fahrerlaubnis für das Auto entzogen und sogar das Radfahren untersagt!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
