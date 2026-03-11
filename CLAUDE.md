# CLAUDE.md — Access Recycle v2

Fichier de référence pour Claude Code. Toujours lire avant de modifier le projet.

---

## Stack technique

| Outil | Usage |
|-------|-------|
| React 18 | UI |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styles |
| React Router 6 | Routing (SPA) |
| Framer Motion | Animations |
| react-helmet-async | SEO / balises `<head>` |
| Lucide React | Icônes |

---

## Structure des fichiers

```
src/
  App.jsx              # Router principal, lazy loading des pages
  main.jsx             # Point d'entrée React
  index.css            # Styles globaux Tailwind
  pages/
    Home.jsx           # Page d'accueil
    ServicePage.jsx    # Page service dynamique (param: slug)
    About.jsx          # À propos
    Contact.jsx        # Contact
    Terms.jsx          # CGU
    Privacy.jsx        # Politique de confidentialité
    NotFound.jsx       # 404
  components/
    Navbar.jsx
    Footer.jsx
    CookieBanner.jsx
    TrustedBy.jsx
    WhatWeDo.jsx
    GlobalReach.jsx
    Reveal.jsx         # Composant d'animation scroll
public/
  images/              # Logos, partenaires, bg
  sitemap.xml
  robots.txt
vercel.json            # Config déploiement Vercel (SPA rewrites)
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/services/unsold-inventory` | ServicePage |
| `/services/unwanted-products` | ServicePage |
| `/services/returned-products` | ServicePage |
| `/services/redistribution` | ServicePage |
| `/about-us` | About |
| `/contact` | Contact |
| `/terms` | Terms |
| `/privacy` | Privacy |

---

## Couleurs (Tailwind custom)

| Token | Valeur | Usage |
|-------|--------|-------|
| `brand` | `#5fac7d` | Couleur principale (vert) |
| `brand-light` | `#7ec49a` | Accents |
| `brand-dark` | `#4a8b64` | Hover |
| `forest` | `#0D2B1F` | Fonds sombres |
| `ivory` | `#F5F2EC` | Fonds clairs |

---

## SEO — Conventions

### Pattern Helmet (à respecter sur chaque page)

```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Titre Page | Access Recycle</title>
  <meta name="description" content="Description 150-160 chars" />
  <link rel="canonical" href="https://www.accessrecycle.com/[path]" />
  <meta property="og:title" content="Titre Page | Access Recycle" />
  <meta property="og:description" content="Description" />
  <meta property="og:url" content="https://www.accessrecycle.com/[path]" />
  <meta property="og:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Titre Page | Access Recycle" />
  <meta name="twitter:description" content="Description" />
</Helmet>
```

### JSON-LD

- `Organization` schema sur `Home.jsx`
- `Service` schema sur `ServicePage.jsx`
- `LocalBusiness` schema sur `Contact.jsx`

---

## Déploiement Vercel

- `vercel.json` à la racine avec rewrite SPA → indispensable pour React Router
- `dist/` est dans `.gitignore` — ne jamais commiter le build
- Commande de build : `npm run build`
- Output dir : `dist/`

---

## Conventions de code

- Composants en PascalCase
- Fichiers pages en PascalCase (`Home.jsx`)
- Tailwind utility-first, pas de CSS custom sauf dans `index.css`
- Animations Framer Motion : utiliser `whileInView` pour les sections, `animate` direct pour les heroes
- Lazy loading sur toutes les pages (via `React.lazy` dans `App.jsx`)
- Images `public/images/` pour les assets locaux

---

## À ne pas toucher sans discussion

- La structure du Router dans `App.jsx`
- Les données `serviceData` dans `ServicePage.jsx` (côté contenu)
- La palette de couleurs Tailwind

---

## Domaine

`https://www.accessrecycle.com` — utiliser cette base pour tous les liens SEO absolus.
