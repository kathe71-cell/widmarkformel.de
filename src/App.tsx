import ProjektuebernahmePage from "./components/ProjektuebernahmePage";
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WidmarkCalculator } from './components/WidmarkCalculator';
import { EmbedCalculator } from './components/EmbedCalculator';
import { FormulaGuide } from './components/FormulaGuide';
import { LegalLimitsTable } from './components/LegalLimitsTable';
import { DeviceComparison } from './components/DeviceComparison';
import { SeoGlossary } from './components/SeoGlossary';
import { FaqSection } from './components/FaqSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';
import { ScrollToTop } from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export function App({ initialPath }: { initialPath?: string } = {}) {
  const getInitialView = () => {
    const path = (initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/')).toLowerCase();
    if (path === '/impressum' || path === '/impressum.html') return 'impressum';
    if (path === '/datenschutz' || path === '/datenschutz.html') return 'datenschutz';
    if (path === '/rechner-embed' || path === '/rechner-embed.html') return 'rechner-embed';
    return 'home';
  };
  const [currentView, setCurrentView] = useState<'home' | 'impressum' | 'datenschutz' | 'rechner-embed' | 'projektuebernahme'>(getInitialView);
  const [embedCopied, setEmbedCopied] = useState(false);

  // Handle URL path changes (e.g. /impressum, /datenschutz, /rechner-embed)
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/impressum' || path === '/impressum.html') {
        setCurrentView('impressum');
      } else if (path === '/datenschutz' || path === '/datenschutz.html') {
        setCurrentView('datenschutz');
      } else if (path === '/rechner-embed' || path === '/rechner-embed.html') {
        setCurrentView('rechner-embed');
      } else {
        setCurrentView('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  // Dynamic SEO metadata update for subpages
  useEffect(() => {
    let title = 'Widmark-Formel Rechner & Promilleabbau – BAK berechnen';
    let desc = 'Wissenschaftlich fundierter Widmark-Formel Promillerechner mit Abbaukurve, Watson-Anpassung und aktuellen deutschen Grenzwerten (§ 24a StVG & StGB).';
    let canonical = 'https://www.widmarkformel.de/';

    if (currentView === 'projektuebernahme') {
      title = 'Projektübernahme | widmarkformel.de';
      canonical = 'https://www.widmarkformel.de/projektuebernahme';
    } else

    if (currentView === 'impressum') {
      title = 'Impressum – Gesetzliche Anbieterkennzeichnung | widmarkformel.de';
      desc = 'Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 DDG und § 18 MStV für widmarkformel.de (Jens Kathe, Kassel).';
      canonical = 'https://www.widmarkformel.de/impressum';
    } else if (currentView === 'datenschutz') {
      title = 'Datenschutzerklärung – DSGVO-Transparenz | widmarkformel.de';
      canonical = 'https://www.widmarkformel.de/datenschutz';
    } else if (currentView === 'rechner-embed') {
      title = 'Widmark-Formel Promillerechner Widget – Kostenlos einbinden';
      desc = 'Kompaktes, wissenschaftlich fundiertes Widmark-Promillerechner-Widget für Fahrschulen, Anwaltskanzleien und Informationsportale.';
      canonical = 'https://www.widmarkformel.de/rechner-embed';
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
  }, [currentView]);

  useEffect(() => {
    // Track SPA route changes in Vercel Analytics
    if (typeof window !== 'undefined') {
      const w = window as unknown as { va?: (event: string, data: { route: string }) => void };
      if (w.va) {
        w.va('pageview', { route: currentView });
      }
    }
  }, [currentView]);

  const navigate = (view: string) => {
    if (view === 'impressum') {
      window.history.pushState({}, '', '/impressum');
      setCurrentView('impressum');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'datenschutz') {
      window.history.pushState({}, '', '/datenschutz');
      setCurrentView('datenschutz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'rechner-embed') {
      window.history.pushState({}, '', '/rechner-embed');
      setCurrentView('rechner-embed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    if (currentView !== 'home') {
      window.history.pushState({}, '', '/');
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const EMBED_SNIPPET = `<iframe id="widmark-promillerechner-widget" src="https://www.widmarkformel.de/rechner-embed" width="100%" height="860" frameborder="0" style="border:none;border-radius:16px;overflow:hidden;max-width:600px;width:100%;min-height:860px;box-shadow:0 4px 20px rgba(0,0,0,0.06);display:block;" title="Widmark-Formel Promillerechner"></iframe>
<script>
window.addEventListener('message', function(e) {
  if (e.origin !== 'https://www.widmarkformel.de') return;
  var frame = document.getElementById('widmark-promillerechner-widget');
  if (!frame || e.source !== frame.contentWindow) return;
  if (e.data && e.data.type === 'widmark-embed-resize') {
    var h = e.data.height;
    if (typeof h === 'number' && h >= 400 && h <= 2500) {
      frame.style.height = h + 'px';
      frame.style.minHeight = h + 'px';
    }
  }
});
</script>
<p style="font-size:12px;color:#64748b;margin-top:8px;">Bereitgestellt von <a href="https://www.widmarkformel.de" target="_blank" rel="noopener" style="color:#b45309;text-decoration:underline;font-weight:bold;">widmarkformel.de</a></p>`;

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(EMBED_SNIPPET);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  // Standalone compact embed view for iframes
  if (currentView === 'rechner-embed') {
    return (
      <div className="min-h-screen bg-slate-100 p-2 sm:p-4 text-slate-900 flex flex-col justify-between">
        <EmbedCalculator />
        <div className="text-center py-2 text-[11px] font-medium text-slate-500 max-w-xl mx-auto mt-3">
          Wissenschaftliches Modell nach Widmark (1932) &amp; Watson (1980) &bull;{' '}
          <a
            href="https://www.widmarkformel.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 hover:text-amber-950 font-bold underline"
          >
            widmarkformel.de
          </a>
        </div>
        <Analytics />
        <SpeedInsights />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Header with Navigation */}
      <Header currentView={currentView} onNavigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'projektuebernahme' ? <ProjektuebernahmePage /> : currentView === 'impressum' ? (
          <Impressum onBack={() => navigate('home')} />
        ) : currentView === 'datenschutz' ? (
          <Datenschutz onBack={() => navigate('home')} />
        ) : (
          <>
            <Hero onScrollToCalculator={() => scrollTo('rechner')} />
            <WidmarkCalculator />

            {/* Embed Widget Box (Backlink Magnet) */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      Kostenloses Website-Widget
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mt-1">
                      Promillerechner auf Ihrer Website einbinden
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Kompakt, responsiv und ideal für Fahrschulen, Ratgeber-Blogs, Kanzleien und Portale.
                    </p>
                  </div>
                  <button
                    onClick={copyEmbedCode}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 shrink-0"
                  >
                    <span>{embedCopied ? '✓ HTML-Code kopiert!' : 'Code kopieren'}</span>
                  </button>
                </div>
                <div className="mt-4 bg-slate-900 text-slate-300 p-3.5 rounded-xl font-mono text-xs overflow-x-auto select-all whitespace-pre">
                  <code>{EMBED_SNIPPET}</code>
                </div>
              </div>
            </div>

            <FormulaGuide />
            <LegalLimitsTable />
            <DeviceComparison />

            {/* E-E-A-T Editorial Trust Box */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
                      WF
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-black text-slate-950 text-base">Fachredaktion widmarkformel.de</span>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 text-[10px] font-black rounded-full uppercase tracking-wider border border-slate-200">
                          Wissenschaftliche Redaktion
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Theoretische Modellierung nach Erik M. P. Widmark (1932), Watson et al. (1980) &amp; geltenden Rechtsnormen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-auto">
                    <span>Fachliche Modellbildung</span>
                  </div>
                </div>
                <div className="pt-5 text-xs text-slate-600 leading-relaxed font-medium">
                  Unsere Fachredaktion analysiert biophysikalische und biochemische Modellkurven auf Basis toxikologischer Fachliteratur. Alle rechtlichen Schwellenwerte (§ 24a StVG, § 316 StGB) entsprechen den gesetzlichen Regelungen und der Rechtsprechung deutscher Gerichte. Dieser Rechner ist ein theoretisches Modell und begründet keine individuelle Fahrtauglichkeit.
                </div>
              </div>
            </div>

            <SeoGlossary />
            <FaqSection />
            <StickyMobileBar 
              onScrollToCalculator={() => scrollTo('rechner')} 
              onScrollToLimits={() => scrollTo('promillegrenzen')} 
            />
          </>
        )}
      </main>

      {/* Legal & Informative Footer */}
      <Footer onNavigate={navigate} onScrollTo={scrollTo} />

      {/* Scroll to Top Button & Analytics */}
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;

