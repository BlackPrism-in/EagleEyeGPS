# Eagle Eye GPS — Website

Marketing website for **Eagle Eye GPS (Omesh Automation)**, based in Siliguri.
Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 and lucide-react. Hosted on Vercel.

## Run locally

Use Node.js 22 LTS and npm. Run these commands from this `website` directory:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the production build:

```bash
npm run build
npm start
```

## Pages

| Route                                 | Content                                                                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `/`                                   | Interactive tracking preview, product discovery, app showcase, dashcam preview, industries, setup, FAQ and enquiry form |
| `/products/personal-vehicle-tracking` | Personal vehicle tracking features and optional dashcam upgrade                                                         |
| `/products/advance-fleet-management`  | Fleet management features and optional dashcam upgrade                                                                  |
| `/products/school-bus-tracking`       | SmartBus Lite / Premium comparison, apps, video and hardware upgrades                                                   |
| `/products/ais-140-trackers`          | AIS-140 trackers and product enquiry                                                                                    |
| `/products/field-employee-tracking`   | Field employee tracking and product enquiry                                                                             |
| `/solutions`                          | Seven industry solutions with direct section links                                                                      |
| `/about`                              | Company story, mission and approach                                                                                     |
| `/contact`                            | Contact options, enquiry form and office map                                                                            |

## UI and content

- `src/app/globals.css`: shared palette, typography, component styles, responsive layouts and reduced-motion support.
- `src/app/page.tsx`: homepage layout and introductory copy.
- `src/components/TrackingPreview.tsx`: interactive personal, fleet and school-bus preview. Map, vehicle details and metrics are explicitly illustrative; this is not connected to customer tracking data.
- `src/components/VideoShowcase.tsx`: road / cabin product image preview.
- `src/components/SmartBusTiers.tsx`: keyboard-accessible SmartBus plan tabs.
- `src/components/Faq.tsx`: native FAQ accordions.
- `src/data/site.ts`: contact details, WhatsApp number, client login URL and navigation.
- `src/data/products.ts`: product specifications and dashcam feature copy.
- `src/data/schoolbus.ts`: SmartBus plans and upgrades.
- `src/data/solutions.ts`: industry descriptions and highlights.

The existing logo, brochure screenshots, product photos and video remain in `public/`. The promo video loads only when played. No new runtime dependencies are needed for the UI refresh.

## Quote form

`src/components/EnquiryForm.tsx` validates the four fields and opens a prepared WhatsApp enquiry to **+91 96355 54473**. Visitors review and send the message in WhatsApp. If a popup is blocked, the confirmation panel provides a direct link to open the prepared message again. No enquiry is submitted to a backend.

Product pages preselect the relevant solution. Inputs have associated labels and validation messages, and the first invalid field receives focus.

Originally designed and built by [BlackPrism](https://blackprism.in).
