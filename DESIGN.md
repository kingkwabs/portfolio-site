# Design

## Visual Theme

A refined brand-command-center portfolio inspired by Frontify's spacious product storytelling: muted gray page, black text, thin dividers, and one strong dark interactive signal console. The physical scene is a recruiter reviewing a portfolio on a bright office monitor, expecting polish, clarity, and proof that the engineer can ship.

## Color Palette

- Background: `oklch(0.962 0.004 260)`
- Surface: `oklch(0.925 0.005 260)`
- Ink: `oklch(0.13 0.006 260)`
- Muted: `oklch(0.43 0.009 260)`
- Graphite Panel: `oklch(0.155 0.012 252)`
- Border: `oklch(0.82 0.006 260)`
- Violet Signal: `oklch(0.64 0.09 292)`
- Cyan Signal: `oklch(0.68 0.08 220)`
- Ember Signal: `oklch(0.62 0.08 34)`

## Typography

Use Sora for the main brand voice: technical, geometric, and readable without feeling like the usual default. Use Azeret Mono only for compact labels, code-like chips, and status text. Letter spacing stays at `0`.

## Components

- Header: thin, sticky, Frontify-like navigation with a squared KA mark.
- Hero: asymmetrical text and interactive signal console.
- Project modules: dark software-module panels with 8px radii or less, concise stack tags, and measurable impact.
- Resume bands: horizontal proof rows with icons, short labels, and clear outcomes.
- Motion: breathing background grid, subtle particles, marquee skill strip, border-beam accent, kinetic text loops, hover/focus transitions.

## Layout

Use full-width bands separated by thin borders. Keep cards only for individual project modules and contact/details surfaces. Avoid nested cards. Desktop uses a two-column hero; mobile stacks into a single narrative with the network panel below the introduction.

## Interaction

Project nodes and cards update one selected-project detail state. CTAs jump to work, open the resume asset, or contact Kwabena. Motion respects `prefers-reduced-motion`.
