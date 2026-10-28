# EnergeticsWorld — React Website Redesign

A responsive frontend redesign of the Energetics World website, migrating the existing HTML-based website into a component-based React application.

## Overview

EnergeticsWorld is a frontend project inspired by the website of Energetics Eco Technologies LLP, an energy solutions company focused on solar energy products and services.

The project uses reusable React components, organized pages, and shared content modules to improve maintainability, navigation, and user experience.

## Features

- Home, About, Services, Products, and Contact pages
- Reusable navigation, header, footer, and UI components
- Product search and filtering interfaces
- Product and service detail pages
- Contact form with input validation
- FAQ accordion
- Theme toggle
- Responsive layouts
- Custom not-found page
- Client-side routing

*Confirm each feature works in the deployed version before presenting it as complete.*

## Technology Stack

- React 19
- Vite 8
- React Router 7
- JavaScript (ES modules)
- CSS
- Lucide React
- ESLint 10
- Vercel deployment configuration

## Project Structure

```text
EnergeticsWorld/
├── public/
│   └── images/
│       ├── logo/
│       ├── products/
│       ├── reference/
│       └── services/
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
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/Justinthomas2003/Energeticsworld.git
cd Energeticsworld
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Code Quality

```bash
npm run lint
```

The production build is generated in the `dist/` directory.

## Live Demo

**Live website:** Add the verified deployment URL here after deploying.

## Screenshots

Add screenshots of the finished website to a `docs/screenshots/` folder and link them here.

Suggested screenshots:
- Home page
- About page
- Services page
- Products page
- Contact page
- Mobile layout

## Reference Website

The redesign uses the existing Energetics World website as a reference:

https://energeticsworld.com/about-us.html

This is a frontend redesign project and should not be interpreted as an official company website unless authorized.

## Author

**Justin Sebastian Thomas**

GitHub: https://github.com/Justinthomas2003

## License

No license has been specified yet. Add a license if you intend to permit reuse or redistribution.
