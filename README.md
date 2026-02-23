# The Humans of Nepal

A fully responsive, story-focused website inspired by the structure and visual style of [Humans of Bombay](https://humansofbombay.in). Every life has a story.

## Features

- **Responsive**: Desktop (≥1200px), Tablet (768px–1199px), Mobile (<768px)
- **Sticky header** with logo and nav; **hamburger menu** on tablet and mobile
- **Hero section** with full-width banner, overlay title, and CTAs
- **Featured stories** grid (3 → 2 → 1 column); **swipe-friendly carousel** on mobile
- **Individual story pages** with large image, title, meta, body, pull-quotes, and share buttons (Facebook, Twitter, WhatsApp)
- **About** section with mission and photo collage
- **Contribution form** (name, email, story title, story text, photo upload) with success/error feedback
- **Footer** with quick links, social icons, and newsletter signup
- **Optional dark mode** (toggle in header; preference saved in `localStorage`)
- **Search** on Stories page to filter by title/location/excerpt
- **SEO**: semantic HTML5, meta description, theme-color
- **Accessibility**: skip link, ARIA labels, focus states, alt text

## Project structure

```
thehumansofnepal/
├── index.html          # Home: hero, featured stories, about preview
├── stories.html        # All stories grid + search + pagination
├── story.html          # Single story (sample: The Weaver of Patan)
├── about.html          # About: mission, collage
├── contribute.html     # Contribute form + contact/donate
├── css/
│   ├── variables.css   # Design tokens (colors, typography, spacing)
│   ├── base.css       # Reset, typography, buttons
│   ├── components.css # Header, nav, cards, footer, forms
│   ├── layout.css     # Sections, hero, grids
│   └── responsive.css # Breakpoints (mobile, tablet, desktop)
├── js/
│   ├── main.js        # Nav, hamburger, smooth scroll, dark mode, newsletter
│   ├── stories.js     # Story search filter
│   └── form.js        # Contribution form validation and feedback
├── DESIGN.md          # Design layout spec for Figma (desktop, tablet, mobile)
└── README.md
```

## Custom domain (thehumansofnepal.com)

The site is configured for **thehumansofnepal.com**:

- **`CNAME`** — Contains `thehumansofnepal.com` for GitHub Pages. In the repo: **Settings → Pages → Custom domain**, enter `thehumansofnepal.com` and save. Enable **Enforce HTTPS** when DNS is active.
- **DNS** (at your registrar): Add a CNAME record for `thehumansofnepal.com` (or `www` if you use www) pointing to `inaratech-code.github.io`, or use the A records GitHub shows in the Pages custom domain settings.
- **Canonical and share URLs** in the HTML use `https://thehumansofnepal.com/` so search and social links use the correct domain.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080` (or the port shown).

## Design

- **Layout & breakpoints**: See `DESIGN.md` for desktop, tablet, and mobile specs (Figma-ready).
- **Colors**: Warm, earthy palette (background `#faf8f5`, accent `#8b6914`, text `#2c2416`).
- **Fonts**: Playfair Display (headings), Source Sans 3 (body), loaded from Google Fonts.

## Optional next steps

- **CMS**: Connect stories to WordPress, Strapi, or Sanity for dynamic content.
- **Backend**: Hook the contribution form and newsletter to your API or email service.
- **Images**: Replace Unsplash placeholders with your own assets; consider responsive `srcset` for large hero images.

## License

Use and adapt as needed for The Humans of Nepal project.
