# ADR-0005 : Photo en `picture` décorative, teintée par fusion CSS

## Statut
Accepté (2026-11-05) — décision G2 (Q-B2) ; teinte calée en Phase 3.

## Contexte
Le starter fournit la photo en deux cadrages : `image-header-desktop.jpg` (540 × 446) et `image-header-mobile.jpg` (654 × 480, le double de 327 × 240). Sur les images FM, elle est teintée de violet : la Phase 3 retrouve la teinte avec un fond Purple 500 et la photo en fusion « multiply » à 75 % d'opacité (écart moyen de 2 sur 255). La photo est décorative (Q-B2).

## Options
| Option | Pour | Contre |
|---|---|---|
| **`picture` (source desktop dès 1024 px, `img` mobile), fond Purple 500, `mix-blend-mode: multiply` et opacité 0,75 (choisie)** | Le bon cadrage à chaque largeur, chargé seul ; teinte exacte sans fichier à fabriquer | Deux propriétés de fusion à connaître |
| Une seule image et `object-fit` | Un seul fichier | Le cadrage mobile n'est pas une simple découpe du desktop |
| Images teintées à l'avance | Pas de fusion CSS | Fichiers à fabriquer et à tenir à jour hors du starter |

## Décision
- `picture` : `source media="(min-width: 64rem)"` vers `image-header-desktop.jpg` (540 × 446) ; `img` `image-header-mobile.jpg`, `width="654" height="480"`, `alt=""`.
- Conteneur de la photo en Purple 500 ; `img` en `mix-blend-mode: multiply`, opacité 0,75, à pleine taille du conteneur (`object-fit: cover`).
- `src/main.js` n'importe que la feuille de style.

## Conséquences
- Vérifié par S1, S2 (place de la photo), S6 (image adaptée à la largeur, aucune image exposée) et les comparaisons visuelles (S16, S17).
