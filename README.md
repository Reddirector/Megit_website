# Megit Website

Official marketing site for the Megit Android app — built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- ✅ Fully responsive (mobile-first)
- ✅ Dark + Light mode toggle (dark is default)
- ✅ Smooth Framer Motion animations
- ✅ Multi-page React Router setup
- ✅ Google OAuth verification-ready Privacy Policy
- ✅ Google API Services Limited-Use Disclosure
- ✅ Working contact form (opens user's email client — no backend)
- ✅ One-click APK download from GitHub release
- ✅ Black / White / Purple brand palette
- ✅ All social links: Email, GitHub, Instagram, X
- ✅ Made-in-India / DPDP Act 2023 compliant

## Quick Start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to /dist
npm run preview      # preview production build
```

## Deploy

### Vercel (recommended)
1. Push this folder to a GitHub repo
2. Import on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no config needed (`vercel.json` handles SPA routing)
4. Update `SITE.domain` in `src/data/site.js` after deploy

### Netlify
1. Drag-and-drop the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. `_redirects` file is already included for SPA routing

## Important: After Deployment

Once your domain is live (e.g. `megit.vercel.app`):
1. Edit `src/data/site.js` and update `SITE.domain`
2. In Google Cloud Console → OAuth consent screen, add:
   - **App homepage**: `https://your-domain.vercel.app/`
   - **Privacy Policy URL**: `https://your-domain.vercel.app/privacy`
   - **Terms of Service URL**: `https://your-domain.vercel.app/terms`
3. Verify domain ownership in Google Search Console
4. Submit for OAuth verification

## Project Structure

```
src/
├── components/      # Navbar, Footer, PhoneMockup, BackgroundFX, ThemeContext
├── pages/           # Home, Features, Download, Privacy, Terms, GoogleDisclosure, Contact
├── data/site.js     # Centralized config (links, version, email)
└── index.css        # Tailwind + custom utilities
public/
├── screenshots/     # Extracted from app demo videos
└── *.mp4            # Demo videos
```

## License
MIT © Aditya Kumar
# Megit-website
