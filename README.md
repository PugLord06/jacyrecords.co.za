# Jacy Records Portfolio

A high-fidelity, modular Next.js web application for Jacy Records Studio. Built with Next.js 15, React, and Tailwind CSS v4, featuring a brutalist, "Obsidian & Violet" dark-mode design system.

## Features

- **Next.js App Router**: Utilizing the latest features of Next.js for robust, server-rendered components.
- **Tailwind CSS v4**: Modern CSS variables-based styling for dynamic themes.
- **Strictly Modular Components**: The entire application is structured into small, reusable components to ensure no file exceeds 150 lines of code. This provides extreme maintainability.
- **Brutalist Design System**: JetBrains Mono and Anton typography, deep void backgrounds, and high-contrast electric purple accents.
- **Firebase Ready**: Configured for Firebase Hosting deployment.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- Start editing the pages by modifying files in `src/app/`. The page auto-updates as you edit the file.
- Add components in `src/components/`. We strictly adhere to a < 150 lines of code per file limit.
- Global styles and Tailwind theme variables are configured in `src/app/globals.css`.

## Deployment

This project can be deployed easily to Firebase Hosting.

1. Ensure you have the Firebase CLI installed: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase if you haven't already: `firebase init hosting`
4. Build the site: `npm run build`
5. Deploy the site: `firebase deploy --only hosting`

(Alternatively, deploy via Vercel for native Next.js hosting support).
