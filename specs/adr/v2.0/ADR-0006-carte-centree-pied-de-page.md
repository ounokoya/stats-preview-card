# ADR-0006 : Mise en page — carte centrée, pied de page en bas sans la décaler

## Statut
Accepté (2026-11-05) — même principe que le lot 2 (ADR-0006).

## Contexte
La carte est centrée dans la fenêtre ((165, 177) à 1440 × 800, (24, 88) à 375 × 956, (220,5, 122) à 768 × 1024). Dès 1024 px, texte à gauche et photo à droite, deux moitiés (1110 px au plus) ; en dessous, la carte mobile de 327 px au plus, photo en haut et texte centré (Q-B4, G3-1). L'attribution doit tenir sous la carte sans la déplacer (S5).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Grille de 3 rangées `1fr auto 1fr` sur toute la hauteur (choisie)** | La carte est au centre de la fenêtre ; le pied de page se place en bas de la 3e rangée ; si la fenêtre est trop basse, la page s'allonge au lieu de superposer | — |
| Pied de page en position absolue | Simple | Passe sur la carte dans une fenêtre basse |
| Pied de page dans le flux, sous la carte | Simple | Décale la carte |

## Décision
- `body` en grille `grid-rows-[1fr_auto_1fr]` de hauteur minimale `100dvh`, `main` dans la 2e rangée, `footer` en bas de la 3e.
- Carte : largeur `min(20.4375rem, 100% - 3rem)` sous `lg`, `min(69.375rem, 100% - 3rem)` dès `lg` ; en colonne (photo d'abord dans le HTML) sous `lg`, en deux colonnes égales dès `lg`, la photo à droite (`order`).
- Statistiques : `dl` empilé et centré sous `lg`, en ligne dès `lg` (écart de 4rem) ; dans chaque paire, le `dd` (chiffre) est affiché avant le `dt` (libellé) par `order` (Q-B3).

## Conséquences
- Positions S1 à S5 tenues par une grille et un point de rupture ; rien ne se superpose quelle que soit la hauteur de la fenêtre.
- L'ordre de lecture reste titre, phrase, statistiques (la photo, décorative, est ignorée par les lecteurs d'écran) ; seul l'affichage change.
