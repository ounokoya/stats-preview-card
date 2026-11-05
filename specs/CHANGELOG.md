# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [2.0.0] — 2026-11-05

Refonte complète de la solution de 2023 (SDL-FM 1.5.0, remise à niveau du profil, étape B, lot 3), à partir du starter actuel, dans le même dépôt.

### Added
- Carte mobile sous 1024 px, carte desktop au-delà (texte 570, photo 540), centrée dans la fenêtre (Q-B4, G3-1, ADR-0006).
- Photo décorative en `picture` (cadrages desktop et mobile), teintée par fusion CSS calée sur l'image FM (Q-B2, ADR-0005).
- Statistiques en liste de description, libellé puis chiffre à la lecture (Q-B3) ; « 12M+ » comme l'image (Q-B1).
- Inter et Lexend Deca servies avec le site par Fontsource (ADR-0004) ; paragraphe de 14,5 px mesuré (G3-3).
- Attribution blanc à 75 % et liens Purple 500 sur le fond sombre (Q-A1).
- Tests : 17 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, règles FM déjà vues, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (1,06 % ; 2,85 % pour un seuil de 5 %).

### Changed
- Vite 8 et Tailwind CSS v4 (tokens dans `@theme`, ADR-0003) au lieu de Vite et Tailwind v3 ; publication sur GitHub Pages (branche `gh-pages`) au lieu de Netlify.

### Removed
- Code de 2023 (restes du modèle Vite, dont `counter.js`) et README du starter.
