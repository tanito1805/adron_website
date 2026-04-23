---
name: adron-design-system
description: Design system complet du site Adron Technologies (adron.ch). Utiliser ce fichier pour tout ajout ou modification de page afin de garantir la cohérence visuelle.
---

# Adron Technologies — Design System

Référence de style basée sur le site officiel [adron.ch](https://adron.ch).
À utiliser pour toute création ou modification de page dans ce projet.

---

## 1. Polices

```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Rôle | Famille | Poids |
|---|---|---|
| Titres (h1–h3) | Barlow | 600–700 |
| Corps / UI | Public Sans | 400–500 |
| Labels, captions | Public Sans | 500–600 |

```css
--font-display: 'Barlow', system-ui, sans-serif;
--font-body:    'Public Sans', system-ui, sans-serif;
```

---

## 2. Palette de couleurs

```css
:root {
  /* Principale */
  --teal:       #007373;
  --teal-dark:  #005959;
  --teal-light: #00B8B8;

  /* Dark / Texte */
  --dark:   #212B36;
  --dark-2: #454F5B;
  --dark-3: #637381;

  /* Accents */
  --orange: #FA541C;
  --purple: #B195FE;

  /* Fond & gris */
  --white:    #FFFFFF;
  --gray-50:  #F9FAFB;
  --gray-100: #F4F6F8;
  --gray-200: #DFE3E8;
  --gray-300: #C4CDD5;
  --gray-400: #919EAB;
  --gray-500: #637381;
  --gray-600: #454F5B;
  --gray-700: #212B36;

  /* Bordures */
  --border:        rgba(145, 158, 171, 0.2);
  --border-dashed: rgba(145, 158, 171, 0.32);
}
```

### Utilisation des couleurs

| Élément | Couleur |
|---|---|
| Titres principaux | `--dark` |
| Texte corps | `--dark-2` |
| Texte secondaire / labels | `--dark-3` |
| Accent principal (teal) | `--teal` |
| CTA / boutons primaires | `--dark` |
| Boutons secondaires | `--teal` |
| Fonds de sections alternées | `--gray-50` / `--gray-100` |
| Hero / footer sombre | `--dark` |
| Liens, highlights, checkmarks | `--teal` |

---

## 3. Tokens utilitaires

```css
:root {
  --radius:      12px;
  --radius-lg:   16px;
  --shadow-card: -24px 24px 72px -8px rgba(145, 158, 171, 0.24);
  --transition:  all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 4. Navigation

```css
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0px 2px 4px -1px rgba(145, 158, 171, 0.2);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.nav-logo          { font-family: var(--font-body); font-weight: 700; font-size: 1.35rem; color: var(--dark); }
.nav-logo span     { color: var(--teal); }
.nav-links a       { font-size: .9rem; font-weight: 500; color: var(--dark-3); }
.nav-links a:hover { color: var(--teal); }
.nav-cta           { background: var(--teal); color: var(--white); padding: .6rem 1.4rem; border-radius: 8px; font-weight: 600; }
.nav-cta:hover     { background: var(--teal-dark); }
```

---

## 5. Boutons

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .85rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: .95rem;
  font-family: var(--font-body);
  transition: var(--transition);
  cursor: pointer;
  border: none;
}

/* Primaire — sombre */
.btn-primary       { background: var(--dark); color: var(--white); }
.btn-primary:hover { background: var(--dark-2); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(33,43,54,.3); }

/* Secondaire — teal */
.btn-teal          { background: var(--teal); color: var(--white); }
.btn-teal:hover    { background: var(--teal-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,115,115,.3); }

/* Contour — teal */
.btn-outline       { background: transparent; color: var(--teal); border: 2px solid var(--teal); }
.btn-outline:hover { background: var(--teal); color: var(--white); }

/* Ghost — sur fond sombre */
.btn-ghost         { background: rgba(255,255,255,.08); color: var(--white); border: 1px solid rgba(255,255,255,.2); }
.btn-ghost:hover   { background: rgba(255,255,255,.15); border-color: rgba(255,255,255,.35); }
```

---

## 6. Cards

```css
.card {
  background: var(--white);
  border: 1px dashed var(--border-dashed);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition);
}
.card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-card);
}
```

---

## 7. Sections

```css
.section       { padding: 5rem 2rem; }
.section-gray  { background: var(--gray-50); }
.section-dark  { background: var(--dark); color: var(--white); }
.section-inner { max-width: 1200px; margin: 0 auto; }

/* Label au-dessus des titres */
.section-label {
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--teal);
  font-weight: 600;
  display: block;
  margin-bottom: .75rem;
}
.section-dark .section-label { color: var(--teal-light); }

