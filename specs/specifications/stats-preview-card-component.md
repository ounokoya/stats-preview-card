# Spec — Stats preview card component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 4 (remise à niveau, étape B, lot 3). Sources : analyse validée (G2) `specs/visuel/stats-preview-card-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-stats-preview-card.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Une carte qui présente un service d'analyse de données : un titre (« insights » en violet), une phrase, trois statistiques et une photo teintée de violet. La page est statique : seuls les liens du pied de page sont interactifs.

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Carte | tout ce qui suit, sauf le pied de page | `article` dans `main` |
| Photo | `image-header-desktop.jpg` (540 × 446) dès 1024 px, `image-header-mobile.jpg` (654 × 480) en dessous ; teintée de Purple 500 ; décorative (Q-B2) | `picture` avec `img alt=""` |
| Titre | « Get insights that help your business grow. », « insights » en Purple 500 | `h1` |
| Phrase | « Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. » | `p` |
| Statistiques (Q-B3) | « 10k+ » companies, « 314 » templates, « 12M+ » queries (Q-B1) ; le chiffre est affiché au-dessus du libellé, en majuscules | `dl` : `dt` libellé, `dd` chiffre |
| Pied de page | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | Stats preview card component » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`).

| Rôle | Couleur |
|---|---|
| Fond de page | Navy 950 `hsl(233, 47%, 7%)` |
| Carte | Blue 950 `hsl(244, 37%, 16%)` |
| Titre, chiffres | White |
| « insights », teinte de la photo, liens de l'attribution | Purple 500 `hsl(277, 64%, 61%)` (4,89:1 sur Navy 950, Q-A1) |
| Phrase, texte de l'attribution | blanc à 75 % |
| Libellés | blanc à 60 % |

| Usage | ≥ 1024 px | < 1024 px |
|---|---|---|
| Titre | Inter 700, 36 px, interligne 44 px | 28 px, interligne 32 px, centré |
| Phrase | Lexend Deca 400, 14,5 px (G3-3), interligne 25 px | idem, centrée |
| Chiffres · libellés | Inter 700, 24 px · Lexend Deca 400, 12 px, majuscules, espacement 1 px | idem, centrés |

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 1024 px (Q-B4, G3-1) | La carte mobile : 327 px au plus et 24 px des bords en dessous, centrée ; photo en haut ; texte centré ; statistiques empilées. |
| ≥ 1024 px | La carte desktop : 1110 px au plus et 24 px des bords en dessous, centrée ; texte à gauche, photo à droite (570 : 540) ; statistiques en ligne. |

Positions de la maquette, à 1 px près :

| Élément | 1440 × 800 | 375 × 956 | 768 × 1024 |
|---|---|---|---|
| Carte | (165, 177) 1110 × 446 | (24, 88) 327 × 780 | (220,5, 122) 327 × 780 |
| Photo | (735, 177) 540 × 446 | (24, 88) 327 × 240 | — |

Le pied de page ne déplace pas la carte : centré en bas de la fenêtre. La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol | Focus clavier |
|---|---|---|---|
| Liens du pied de page | Purple 500, soulignés (Q-A1) | soulignement retiré | contour 2 px Purple 500, décalé de 2 px |

Rien d'autre n'est interactif. La page n'a aucune animation.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Un seul `h1` : « Get insights that help your business grow. ». |
| A2 | Photo décorative : ignorée par les lecteurs d'écran (Q-B2). |
| A3 | Chaque statistique est lue libellé puis chiffre : « companies, 10k+ » (Q-B3). |
| A4 | Contraste AA : 4,5:1 pour les textes, 3:1 pour le titre (« insights » 4,21:1) ; attribution 4,89:1 et plus (Q-A1). |
| A5 | Focus visible sur les liens : contour de 2 px au moins. |
| A6 | Le fond de la page est déclaré : le même en thème clair ou sombre de l'appareil. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Carte | article | — (elle a la taille et la place de la carte : S1 à S3) |
| Titre | heading (niveau 1) | « Get insights that help your business grow. » |
| Statistiques | term · definition | « companies », « templates », « queries » · « 10k+ », « 314 », « 12M+ » |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |
| Photo | — (absente de l'arbre d'accessibilité) | l'image `image-header` de la carte |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 800   Then carte (165, 177) 1110 × 446 ; photo (735, 177) 540 × 446
S2  Given 375 × 956    Then carte (24, 88) 327 × 780 ; photo (24, 88) 327 × 240
S3  Given 768 × 1024   Then carte (220,5, 122) 327 × 780 ; given 1023 px  Then la carte mobile ;
                       given 1024 px  Then la carte desktop, photo à droite (Q-B4)
S4  Given 320, 375, 768, 1023, 1024, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 800   Then le pied de page est sous la carte, centré, dans la fenêtre

Contenu
S6  Given la page  Then h1 (seul titre de niveau 1) avec « insights » ; la phrase ; trois paires libellé / chiffre dans cet ordre
                   (companies 10k+, templates 314, queries 12M+), chiffre affiché au-dessus ;
                   aucune image exposée aux lecteurs d'écran ; photo desktop dès 1024 px, mobile en dessous, chargée
S7  Given 1440 × 800  Then titre 36 px, phrase 14,5 px (interligne 25 px), chiffres 24 px, libellés 12 px en majuscules espacés de 1 px ;
                   given 375 × 956  Then titre 28 px
S8  Given la page  Then titre et chiffres White, « insights » Purple 500, phrase blanc à 75 %, libellés blanc à 60 %, carte Blue 950
S9  Given l'appareil en thème clair ou sombre  Then le fond de la page reste Navy 950 (A6)

Interactions
S10 Given la page  When j'appuie sur Tab deux fois  Then « Frontend Mentor » puis « Koya Esdras », chacun avec un contour Purple 500 de 2 px au moins
S11 Given le pied de page  Then texte blanc à 75 %, liens Purple 500 soulignés, bonnes adresses ;
                   When je survole un lien  Then son soulignement disparaît (Q-A1)

Accessibilité et règles FM
S12 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S13 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S14 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S15 Given le JavaScript du dépôt  Then eslint au réglage de FM : aucune erreur
    (et les tests de garde des règles FM déjà vues : longueurs en rem, aria-label, CSS logique)

Visuel (seuils calibrés en Phase 3, G3-2)
S16 1440 × 800 vs desktop.jpg ≤ 5,0 %
S17 375 × 956 vs mobile.jpg ≤ 5,0 %
```
