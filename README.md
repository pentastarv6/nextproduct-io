# NextProduct.io

**Production-ready, SEO-optimized, multilingual landing page website built with Next.js App Router, TypeScript, and Tailwind CSS.**

Live site: [https://nextproduct.io](https://nextproduct.io)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Inter + Plus Jakarta Sans (Google Fonts) |
| Deploy | GitHub Pages / Vercel |
| Export | Static (`output: 'export'`) |

---

## Project Structure

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx       # Language-scoped layout (HTML lang, JSON-LD)
│   │   └── page.tsx         # Homepage with all sections
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Redirects / → /en
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── globals.css          # Global styles + Tailwind directives
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Responsive navbar with language switcher
│   │   └── Footer.tsx        # Footer with links and contact info
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section with dual CTA
│   │   ├── Services.tsx      # Product Management Advisory
│   │   ├── LearningPrograms.tsx  # AI & Digital Learning
│   │   ├── DigitalGrowth.tsx # Digital Growth Services
│   │   ├── About.tsx         # About section with stats
│   │   └── Contact.tsx       # Contact form + info
│   └── ui/
│       └── WhatsAppButton.tsx  # Floating WhatsApp button
├── i18n/
│   ├── config.ts             # Locale configuration
│   ├── index.ts              # Translation loader
│   └── locales/
│       ├── en.json           # English translations
│       └── it.json           # Italian translations
└── lib/
    ├── metadata.ts           # SEO metadata builder
    └── structured-data.ts    # JSON-LD schemas
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/nextproduct-io.git
cd nextproduct-io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/en`.

- English: [http://localhost:3000/en](http://localhost:3000/en)
- Italian: [http://localhost:3000/it](http://localhost:3000/it)

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Next.js. Click **Deploy**.

> For Vercel, remove `output: 'export'` from `next.config.js` to enable server-side features (ISR, API routes, etc.).

### Deploy to GitHub Pages

The project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

**Steps:**

1. Push to the `main` branch.
2. In your GitHub repo → **Settings → Pages → Source**: select **GitHub Actions**.
3. The workflow builds and deploys automatically on every push to `main`.

> **Important:** For GitHub Pages, if your repo is not at the root domain, add `basePath` to `next.config.js`:
> ```js
> basePath: '/your-repo-name',
> ```

---

## Adding a New Language

1. Create a new translation file: `src/i18n/locales/fr.json` (copy from `en.json` and translate).
2. Add the locale to `src/i18n/config.ts`:
   ```ts
   export const locales = ['en', 'it', 'fr'] as const;
   export const localeNames = {
     en: 'English',
     it: 'Italiano',
     fr: 'Français',
   };
   ```
3. That's it. The navbar switcher, routes, and metadata update automatically.

---

## Adding a New Service or Program

Edit the relevant array in `src/i18n/locales/en.json` and `src/i18n/locales/it.json`:

- **Product Management services**: `services.items[]`
- **Learning programs**: `learning.items[]`
- **Digital growth services**: `digitalGrowth.items[]`

Add a matching icon in the corresponding section component (`Services.tsx`, `LearningPrograms.tsx`, `DigitalGrowth.tsx`).

---

## Adding a Blog Later

1. Create `src/app/[lang]/blog/` directory.
2. Add blog posts as MDX files or fetch from a headless CMS (Contentful, Sanity, Notion API).
3. Add translations for `blog` navigation in `en.json` / `it.json`.
4. Update `Navbar.tsx` to include the blog link.
5. Update `sitemap.ts` to include blog post URLs.

---

## SEO & Metadata

- Metadata is generated per-language in `src/lib/metadata.ts`
- JSON-LD structured data (Organization + ProfessionalService) injected in `[lang]/layout.tsx`
- `hreflang` alternate links set via Next.js `alternates` in metadata
- `robots.txt` lives in `public/robots.txt`
- Sitemap auto-generated at `/sitemap.xml` via `src/app/sitemap.ts`

---

## Contact Form Integration

The contact form in `Contact.tsx` currently simulates a submission. To wire up a real email backend:

1. **Resend** (recommended): `npm install resend` → create an API route at `src/app/api/contact/route.ts`
2. **Web3Forms**: Free — replace the `handleSubmit` function with a `fetch` to `https://api.web3forms.com/submit`
3. **Formspree**: Replace form action with your Formspree endpoint

---

## Environment Variables

Create a `.env.local` for future integrations:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx

# CRM / Mailchimp
MAILCHIMP_API_KEY=xxxxxxxxxxxx
```

---

## Performance & Lighthouse

The site is optimized for:
- Static site generation (SSG) — all pages pre-rendered at build time
- Google Fonts loaded via CSS import with `display=swap`
- Semantic HTML with single H1 per page
- ARIA labels on all interactive elements
- Color contrast compliant with WCAG AA
- Target: Lighthouse Performance 90+, SEO 100, Accessibility 95+

---

## License

Private & proprietary — NextProduct.io
