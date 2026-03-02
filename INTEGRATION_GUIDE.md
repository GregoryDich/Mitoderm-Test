# Integration Guide: Event Page → Main MitoDerm Site

## Overview

This event page is ready to be integrated as the `/event` route in the main MitoDerm site (`olegtabachnikow/mitoderm`). The main site's Header and Footer are already applied globally via `layout.tsx`, so this page only provides section content.

---

## 6 Steps to Integrate

### Step 1: Remove standalone Navbar/Footer

**Already done** in this repo. The `page.tsx` no longer renders its own header/footer — the main site's layout handles that.

When copying to main site, do NOT copy `Navbar.tsx` and `Footer.tsx` — they exist here only for standalone preview.

### Step 2: Update `navEventList` in main site

**File:** `olegtabachnikow/mitoderm/src/constants.ts`

Replace the current `navEventList` with:

```typescript
export const navEventList: NavItem[] = [
  { text: 'navigation.products', scrollId: ScrollItems.about },
  { text: 'navigation.info', scrollId: ScrollItems.moreInfo },
  { text: 'navigation.agenda', scrollId: ScrollItems.agenda },
  { text: 'navigation.results', scrollId: ScrollItems.gallery },
  { text: 'navigation.contact', scrollId: ScrollItems.contactUs },
];
```

**Add translations** in `messages/he.json`:
```json
{
  "navigation": {
    "products": "מוצרים",
    "info": "מידע נוסף",
    "agenda": "סדר יום",
    "results": "תוצאות",
    "contact": "צור קשר"
  }
}
```

And update `messages/en.json` and `messages/ru.json` accordingly.

**Update section IDs** to match ScrollItems enum values in the event page sections:
- `ScrollItems.about` → `id="about"`
- `ScrollItems.moreInfo` → `id="faq"`
- `ScrollItems.agenda` → `id="agenda"`
- `ScrollItems.gallery` → `id="gallery"`
- `ScrollItems.contactUs` → `id="contact"`

### Step 3: Add Tailwind CSS to main site

Install:
```bash
npm install tailwindcss @tailwindcss/postcss tw-animate-css
```

Update `postcss.config.mjs`:
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

Create `src/styles/event-tailwind.css`:
```css
@import 'tailwindcss' source(none);
@source '../components/sections/event/**/*.{ts,tsx}';
@import 'tw-animate-css';
```

Import it in the event page:
```typescript
import '@/styles/event-tailwind.css';
```

> Note: Using `source(none)` + `@source` scopes Tailwind to only event components, preventing conflicts with existing SCSS styles.

### Step 4: Copy components to main site

Copy from this repo to main site:

```bash
# Components
cp -r src/components/Hero.tsx              → src/components/sections/event/Hero.tsx
cp -r src/components/BenefitGrid.tsx       → src/components/sections/event/BenefitGrid.tsx
cp -r src/components/CourseSelection.tsx   → src/components/sections/event/CourseSelection.tsx
cp -r src/components/InviteSection.tsx     → src/components/sections/event/InviteSection.tsx
cp -r src/components/AgendaAccordion.tsx   → src/components/sections/event/AgendaAccordion.tsx
cp -r src/components/EventDetails.tsx      → src/components/sections/event/EventDetails.tsx
cp -r src/components/UniqueSection.tsx     → src/components/sections/event/UniqueSection.tsx
cp -r src/components/Gallery.tsx           → src/components/sections/event/Gallery.tsx
cp -r src/components/ExosomesIntro.tsx     → src/components/sections/event/ExosomesIntro.tsx
cp -r src/components/StatsSection.tsx      → src/components/sections/event/StatsSection.tsx
cp -r src/components/ContactUs.tsx         → src/components/sections/event/ContactUs.tsx
cp -r src/components/ScrollToTop.tsx       → src/components/sections/event/ScrollToTop.tsx
cp -r src/components/RegistrationModal.tsx → src/components/sections/event/RegistrationModal.tsx
cp -r src/components/Speakers.tsx          → src/components/sections/event/Speakers.tsx
cp -r src/components/VTechTeaser.tsx       → src/components/sections/event/VTechTeaser.tsx

# Data
cp src/lib/workshopContent.ts             → src/lib/workshopContent.ts

# Assets
cp public/images/*.png                    → public/images/event/

# UI components (only if not already using shadcn)
cp -r src/components/ui/                  → src/components/sections/event/ui/
```

After copying, update image paths in components from `/images/` to `/images/event/`.

### Step 5: Update event page in main site

**File:** `olegtabachnikow/mitoderm/src/app/[lang]/event/page.tsx`

Replace with the content from this repo's `src/app/page.tsx`, but:
1. Remove `<Navbar>` and `<Footer>` — layout.tsx handles those
2. Update import paths from `@/components/` to `@/components/sections/event/`
3. Add Next.js metadata generation for SEO

Example:
```typescript
import dynamic from 'next/dynamic';

// Dynamic imports for performance
const Hero = dynamic(() => import('@/components/sections/event/Hero'), { ssr: false });
const BenefitGrid = dynamic(() => import('@/components/sections/event/BenefitGrid'), { ssr: false });
// ... etc

export default function EventPage() {
  // Same content as page.tsx but WITHOUT Navbar/Footer
}
```

### Step 6: Install dependencies

```bash
npm install motion lucide-react sonner embla-carousel-react react-slick @types/react-slick
npm install @radix-ui/react-accordion @radix-ui/react-dialog class-variance-authority clsx tailwind-merge
```

---

## File Structure After Integration

```
olegtabachnikow/mitoderm/
├── src/
│   ├── app/[lang]/event/
│   │   └── page.tsx                         ← UPDATED
│   ├── components/sections/event/           ← NEW
│   │   ├── Hero.tsx
│   │   ├── BenefitGrid.tsx
│   │   ├── CourseSelection.tsx
│   │   ├── ... (all event sections)
│   │   └── ui/ (shadcn components if needed)
│   ├── lib/
│   │   └── workshopContent.ts               ← NEW
│   ├── styles/
│   │   └── event-tailwind.css               ← NEW
│   └── constants.ts                         ← UPDATED (navEventList)
├── public/images/event/                     ← NEW
│   ├── logo.png, hero.png
│   ├── speaker1.png, speaker2.png, speaker3.png
│   ├── unique.png, product.png
└── messages/
    ├── he.json                              ← UPDATED
    ├── en.json                              ← UPDATED
    └── ru.json                              ← UPDATED
```

---

## Verification Checklist

- [ ] `npm run build` passes
- [ ] `/he/event` renders all sections
- [ ] Main site header shows at top with event navigation
- [ ] Main site footer shows at bottom
- [ ] Section scroll navigation works
- [ ] Course variant switching (990/180/480) works
- [ ] Registration modal opens and validates
- [ ] Mobile responsive + burger menu
- [ ] RTL layout correct
- [ ] Images load from `/images/event/`
