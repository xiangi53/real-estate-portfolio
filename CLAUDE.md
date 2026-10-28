# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page homepage redesign for Marci Metzger — The Ridge Realty Group (reference site: https://marcimetzger.com/). React 19 + Vite 6, plain JavaScript/JSX, vanilla CSS. No router, no state library, no backend.

## Commands

```bash
npm install       # install deps (Node >= 18)
npm run dev       # dev server at http://localhost:5173
npm run build     # static bundle to dist/
npm run preview   # serve the built dist/
```

There is no test suite, linter, or formatter configured. Verify changes with `npm run build` and by checking the page in `npm run dev`.

## Architecture

- **Content lives in data, not components.** All copy, image paths/alt text, nav links, form options, gallery items, hours, and social links are exported constants in [src/data/siteContent.js](src/data/siteContent.js) (`BRAND_INFO`, `HERO_CONTENT`, `REALTOR_CONTENT`, `AFFILIATIONS`, `GUIDANCE_BLOCKS`, `PROPERTY_SEARCH_CONFIG`, `GALLERY_IMAGES`, `SERVICES_CONTENT`, `OFFICE_HOURS`, `SOCIAL_LINKS`, `COOKIE_NOTICE`). Edit text there; components only render it.
- **Page composition** is in [src/App.jsx](src/App.jsx): sections A–I render in a fixed order (Header → Hero → RealtorIntro/SalesAchievement → BuyerSellerGuidance → PropertySearch → PhotoGallery → Services → ContactSection → Footer/CookieNotice). In-page navigation uses anchor IDs (`#home`, `#listings`, etc.) defined by section components and referenced in `NAV_LINKS`.
- **Cross-section state is lifted to App.** `prefilledContactMessage` lets `BuyerSellerGuidance` (`onSelectTopic`) and `PropertySearch` (`onApplyCriteriaToContact`) push text into the contact form; `ContactSection` copies it into its own form state in a `useEffect` and then calls `onClearPrefilledMessage` (memoized with `useCallback` so the effect doesn't loop). Cookie consent is persisted in `localStorage` under `marci_metzger_cookie_consent_v1`, with try/catch for private-mode failures.
- **Styling** is one global stylesheet, [src/styles/index.css](src/styles/index.css), using BEM-ish class names and CSS custom properties on `:root`. Color tokens are verified against the original GoDaddy site (comments note the source `.c1-*` class) — reuse the existing tokens rather than introducing new hex values. Fonts (Cinzel for headings, Source Sans 3 for body) load from Google Fonts in [index.html](index.html).
- **Assets** are served from `public/assets/images/` and referenced as absolute `/assets/images/...` paths. These are the 21 original images from the reference site; the README has the full mapping to their original sources.

## Constraints

- Preserve the original site's brand identity and **verbatim copy** (e.g. the 2021 sales stat). Don't rewrite marketing text.
- Property search and contact forms are **front-end demonstrations only**: no MLS/IDX API or email server exists. Search validates filters and shows a summary; contact validates and shows a confirmation with `mailto:`/phone fallbacks. Keep that honest messaging if modifying them.
- Accessibility is a deliberate feature: skip link, explicit `<label>`s, focus rings, keyboard nav and Esc/arrow handling in the gallery lightbox. Maintain these when editing components.
