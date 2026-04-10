# NSG Consultancy — Next.js + Tailwind CSS Website

A premium, dark-themed corporate website for a global tax consultancy firm. Built with **Next.js 14 (App Router)**, **JavaScript**, and **Tailwind CSS**.

## Pages

| Route        | File                        | Description                              |
|--------------|-----------------------------|------------------------------------------|
| `/`          | `app/page.js`               | Homepage — hero, stats, services, CTA    |
| `/services`  | `app/services/page.js`      | Services — tabbed service details        |
| `/about`     | `app/about/page.js`         | About — values, team, offices            |
| `/insights`  | `app/insights/page.js`      | Insights — filterable article grid       |
| `/contact`   | `app/contact/page.js`       | Contact — form, office hubs, FAQ         |

## Design System

### Colors
- **Primary Background**: `#0B1A2E` (deep navy)
- **Surface/Card**: `#0F2240`
- **Border**: `#1C3A5C`
- **Accent (Gold)**: `#D4A843`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A8B8CC`
- **Text Muted**: `#6B7F99`

### Typography
- **Display / Headlines**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

### Reusable Classes (defined in `globals.css`)
- `.btn-primary` — Gold filled button
- `.btn-secondary` — White outlined button
- `.btn-outline-accent` — Gold outlined button
- `.card-surface` — Dark card with border
- `.card-surface-hover` — Card with hover state
- `.section-label` — Gold uppercase tracking label
- `.section-title` — Large serif heading
- `.container-main` — Centered max-width container
- `.noise-texture` — Subtle grain overlay

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Customization

All theme tokens (colors, fonts, spacing) are defined in:
- `tailwind.config.js` — Tailwind theme extensions
- `app/globals.css` — CSS variables and utility classes

To swap fonts, update the Google Fonts import in `globals.css` and the `fontFamily` in `tailwind.config.js`.

## Project Structure

```
nsg-consultancy/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.js            # Root layout (Navbar + Footer)
│   ├── page.js              # Homepage
│   ├── services/page.js     # Services page
│   ├── about/page.js        # About page
│   ├── insights/page.js     # Insights/blog page
│   └── contact/page.js      # Contact page
├── components/
│   ├── Navbar.js            # Sticky navigation
│   ├── Footer.js            # Site footer
│   ├── SectionLabel.js      # Gold uppercase label
│   ├── ServiceCard.js       # Service feature card
│   ├── StatCard.js          # Animated counter stat
│   └── TestimonialCard.js   # Quote testimonial card
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── next.config.js
└── package.json
```
