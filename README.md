# Windsong Primary Care — windsongcare.com

Sister site to [windsong-psychiatric](https://github.com/Brandi-Kinard/windsong-psychiatric) (windsongpsych.com). Same stack: React 19 + Vite 6 + react-router-dom 7, plain CSS per component, deployed on Vercel (`vercel.json` with cleanUrls + SPA rewrite).

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
```

## Deploy (same flow as the psych site)

1. Push to a new GitHub repo (e.g. `windsong-care`).
2. Import into Vercel → framework preset: Vite.
3. Add domain `windsongcare.com` (+ `www`) in Vercel → update DNS at the registrar.

## Design system

Tokens live in `src/styles/variables.css`. Warm beige/neutral primary (`#9C7A5B` taupe, `#F3EAE0`/`#FAF7F2` creams, `#E2C7C0` blush pulled from the psych site's navbar), with Windsong teal `#246D80` kept as the secondary tone so the two sites read as a family. Headings: Fraunces (serif). Logotype: Dancing Script, matching the psych site.

## Placeholder checklist (before/soon after launch)

All placeholder content is centralized in **`src/content.js`** and marked `[PLACEHOLDER]`:

- [ ] Confirm practice legal name, phone/fax (currently the psych practice's numbers), and email (`contact@windsongcare.com` mailbox must be created)
- [ ] Confirm which locations offer primary care (currently Huntersville + Fort Mill copied from psych site)
- [ ] Confirm insurance/Medicare language on the homepage trust bar
- [ ] Real copy for hero, services, and about page (all current copy is draft)
- [ ] Felicia's credentials/title, bio, education list on the About page
- [ ] Real photography — swap the Unsplash URLs in `src/content.js` (every image has a graceful beige fallback if a URL fails, so nothing breaks meanwhile)
- [ ] Privacy Policy and Terms pages are stubs — port/adapt from the psych site
- [ ] Contact form currently uses `mailto:`; swap to EmailJS (same pattern as psych site) once a template + inbox are set up
- [ ] Favicon/logo: `public/favicon.svg` is a temporary mark
