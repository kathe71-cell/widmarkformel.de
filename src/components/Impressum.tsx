import React from 'react';
import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

export const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 text-slate-800 border border-slate-300 mb-4">
            <Shield className="w-3.5 h-3.5 text-slate-700" />
            Rechtliche Anbieterkennzeichnung
          </div>

          <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-8">
            Impressum
          </h1>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            
            {/* § 5 DDG Angaben */}
            <section className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-base font-extrabold text-slate-950 mb-3">
                Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG):
              </h2>
              <p className="font-medium text-slate-900 leading-relaxed">
                Jens Kathe<br />
                Hansastraße 6<br />
                34119 Kassel<br />
                Deutschland
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-base font-extrabold text-slate-950 mb-3">
                Kontakt:
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>Telefon: +49 178 6652623</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-700 hover:underline font-semibold">jens@kathe.org</a></span>
                </div>
              </div>
            </section>

            {/* Umsatzsteuer & Kleinunternehmer */}
            <section>
              <h2 className="text-base font-extrabold text-slate-950 mb-2">
                Umsatzsteuer:
              </h2>
              <p>
                Kleinunternehmer nach § 19 UStG. Es wird keine Umsatzsteuer berechnet.
              </p>
            </section>

            {/* Verantwortlich nach § 18 MStV */}
            <section>
              <h2 className="text-base font-extrabold text-slate-950 mb-2">
                Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:
              </h2>
              <p>
                Jens Kathe<br />
                Hansastraße 6<br />
                34119 Kassel<br />
                Deutschland
              </p>
            </section>

            {/* Streitschlichtung */}
            <section className="pt-4 border-t border-slate-100">
              <h2 className="text-base font-extrabold text-slate-950 mb-2">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle:
              </h2>
              <p className="mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 underline hover:text-amber-800 break-all font-semibold"
                >
                  https://ec.europa.eu/consumers/odr
                </a>{' '}
                finden. Unsere E-Mail-Adresse lautet: jens@kathe.org.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Unabhängigkeit & Haftungsausschluss für Berechnungen */}
            <section className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <h3 className="font-extrabold text-sm mb-1">
                Wichtiger Hinweis zum Rechnerangebot &amp; Haftungsausschluss:
              </h3>
              <p>
                widmarkformel.de ist ein unabhängiges Informationsportal und steht in keinem gesellschaftsrechtlichen Verhältnis zu Behörden, Prüforganisationen oder genannten Messgeräteherstellern. Die bereitgestellten Berechnungen und Modellkurven sind rein theoretischer Natur. Sie berücksichtigen biologische Durchschnittswerte und ersetzen keinesfalls eine forensische Blutalkoholbestimmung. Eine rechtliche Gewähr oder Haftung für das Führen von Fahrzeugen wird ausdrücklich ausgeschlossen. Fahren Sie niemals unter Alkoholeinfluss!
              </p>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
};
