import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'Widmark-Formel Rechner & Promilleabbau – BAK berechnen',
    desc: 'Wissenschaftlich fundierter Widmark-Formel Promillerechner mit Abbaukurve, Watson-Anpassung und aktuellen deutschen Grenzwerten (§ 24a StVG & StGB).'
  },
  {
    url: '/impressum',
    title: 'Impressum – Gesetzliche Anbieterkennzeichnung | widmarkformel.de',
    desc: 'Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 DDG und § 18 MStV für widmarkformel.de (Jens Kathe, Kassel).'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung – DSGVO-Transparenz | widmarkformel.de',
    desc: 'Datenschutzerklärung für widmarkformel.de: Lokale Promille-Berechnung im Browser, Hosting bei Vercel, Google AdSense und Datenschutzhinweise.'
  },
  {
    url: '/rechner-embed',
    title: 'Widmark-Formel Promillerechner Widget – Kostenlos einbinden',
    desc: 'Kompaktes, wissenschaftlich fundiertes Widmark-Promillerechner-Widget für Fahrschulen, Anwaltskanzleien und Informationsportale.'
  }
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes for widmarkformel.de...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    const fullUrl = `https://www.widmarkformel.de${route.url === '/' ? '' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);
    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
  }
}

console.log('Prerendering complete!');
