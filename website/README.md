# Eagle Eye GPS — Website (Phase 1)

Marketing site for **Eagle Eye GPS (Omesh Automation)**, built from the client's
*Website Layout & Phase 1 Copy Deck*.

Designed & built by **[BlackPrism](https://blackprism.in)**.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react · Deploy on Vercel

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are statically generated)
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage — 7 blocks (hero, trust strip, product grid, dashcam spotlight, why choose, industries, lead form) |
| `/products/personal-vehicle-tracking` | Product 1 |
| `/products/advance-fleet-management` | Product 2 |
| `/products/school-bus-tracking` | Product 3 — SmartBus Lite / Premium tabs, promo video, shared upgrades |
| `/products/ais-140-trackers` | Phase 2 placeholder (Mercyda Track & Pauldea Tracker) |
| `/products/field-employee-tracking` | Phase 2 "Coming Soon" |
| `/solutions` | Industries We Serve (7 verticals, anchor-linked) |
| `/about`, `/contact` | Company + contact/map |

## Where to edit content

All copy lives in `src/data/` — no need to touch components for text changes:

- `site.ts` — phone, WhatsApp, email, address, login URL, nav menu
- `products.ts` — Personal & Fleet product copy, dashcam blocks, homepage product cards
- `schoolbus.ts` — SmartBus Lite / Premium features and upgrades
- `solutions.ts` — industry verticals

Phase 2: when AIS-140 / Field Employee copy arrives, replace the `PhaseTwoPage` usage in
`src/app/products/<slug>/page.tsx` with `ProductTemplate` and a new entry in `products.ts`,
then remove the `badge` from `navProducts` in `site.ts`.

## Lead form

`src/components/EnquiryForm.tsx` validates the 4 fields and opens WhatsApp
(`+91 96355 54473`) with the enquiry pre-filled — no backend required. To also capture leads
in email/CRM, replace `handleSubmit` with a POST to an API route or form service.

## Assets

Images in `public/images` were taken from the client's brochures (Features, SmartBus Lite,
SmartBus Premium PDFs) and stills from the SmartBus promo video. `public/video/smartbus-promo.mp4`
is a web-compressed copy of the supplied WhatsApp video (loaded only on play).