/* Titres de section */
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  margin-bottom: 1rem;
}
.section-dark .section-title { color: var(--white); }
```

---

## 8. Hero

```css
/* Pattern hero sombre (page d'accueil, ERP, Web, Cloud) */
.hero {
  padding: 10rem 2rem 6rem;
  background: linear-gradient(135deg, var(--dark) 0%, #1a3547 100%);
  position: relative;
  overflow: hidden;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 120px;
  background: linear-gradient(to top, var(--white), transparent);
}
.hero h1  { font-family: var(--font-display); color: var(--white); font-weight: 700; }
.hero p   { color: rgba(255,255,255,.65); }

/* Badge hero */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: rgba(0,115,115,.12);
  border: 1px solid rgba(0,115,115,.25);
  padding: .45rem 1rem;
  border-radius: 99px;
  color: var(--teal-light);
  font-size: .8rem;
  font-weight: 500;
  margin-bottom: 2rem;
}
```

---

## 9. CTA sections

```css
/* CTA principal — gradient teal */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--teal), var(--teal-dark));
  position: relative;
  overflow: hidden;
}
.cta-section::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: rgba(255,255,255,.05);
  border-radius: 50%;
}
.cta-inner     { max-width: 700px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
.cta-inner h2  { font-family: var(--font-display); color: var(--white); font-size: 2rem; font-weight: 700; }
.cta-inner p   { color: rgba(255,255,255,.75); margin-bottom: 2.5rem; line-height: 1.7; }

/* Bouton blanc sur fond coloré */
.cta-inner .btn-primary { background: var(--white); color: var(--teal); }
.cta-inner .btn-primary:hover { box-shadow: 0 8px 30px rgba(0,0,0,.2); transform: translateY(-2px); }
```

---

## 10. Footer

```css
.footer        { background: var(--dark); padding: 4rem 2rem 2rem; color: rgba(255,255,255,.5); }
.footer-inner  { max-width: 1200px; margin: 0 auto; }
.footer-grid   { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
.footer-brand span { color: var(--teal-light); }
.footer h4     { font-size: .75rem; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,.3); font-weight: 600; }
.footer-links a         { color: rgba(255,255,255,.5); }
.footer-links a:hover   { color: var(--white); }
.footer-bottom { border-top: 1px solid rgba(255,255,255,.06); padding-top: 2rem; display: flex; justify-content: space-between; font-size: .8rem; }
```

---

## 11. Listes avec checkmarks

```css
ul.check-list           { list-style: none; }
ul.check-list li        { padding-left: 1.5rem; position: relative; color: var(--dark-3); font-size: .95rem; margin-bottom: .4rem; }
ul.check-list li::before { content: '✓'; position: absolute; left: 0; color: var(--teal); font-weight: 700; }
```

---

## 12. Témoignages (sur fond sombre)

```css
.testimonial-card {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}
.testimonial-text   { color: rgba(255,255,255,.75); line-height: 1.75; }
.testimonial-name   { color: var(--white); font-weight: 600; }
.testimonial-role   { color: rgba(255,255,255,.4); font-size: .8rem; }
.testimonial-stars  { color: var(--orange); }
```

---

## 13. Responsive breakpoints

```css
@media (max-width: 1024px) {
  /* Grilles 3 colonnes → 2, footers → 2 col */
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .section   { padding: 3.5rem 1.5rem; }
  /* Grilles → 1 colonne */
}
```

---

## 14. Palette d'utilisation rapide

```
Titre principal     → #212B36  (--dark)
Texte corps         → #454F5B  (--dark-2)
Texte secondaire    → #637381  (--dark-3)
Accent / CTA        → #007373  (--teal)
Hover teal          → #005959  (--teal-dark)
Accent sur sombre   → #00B8B8  (--teal-light)
Orange highlight    → #FA541C  (--orange)
Purple déco         → #B195FE  (--purple)
Fond alterné        → #F9FAFB  (--gray-50)
Fond sections       → #F4F6F8  (--gray-100)
Border subtle       → rgba(145,158,171,0.2)
Border dashed cards → rgba(145,158,171,0.32)
```

---

## 15. Do / Don't

| ✅ À faire | ❌ À éviter |
|---|---|
| Bouton primaire fond `--dark` | Bouton primaire bleu vif |
| Accent teal cohérent partout | Multiplier les couleurs d'accent |
| Bordure dashed sur les cards | Bordure solid épaisse |
| Font Barlow en titres | Playfair Display / DM Sans |
| Hero fond `--dark` dégradé | Hero fond bleu |
| Labels section en teal | Labels en bleu |
| CTA section en gradient teal | CTA section bleu |
| Shadow soft `--shadow-card` | Shadow opaque agressive |
| Emojis : uniquement si demandé | Emojis décoratifs partout |
