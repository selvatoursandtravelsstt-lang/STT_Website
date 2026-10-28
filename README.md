# Selva Tours and Travels

A responsive informational website for Selva Tours and Travels, based in Coimbatore, Tamil Nadu. Built with React, Vite, React Router, and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```sh
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Production build

```sh
npm run build
npm run preview
```

The production site is emitted to `dist/`.

## Business configuration

Update `src/config/business.js` with the confirmed business phone, WhatsApp number (international format, digits only), email, street address, map link, operating hours, and whether corporate cab bookings are offered. The enquiry form prepares a WhatsApp message or email draft; it does not send data to a server. At least a verified WhatsApp number or email address is needed to activate form messaging.

Suggested destinations and supported trip durations are maintained in `src/data/destinations.js`. Tariff categories and vehicle types are maintained in `src/data/tariffs.js`. They are enquiry prompts, not confirmed package offers or published rates. Confirm destinations, vehicle capacities, availability, tariff rules, inclusions, and route details with the business before presenting them as final offers. No prices, customer reviews, or business statistics have been fabricated.

Tour duration routes, illustrative destinations, vehicle categories, and editable pricing fields are maintained in `src/data/tourPackages.js`. The eight duration pages share one page and dialog implementation. Routes are suggestions only, and all vehicle rates and availability remain unconfirmed until business-approved details are added. Set `websiteUrl` in `src/config/business.js` to the confirmed production site origin to emit canonical URLs; no canonical domain is assumed by default.

Replace `https://www.example.com` in `public/robots.txt` and `public/sitemap.xml` with the production domain before deployment. The app does not set a canonical URL until the production domain is confirmed. `public/_redirects` provides a single-page-app fallback for Netlify-compatible static hosting. Update the favicon in `public/selva-mark.svg` with the approved logo when available.

## Business details required before launch

- Verified phone number and WhatsApp number
- Verified business email address
- Full business address and map URL, if the business wants these published
- Business hours, if they should be displayed
- Confirmed availability for each travel and tour service, including corporate cab bookings
- Vehicle types, seating capacities, tariff rates, and applicable pricing policies
- Approved destination offerings, itinerary details, inclusions, exclusions, and availability
- Production domain and approved brand logo

## Project structure

- `src/components/` — shared navigation, footer, enquiry form, and destination components
- `src/config/` — central business details and contact link helpers
- `src/data/` — editable destination, duration, tour route, and tariff prompt data
- `src/pages/` — separate routed page components
- `src/styles/` — global theme and page/component styles
- `public/` — static SEO and branding assets
