# EnergeticsWorld — React Website Redesign

A responsive React-based frontend redesign of the Energetics World website, inspired by Energetics Eco Technologies LLP.

## Live Demo

**Website:** https://energeticsworld.vercel.app

**GitHub Repository:** https://github.com/Justinthomas2003/Energeticsworld

## Overview

EnergeticsWorld is a frontend redesign project that transforms an existing HTML-based website into a component-based React application.

The application uses reusable components, organized pages, and structured content to improve maintainability, navigation, and user experience.

## Features

- Home, About, Services, Products, and Contact pages
- Reusable React components
- Product search and filtering interfaces
- Product and service detail pages
- Contact form with input validation
- FAQ accordion
- Theme toggle
- Responsive layouts
- Client-side routing
- Custom not-found page

## Technology Stack

- React 19
- Vite 8
- React Router 7
- JavaScript (ES modules)
- CSS
- Lucide React
- ESLint 10
- Vercel

## Project Structure

```text
EnergeticsWorld/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
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
├── .github/
│   └── workflows/
├── docs/
│   └── screenshots/
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

- Node.js 22 or later
- npm
- Git

### Installation

```bash
git clone https://github.com/Justinthomas2003/Energeticsworld.git
cd Energeticsworld
npm install
```

### Development Server

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

## CI Workflow

GitHub Actions automatically verifies the project on pushes and pull requests to the main branch.

The workflow performs:

- Dependency installation
- ESLint checks
- Production build verification

## Screenshots

Add screenshots to `docs/screenshots/` and display them below.

<!-- Add screenshot links after capturing the actual images. -->

## Reference Website

https://energeticsworld.com/about-us.html

This is an independent frontend redesign project and is not presented as the official company website.

## Author

**Justin Sebastian Thomas**

[GitHub Profile](https://github.com/Justinthomas2003)

## License

No license has been specified. Reuse and redistribution permissions have not been granted.