# Limoncetta di Sorrento IGP — Landing Page

One-page landing responsive per la **Limoncetta di Sorrento IGP**, il limoncello a base
di limoni IGP della Penisola Sorrentina (30% vol, 0,50 L — Amaro Lucano).

Costruita con **Vite + React** (JavaScript), senza backend. Tutti gli asset grafici
(illustrazione di copertina e icone) sono SVG inline resi come componenti React.

## Sezioni

1. **Hero** a piena altezza — nome prodotto, tagline, CTA e illustrazione di copertina.
2. **Il prodotto** — profilo organolettico, scheda tecnica e profilo sensoriale a barre.
3. **Cocktail** — griglia responsive con gli 8 cocktail d'autore (nome, descrizione,
   ingredienti principali, difficoltà).
4. **Footer** — link allo [shop Amaro Lucano](https://shop.amarolucano.it) e nota IGP.

## Come girarlo

Richiede Node.js 18+.

```bash
npm install      # installa le dipendenze
npm run dev      # avvia il dev server (http://localhost:5173)
npm run build    # build di produzione in dist/
npm run preview  # anteprima locale del build
```

## Deploy (GitHub Pages)

Il deploy è automatico via **GitHub Actions**: a ogni push su `main` (o lanciandolo a
mano da _Actions → Deploy to GitHub Pages_) il workflow `.github/workflows/deploy.yml`
esegue `npm ci` + `npm run build` e pubblica `dist/` su GitHub Pages.

URL finale (project pages): **https://allsafeitalia.github.io/landingpage/**

> `base: './'` in `vite.config.js` mantiene i percorsi degli asset relativi, così il
> sito funziona correttamente servito da una sottocartella.

## Struttura

```
limoncetta-landing/
├─ index.html                 # entry HTML + Google Fonts (Playfair Display + Inter)
├─ public/lemon.svg           # favicon
├─ src/
│  ├─ main.jsx                # bootstrap React
│  ├─ App.jsx                 # composizione delle sezioni
│  ├─ styles.css              # stile globale, mobile-first
│  ├─ data/cocktails.js       # dati degli 8 cocktail
│  ├─ assets/
│  │  ├─ CoverIllustration.jsx  # SVG hero
│  │  └─ CocktailIcon.jsx       # icone linea per le card
│  └─ components/
│     ├─ Hero.jsx
│     ├─ Product.jsx
│     ├─ Cocktails.jsx
│     └─ Footer.jsx
└─ vite.config.js             # base './' per deploy statico (es. GitHub Pages)
```

## Palette & tipografia

- Limone `#F4C430` · Panna `#FDFAF2` · Grafite `#26261F` · Verde foglia `#3F6B45`
- Titoli: **Playfair Display** · Testo: **Inter** (via Google Fonts in `index.html`)

## Crediti dati

Contenuti prodotto e ricette dal ricettario Limoncetta di Sorrento IGP. Prodotto da
Amaro Lucano. Bevi responsabilmente.
