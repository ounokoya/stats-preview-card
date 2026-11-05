# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 4 couleurs FM (blanc et ses opacités compris), les deux polices, les tailles de texte (dont le paragraphe de 14,5 px mesuré, G3-3) et le rayon de la carte. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Les longueurs des tokens sont écrites en rem (règle FM).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-navy-950`, `--color-blue-950`, `--color-purple-500`, `--color-white` (valeurs `hsl()` du style-guide ; 75 % et 60 % par le modificateur d'opacité de Tailwind) |
| Polices | `--font-display` (Inter), `--font-sans` (Lexend Deca) ; chargement : ADR-0004 |
| Tailles de texte | `--text-title` (36 px, interligne 44 px) et `--text-title-mobile` (28 px, interligne 32 px), `--text-body` (14,5 px, interligne 25 px, G3-3), `--text-stat` (24 px), `--text-label` (12 px, espacement 1 px), `--text-attribution` (11 px) |
| Rayon | `--radius-card` (8) |
- Point de rupture : `lg` (1024 px, valeur de Tailwind, Q-B4).

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans les classes, les styles et les blocs `<style>` de `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
