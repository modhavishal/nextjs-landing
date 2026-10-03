# forma | Next.js Landing Page

A modern, responsive SaaS landing page built with Next.js (App Router), React, TypeScript and Tailwind CSS.

**Live demo:** https://YOUR-VERCEL-LINK.vercel.app

## Screenshots

<img src="docs/home.png" width="800" alt="forma landing page, light theme" />
<img src="docs/dark.png" width="800" alt="forma landing page, dark theme" />
<img src="docs/mobile.png" width="300" alt="forma landing page on mobile" />

## Features

- Floating navigation bar with a mobile menu
- Bold hero section with clear calls to action
- Product, how it works and pricing sections
- Light and dark theme toggle
- Fully responsive layout for desktop, tablet and mobile
- Server components by default, with client components only where state is needed
- Optimized fonts with `next/font` and SEO metadata

## Tech Stack

- Next.js (App Router)
- React and TypeScript
- Tailwind CSS

## Project Structure

```text
src/
  app/                 Layout, metadata, global styles and home page
  components/
    layout/            Navbar and footer
    sections/          Hero, features, how it works and pricing
    ui/                Reusable UI pieces
```

## Getting Started

### Requirements

- Node.js 20.9 or newer
- npm

### Install and run

```bash
git clone https://github.com/modhavishal/nextjs-landing.git
cd nextjs-landing
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Design Credit

DESIGN-CREDIT-LINE

## Notes

This is a demo project with placeholder content. The product name, text and pricing are not real.

## Author

Built by [Vishal Modha](https://github.com/modhavishal), React, Next.js and TypeScript developer.