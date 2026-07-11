# Windsong Onsite Primary Care — windsongonsite.com

Marketing site for **Windsong Onsite Primary Care**, a sister practice to
[windsong-psychiatric](https://github.com/Brandi-Kinard/windsong-psychiatric)
(windsongpsych.com — Windsong Family & Psychiatric Associates). Same stack and
visual family as the psych site.

- **Live:** [windsongonsite.com](https://windsongonsite.com) (primary).
  `windsongprimary.com` redirects to it.
- **Stack:** React 19 + Vite 6 + react-router-dom 7, plain per-component CSS,
  deployed on Vercel.

## Local development

```bash
npm install
npm run dev       # Vite dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

No test or lint scripts are configured. Dependencies: `react` / `react-dom` 19,
`react-router-dom` 7, `@emailjs/browser` (contact form),
`@lottiefiles/dotlottie-react` (the animated tree in the homepage CTA).

## Deployment

Deployed on Vercel with the Vite preset. `vercel.json` sets `cleanUrls` and a
catch-all SPA rewrite (`/(.*) → /index.html`) so client-side routes resolve on
direct load / refresh. Domains and DNS are managed in Vercel's DNS panel for the
domain (see **Email routing** below).

## Site structure

Routes are defined in `src/App.jsx` (a `<Router>` with a `ScrollToTop` helper;
unknown paths redirect to `/`):

| Route | Page |
|-------|------|
| `/` | Home |
| `/meet-felicia-davis` | About / provider (`pages/About.jsx`) |
| `/services` | Services |
| `/contact` | Contact |
| `/privacy` | Privacy Policy (`pages/Legal.jsx`, `kind="privacy"`) |
| `/terms` | Terms of Service (`pages/Legal.jsx`, `kind="terms"`) |
| `*` | redirect → `/` |

Shared components in `src/components/`: `Navbar`, `Footer`, `Insurance`
(insurance-acceptance logo row), and `SmartImage` (renders an image with a
graceful labeled beige fallback if the source fails to load).

**Homepage sections** (`src/pages/Home.jsx`, in order): hero → trust bar →
insurance-acceptance section (`<Insurance />`) → "What We Do" auto-scrolling
image carousel → provider ("Meet the Provider") → locations → CTA band. Note:
patient **testimonials live on the Services page** (`src/pages/Services.jsx`),
not the homepage.

## Design system

Tokens live in `src/styles/variables.css` — a sister palette to the psych site:

- **Primary — warm neutrals:** taupe brown `#9C7A5B` (buttons/accents), hover
  `#82644A`, light beige `#F3EAE0`, warm cream `#FAF7F2`, blush `#E2C7C0`
  (carried over from the psych site's navbar).
- **Secondary — Windsong teal** (family tie-in): `#246D80`, `#006B6B`,
  light `#E5F2F6`.
- **Typography:** Fraunces (serif) for headings, Dancing Script for the
  logotype/script accents, system sans-serif for body.
- Plus shared spacing (`--spacing-xs`…`--spacing-2xl`), warm-tinted shadows,
  radii, and transition tokens.

## Content management

**`src/content.js` is the single source of truth** for practice info (name,
phone, fax, email, sister-site link), locations, image references, services,
and testimonials. Make text/data edits here rather than in the page components.
Images are served as local files from `public/` (`hero.png`, `provider.png`,
`services.png`, `carousel-*.png`), referenced by path in `content.js`.

## Contact form (EmailJS)

`src/pages/Contact.jsx` sends real email via **EmailJS** (`@emailjs/browser`) —
it does **not** use `mailto:`. Config constants sit at the top of the file:

- `EMAILJS_SERVICE_ID = 'service_idvcxum'` — shared with the psych site.
- `EMAILJS_TEMPLATE_ID = 'template_znq7ap5'` — **dedicated** "Windsong Onsite
  Primary Care Contact Us" template, scoped to this form's fields (name, email,
  phone, message, date, time) with its **"To Email" set to `{{to_email}}`**.
- `EMAILJS_PUBLIC_KEY = 'wFQLtLxDwWnkGF0TF'`
- `RECIPIENT_EMAIL = 'contact@windsongonsite.com'` (passed as `to_email`).

> ⚠️ **Do not point this at the psych site's intake template
> (`template_xjaha0n`).** That was tried during setup and caused misrouted
> emails (its "To Email" is hardcoded to the psych inbox) with unrelated blank
> fields from the multi-step intake form. The dedicated `template_znq7ap5`
> exists specifically to avoid that.

The handler shows a success confirmation on send, a fallback error message
(call/email directly) on failure, and disables the submit button while a request
is in flight.

## Email routing (ImprovMX + Vercel DNS)

`contact@windsongonsite.com` is **not a real mailbox** — it's an
[ImprovMX](https://improvmx.com) forwarding alias. Mail to it forwards to:

- `contact@windsongpsychiatric.com`
- `office@windsongpsychiatric.com`
- `windsongpsychiatry@gmail.com`

The supporting **DNS records (ImprovMX MX + SPF TXT) are managed in Vercel's DNS
panel** for the domain. If forwarded email stops arriving, check those records
there first.

## Still open (`[PLACEHOLDER]` in `content.js` / draft copy)

Much of the original v1 scaffold is now done (real photography, testimonials,
insurance section, EmailJS contact form, real phone/fax, starter Privacy/Terms).
Remaining items:

- Confirm the practice's **legal entity name** (`legalName`).
- Confirm **which locations** offer primary care (currently Huntersville, NC +
  Fort Mill, SC, carried over from the psych site).
- The six **service descriptions** and the homepage **provider bio** are still
  draft `[PLACEHOLDER]` copy.
- Confirm the **Medicare / insurance** wording in the homepage trust bar.
- **Privacy Policy & Terms** are concise starter policies — have counsel review,
  and pair the privacy page with a proper HIPAA Notice of Privacy Practices
  before launch.
- `public/favicon.svg` is a temporary mark.
