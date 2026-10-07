import React from 'react';
import { ShieldCheck, Cpu, ExternalLink, Check, AlertCircle, X } from 'lucide-react';

export const DeviceComparison: React.FC = () => {
  return (
    <section id="messtechnik" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white mb-3">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            Sensorik &amp; Forensische Messtechnik
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Atemalkohol-Messtechnik vs. Labor-Blutprobe
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Wie unterscheiden sich private Screening-Geräte, polizeiliche Vortests, stationäre Großgeräte und die gerichtsmedizinische Doppelbestimmung im Labor bezüglich Genauigkeit und Gerichtsverwertbarkeit?
          </p>
        </div>

        {/* Comparison Matrix Cards (4 Tiers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Tier 1: Private Screening-Geräte */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Stufe 1
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Private Screening-Geräte
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Halbleiter- oder kompakte Brennstoffzellen-Tester für die persönliche Orientierung am Morgen danach.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">Halbleiter / Mini-Fuel-Cell</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-amber-800">± 15–40 %</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kosten:</span>
                  <span className="font-bold text-slate-800">ca. 25 – 150 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-rose-800 flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Nein
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
              <strong>Mundalkohol beachten:</strong> Mindestens 15–20 Minuten Wartezeit nach dem letzten Schluck erforderlich, sonst drohen extreme Messwertverzerrungen.
            </div>
          </div>

          {/* Tier 2: Polizeiliche Vortestgeräte (DIN EN 15964) */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Stufe 2
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Polizeiliche Vortester (Handheld)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Mobile elektrochemische Handgeräte (z. B. Dräger Alcotest 6820/7000) nach DIN EN 15964 bei Verkehrskontrollen.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">Brennstoffzelle (DIN EN 15964)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-emerald-800">± 0,05 ‰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kosten:</span>
                  <span className="font-bold text-slate-800">ca. 800 – 1.500 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-amber-800 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Nur Vortest
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-950">
              Dient den Beamten ausschließlich zur Begründung eines Anfangsverdachts für Folgemaßnahmen.
            </div>
          </div>

          {/* Tier 3: Beweissichere Atemalkoholmessung (§ 24a StVG) */}
          <div className="bg-white rounded-2xl border-2 border-amber-500 p-6 flex flex-col justify-between shadow-lg relative">
            <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950">
              Gerichtsverwertbar (§ 24a)
            </span>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                Stufe 3
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Evidentielle Atemalkoholmessung
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Stationäre Messgeräte (z. B. Dräger Alcotest 7110 Evidential / 9510 DE nach DIN VDE 0405) auf der Polizeiwache.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">IR + EC Doppelsensor</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-emerald-800">Eichamtlich überwacht</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dauer:</span>
                  <span className="font-bold text-slate-800">20 Min. Kontrollzeit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Ja (§ 24a StVG)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 leading-relaxed">
              <strong>Voll gerichtsverwertbar:</strong> Für Ordnungswidrigkeiten (§ 24a StVG bis 1,09 ‰) per BGHSt 46, 358 als Beweismittel anerkannt.
            </div>
          </div>

          {/* Tier 4: Forensische Labor-Blutanalyse */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Stufe 4
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Venöse Labor-Blutprobe
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Gerichtsmedizinische Doppelbestimmung im akkreditierten Labor via Gaschromatographie (GC) und enzymatischer ADH-Methode.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">GC + ADH Doppelung</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-emerald-800">&lt; 0,01 ‰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dauer:</span>
                  <span className="font-bold text-slate-800">1 – 3 Tage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Straf- &amp; OWi-Verfahren
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-slate-200 text-[11px] text-slate-800 font-semibold leading-relaxed">
              Zwingend vorgeschrieben bei Straftatverdacht (§§ 315c, 316 StGB) und bei verweigerter Atemprobe.
            </div>
          </div>

        </div>

        {/* Product Showcase & Partner Recommendation Card (Affiliate / Master-Prompt konform) */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Orientierung für den Eigenbedarf: Restalkohol vermeiden
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Elektrochemische Alkoholtester für den privaten Gebrauch
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                Restalkohol am folgenden Vormittag wird häufig unterschätzt. Für die private Eigenkontrolle empfehlen Fachleute handliche Tester mit elektrochemischer Brennstoffzelle (DIN EN 16280), da diese deutlich selektiver auf Ethanol reagieren als einfache Halbleiter.
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>✓ Elektrochemische Brennstoffzellen-Technologie</span>
                <span>✓ Auf Einhaltung der Norm DIN EN 16280 achten</span>
                <span>✓ Mindestens 15–20 Min. Wartezeit nach Trinkende einhalten</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <a
                href="https://www.amazon.de/s?k=alkoholtester+elektrochemisch+en+16280&tag=widmarkformel.de-21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-amber-600 text-center"
              >
                <span>Elektrochemische Tester ansehen *</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="mt-2 text-[11px] text-slate-400 text-center sm:text-right leading-tight">
                * Suchlink / Partnerlink. Beim Kauf über diesen externen Link erhalten wir ggf. eine Vermittlungsprovision. Die Suchergebnisse umfassen verschiedene Modelle und Hersteller; prüfen Sie die Zertifizierung (z. B. DIN EN 16280) im jeweiligen Produktangebot.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

