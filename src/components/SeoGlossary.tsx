import React, { useState } from 'react';
import { BookMarked, Search, CheckCircle2, ChevronRight } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Wissenschaft' | 'Recht' | 'Medizin';
  lawReference?: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Blutalkoholkonzentration (BAK)',
    shortDesc: 'Menge an reinem Ethanol im Blutkreislauf, angegeben in Promille (g/kg).',
    fullDesc: 'Die Blutalkoholkonzentration (BAK) ist der forensische Maßstab zur Beurteilung der Alkoholisierung und Fahruntüchtigkeit eines Menschen. 1,00 Promille bedeutet, dass 1 Gramm reiner Alkohol in 1 Kilogramm Blut gelöst ist. Die Bestimmung erfolgt im Labor mittels gaschromatographischer Doppelbestimmung und enzymatischer ADH-Methode.',
    category: 'Medizin',
    lawReference: 'DIN EN 15964 / BGHSt'
  },
  {
    term: 'Erik M. P. Widmark (1932)',
    shortDesc: 'Schwedischer Gerichtsmediziner und Begründer der modernen Alkoholforensik.',
    fullDesc: 'Erik Matteo Prochet Widmark (1889–1945) entwickelte 1932 an der Universität Lund die nach ihm benannte Widmark-Formel c = A / (p · r). Seine Erkenntnisse über die Kinetik des Ethanolabbaus revolutionierten die weltweite Rechtsmedizin und bildeten das Fundament für gesetzliche Grenzwerte im Straßenverkehr.',
    category: 'Wissenschaft'
  },
  {
    term: 'Watson-Formel (TBW)',
    shortDesc: 'Verfeinerte Berechnung des Gesamtkörperwassers (Total Body Water) für präzisere BAK-Werte.',
    fullDesc: 'P. E. Watson et al. publizierten 1980 eine Formel, die das tatsächliche Gesamtkörperwasser anhand von Alter, Körpergröße, Gewicht und Geschlecht berechnet. Da Fettgewebe kaum Wasser enthält, liefert das Watson-Modell besonders bei hohem oder niedrigem BMI deutlich exaktere Reduktionsfaktoren r als der starre Widmark-Standard.',
    category: 'Wissenschaft'
  },
  {
    term: 'Resorptionsdefizit',
    shortDesc: 'Anteil des getrunkenen Alkohols, der nicht in den Blutkreislauf gelangt (10–30 %).',
    fullDesc: 'Nicht jeder Milliliter konsumierten Alkohols erreicht die systemische Zirkulation. Durch den First-Pass-Metabolismus in der Magenschleimhaut und Leber sowie unvollständige Aufnahme im Magen-Darm-Trakt verbleibt ein Resorptionsdefizit von ca. 10 % (nüchtern), 20 % (normale Mahlzeit) bis 30 % (fettreiche Nahrung).',
    category: 'Medizin'
  },
  {
    term: 'Abbaugeschwindigkeit (β₆₀-Wert)',
    shortDesc: 'Stündliche Eliminationsrate von ca. 0,10 bis 0,20 ‰ durch die Leber.',
    fullDesc: 'Der Abbau von Alkohol erfolgt in der Leber über das Enzym Alkoholdehydrogenase (ADH) mit einer weitgehend linearen Eliminationskinetik 0. Ordnung. In der deutschen Rechtsmedizin wird zugunsten des Betroffenen mit einem Mindestabbauwert von 0,10 ‰/h und maximal mit 0,20 ‰/h (Mittelwert 0,15 ‰/h) gerechnet.',
    category: 'Medizin',
    lawReference: 'BGHSt 25, 246'
  },
  {
    term: 'Relative Fahruntüchtigkeit',
    shortDesc: 'Straftat ab 0,30 ‰ bei alkoholbedingten Ausfallerscheinungen oder Unfall.',
    fullDesc: 'Bereits ab einer BAK von 0,30 ‰ droht ein Strafverfahren nach § 316 StGB (Trunkenheit im Verkehr) oder § 315c StGB (Gefährdung des Straßenverkehrs), wenn Ausfallerscheinungen (z. B. Schlangenlinien, Missachtung von Vorfahrt) oder ein Verkehrsunfall hinzutreten. Die Folge sind Geldstrafe, Punkte und Entzug der Fahrerlaubnis.',
    category: 'Recht',
    lawReference: '§ 316 StGB / § 315c StGB'
  },
  {
    term: '0,5-Promille-Grenze (Ordnungswidrigkeit)',
    shortDesc: 'Gesetzliche Regelschwelle mit mindestens 500 € Bußgeld und Fahrverbot.',
    fullDesc: 'Wer vorsätzlich oder fahrlässig mit 0,50 ‰ BAK oder 0,25 mg/l AAK im Straßenverkehr ein Kraftfahrzeug führt, begeht eine Ordnungswidrigkeit nach § 24a StVG. Beim Erstverstoß drohen 500 € Bußgeld, 2 Punkte in Flensburg und 1 Monat Fahrverbot; bei Wiederholung bis zu 1.500 € und 3 Monate Fahrverbot.',
    category: 'Recht',
    lawReference: '§ 24a Abs. 1 StVG'
  },
  {
    term: 'Absolute Fahruntüchtigkeit',
    shortDesc: 'Unwiderlegbare Fahruntüchtigkeit ab 1,10 ‰ – zwingende Straftat.',
    fullDesc: 'Ab einer BAK von 1,10 ‰ gilt jeder Fahrzeugführer nach ständiger Rechtsprechung des BGH als absolut fahruntüchtig – auch ohne sichtbare Fahrfehler. Es handelt sich um eine schwere Straftat nach § 316 StGB, die zum sofortigen Fahrerlaubnisentzug, einer Sperrfrist und empfindlichen Geldstrafen führt.',
    category: 'Recht',
    lawReference: '§ 316 StGB'
  },
  {
    term: 'Medizinisch-Psychologische Untersuchung (MPU)',
    shortDesc: 'Begutachtung der Kraftfahreignung ab 1,60 ‰ (in Einzelfällen ab 1,10 ‰).',
    fullDesc: 'Die Fahrerlaubnisbehörde ordnet nach § 13 Satz 1 Nr. 2 Buchstabe c FeV zwingend ein MPU-Gutachten an, wenn ein Fahrzeug mit 1,60 ‰ oder mehr geführt wurde (auch auf dem Fahrrad!). In mehreren Bundesländern (z. B. Bayern) kann die MPU bei Ausfallerscheinungen oder Wiederholungstätern schon ab 1,10 ‰ verlangt werden.',
    category: 'Recht',
    lawReference: '§ 13 FeV'
  },
  {
    term: 'Atemalkohol vs. Blutalkohol (Verhältnis 1:2100)',
    shortDesc: 'Umrechnung zwischen mg/l Atemluft und ‰ Blutalkohol.',
    fullDesc: 'Das Messverfahren der Atemalkoholkonzentration (AAK) beruht auf dem Henry-Gesetz über den Gasaustausch in den Lungenbläschen. In Deutschland gilt gesetzlich das feste Umrechnungsverhältnis von 1 mg/l AAK zu 2,0 ‰ BAK (physiologischer Mittelwert ca. 1:2100). Vor Gericht ist für Strafverfahren stets die venöse Blutprobe maßgeblich.',
    category: 'Wissenschaft',
    lawReference: 'DIN EN 16280 / BGH'
  }
];

