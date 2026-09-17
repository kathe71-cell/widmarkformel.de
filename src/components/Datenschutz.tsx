import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, BarChart3, Radio } from 'lucide-react';

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
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 text-slate-800 border border-slate-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
            Datenschutz &amp; Transparenz
          </div>

          <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            
            {/* 1. Lokale Berechnung */}
            <section className="p-5 rounded-xl bg-amber-50/60 border border-amber-200">
              <h2 className="text-base font-extrabold text-amber-950 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-700" />
                Lokale Berechnung im Browser ohne Serverübertragung
              </h2>
              <p className="text-xs text-amber-950 leading-relaxed">
                Sämtliche Eingaben, die Sie in unseren Promillerechner eingeben (wie Alter, Geschlecht, Körpergröße, Körpergewicht und getrunkene Alkoholmengen), werden <strong>ausschließlich lokal in Ihrem Browser (JavaScript) verarbeitet</strong>. Diese physiologischen Angaben werden nicht auf unseren Webservern gespeichert und nicht an Dritte übertragen.
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
              <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs leading-relaxed">
                <strong>Jens Kathe</strong><br />
                Hansastraße 6<br />
                34119 Kassel<br />
                Deutschland<br />
                E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-700 underline font-semibold">jens@kathe.org</a><br />
                Telefon: +49 178 6652623
              </div>
            </section>

            {/* 3. Hosting & Server-Logfiles */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                2. Hosting &amp; Server-Log-Dateien
              </h2>
              <p className="mb-2">
                Diese Website wird über die Plattform Vercel der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA bereitgestellt.
              </p>
              <p className="mb-2">
                Beim Aufruf unserer Seiten erfasst der Server automatisiert technische Verbindungsdaten (Server-Logfiles):
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>IP-Adresse des anfragenden Geräts</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mt-2 text-xs">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung der technischen Stabilität, IT-Sicherheit und Fehleranalyse.
              </p>
            </section>

            {/* 4. Vercel Web Analytics & Speed Insights */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-slate-700" />
                3. Webanalyse: Vercel Web Analytics &amp; Speed Insights
              </h2>
              <p className="mb-2">
                Wir nutzen Web Analytics und Speed Insights von Vercel Inc., um aggregierte Einblicke in die technische Performance (Core Web Vitals wie Ladezeiten) und die Nutzung unserer Unterseiten zu erhalten.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vercel Web Analytics verzichtet standardmäßig auf persistente Tracking-Cookies und erfasst Metriken in aggregierter, pseudonymisierter Form. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der bedarfsgerechten Optimierung und Performance unseres Webangebots).
              </p>
            </section>

            {/* 5. Google AdSense */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3 flex items-center gap-2">
                <Radio className="w-5 h-5 text-amber-600" />
                4. Werbedienste: Google AdSense &amp; Einwilligungserfordernis
              </h2>
              <p className="mb-2">
                Auf dieser Website ist der Werbedienst Google AdSense eingebunden (Publisher-ID: <code>ca-pub-7078147966379221</code>). Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“; Muttergesellschaft: Google LLC, Mountain View, CA, USA).
              </p>
              <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                <p>
                  <strong>Rechtsgrundlagen nach TDDDG und DSGVO:</strong><br />
                  Gemäß den geltenden europäischen und deutschen Datenschutzbestimmungen sowie der verbindlichen 
                  <a 
                    href="https://www.google.com/about/company/user-consent-policy/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-800 underline font-semibold mx-1"
                  >
                    Google-Richtlinie zur Einwilligung der Nutzer in der EU (EU User Consent Policy)
                  </a>
                  bedarf sowohl das Speichern und Auslesen von Informationen auf Ihrem Endgerät (wie Cookies, Werbe-IDs oder Geräte-Kennungen) als auch die Erhebung und Verarbeitung personenbezogener Daten für personalisierte Werbeanzeigen Ihrer vorherigen, ausdrücklichen Einwilligung:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                  <li>
                    <strong>Endgerätezugriff (§ 25 Abs. 1 TDDDG):</strong> Das Setzen und Auslesen von Cookies, Werbe-IDs und vergleichbaren Identifikatoren zu Marketing- und Analysezwecken erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung. Ein Rückgriff auf ein pauschales berechtigtes Interesse ist für diese Endgerätezugriffe gesetzlich ausgeschlossen.
                  </li>
                  <li>
                    <strong>Verarbeitung personenbezogener Daten (Art. 6 Abs. 1 lit. a DSGVO):</strong> Die Verwendung von Nutzungsdaten, Klickpfaden und Profilbildungsdaten zur Personalisierung von Werbeanzeigen und für Remarketing basiert ebenfalls ausnahmslos auf Ihrer vorherigen Einwilligung.
                  </li>
                </ul>
                <p>
                  <strong>Tatsächliche Anzeigenkonfiguration &amp; Consent-Verhalten:</strong><br />
                  Die Aussteuerung und Erfassung von Nutzer-Einwilligungen erfolgt über eine Google-zertifizierte Consent-Management-Plattform (CMP), die den IAB Transparency &amp; Consent Framework (TCF v2.2) Standard sowie den Google Consent Mode unterstützt. 
                  Wird keine Einwilligung erteilt oder diese verweigert, schaltet Google AdSense ausschließlich nicht-personalisierte Anzeigen (Non-Personalized Ads / NPA). In diesem Fall werden keine Werbeprofile erstellt und Werbeanzeigen lediglich kontextbezogen basierend auf dem Inhalt der besuchten Unterseite ausgewählt. Auch technisch verbleibende Kennungen für Frequency Capping, aggregierte Berichterstattung und Betrugserkennung werden streng nach den Vorgaben der Google-Richtlinien und des TDDDG behandelt.
                </p>
                <p>
                  <strong>Widerruf &amp; Personalisierungseinstellungen:</strong><br />
                  Sie können eine einmal erteilte Einwilligung jederzeit mit Wirkung für die Zukunft über unsere Cookie- bzw. Datenschutzeinstellungen widerrufen oder anpassen. Darüber hinaus können Sie die Anzeige personalisierter Google-Werbung geräteübergreifend in den Einstellungen für Werbung von Google verwalten unter{' '}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline font-semibold">
                    https://adssettings.google.com
                  </a>.
                </p>
                <p>
                  <strong>Weiterführende Informationen von Google:</strong><br />
                  Informationen darüber, wie Google Daten von Websites verwendet, auf denen Google-Dienste eingebunden sind, finden Sie unter{' '}
                  <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline font-semibold">
                    https://policies.google.com/technologies/partner-sites
                  </a>{' '}
                  sowie in den Hinweisen zu Werbetechnologien unter{' '}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline font-semibold">
                    https://policies.google.com/technologies/ads
                  </a>. Soweit Daten in die USA übermittelt werden, stützt sich Google auf das EU-U.S. Data Privacy Framework (DPF).
                </p>
              </div>
            </section>

            {/* 6. Partner- & Affiliate-Links */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                5. Partner- &amp; Affiliate-Links
              </h2>
              <p className="text-xs leading-relaxed text-slate-700">
                Auf unserer Website finden Sie gekennzeichnete Verweise zu externen Angeboten (z. B. zu zertifizierten Atemalkoholtestern). Diese Links sind mit einem Sternchen (*) gekennzeichnet. Bei einem Klick auf einen solchen Partner- bzw. Suchlink werden Sie auf die Website des jeweiligen Anbieters (z. B. Amazon.de) weitergeleitet. Erst dort kommen die jeweiligen Datenschutzbestimmungen des Anbieters zur Anwendung.
              </p>
            </section>

            {/* 7. Ihre Rechte */}
            <section>
              <h2 className="text-lg font-black text-slate-950 mb-3">
                6. Ihre Rechte gemäß DSGVO
              </h2>
              <p className="mb-2">
                Sie haben im Rahmen der geltenden gesetzlichen Vorschriften jederzeit folgende Rechte:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
              <p className="mt-3 text-xs">
                Bei Fragen wenden Sie sich jederzeit per E-Mail an: <a href="mailto:jens@kathe.org" className="text-amber-700 underline font-semibold">jens@kathe.org</a>.
              </p>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
};

