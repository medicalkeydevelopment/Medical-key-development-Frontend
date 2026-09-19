# Medical Key — Healthcare Platform Homepage

A production-quality Next.js (App Router) recreation of the Medical Key healthcare
homepage, built with TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create a production build:

```bash
npm run build
npm run start
```

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom brand tokens in `tailwind.config.ts`)
- lucide-react for icons
- Inter (via `next/font/google`)

## Structure

```
src/
├── app/                  Route segments (page.tsx per section: doctors, hospitals, ...)
├── components/
│   ├── layout/           TopBar, Header, Footer
│   ├── home/             Homepage sections (Hero, SearchPanel, Services, Campaigns, ...)
│   └── ui/                Reusable primitives (Button, cards, SectionHeader)
├── data/                 Typed content arrays (services, campaigns, offers, testimonials, stats, links)
└── lib/                  Shared utilities (cn helper)
```

Content is data-driven — edit the files under `src/data` to change copy, add
services, campaigns, offers, or testimonials without touching component code.

## Brand tokens

| Token          | Value     |
| -------------- | --------- |
| Brand blue     | `#2E3192` |
| Medical red    | `#ED1B24` |
| Light surface  | `#F5F8FF` |
| Body text      | `#333333` |
| Muted text     | `#666666` |

These live in `tailwind.config.ts` under `theme.extend.colors` as `brand` and
`medred`, and can be reused as `bg-brand`, `text-medred`, `bg-brand-50`, etc.

## Images

The hero composition, campaign art, and app-download mockups currently use
lightweight CSS/SVG placeholders so the build never depends on external image
URLs that could break. Drop real photography into the matching folders under
`public/images/` (`hero/`, `campaigns/`, `offers/`, `testimonials/`, `app/`)
and swap the placeholder markup for `next/image` — the components are
structured so that's a small, isolated change per section.

## Notes on interactivity implemented

- Header: mobile hamburger menu, "More" dropdown
- Hero search panel: tabbed category switcher (Find Doctor / Hospital / Diagnostics / Medicines / Ambulance)
- Testimonials: swipeable dot-carousel on mobile, 3-up grid on desktop
- All cards, buttons, and links have hover, focus-visible, and active states
