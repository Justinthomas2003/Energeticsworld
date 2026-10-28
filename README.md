# EnergeticsWorld — HTML to React Website Redesign

A modern frontend redesign of the Energetics World website, migrating a traditional HTML-based website into a structured, component-based React application.

**Technology:** React · JavaScript · Vite · CSS

## Overview

EnergeticsWorld is a frontend redevelopment project based on the existing website of Energetics Eco Technologies LLP, an energy solutions company focused on solar energy products and energy efficiency.

The project transforms the original HTML-based website structure into a React application with reusable components, organized page modules, structured content data, and centralized styling.

The objective is to improve code organization, maintainability, and the development workflow while recreating the company's website experience.

## Project Links

- **Live Demo:** [Add your deployed website URL]
- **GitHub Repository:** https://github.com/Justinthomas2003/Energeticsworld
- **Reference Website:** https://energeticsworld.com/about-us.html

## Screenshots

Add screenshots of the actual React implementation to showcase the completed website.

| Page | Screenshot |
|---|---|
| Homepage | `docs/screenshots/homepage.png` |
| About Us | `docs/screenshots/about.png` |
| Products | `docs/screenshots/products.png` |
| Services | `docs/screenshots/services.png` |
| Contact | `docs/screenshots/contact.png` |
| Mobile layout | `docs/screenshots/mobile.png` |

Create these screenshot files before adding them to the repository.

## Features

The project includes page modules and reusable components for:

- **Company pages:** Home, About, Contact, Products, and Services.
- **Product and service details:** Dedicated detail-page components.
- **Reusable UI components:** Buttons, breadcrumbs, section headings, cards, and calls to action.
- **Navigation:** Separate desktop and mobile navigation components.
- **Product browsing:** Product card, search, and filter components.
- **Contact interface:** Contact form and reusable form fields.
- **Theme management:** Theme context, custom hook, and theme toggle.
- **Content organization:** Separate JavaScript data files for products, services, and shared content.
- **Page metadata:** A reusable document metadata hook.
- **Testing structure:** An application test file and test setup.

Feature availability and behavior should be verified against the running application before claiming full functionality.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript (JSX) | Application logic and UI composition |
| Vite | Development server and production build |
| CSS | Application styling |
| ESLint | Code quality and linting |
| Git and GitHub | Version control and source hosting |
| Vercel | Deployment configuration, if deployed through Vercel |

## Project Structure

```text
EnergeticsWorld/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── products/
│   │   ├── reference/
│   │   └── services/
│   ├── favicon.svg
│   ├── icons.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── products/
│   │   └── services/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── test/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles.css
├── .github/
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

### Important directories

- `src/components/common/` — Shared UI elements such as buttons, breadcrumbs, headings, and accordions.
- `src/components/layout/` — Header, footer, and desktop/mobile navigation.
- `src/components/forms/` — Contact form and reusable form fields.
- `src/components/products/` — Product cards, search, and filtering components.
- `src/components/services/` — Service-specific UI components.
- `src/context/` — Shared theme state and context.
- `src/data/` — Product, service, and website content data.
- `src/hooks/` — Reusable application hooks, including document metadata.
- `src/pages/` — Individual website pages and detail views.
- `src/test/` — Application test and test setup files.
- `public/images/` — Static images organized by purpose.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Justinthomas2003/Energeticsworld.git
   ```

2. Enter the project directory:

   ```bash
   cd Energeticsworld
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint using the project's configured script, if available:

```bash
npm run lint
```

## Testing

The project contains an application test file and a test setup file under `src/test/`.

Run the configured test command from `package.json` once the testing script and dependencies have been confirmed.

## Design Reference and Attribution

The existing Energetics World website was used as the reference for this frontend redesign:

https://energeticsworld.com/about-us.html

This repository represents a redevelopment project and should not be presented as the company's official website unless authorized by the company. Credit third-party assets and libraries according to their applicable terms.

## Project Scope

This project focuses on frontend redevelopment, converting a traditional HTML-based website into a React application, organizing reusable UI components, and maintaining a structured frontend codebase.

Backend services, APIs, and business integrations should be documented separately if implemented.

## Author

**Justin Sebastian Thomas**

GitHub: https://github.com/Justinthomas2003

## License

No license has been specified in this README. Add an appropriate license after deciding how the project may be reused or redistributed.
