import React from 'react';
import { ShieldCheck, Cpu, ExternalLink, Check, X } from 'lucide-react';

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
            Widmark-Formel vs. Atemtester vs. Blutprobe
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Wie zuverlässig ist eine mathematische Formel im Vergleich zu modernen digitalen Atemalkoholtestern und der gerichtsmedizinischen Doppelbestimmung im Labor?
          </p>
        </div>

        {/* Comparison Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. Widmark Formel */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Methode 1
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Widmark-Formel
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Theoretische Modellrechnung basierend auf konsumierter Masse, Körpergewicht und Verteilungsfaktor.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">Mathematik</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-amber-800">± 20–30 %</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kosten:</span>
                  <span className="font-bold text-emerald-800">Kostenlos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-rose-800 flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Nein
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600">
              Ideal für Orientierung und Verständnis der Abbauzeiten vor Fahrtantritt.
            </div>
          </div>

          {/* 2. Halbleiter-Tester */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Methode 2
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Halbleiter-Sensor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Günstige elektronische Sensoren (meist unter 40 €). Reagieren auf Leitfähigkeitsänderungen des Oxids.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">Halbleiter</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-rose-800">± 25–40 %</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kosten:</span>
                  <span className="font-bold text-slate-800">ca. 15 – 40 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-rose-800 flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Nein
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-[11px] text-rose-900">
              Nicht empfohlen: Starke Kreuzempfindlichkeit (Kaugummi, Rauch, Mundalkohol).
            </div>
          </div>

          {/* 3. Elektrochemischer Tester (Polizeistandard) */}
          <div className="bg-white rounded-2xl border-2 border-amber-500 p-6 flex flex-col justify-between shadow-lg relative">
            <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950">
              Empfohlener Standard
            </span>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                Methode 3
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">
                Elektrochemisch (Polizei-Vortest)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Brennstoffzellen-Technologie (Fuel Cell). Erkennt selektiv Ethanolmoleküle ohne Verzerrung durch andere Gase.
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Messprinzip:</span>
                  <span className="font-semibold text-slate-800">Elektrochemie</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Toleranz:</span>
                  <span className="font-semibold text-emerald-800">± 0,05 ‰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kosten:</span>
                  <span className="font-bold text-slate-800">ca. 80 – 250 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gerichtsverwertbar:</span>
                  <span className="font-bold text-amber-800">Nur Vortest</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 font-medium">
              Präzise &amp; verlässlich für private Selbstkontrolle am nächsten Morgen.
            </div>
          </div>

          {/* 4. Forensische Labor-Blutanalyse */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Methode 4
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
                    <Check className="w-3.5 h-3.5" /> 100 % gerichtlich
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-2.5 rounded-lg bg-slate-200 text-[11px] text-slate-800 font-semibold">
              Einzige rechtsverbindliche Grundlage für Gerichtsverfahren und MPU.
            </div>
          </div>

        </div>

        {/* Product Showcase & Partner Recommendation Card (Affiliate / Master-Prompt konform) */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Sicherheit am Tag danach: Restalkohol vermeiden
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Zertifizierte elektrochemische Alkoholtester für den Eigenbedarf
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                Viele Führerscheinverluste geschehen nicht nachts, sondern am nächsten Vormittag durch unterschätzten Restalkohol. Wenn Sie regelmäßig Gewissheit über Ihre Fahrtüchtigkeit benötigen, empfehlen Experten hochwertige elektrochemische Alkomaten mit EN-16280-Zertifizierung.
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>✓ Baugleiche Sensorik wie behördliche Vortestgeräte</span>
                <span>✓ Messgenauigkeit nach DIN EN 16280</span>
                <span>✓ Kein Einfluss durch Mundspray oder Kaugummi</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <a
                href="https://www.amazon.de/s?k=alkoholtester+elektrochemisch+en+16280&tag=kontosofort-21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-amber-600"
              >
                <span>Elektrochemische Tester ansehen *</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="mt-2 text-[11px] text-slate-400 text-center sm:text-right">
                * Partnerlink / Anzeige. Beim Kauf über diesen Link erhalten wir ggf. eine Vermittlungsprovision.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
