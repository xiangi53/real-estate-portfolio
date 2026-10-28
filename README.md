# Marci Metzger Real Estate — Homepage Redesign

A responsive, production-quality homepage redesign for **Marci Metzger — THE RIDGE REALTY GROUP** ([https://marcimetzger.com/](https://marcimetzger.com/)).

This redesign preserves the original website's brand identity, verified color palette, typography (`Cinzel` and `Source Sans Pro`), verbatim copy, and all 21 original photographic and branding assets while elevating visual hierarchy, readability, accessibility, and multi-device responsiveness.

---

## 1. Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Language:** JavaScript (ES Modules / JSX)
- **Markup & Styling:** Semantic HTML5 & centralized Vanilla CSS3 custom properties (`src/styles/index.css`)
- **Icons:** `lucide-react` (used selectively for navigation, phone, search, gallery, and contact cues)

---

## 2. Getting Started

### Prerequisites

- **Node.js** `>= 18.x` and **npm** `>= 9.x`

### Install Dependencies

```bash
npm install
```

### Run Development Server Locally

```bash
npm run dev
```

Vite will start the local server at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized static production bundle is emitted to the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

### Deployment Instructions

Because this project builds to a self-contained static `dist/` directory with all original image assets stored locally under `public/assets/images/`, it can be deployed directly to any static hosting provider:

- **Vercel / Netlify / Cloudflare Pages:**
  - **Build command:** `npm run build`
  - **Output directory:** `dist`
- **GitHub Pages / AWS S3 / NGINX:**
  - Upload the contents of the generated `dist/` folder to your web root.

---

## 3. Verified Brand Color Palette

Before writing any styles, the live reference website (`https://marcimetzger.com/`) and its extracted GoDaddy Website Builder stylesheet (`Theme30`, `DARK_COLORFUL`) were inspected to verify the exact RGB/HEX values used across headers, hero overlays, buttons, section backgrounds, text, and borders.

| CSS Custom Property | Verified Hex | Reference Site RGB / Class | Usage in Redesign |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#161616` | `rgb(22, 22, 22)` (`.c1-h`) | Primary dark section surfaces, primary CTA buttons, dark cards |
| `--color-secondary` | `#000000` | `rgb(0, 0, 0)` (`.c1-ax`, `.c1-7y`) | Footer background, button hover states, lightbox backdrop |
| `--color-accent` | `#8f6e6e` | `rgb(143, 110, 110)` (`.c1-1u`) | Brand dusty rose/mauve accent, eyebrows, focus rings, active indicators |
| `--color-accent-dark` | `#826c6c` | `rgb(130, 108, 108)` (`.c1-3s`) | Secondary accent hover state and subtle border accents |
| `--color-accent-light` | `#ad8c8c` | `rgb(173, 140, 140)` (`.c1-ea`) | Light mauve text/accents on charcoal (`#161616`) and black (`#000000`) surfaces |
| `--color-accent-soft` | `#ab8585` | `rgb(171, 133, 133)` (`.c1-cc`) | Soft accent highlights |
| `--color-background` | `#ffffff` | `rgb(255, 255, 255)` (`.c1-3`) | Primary page background and card surfaces |
| `--color-surface` | `#f6f6f6` | `rgb(246, 246, 246)` (`.c1-3d`) | Alternating section background (`GET IT SOLD`, `Photo Gallery`, `Call or Visit`) |
| `--color-surface-alt` | `#e2e2e2` | `rgb(226, 226, 226)` (`.c1-fm`) | Subtle neutral surface accents and active pills |
| `--color-text` | `#1b1b1b` | `rgb(27, 27, 27)` (`.c1-1o`) | High-contrast primary headings and body copy |
| `--color-text-secondary` | `#474747` | `rgb(71, 71, 71)` (`.c1-cr`) | Supporting body copy and descriptions |
| `--color-muted` | `#575757` | `rgb(87, 87, 87)` (`.c1-4j`) | Form labels, metadata, and secondary text (WCAG AA compliant) |
| `--color-text-subtle` | `#969696` | `rgb(150, 150, 150)` (`.c1-gy`) | Muted captions on dark surfaces |
| `--color-text-inverse` | `#f7f7f7` | `rgb(247, 247, 247)` (`.c1-9c`) | Light text on `#161616` and `#000000` backgrounds |
| `--color-border` | `#dadada` | `rgb(218, 218, 218)` (`.c1-ci`) | Form input borders and structural dividers |
| `--color-border-subtle` | `#e2e2e2` | `rgb(226, 226, 226)` (`.c1-f5`) | Card borders and subtle horizontal rules |

### Typography (Verified from Reference Site)

- **Display / Headings (`--font-heading`):** `'Cinzel', Georgia, serif` (matches reference site `.c1-2f { font-family: 'Cinzel', Georgia, serif }`)
- **Body / UI Controls (`--font-body`):** `'Source Sans Pro', 'Source Sans 3', Arial, sans-serif` (matches reference site `.c1-f { font-family: 'Source Sans Pro', Arial, sans-serif }`)

---

## 4. Complete Inventory of Original Assets Used

All 21 unique images from `https://marcimetzger.com/` (`img1.wsimg.com/isteam/...`) were downloaded at high resolution, visually inspected, and stored locally in `public/assets/images/`:

| Local Asset Path | Original Reference Asset (`img1.wsimg.com`) | Section Used | Description |
| :--- | :--- | :--- | :--- |
| `/assets/images/brand-logo.png` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/ef3860da-c224-4ef6-9958-c24833634137.png` | Header & Footer | Original "MARCI METZGER Homes" wordmark logo |
| `/assets/images/hero.jpg` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg` | B. Hero Section | Mountain Falls golf course pond with fountains and Pahrump mountain backdrop |
| `/assets/images/realtor-portrait.jpg` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg` | C. Realtor Intro | Studio portrait of Marci Metzger |
| `/assets/images/sales-achievement.jpg` | `stock/3395` | C. Sales Achievement | Contemporary kitchen with marble island (`GET IT SOLD` block) |
| `/assets/images/seller-guidance.jpg` | `stock/107927` | D. Seller Guidance | Two-story desert residence with pool at twilight (`Don't Just List it...`) |
| `/assets/images/buyer-guidance.jpg` | `stock/771` | D. Buyer Guidance | House keys with red house keychain (`Guide to Buyers`) |
| `/assets/images/search-bg.jpg` | `getty/2223376026` | E. Property Search | Luxury desert home exterior background (`Find Your Dream Home`) |
| `/assets/images/partner-ridge-realty.png` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png` | C. Affiliations Bar | The Ridge Realty Group circular brokerage logo |
| `/assets/images/partner-equal-housing.png` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png` | C. Affiliations Bar | Equal Housing Opportunity official emblem |
| `/assets/images/partner-realtor.jpg` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg` | C. Affiliations Bar | Official REALTOR® member emblem |
| `/assets/images/partner-chamber.jpg` | `ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg` | C. Affiliations Bar | Pahrump Valley Chamber of Commerce member logo |
| `/assets/images/gallery-01.jpg` | `ip/.../4460%20Roseworthy-52.jpg-SMALL.JPG` | F. Photo Gallery | 4460 Roseworthy — Aerial view & desert mountain backdrop |
| `/assets/images/gallery-02.jpg` | `ip/.../5570%20Ailanto-14.jpg-SMALL.JPG` | F. Photo Gallery | 5570 Ailanto — Gated entry & desert landscaping |
| `/assets/images/gallery-03.jpg` | `ip/.../5570%20Ailanto-45.jpg-SMALL.JPG` | F. Photo Gallery | 5570 Ailanto — Covered patio & backyard pool |
| `/assets/images/gallery-04.jpg` | `ip/.../5570%20Ailanto-50.jpg-SMALL.JPG` | F. Photo Gallery | 5570 Ailanto — Aerial estate & pool overview |
| `/assets/images/gallery-05.jpg` | `ip/.../4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG` | F. Photo Gallery | 4787 E Beacon Ridge — Community recreation & tennis courts |
| `/assets/images/gallery-06.jpg` | `ip/.../4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG` | F. Photo Gallery | 4787 E Beacon Ridge — Golf course & sunset mountains |
| `/assets/images/gallery-07.jpg` | `ip/.../4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG` | F. Photo Gallery | 4787 E Beacon Ridge — Residence exterior & three-car garage |
| `/assets/images/service-01.jpg` | `stock/12792` | G. Our Services | Living room interior (`Real Estate Done Right`) |
| `/assets/images/service-02.jpg` | `stock/43920` | G. Our Services | Modern two-story white home (`Commercial & Residential`) |
| `/assets/images/service-03.jpg` | `stock/kayaJdA` | G. Our Services | Real estate advisor shaking hands with clients (`Rely on Expertise`) |

### Note on Missing Assets & Gallery Image Count

- **No original assets are missing.** Every unique photograph and logo present on `https://marcimetzger.com/` was retrieved and included.
- **Why there are 7 unique gallery images (`gallery-01.jpg` to `gallery-07.jpg`):** In the reference website's server-rendered DOM, the GoDaddy `bs-4` carousel renders 11 `<li class="carousel-slide">` elements (`data-index="-2"` through `data-index="8"`) because it clones 4 slides at the start and end for infinite loop wrapping. Inspection of the underlying GoDaddy gallery prop payload confirmed there are **7 unique photographs** (`4460 Roseworthy-52`, `5570 Ailanto-14`, `5570 Ailanto-45`, `5570 Ailanto-50`, `4787 E Beacon Ridge-54`, `4787 E Beacon Ridge-53`, and `4787 E Beacon Ridge-41`). All 7 unique photographs are included without duplicate filler slides.

---

## 5. Key Design & UX Improvements

1. **Clear Section Architecture & Visual Hierarchy:**
   - Reorganized the fragmented GoDaddy blocks into a cohesive 9-part editorial flow (`Header` → `Hero` → `Realtor Profile & Affiliations` → `GET IT SOLD Sales Achievement` → `Seller & Buyer Guidance` → `Property Search` → `Photo Gallery` → `Our Services` → `Call or Visit Contact` → `Footer & Cookie Notice`).
2. **Separated Personal Profile vs. Sales Achievement:**
   - On the original page, the realtor portrait sat in a dark box disconnected from the 3-column `"GET IT SOLD"` row. The redesign pairs Marci Metzger's portrait, credentials, direct phone CTA, and official brokerage/industry badges (`The Ridge Realty Group`, `Equal Housing Opportunity`, `REALTOR®`, `Pahrump Valley Chamber of Commerce`), followed by a dedicated editorial showcase for `"Top Residential Sales Last 5 Years"` (`2021` historical milestone preserved accurately) and the two balanced Seller/Buyer guidance cards.
3. **Interactive Photo Gallery with Keyboard & Lightbox Support:**
   - Replaced the cropped, non-labeled carousel with a 16:9 stage featuring descriptive property captions, `Previous` / `Next` controls, keyboard arrow navigation, interactive thumbnail strip, and a full-screen accessible Lightbox (`Esc` to close, `ArrowLeft` / `ArrowRight` to cycle).
4. **Accessible, Responsive Property Search & Contact Forms:**
   - Added explicit `<label>` elements, keyboard focus indicators, price-range validation (`Min Price` vs. `Max Price`), required-field and email-format validation, and a one-click bridge allowing visitors to transfer their selected listing search filters directly into the Contact inquiry form.

---

## 6. Known Limitations (Honest Front-End Behavior)

- **Property Search (`Find Your Dream Home` / `Search Listings`):**
  - On the live reference website (`https://marcimetzger.com/`), the MLS search widget displays a disabled form (`"This page has a list of available properties, which currently can't be displayed"`). Because no live public IDX/MLS API exists for this standalone assessment, clicking **Search Now** validates the visitor's filter selections (`Location`, `Type`, `Sort By`, `Bedrooms`, `Baths`, `Min Price`, `Max Price`), displays a structured summary of the criteria, clearly states that it is a front-end demonstration, and provides a one-click button to pre-fill those exact criteria into the **Send Message** contact form or call `(206) 919-6886`.
- **Contact Form (`Send Message`):**
  - The contact form validates required fields (`Name`, `Email`, `Message`) and email syntax on the client. Upon submission, it displays a clear confirmation state explaining that the form is running in front-end demonstration mode without a connected email server, while offering a direct `mailto:` fallback link and phone link (`(206) 919-6886`).
