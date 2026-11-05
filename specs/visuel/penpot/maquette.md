# Maquette Penpot — Stats preview card component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 3 (remise à niveau, étape B, lot 3). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « Stats preview ». **En attente de G3.**
> Décisions G2 appliquées : attribution blanc 75 % et liens Purple 500 (Q-A1), « 12M+ » (Q-B1), photo décorative teintée en CSS (Q-B2), statistiques en `dl` (Q-B3), carte mobile sous 1024 px (Q-B4).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, les images (adresse interne de Penpot) sont remplacées par les fichiers du starter (`media.json`), puis il est rendu dans Chromium avec les polices Google.

**Teinte de la photo** : fond Purple 500 et photo en fusion « multiply » à 75 % d'opacité. Calée sur l'image FM : écart moyen de 2 sur 255 par canal (la photo seule, en « multiply » à 100 %, donnait 14 à 35).

## Bibliothèque

### Couleurs (groupe « Stats preview »)

| Nom | Rôle | Valeur |
|---|---|---|
| Navy 950 | Fond de page | `#090B1A` |
| Blue 950 | Carte | `#1C1A38` |
| Purple 500 | « insights », fond de la photo, liens de l'attribution (4,89:1 sur Navy 950, Q-A1) | `#AA5CDB` |
| White · 75 % · 60 % | Titre et chiffres · paragraphe et texte de l'attribution · libellés | `#FFFFFF` |

### Typographie

| Usage | Desktop | Mobile |
|---|---|---|
| Titre (h1) | Inter 700, 36 px, interligne 44 px, 2 lignes | 28 px, interligne 32 px, 3 lignes, centré |
| Paragraphe | Lexend Deca 400, **14,5 px** (G3-3), interligne 25 px, 3 lignes | idem, 4 lignes, centré |
| Chiffres (dd) | Inter 700, 24 px | idem |
| Libellés (dt) | Lexend Deca 400, 12 px, majuscules, espacement des lettres 1 px | idem |
| Attribution | Lexend Deca 400, 11 px | idem |

**Paragraphe (G3-3)** : le guide de style dit 15 px, mais les lignes de l'image FM mesurent 14,2 à 14,5 px (à 15 px, la 1re ligne desktop est 5 % trop large et la phrase ne se coupe plus au même endroit). La maquette retient 14,5 px.

### Mesures (px)

| Élément | Desktop 1440 × 800 | Mobile 375 × 956 |
|---|---|---|
| Carte | 1110 × 446 en (165, 177), rayon 8 | 327 × 780 en (24, 88) |
| Photo | 540 × 446 à droite (fichier desktop 540 × 446) | 327 × 240 en haut (fichier mobile 654 × 480) |
| Marge gauche du texte | 72 | texte centré |
| Titre · paragraphe (capitales) | 80 · 190,5 sous le haut de la carte | 286 · 398,5 |
| Statistiques | en ligne, colonnes à x 72, 217, 357 ; chiffres · libellés (capitales) à 337 · 371 | empilées tous les 80 px, à 538 · 572 |

Tablette 768 × 1024 (proposition G3-1) : la carte mobile centrée en (220,5, 122).

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Attribution | Normal (texte blanc 75 %, liens Purple 500 soulignés, Q-A1) · Survol (soulignement retiré) · Focus clavier (contour 2 px Purple 500, décalé de 2 px) |

Rien d'autre n'est interactif.

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · Stats preview | `desktop.jpg` | 1,13 % | 5,0 % |
| Mobile · Stats preview | `mobile.jpg` | 3,15 % | 5,0 % |

Notes :
- Mobile : la photo concorde (0,03 % de l'écran) ; l'écart vient du lissage des petits textes clairs sur fond sombre.
- Écran sans image FM : **Tablette · Stats preview (proposition G3-1)**.

## Prototype

Pas de parcours : rien n'est interactif en dehors de l'attribution, dont les états sont montrés par le composant.

## Fichiers

- `desktop.png`, `mobile.png`, `tablette.png` : rendus des 3 écrans ; `apercu-maquette.png`.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille).
- `composants.png` : les composants et leurs états (échelle 2).
