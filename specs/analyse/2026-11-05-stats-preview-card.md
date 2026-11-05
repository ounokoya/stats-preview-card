# 2026-11-05 — Rapport d'exécution : Stats preview card component (v2.0.0)

> SDL-FM 1.5.0, Phases 7 et 8 (remise à niveau, étape B, lot 3). Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `sc-preview`, `http://localhost:4223/stats-preview-card/`).

## 1. Tests automatiques (Phase 7)

`npm test` : **29 réussis sur 29**, verts au premier lancement après le code.

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768 ; 1023 mobile, 1024 desktop ; 320 à 1440 sans défilement horizontal ; pied de page) | ✅ 10 / 10 |
| Contenu | S6 à S9 (titre avec « insights », phrase, statistiques libellé puis chiffre, photo adaptée à la largeur ; tailles ; couleurs ; fond en thème clair et sombre) | ✅ 5 / 5 |
| Interactions | S10, S11 (clavier, attribution) | ✅ 2 / 2 |
| Accessibilité | S12 : axe-core à 375 et 1440 px | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S13 (W3C Nu), S14 (html-validate au réglage de FM), S15 (eslint), longueurs en rem, aria-label, CSS logique ; fitness ADR-0003 et ADR-0004 | ✅ 8 / 8 |
| Visuel | S16, S17 | ✅ 2 / 2 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 800 | `desktop.jpg` | 1,06 % | 5,0 % | 1,13 % |
| Mobile 375 × 956 | `mobile.jpg` | 2,85 % | 5,0 % | 3,15 % |

Contrôle rouge fait avant le code (Phase 4) : 22 échecs pour la bonne raison sur le starter et 5 tests de garde ; fitness functions (Phase 5) : 2 échecs attendus. Avant le code, la comparaison des couleurs semi-transparentes a été corrigée comme pour le 3-column (couleurs rendues, commit `fix(test)`).

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 1024 px | 1440 px |
|---|---|---|---|
| Disposition | ✅ carte (24, 49) 272 × 765, titre sur 3 lignes, phrase sur 5, pas de défilement horizontal | ✅ carte desktop de 976 px, photo recadrée (475 × 446), titre sur 2 lignes | ✅ (tests S1, S5) |
| Polices, photo | ✅ Inter 700 et Lexend Deca 400 ; photo mobile chargée | ✅ photo desktop chargée | ✅ |
| Clavier | ✅ Tab : « Frontend Mentor », contour 2 px Purple 500 | — | ✅ |

## 3. Écarts relevés et suites

Aucun écart.

Constat de la construction (Phase 6) : la photo commence à x 735 à 1440 px ; deux moitiés égales l'auraient mise à 720. Les colonnes sont dans le rapport 570 : 540 de l'image FM (ADR-0006 corrigé, commit `docs(adr)`).

## 4. En ligne (Phase 12)

`BASE_URL=https://ounokoya.github.io/stats-preview-card/ npx playwright test --workers=2` : **29 réussis sur 29**, écarts visuels identiques au local (1,06 % et 2,85 %), sur la v2.0.0 déployée depuis la branche `gh-pages` (publication avec l'accord de Koya, 2026-11-05). GitHub a activé Pages de lui-même à la première publication de la branche `gh-pages`.

## 5. Verdict

Conforme à la spec et à la maquette validée (G3). README fait (Phase 9) ; v2.0.0 en ligne. Prêt pour « Edit solution » sur FM (Phase 13).
