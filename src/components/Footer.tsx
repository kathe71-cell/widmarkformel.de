import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Footer Banner: Transparency & Disclaimer */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-mono font-black shrink-0">
              c=A/pr
            </div>
            <div>
              <p className="text-white font-bold text-sm">
                widmarkformel.de &bull; Wissenschaftliche Alkohol- &amp; Promilleberechnung
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                * widmarkformel.de ist ein unabhängiges Informationsangebot und steht in keinem gesellschaftsrechtlichen Verhältnis zu Behörden, Fahrschulen oder Prüforganisationen.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Zero-CDN DSGVO
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-xs">
              StVO / StVG 2025/2026
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Legal Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About Portal */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-3">
              Über das Portal
            </h3>
            <p className="text-slate-400 leading-relaxed text-xs mb-3">
              widmarkformel.de bietet Autofahrern, Medizin-Interessierten und Juristen einen präzisen, transparenten Promillerechner auf Basis der international anerkannten Arbeiten von Erik M. P. Widmark (1932) und P. E. Watson (1980).
            </p>
            <p className="text-[11px] text-slate-500">
              * Sämtliche Ergebnisse sind beispielhafte Modellrechnungen. Die tatsächliche Blutalkoholkonzentration hängt von Stoffwechsel, Magenfüllung und Enzymen ab.
            </p>
          </div>

          {/* Col 2: Formeln & Rechner */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-3">
              Formeln &amp; Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rechner" className="hover:text-amber-400 transition-colors">
                  &bull; Interaktiver Promillerechner (Widmark &amp; Watson)
                </a>
              </li>
              <li>
                <a href="#herleitung" className="hover:text-amber-400 transition-colors">
                  &bull; Mathematische Herleitung der Widmark-Formel
                </a>
              </li>
              <li>
                <a href="#promillegrenzen" className="hover:text-amber-400 transition-colors">
                  &bull; Promillegrenzen Deutschland (§ 24a StVG, § 316 StGB)
                </a>
              </li>
              <li>
                <a href="#messtechnik" className="hover:text-amber-400 transition-colors">
                  &bull; Messtechnik: Alkomaten vs. Forensische Blutprobe
                </a>
              </li>
              <li>
                <a href="#lexikon" className="hover:text-amber-400 transition-colors">
                  &bull; Fachlexikon (BAK, Watson, MPU &amp; FeV)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  &bull; Häufige Fragen &amp; Antworten (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Gesetzliche Schwellenwerte */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-3">
              Promilleschwellen (DE)
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex justify-between border-b border-slate-800/80 pb-1">
                <span>0,0 ‰:</span>
                <span className="text-slate-300 font-medium">Fahranfänger &amp; U21 (§ 24c StVG)</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/80 pb-1">
                <span>0,3 ‰:</span>
                <span className="text-slate-300 font-medium">Rel. Fahruntüchtigkeit (§ 316 StGB)</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/80 pb-1">
                <span>0,5 ‰:</span>
                <span className="text-slate-300 font-medium">Ordnungswidrigkeit (§ 24a StVG)</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/80 pb-1">
                <span>1,1 ‰:</span>
                <span className="text-slate-300 font-medium">Absolute Fahruntüchtigkeit</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>1,6 ‰:</span>
                <span className="text-slate-300 font-medium">Zwingende MPU-Pflicht (§ 13 FeV)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Rechtliche Pflichtangaben & Anbieter */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-3">
              Anbieter &amp; Rechtliches
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300 font-medium">Unabhängiges Fachportal zur Alkohol- und Promilleberechnung.<br />Kleinunternehmer nach § 19 UStG.</p><p className="text-[11px] text-slate-500">Vollständige Betreiberangaben entnehmen Sie bitte dem Impressum.</p>
              <p className="text-[11px] text-slate-500">
                Kleinunternehmer nach § 19 UStG.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('impressum')}
                  className="text-slate-300 hover:text-white underline font-semibold"
                >
                  Impressum (§ 5 DDG)
                </button>
                <button
                  onClick={() => onNavigate('datenschutz')}
                  className="text-slate-300 hover:text-white underline font-semibold"
                >
                  Datenschutz
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: OS Platform & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} widmarkformel.de &bull; Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 flex items-center gap-1"
            >
              <span>EU-Streitschlichtung (OS-Plattform)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