export const SeoGlossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.fullDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="lexikon" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white mb-3 shadow-sm">
            <BookMarked className="w-3.5 h-3.5 text-amber-400" />
            Wissens-Hub &amp; Fachlexikon
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Lexikon zu Promilleabbau, Widmark-Formel &amp; Verkehrsrecht
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Wichtige Fachbegriffe der forensischen Toxikologie, Rechtsmedizin und des deutschen Straßenverkehrsrechts verständlich und rechtssicher aufbereitet.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Begriff suchen (z.B. BAK, Watson, MPU, 0,5 Promille...)"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 focus:bg-white transition-all"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['Alle', 'Wissenschaft', 'Recht', 'Medizin'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 border border-amber-600 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Term Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {filteredTerms.map((term, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={term.term}
                className={`rounded-2xl border transition-all p-5 ${
                  isExpanded
                    ? 'bg-amber-50/40 border-amber-300 shadow-md ring-1 ring-amber-300'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700 tracking-wider">
                        {term.category}
                      </span>
                      {term.lawReference && (
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                          {term.lawReference}
                        </span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-slate-950 text-base">
                      {term.term}
                    </h3>
                  </div>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors shrink-0"
                    aria-label={`${term.term} Details anzeigen`}
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-amber-600' : ''}`} />
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                  {term.shortDesc}
                </p>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2 animate-in fade-in duration-200">
                    <p>{term.fullDesc}</p>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Rechtlich &amp; toxikologisch verifiziert</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            Keine passenden Fachbegriffe für „{searchTerm}“ gefunden.
          </div>
        )}

      </div>
    </section>
  );
};
