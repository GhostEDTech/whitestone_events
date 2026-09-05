# Whitestone Events Place — Website

A three-page marketing and booking site for Whitestone Events Place, an
events venue in Ikeja, Lagos. Built with Vite, React, React Router, Tailwind
CSS, and Framer Motion.

## Pages

- **Home** (`/`) — hero, hall showcase, event programme, booking CTA
- **What We Host** (`/services`) — detailed breakdown of all six event types
- **Contact & Booking** (`/contact`) — booking form that hands off to
  WhatsApp or email, plus direct contact details and a map

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Before you launch

A few placeholders need swapping for the real thing:

- **WhatsApp number** — currently `2348093600009` in
  `src/components/Navbar.jsx`, `src/components/WhatsAppFAB.jsx`,
  `src/pages/Home.jsx`, and `src/pages/Contact.jsx` (search for that
  number to update it everywhere at once).
- **Booking email** — `bookings@whitestoneplace.com` in
  `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- **Photography** — the hero and hall sections currently use a generated
  marble-vein texture in place of photography. Swap in real venue photos
  once available for a more grounded first impression.
- **Map embed** — the Google Maps iframe in `src/pages/Contact.jsx` uses a
  keyless embed URL built from the address; replace with an official
  embed if you have a Google Maps API key.

## Booking flow

The Contact page form does not submit anywhere on its own — it composes a
message from whatever the visitor filled in and hands it to either:

- `wa.me` (WhatsApp), pre-filled and opened in a new tab, or
- a `mailto:` link, pre-filled with subject and body

No backend or form service is required for this to work.
