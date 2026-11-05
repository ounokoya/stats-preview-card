# ADR-0004 : Inter et Lexend Deca par Fontsource

## Statut
Accepté (2026-11-05) — même choix que le lot 2 et le Social proof (choix de Koya : Fontsource plutôt que le lien Google Fonts).

## Contexte
Le starter ne fournit **aucun fichier de police** ; le guide de style renvoie à Google Fonts (Inter 400, 700 ; Lexend Deca 400). Seule la graisse 700 d'Inter est utilisée (titre, chiffres). La maquette a été calée avec Inter et Lexend Deca de Google Fonts ; les tests visuels comparent des pixels (S16, S17) : la police doit être là au moment des captures.

## Options
| Option | Pour | Contre |
|---|---|---|
| **`@fontsource/inter` et `@fontsource/lexend-deca` (choisie)** | Les fichiers de Google Fonts, en woff2 découpés par alphabet, servis avec le site ; aucun appel à un tiers ; tests indépendants du réseau | Une dépendance de plus par famille |
| Lien Google Fonts | Ce que suggère le guide de style ; aucune dépendance | Dépend du réseau et de Google (vie privée, captures des tests) |

## Décision
- `@fontsource/inter` et `@fontsource/lexend-deca` en dépendances d'exécution ; seules les graisses Inter 700 et Lexend Deca 400 sont importées dans `src/style.css`.
- `font-display: swap` (valeur du paquet).

## Conséquences
- Aucun appel à un serveur de polices.
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; Inter 700 et Lexend Deca 400 se chargent.
