# Adron Technologies — Refonte V2

Site vitrine statique pour [adron.ch](https://adron.ch), conçu pour remplacer la version actuelle. Aucune dépendance, aucun build tool — HTML, CSS et JS vanilla.

---

## Lancer en local

```bash
cd /chemin/vers/Refonte
python3 -m http.server 8080
```

Puis ouvre `http://localhost:8080` dans le navigateur.

> Ne pas ouvrir les fichiers directement depuis le finder (file://) — utiliser le serveur local pour avoir un comportement identique à la production.

---

## Structure du projet

```
Refonte/
├── index.html           # Accueil
├── services.html        # Vue d'ensemble des services
├── web.html             # Détail : sites web
├── erp.html             # Détail : ERP sur mesure
├── cloud.html           # Détail : cloud sécurisé
├── realisations.html    # Études de cas / portfolio
├── apropos.html         # L'équipe et les valeurs
├── faq.html             # Questions fréquentes
├── contact.html         # Formulaire de contact
│
├── assets/
│   ├── css/
│   │   ├── variables.css   # Tokens de design (couleurs, typo, ombres, rayons)
│   │   ├── style.css       # Styles partagés : reset, nav, hero, footer, composants
│   │   └── animations.css  # Animations d'entrée hero + scroll reveal
│   └── js/
│       └── animations.js   # Scroll reveal via IntersectionObserver, menu mobile
│
└── doc/
    ├── DOCUMENTATION.md
    ├── audit-adron.docx
    └── analyse_pricing_agence_web.docx
```

---

## Architecture CSS

Les feuilles de style se chargent dans cet ordre dans chaque page :

| Ordre | Fichier | Rôle |
|-------|---------|------|
| 1 | `variables.css` | Tokens CSS (`--teal`, `--font-display`, `--card-shadow`…) |
| 2 | `style.css` | Reset, nav, hero, footer, composants partagés |
| 3 | `animations.css` | Animations hero, scroll reveal, décoration |
| 4 | `<style>` inline | Styles spécifiques à la page |

Les styles inline dans chaque page ne contiennent que les classes propres à cette page (grilles, cartes spécifiques, etc.).

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero, stats, problématique, services, témoignages |
| Services | `/services.html` | Vue 3 services + complémentaires |
| Sites web | `/web.html` | Offres détaillées, processus, FAQ |
| ERP | `/erp.html` | Modules, intégrations, tarifs |
| Cloud | `/cloud.html` | Infrastructure, sécurité, offres |
| Réalisations | `/realisations.html` | Études de cas clients |
| À propos | `/apropos.html` | Équipe, valeurs, localisation |
| FAQ | `/faq.html` | Questions fréquentes accordion |
| Contact | `/contact.html` | Formulaire + infos de contact |

---

## Design system

**Couleurs principales**
- Teal : `#007373` — couleur de marque, CTA, accents
- Dark : `#212B36` — texte principal, hero background
- Orange : `#FA541C` — étoiles, alertes

**Typographie**
- Titres : [Barlow](https://fonts.google.com/specimen/Barlow) (700)
- Corps : [Public Sans](https://fonts.google.com/specimen/Public+Sans) (300–700)
- Chargées via Google Fonts (connexion internet requise)

**Composants récurrents**
- `.nav` / `.nav-mobile-menu` — navigation fixe + menu hamburger mobile
- `.hero` + `.hero-decoration` — section hero avec grille et dégradé
- `.btn-hero-primary`, `.btn-ghost`, `.btn-teal`, `.btn-white` — variantes de boutons
- `[data-anim]` — attribut pour déclencher le scroll reveal JS

---

## JavaScript

Un seul fichier JS (`assets/js/animations.js`) sans dépendance externe :

- **Scroll reveal** — IntersectionObserver sur les éléments `[data-anim]`, avec fallback pour les navigateurs anciens
- **Menu mobile** — toggle `.nav-mobile-menu` via le bouton `.nav-mobile-toggle`
- **FAQ accordion** — expand/collapse des réponses sur `/faq.html`

---

## Formulaire de contact

Le formulaire sur `contact.html` est actuellement en HTML pur (pas de backend). Pour le rendre fonctionnel, intégrer un service externe :

- [Formspree](https://formspree.io) — ajouter `action="https://formspree.io/f/XXXXX"` sur la balise `<form>`
- [Netlify Forms](https://www.netlify.com/products/forms/) — ajouter `netlify` sur la balise `<form>` si déployé sur Netlify

---

## Déploiement

Site 100% statique, compatible avec n'importe quel hébergeur :

- **Hébergeur classique** — uploader les fichiers via FTP (Infomaniak, o2switch…)
- **Netlify / Vercel** — glisser-déposer le dossier ou connecter le repo Git
- **GitHub Pages** — pousser sur une branche `gh-pages`

Aucun build nécessaire. Uploader le contenu du dossier `Refonte/` à la racine du domaine.
