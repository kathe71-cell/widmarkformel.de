import React from 'react';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
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
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-950 border border-emerald-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            100% DSGVO-konform (Zero-CDN)
          </div>

          <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            
            {/* 1. Datenschutz auf einen Blick */}
            <section className="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
              <h2 className="text-base font-extrabold text-emerald-950 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-700" />
                Datenschutz auf einen Blick: Lokale Berechnung ohne Serverübertragung
              </h2>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Ihre Privatsphäre ist uns ein zentrales Anliegen. Sämtliche Angaben, die Sie in unseren Promillerechner eingeben (wie Alter, Geschlecht, Körpergewicht und getrunkene Alkoholmengen), werden <strong>ausschließlich lokal in Ihrem Browser verarbeitet</strong>. Es findet zu keinem Zeitpunkt eine Übertragung dieser sensiblen Nutzungsdaten an unsere Server oder Dritte statt.
              </p>
            </section>

            {/* 2. Verantwortliche Stelle */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                1. Verantwortliche Stelle
              </h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">Verantwortlicher im Sinne der DSGVO ist der Betreiber dieser Website. Die vollständigen Kontaktdaten und Angaben zum Verantwortlichen finden Sie im <a href="/impressum" className="text-amber-700 font-semibold hover:underline">Impressum</a>.</div>
            </section>

            {/* 3. Hosting & Server-Log-Dateien */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                2. Hosting &amp; Server-Log-Dateien
              </h2>
              <p className="mb-2">
                Diese Website wird auf Servern der Plattform Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet.
              </p>
              <p className="mb-2">
                Beim Aufruf unserer Website erfasst der Webserver automatisch technische Informationen (sogenannte Server-Logfiles):
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners / IP-Adresse (anonymisiert)</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mt-2 text-xs">
                Die Rechtsgrundlage für die vorübergehende Speicherung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Stabilität und Sicherheit der Website).
              </p>
            </section>

            {/* 4. Zero-CDN & Keine externen Schriftarten */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                3. Keine Google Fonts &amp; keine externen CDNs (Zero-CDN Policy)
              </h2>
              <p>
                Zum Schutz Ihrer Privatsphäre und zur Vermeidung jeglicher IP-Adressübertragung in Drittstaaten binden wir <strong>keine externen Schriftarten (wie Google Fonts)</strong> oder externe JavaScript-Bibliotheken über Content Delivery Networks (CDNs) ein. Alle Stylesheets und Schriften basieren auf dem nativen System-Font-Stack Ihres Betriebssystems.
              </p>
            </section>

            {/* 5. Affiliate-Links / Partnerprogramme */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                4. Partner- &amp; Affiliate-Links
              </h2>
              <p>
                Auf widmarkformel.de befinden sich themenbezogene Links zu externen Partnern (z. B. zertifizierten Atemalkoholtestern). Diese Links sind transparent mit einem Sternchen (*) gekennzeichnet. Wenn Sie auf einen solchen Partnerlink klicken, werden Sie direkt auf die Website des Anbieters weitergeleitet. Erst dort greifen die Datenschutzbestimmungen und Tracking-Mechanismen des jeweiligen Partners.
              </p>
            </section>

            {/* 6. Ihre Rechte als betroffene Person */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                5. Ihre Rechte gemäß DSGVO
              </h2>
              <p className="mb-2">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
              <p className="mt-3 text-xs">
                Bei Fragen zum Datenschutz wenden Sie sich bitte jederzeit per E-Mail an <a href="mailto:jens@kathe.org" className="text-amber-700 underline font-semibold">jens@kathe.org</a>.
              </p>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
};
