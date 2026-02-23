# The Humans of Nepal — Design Layout Spec

This document describes the layout and visual design for **Desktop**, **Tablet**, and **Mobile** so it can be replicated in Figma or any design tool.

---

## Design principles

- **Photo-first**: Large imagery; minimal UI chrome.
- **Clean & emotional**: Warm, nostalgic, earthy palette; readable typography; generous spacing.
- **Story-focused**: Every section supports reading and emotional connection.
- **Accessible**: High contrast text over images; semantic structure; focus states.

---

## 1. Desktop (≥ 1200px)

### Viewport
- Width: 1200px–1920px (content max-width: 1200px, centered).
- Multi-column sections; large image widths.

### Header
- **Height**: 72px, sticky on scroll.
- **Background**: Semi-transparent overlay (`rgba(250,248,245,0.85)`), blur.
- **Layout**: Flex; logo left, nav right.
- **Logo**: “The Humans of Nepal” — Playfair Display, 1.25rem, bold.
- **Nav**: Horizontal list — Home | Stories | About | Your Story | Contact. Uppercase, small caps, letter-spacing. No hamburger.

### Hero
- **Height**: 85vh min.
- **Image**: Full-bleed; object-fit cover; optional object-position center 30%.
- **Overlay**: Dark gradient (`rgba(44,36,22,0.5)`) over image.
- **Content**: Centered, max-width 800px.
  - **Title**: “Every life has a story…” — Playfair, 3.5rem, white, text-shadow.
  - **Subtext**: One line, 1.25rem, white ~95% opacity.
  - **CTAs**: Two buttons side by side — Primary (View Stories), Secondary (Contribute a Story). Padding ~1.5rem 2rem.

### Featured Stories
- **Section padding**: 4rem vertical, 1.5rem horizontal (container).
- **Grid**: 3 columns; gap 2rem.
- **Card**: 
  - Image aspect ratio 4:3; overflow hidden; hover: image scale 1.05, card translateY(-4px), shadow increase.
  - Content padding 1.5rem; title Playfair 1.25rem; excerpt 3-line clamp; meta small, muted.
- **Below grid**: “See All Stories” primary button, centered.

### About preview (home)
- **Background**: Alternate (`#f0ebe3`).
- **Layout**: 2 columns — text left, photo grid right (2×2 images). Gap 4rem.
- **Text**: Section title + subtitle + “Learn More” secondary button.
- **Photos**: 2×2 grid, 1:1 aspect, rounded 8px.

### Footer
- **Background**: Same as about preview.
- **Grid**: 3 columns — Brand (logo + short text + social icons), Quick links, Newsletter (heading + email input + button).
- **Bottom**: Thin border-top; copyright line, centered, small text.

### Individual story page
- **Hero image**: Full width, max-height 70vh, object-fit cover.
- **Content**: Max-width 720px, centered; padding 3rem sides.
- **Title**: Playfair 2.5rem.
- **Meta**: Small, muted (location · date).
- **Body**: 1.125rem, line-height 1.7; paragraphs spaced; pull-quotes: italic, accent color, left border.
- **Share**: Row of buttons (Facebook, Twitter, WhatsApp).

### About page
- **Hero**: Centered title + mission paragraph (max-width 720px).
- **Collage**: 4 columns (one image span-2); gap 1rem; 1:1 images, rounded.

### Contribute page
- **Intro**: Centered title + subtitle.
- **Form**: Max-width 640px, centered. Fields: Name, Email, Story title, Story text (textarea), Photo upload. Primary submit button.
- **Feedback**: Success (green) / Error (red) message above form when visible.

---

## 2. Tablet (768px – 1199px)

### General
- **Container**: Same max-width 1200px; padding 1.5rem.

### Header
- **Nav**: Hidden by default. **Hamburger** visible (3 lines, 24×2px). On tap: menu opens below header (full width), vertical list, backdrop blur.
- **Menu**: Overlay from below header; transform/opacity transition.

### Hero
- Same structure; title can scale down slightly (e.g. 2.5–3rem) if needed.

### Featured Stories
- **Grid**: 2 columns.

### About preview
- **Layout**: Single column; photo grid on top (2×2 or 2×1), then text.

### Footer
- **Grid**: 2 columns (Brand + Links, then Newsletter full width or in second row).

### Story cards
- 2 columns; same card design, touch-friendly tap target.

---

## 3. Mobile (< 768px)

### General
- **Padding**: 1rem horizontal.
- **Typography**: Hero title 2rem; section titles 1.5rem; body 1rem. Touch-friendly spacing (min 44px tap targets).

### Header
- Same as tablet: hamburger only; full-width dropdown nav.

### Hero
- **Height**: 75vh min.
- **CTAs**: Stacked vertically; full-width buttons.

### Featured Stories
- **Layout**: Horizontal **swipe carousel** (no grid).
  - Scroll-snap: x mandatory; cards 85% width; gap 1rem; overflow-x auto; scrollbar hidden.
  - One card in view (or partial next); swipe-friendly.

### About preview
- **Photo grid**: 1 column (stack).

### Footer
- **Grid**: 1 column; centered text; newsletter form stacked (input full width, button below).

### Story page
- **Title**: 1.5rem.
- **Pull-quotes**: Slightly smaller; left padding reduced.

### Forms
- Full width inputs; primary button full width optional.

---

## 4. Component summary (reuse in Figma)

| Component   | Usage |
|------------|--------|
| **Header** | Sticky; logo + nav (desktop) or logo + hamburger (tablet/mobile). |
| **Nav**    | Horizontal (desktop) / vertical overlay (tablet/mobile). |
| **Story card** | Image 4:3 + title + excerpt + meta; hover (desktop); tap (all). |
| **Footer** | 3-col (desktop), 2-col (tablet), 1-col (mobile); brand, links, newsletter. |
| **Form**   | Label + input/textarea; primary/secondary buttons; feedback banner. |
| **Buttons**| Primary (accent fill), Secondary (border). |

---

## 5. Color palette

- **Background**: `#faf8f5`
- **Background alt**: `#f0ebe3`
- **Text**: `#2c2416`
- **Text muted**: `#5c5344`
- **Accent**: `#8b6914` (hover: `#6d5210`)
- **Border**: `#e5dfd4`
- **Overlay (on images)**: `rgba(44,36,22,0.5)`

---

## 6. Typography

- **Display**: Playfair Display (headings).
- **Body**: Source Sans 3.
- **Scale**: xs 0.75rem → hero 3.5rem (desktop). See `css/variables.css`.

---

## 7. Responsive breakpoints (CSS)

- **Mobile**: max-width 767px
- **Tablet**: 768px – 1199px
- **Desktop**: min-width 1200px

Use these in media queries and in Figma frames: **Desktop 1440×900**, **Tablet 768×1024**, **Mobile 375×812**.
