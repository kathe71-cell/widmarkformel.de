# widmarkformel.de — Wissenschaftlicher Promillerechner & Rechtsmatrix

> Schlüsselfertiges Domain-Projekt für **widmarkformel.de** gemäß den verbindlichen Master-Prompt-Richtlinien für den Vercel-Export.

---

## 1. Domain- & Projektsteckbrief

| Parameter | Wert |
| :--- | :--- |
| **Domain** | `widmarkformel.de` |
| **Nische / Branche** | Verkehrsrecht, Gesundheit, biophysikalische Rechtsmedizin & Forensik |
| **Projektmodus** | **Single-Topic Fachportal & Interaktiver Spezialrechner** |
| **Zielgruppe** | Autofahrer, Fahranfänger, Juristen, Mediziner, Allgemeinbevölkerung zur Prävention von Alkoholfahrten & Restalkohol |
| **Technologie-Stack** | React 18, TypeScript, Vite 5, Tailwind CSS, Lucide Icons |
| **Rechtliche Konformität** | § 5 DDG & § 18 MStV (Jens Kathe, Kassel), § 19 UStG, OS-Plattform, Werbe- & Modellrechnungskennzeichnung |
| **Datenschutz & Privacy** | 100 % DSGVO-konform, **Zero-CDN Policy** (nativer System-Font-Stack, keine Google Fonts, keine externen Tracker) |
| **Barrierefreiheit & UX** | WCAG AAA Kontraste (>12:1 auf Akzentbuttons), helles Alabaster-Theme, responsive SVG-Abbaukurve |

---

## 2. Funktionsumfang & Kernmodule

### 1. Interaktiver Widmark- & Watson-Promillerechner (`#rechner`)
- **Berechnungsmodelle**:
  - **Klassische Widmark-Formel (1932)**: $c = \frac{A}{p \cdot r}$ mit fixen Verteilungsfaktoren ($r_{\text{♂}} = 0{,}70$, $r_{\text{♀}} = 0{,}60$).
  - **Watson Total Body Water (1980)**: Individuelle Verteilungsberechnung aus Alter, Körpergröße, Gewicht und Geschlecht.
- **Konsum-Erfassung**:
  - Schnellauswahl: Bier (0,33 l / 0,5 l), Wein (0,2 l), Sekt (0,1 l), Spirituosen (4 cl), Longdrinks (0,25 l) mit Inkrement-/Dekrement-Buttons.
  - Individueller Getränkekonfigurator für beliebige Volumina und Vol.-%.
- **Resorptionsdefizit**: Wählbar zwischen 10 % (nüchtern), 20 % (normale Mahlzeit) und 30 % (fettige Speisen).
- **Stündliche Abbaukinetik**: Einstellbare Eliminationsrate $\beta_{60}$ (Standard $0{,}15\text{ ‰/h}$, Justierbereich $0{,}10 - 0{,}20\text{ ‰/h}$).
- **Interaktive SVG-Abbaukurve**:
  - Visualisierung der Resorptions- und Eliminationsphase über die Zeit.
  - Farbige Warnschwellen bei 0,3 ‰ (Gelb), 0,5 ‰ (Amber) und 1,1 ‰ (Rot).
  - Dynamischer Marker für den aktuellen Status.

### 2. Wissenschaftliche Herleitung & Leitfaden (`#herleitung`)
- Detaillierte mathematische Zerlegung aller Variablen ($A$, $p$, $r$, $\beta_{60}$).
- Physikalische Erklärung: Warum Ethanol eine Dichte von $\rho \approx 0{,}8\text{ g/cm³}$ besitzt.
- Gegenüberstellung von Widmark (1932), Watson (1980) und Seidl (2000).

### 3. Rechtsmatrix für Deutschland (`#promillegrenzen`)
- Tabellarische Aufbereitung der Grenzwerte nach StVG, StGB und FeV:
  - **0,00 ‰**: Fahranfänger in Probezeit & U21 (§ 24c StVG).
  - **0,30 ‰**: Relative Fahruntüchtigkeit bei Ausfallerscheinungen/Unfall (§ 316 / § 315c StGB).
  - **0,50 ‰**: Ordnungswidrigkeit (§ 24a StVG) mit Stufen-Bußgeldern (500 € / 1.000 € / 1.500 €) und Fahrverboten.
  - **1,10 ‰**: Absolute Fahruntüchtigkeit (Straftat, Fahrerlaubnisentzug, Sperrfrist).
  - **1,60 ‰**: Zwingende MPU-Anordnung (§ 13 FeV) vor Neuerteilung.
  - Spezifische Tabs für **Pkw**, **E-Scooter (eKFV)** und **Fahrrad/Pedelec**.

### 4. Messtechnik-Vergleich (`#messtechnik`)
- Neutraler, faktenbasierter Vergleich: Widmark-Formel vs. Halbleitersensoren vs. Elektrochemische Polizei-Vortestgeräte vs. Forensische Labor-Doppelbestimmung (GC + ADH).
- Transparente Produktempfehlung zertifizierter elektrochemischer Atemalkoholtester (mit Kennzeichnung `* Partnerlink`).

### 5. FAQ-Wissensdatenbank (`#faq`)
- 10 fachlich fundierte Fragen und Antworten zu Enzymkinetik, Kaffee-Mythen, Geschlechterunterschieden und rechtlicher Verwertbarkeit.

### 6. Rechtssicherheit & Pflichtangaben
- Vollständiges Impressum gemäß § 5 DDG & § 18 MStV unter `/impressum`.
- DSGVO-Datenschutzerklärung mit Zero-CDN-Nachweis unter `/datenschutz`.
- Unabhängigkeitserklärung und Modellrechnungshinweise im Header, Rechner und Footer.

---

## 3. Lokale Entwicklung & Build

```bash
# Abhängigkeiten installieren
npm install

# Lokalen Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen & prüfen
npm run build

# Vorschau des Produktions-Builds
npm run preview
```

---

## 4. Vercel-Deployment

Das Projekt ist durch `vercel.json` mit SPA-Rewrites sofort deployment-bereit.

### Deployment via Vercel CLI:
```bash
# Temporäres Preview-Deployment
vercel deploy --temporary

# Produktives Live-Deployment
vercel --prod
```
