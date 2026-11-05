# Mise à jour de la solution sur Frontend Mentor

> SDL-FM 1.5.0 Phase 13 (refonte v2.0.0). Textes préparés pour le formulaire « Edit solution » de la solution de 2023 : https://www.frontendmentor.io/solutions/stats-preview-card-component-EdVUT3IUiV (titre « flex box, size »). La modification est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi. Pas de nouveaux points (solution déjà soumise).
>
> **Envoyée le 2026-11-05** avec l'accord de Koya, textes ci-dessous inchangés (les 4 tags existent sur FM) ; rapport : 0 remarque (`specs/analyse/2026-11-05-rapport-fm.md`).

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | Stats preview card with a measured CSS photo tint, a dl & Tailwind v4 (69) |
| Repository URL | https://github.com/ounokoya/stats-preview-card |
| Live site URL | https://ounokoya.github.io/stats-preview-card/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |
| Capture | « Regenerate screenshot » : la page a changé depuis 2023 |

Après l'envoi : « Regenerate report » (vérifications automatiques gratuites), en vérifiant d'abord que la solution n'a pas de rapport IA (sinon un crédit serait consommé : accord de Koya).

## What are you most proud of, and what would you do differently next time?

I'm most proud of the photo tint: comparing the starter photo with the design pixel by pixel, a Purple 500 background under the photo in `mix-blend-mode: multiply` at 75 % opacity matches it within about 2 levels per channel. The photo is a `picture` with the desktop and mobile crops, and the statistics are a description list read "companies, 10k+". Screenshots differ from the design JPGs by 1.06 % (desktop) and 2.85 % (mobile) of pixels, and the 29 Playwright tests pass on the live site.

This is a rebuild of my 2023 solution. Next time, I'd measure text sizes on the design files before trusting the style guide (see below).

## What challenges did you encounter, and how did you overcome them?

- **The paragraph size**: the style guide says 15 px, but the design's lines measure 14.2 to 14.5 px, and at 15 px the sentence breaks in different places. The site uses 14.5 px.
- **The desktop columns**: the photo starts at x 735, so the card is split 570 : 540, not in equal halves.
- **The attribution on the dark page**: the starter's blue is 2.72:1, so the links use Purple 500 (4.89:1).

## What specific areas of your project would you like help with?

1. Would you tint the photo with `mix-blend-mode`, or with a pseudo-element overlay?
2. Is a `dl` the right markup for these statistics?
