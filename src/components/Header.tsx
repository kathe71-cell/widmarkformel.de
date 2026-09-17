import React, { useState } from 'react';
import { Calculator, Scale, BookOpen, ShieldAlert, Menu, X, Info, BookMarked } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string, hashId?: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    if (hashId) {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm transition-all">
      {/* Top Disclaimer Bar (Master-Prompt Richtlinie) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <p className="flex items-center gap-1.5 truncate">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">
              Unabhängiges Informationsportal. Wissenschaftliche Modellrechnung nach Erik M. P. Widmark (1932) &amp; P. E. Watson (1980).
            </span>
          </p>
          <div className="hidden md:flex items-center gap-4 text-slate-400 shrink-0 text-[11px]">
            <span>Datenschutzkonform</span>
            <span>•</span>
            <span>Stand: StVG &amp; StGB 2025/2026</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand / Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md group-hover:border-amber-500 transition-colors">
              <span className="font-mono text-amber-400 font-black text-sm md:text-base tracking-tighter">
                c=A/pr
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg md:text-xl tracking-tight text-slate-900">
                  widmarkformel<span className="text-amber-600">.de</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Wissenschaftlicher Promillerechner &amp; Rechtsmatrix
              </p>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('home', 'rechner')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                currentView === 'home' ? 'text-slate-950 bg-slate-100' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              Promillerechner
            </button>
            <button
              onClick={() => handleNavClick('home', 'herleitung')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-slate-600" />
              Formel-Herleitung
            </button>
            <button
              onClick={() => handleNavClick('home', 'promillegrenzen')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Scale className="w-4 h-4 text-slate-600" />
              Promillegrenzen (DE)
            </button>
            <button
              onClick={() => handleNavClick('home', 'messtechnik')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ShieldAlert className="w-4 h-4 text-slate-600" />
              Messtechnik
            </button>
            <button
              onClick={() => handleNavClick('home', 'lexikon')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <BookMarked className="w-4 h-4 text-slate-600" />
              Lexikon
            </button>
            <button
              onClick={() => handleNavClick('home', 'faq')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home', 'rechner')}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 border border-amber-600 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>BAK berechnen</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('home', 'rechner')}
              className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center gap-1"
            >
              Rechner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <button
            onClick={() => handleNavClick('home', 'rechner')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-amber-50 hover:text-amber-900 flex items-center gap-2.5"
          >
            <Calculator className="w-4 h-4 text-amber-600" />
            Interaktiver Promillerechner
          </button>
          <button
            onClick={() => handleNavClick('home', 'herleitung')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2.5"
          >
            <BookOpen className="w-4 h-4 text-slate-600" />
            Wissenschaftliche Herleitung &amp; Watson
          </button>
          <button
            onClick={() => handleNavClick('home', 'promillegrenzen')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2.5"
          >
            <Scale className="w-4 h-4 text-slate-600" />
            Rechtliche Promillegrenzen Deutschland
          </button>
          <button
            onClick={() => handleNavClick('home', 'messtechnik')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2.5"
          >
            <ShieldAlert className="w-4 h-4 text-slate-600" />
            Messtechnik: Alkomat vs. Laborblut
          </button>
          <button
            onClick={() => handleNavClick('home', 'lexikon')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2.5"
          >
            <BookMarked className="w-4 h-4 text-slate-600" />
            Wissens-Hub &amp; Fachlexikon
          </button>
          <button
            onClick={() => handleNavClick('home', 'faq')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            Häufige Fragen (FAQ)
          </button>
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNavClick('impressum')}
              className="text-xs text-slate-500 hover:text-slate-900 px-2 py-1"
            >
              Impressum (§ 5 DDG)
            </button>
            <button
              onClick={() => handleNavClick('datenschutz')}
              className="text-xs text-slate-500 hover:text-slate-900 px-2 py-1"
            >
              Datenschutz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
