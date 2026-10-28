# Image asset guide

This folder stores the public-facing visuals for the Energetics World site. Assets in this directory are served from the website root and referenced in the app using paths such as `/images/products/example.jpg`.

## Folder structure

- `logo/` — company brand and logo files
- `products/` — product cards, catalog visuals and catalogue imagery
- `services/` — service and feature images
- `reference/` — legacy or source images retained for review; these should not be shown in the public site unless checked and approved

## Usage notes

- Keep filenames descriptive and lowercase.
- Prefer optimized web formats such as `.webp`, `.jpg`, `.png` or `.svg`.
- Compress images for fast page loads and mobile performance.
- Do not reuse legacy images from `reference/` unless they have been reviewed for outdated or sensitive details.

## Current app references

- The main logo is located at `public/images/logo/energetics-logo.png` and is used by `src/components/common/Logo.jsx`.
- Product image paths are managed in `src/data/products.js`.
- Service-related imagery is referenced from `src/pages/Services.jsx`.

When replacing an asset, keep the existing filename if the app references it directly, or update the app reference to match the new file name.
