---
name: Obsidian & Violet
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cfc2d5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#988d9e'
  outline-variant: '#4c4353'
  surface-tint: '#deb7ff'
  primary: '#deb7ff'
  on-primary: '#4a007f'
  primary-container: '#7b2cbf'
  on-primary-container: '#e4c2ff'
  inverse-primary: '#8234c6'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#dbb8ff'
  on-tertiary: '#402061'
  tertiary-container: '#69498c'
  on-tertiary-container: '#e1c3ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f1dbff'
  primary-fixed-dim: '#deb7ff'
  on-primary-fixed: '#2d0050'
  on-primary-fixed-variant: '#680eac'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#efdbff'
  tertiary-fixed-dim: '#dbb8ff'
  on-tertiary-fixed: '#2a064b'
  on-tertiary-fixed-variant: '#57387a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  electric-purple: '#9D4EDD'
  deep-void: '#050505'
  muted-gray: '#606060'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 110%
    letterSpacing: 0.01em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 110%
  headline-lg:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 120%
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-bold:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: 0.1em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 120%
spacing:
  unit: 8px
  gutter: 24px
  margin-edge: 40px
  container-max: 1440px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is built for the intersection of professional music production and digital-first artistry. The brand personality is aggressive, high-energy, and nocturnal. It evokes the feeling of a premium studio late at night—sleek, focused, and electrically charged.

The aesthetic utilizes a **High-Contrast / Bold** foundation mixed with **Brutalist** structural elements. Key visual drivers include:
- **Cinematic Depth:** Deep blacks contrasted with vibrant, glowing purples.
- **Edgy Precision:** Sharp corners and heavy, 3D-inspired drop shadows that mimic the extruded text in the brand's social assets.
- **Impactful Typography:** Massive, condensed headings that command attention, balanced by clean, technical body text.

## Colors

The palette is strictly dark-mode by default. The primary engine is a range of purples—from the deep, atmospheric `#240046` to the vibrant, high-energy `#7B2CBF`. 

- **Primary:** The signature "Jacy Purple," used for calls to action, active states, and glowing accents.
- **Secondary:** Pure white, reserved for maximum legibility and high-impact display typography.
- **Neutral:** A tiered system of near-blacks (`#0F0F0F` and `#050505`) to create structural depth without losing the "inky" feel of the interface.
- **Accent:** `electric-purple` is used sparingly for hover states or "glow" effects to simulate 3D lighting.

## Typography

The typography strategy emphasizes the "Records" aspect of the brand: 
- **Headlines (Anton):** A heavy, condensed sans-serif used for impact. It should always be uppercase in display contexts to mirror the brand's social banners.
- **Body (Geist):** A modern, technical sans-serif that provides a clean, developer-style legibility against the dark backgrounds.
- **Metadata (JetBrains Mono):** Monospaced fonts are used for technical details (BPM, Key, Duration, Timestamp) to reinforce the studio/agency professionalism.

All headlines should implement a subtle 3D text-shadow effect in production CSS to match the brand's visual identity.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop to maintain a cinematic, composed portfolio feel. 

- **Grid:** 12-column grid with generous 24px gutters. 
- **Margins:** Large 40px+ margins are used to let high-impact imagery and bold type breathe.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Mobile Adaption:** On mobile, margins reduce to 20px, and the grid collapses to 4 columns. Spacing between sections (stack-lg) is reduced by 25% on mobile to maintain momentum.

## Elevation & Depth

Unlike traditional material design which uses soft ambient shadows, this design system uses **Hard 3D Shadows** and **Tonal Layering**.

- **Shadows:** Elements like cards and buttons feature hard-edged, offset shadows (e.g., `8px 8px 0px #240046`). This creates a physical, "stacked" appearance rather than a floating one.
- **Surfaces:** Depth is achieved by shifting hex values. The background is `#050505`, while elevated cards or containers are `#0F0F0F`.
- **Glow:** High-priority elements (like active record players or CTA buttons) use a `drop-shadow` filter with a blur of 15px in `#7B2CBF` to simulate a neon or LED glow.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To evoke an edgy, aggressive, and professional aesthetic, all containers, buttons, and input fields must have 90-degree corners. This reinforces the "Brutalist" influence and differentiates the brand from softer, consumer-grade social apps. The only exception is for circular avatars or iconography.

## Components

- **Buttons:** Primary buttons feature a `#7B2CBF` background with a black `Anton` label. They must have a secondary "3D layer" shadow that shifts on hover to simulate a physical press.
- **Cards:** Used for portfolio pieces or artist profiles. Cards use the `#0F0F0F` surface color with a thin `1px` border of `#240046`. Large imagery within cards should be desaturated or treated with a purple duo-tone filter.
- **Input Fields:** Sharp-edged boxes with a `#FFFFFF` border. When focused, the border glows with the primary purple. Label text uses `JetBrains Mono` for a technical look.
- **Chips/Tags:** Used for genres or services (e.g., "MIXING", "TRAP"). These should be ghost-styled with white borders and monospaced text.
- **Lists:** Audio tracklists should use a hover state that highlights the entire row in a deep purple tint, with the "Play" icon glowing.
- **Navigation:** Top-tier navigation uses `Anton` for a bold presence, while utility links use `Geist`.