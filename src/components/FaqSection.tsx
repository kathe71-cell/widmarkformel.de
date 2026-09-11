import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'Formel & Wissenschaft',
    question: 'Wie lautet die klassische Widmark-Formel und wer war Erik Widmark?',
    answer: 'Die Widmark-Formel lautet c = A / (p · r). Sie wurde 1932 vom schwedischen Chemiker und Gerichtsmediziner Erik Matteo Prochet Widmark an der Universität Lund entwickelt. Dabei steht c für die Blutalkoholkonzentration (BAK) in Promille (g/kg), A für die aufgenommene Alkoholmasse in Gramm, p für das Körpergewicht in Kilogramm und r für den Verteilungsfaktor (ca. 0,70 bei Männern und 0,60 bei Frauen). Sie ist bis heute die grundlegende Basis der Rechtsmedizin.'
  },
  {
    category: 'Formel & Wissenschaft',
    question: 'Warum wird die Dichte von Ethanol mit 0,8 g/cm³ berechnet?',
    answer: 'Reines Ethanol (reiner Alkohol) ist leichter als Wasser und besitzt bei Raumtemperatur (20 °C) eine spezifische Dichte von ca. 0,789 g/cm³. In der Praxis und Forensik wird dieser Wert auf 0,8 g/ml gerundet. Die Formel zur Ermittlung der reinen Alkoholmasse lautet daher: Alkohol in Gramm = Getränkevolumen in Millilitern × (Vol.-% / 100) × 0,8.'
  },
  {
    category: 'Stoffwechsel & Abbau',
    question: 'Was ist das Resorptionsdefizit und wie beeinflusst Essen den Alkoholspiegel?',
    answer: 'Das Resorptionsdefizit bezeichnet den Anteil des getrunkenen Alkohols, der gar nicht erst in den systemischen Blutkreislauf gelangt. Bei nüchternem Magen beträgt das Defizit ca. 10 %, bei einer normalen Mahlzeit ca. 20 % und bei einer sehr fett- oder eiweißreichen Mahlzeit bis zu 30 %. Durch Nahrung verzögert sich zudem die Magenentleerung: Der Alkohol fließt langsamer in den Dünndarm (wo 80 % der Aufnahme stattfinden), wodurch die Spitzen-BAK geringer ausfällt, die Resorptionsphase sich aber deutlich in die Länge zieht.'
  },
  {
    category: 'Stoffwechsel & Abbau',
    question: 'Kann man den Alkoholabbau durch Kaffee, Schlaf, Schwitzen oder Duschen beschleunigen?',
    answer: 'Nein, das ist ein weit verbreiteter Irrglaube. Rund 95 % des Alkohols werden enzymatisch über das Enzym Alkoholdehydrogenase (ADH) und das mikrosomale ethanoloxidierende System (MEOS) in der Leber oxidiert. Dieser Prozess läuft biochemisch mit einer konstanten Rate von ca. 0,10 bis 0,20 Promille pro Stunde ab (Kinetik 0. Ordnung). Weder Koffein, Kaltwasserduschen, Energydrinks noch Schlaf können die Leberenzyme beschleunigen. Kaffee verringert allenfalls die subjektive Müdigkeit, nicht aber die Blutalkoholkonzentration!'
  },
  {
    category: 'Praxis & Rechenbeispiele',
    question: 'Wie viel Promille hat ein 80-kg-Mann nach einem großen Bier (0,5 l, 5,0 Vol.-%)?',
    answer: '500 ml Bier mit 5,0 Vol.-% enthalten 500 · 0,05 · 0,8 = 20 Gramm reinen Alkohol. Bei einem normalen Resorptionsdefizit von 20 % verbleiben 16 g effektiver Alkohol. Bei einem Körpergewicht von 80 kg und einem Widmark-Faktor von r = 0,70 ergibt sich: 16 g / (80 kg · 0,70) = 16 / 56 ≈ 0,29 Promille Spitzenkonzentration. Der vollständige Abbau (bei 0,15 ‰/h) dauert ca. 2 Stunden.'
  },
  {
    category: 'Formel & Wissenschaft',
    question: 'Warum unterscheidet sich die Widmark-Formel zwischen Männern und Frauen?',
    answer: 'Alkohol ist stark wasserlöslich, löst sich aber praktisch nicht in Fettgewebe. Da Frauen physiologisch im Durchschnitt einen höheren prozentualen Körperfettanteil und damit einen geringeren Gesamtkörperwasseranteil besitzen als Männer (ca. 55 % vs. ca. 65 %), verteilt sich dieselbe Menge Alkohol bei Frauen auf ein kleineres Lösungsvolumen. Daher gilt bei Frauen ein Reduktionsfaktor von r ≈ 0,60 und bei Männern von r ≈ 0,70. Zudem ist bei Frauen die Magen-ADH-Aktivität oft etwas geringer.'
  },
  {
    category: 'Formel & Wissenschaft',
    question: 'Was ist der Vorteil der Watson-Formel gegenüber der klassischen Widmark-Formel?',
    answer: 'Die klassische Widmark-Formel nutzt starre Durchschnittswerte (0,70 und 0,60). Die Watson-Formel (1980) berechnet stattdessen das tatsächliche Gesamtkörperwasser (Total Body Water, TBW) individuell aus Geschlecht, Körpergröße, Körpergewicht und Alter. Insbesondere bei Personen mit stark abweichendem Body-Mass-Index (z. B. sehr muskulöse Sportler oder übergewichtige Personen) sowie älteren Menschen liefert die Watson-Formel signifikant präzisere Ergebnisse.'
  },
  {
    category: 'Recht & Straßenverkehr',
    question: 'Ab wann droht in Deutschland ein Fahrverbot und ab wann eine MPU?',
    answer: 'In Deutschland führt bereits ein Erstverstoß ab 0,50 ‰ nach § 24a StVG zu 500 € Bußgeld, 2 Punkten in Flensburg und 1 Monat Fahrverbot. Ab 1,10 ‰ liegt absolute Fahruntüchtigkeit vor (§ 316 StGB): Hier wird die Fahrerlaubnis gerichtlich entzogen mit einer Sperrfrist von min. 6 Monaten. Eine Medizinisch-Psychologische Untersuchung (MPU) ist bundesweit ab 1,60 ‰ zwingend vorgeschrieben (§ 13 FeV), in vielen Bundesländern (z. B. Bayern) bei Wiederholungstätern oder begründetem Alkoholmissbrauch jedoch bereits ab 1,10 ‰.'
  },
  {
    category: 'Stoffwechsel & Abbau',
    question: 'Wie lange dauert es, bis 1,0 Promille vollständig abgebaut sind?',
    answer: 'Ausgehend von einem forensischen Standardabbauwert von 0,15 Promille pro Stunde benötigt der Körper für den Abbau von 1,00 ‰ mindestens 6,5 bis 7 Stunden reine Abbauzeit. Rechnet man die Anflutungs- und Resorptionsphase (ca. 1 Stunde) hinzu, ist man erst nach rund 7,5 bis 8 Stunden wieder bei 0,00 Promille. Bei langsamerem Abbau (0,10 ‰/h) kann es bis zu 10 bis 11 Stunden dauern.'
  },
  {
    category: 'Recht & Straßenverkehr',
    question: 'Ist das Ergebnis eines Online-Promillerechners vor Gericht oder der Polizei verwertbar?',
    answer: 'Nein. Jeder Online-Rechner liefert ausschließlich eine unverbindliche Modellrechnung. Weder Polizei noch Gerichte erkennen errechnete Werte als Entlastungsbeweis an. Bei Verkehrskontrollen wird zunächst ein Atemalkohol-Vortest durchgeführt; für ein strafrechtliches Verfahren oder ein Fahrverbot ist stets die gerichtsmedizinische Blutentnahme und Laboranalyse mit Doppelbestimmung nach den Richtlinien der Bafam/DGVM maßgeblich.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 3]);

  const toggleIndex = (idx: number) => {
    setOpenIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-950 border border-amber-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            Wissenschaftliche &amp; rechtliche FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Häufig gestellte Fragen zur Widmark-Formel
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Fundierte Antworten zu Berechnungsverfahren, Resorptionskinetik, Alkoholabbau im Körper und geltenden Grenzwerten nach deutschem Verkehrsrecht.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 hidden sm:inline-block">
                      {item.category}
                    </span>
                    <span className="font-extrabold text-slate-950 text-base sm:text-lg">
                      {item.question}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
