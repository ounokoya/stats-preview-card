# 2026-11-05 — Brainstorming : Stats preview card component (refonte v2.0.0)

> SDL-FM 1.5.0, Pré-dev 1 et 2. Ancienne solution Newbie de 2023, **refaite dans le même dépôt** (étape B de la remise à niveau, lot 3 avec les deux autres cartes du lot). Pas de points en plus : la solution est déjà comptée sur FM (https://www.frontendmentor.io/solutions/stats-preview-card-component-EdVUT3IUiV).

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape B ; Q1 même dépôt en v2.0.0, Q2 SDL-FM complète avec G2 et G3 par lot, Q3 GitHub Pages). Koya : « passons à l'étape B » après le lot 2.
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la modification de la solution sur FM.
- **Lot 3 :** Profile card, 3-column, Stats preview ; lot 4 ensuite (Product preview).

## Existant (v1, 2023)

- Dépôt `stats-preview-card` : 5 commits du 2023-01-23, Vite + Tailwind v3, restes du modèle Vite (`counter.js`), README du starter, aucun test.
- Site sur une adresse Netlify de branche ; titre de la solution sur FM : « flex box, size ».
- Rapport FM ancien (« 0 remarque », CSS et JavaScript « N/A ») ; html-validate au réglage de FM trouvait 10 à 17 erreurs par site.

## Import (Phase 0)

- Ancien code retiré (historique gardé) ; starter actuel `frontendmentorio/stats-preview-card-component` (branche `main`, 2026-03-30, archive GitHub publique) copié tel quel, sans le fichier Figma ; `AGENTS.md` et `CLAUDE.md` rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM) ; `.gitignore` du starter complété (dépendances, build, rapports de tests).
- Le starter ne fournit **aucun fichier de police** (Inter et Lexend Deca, Google Fonts) : choix du chargement à l'ADR.

## Analyse (Phase 2)

`specs/visuel/stats-preview-card-analyse.png` (et `.excalidraw`).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 3. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-A1 | Attribution sur Navy 950 (lien #3E52A3 2,72:1) | Texte blanc à 75 % (10,98:1), liens Purple 500 (4,89:1), survol sans soulignement |
| Q-B1 | « 12m+ » (HTML) et « 12M+ » (image) | « 12M+ », comme l'image ; « 10k+ » garde son « k » minuscule |
| Q-B2 | Photo | Décorative, `alt=""` ; teinte Purple 500 en CSS (fusion multiply) ; image mobile sous 1024 px, desktop au-delà (`picture`) |
| Q-B3 | Statistiques | Liste de description `dl` : libellé en `dt`, chiffre en `dd` affiché au-dessus ; lu « companies, 10k+ » |
| Q-B4 | Pas de maquette tablette | Disposition desktop dès 1024 px ; en dessous, la carte mobile de 327 px au plus, centrée |
| Q-B5 | Refonte | Même dépôt en v2.0.0, GitHub Pages, « Edit solution » |

## Maquette validée (G3, 2026-11-05)

Koya : « Je valide (G3) » pour le lot 3. Maquette : `specs/visuel/penpot/maquette.md`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| G3-1 | Tablette (Q-B4) | La carte mobile centrée, sous 1024 px |
| G3-2 | Seuils visuels | 5 % pour les 2 écrans calibrés |
| G3-3 | Paragraphe | 14,5 px, mesuré sur les images FM (le guide de style dit 15 px) |

## Spec, ADR et verrou code (2026-11-05)

- Spec : `specs/specifications/stats-preview-card-component.md` ; tests écrits avant le code, contrôle rouge fait (voir les commits `test:`).
- ADR : `specs/adr/v2.0/` (ADR-0003 à ADR-0006) et leurs fitness functions, contrôle rouge fait.
- Polices : Koya accepte le téléchargement des paquets Fontsource (ADR-0004).
- **Verrou code** : Koya confirme « Claude écrit le code ».
