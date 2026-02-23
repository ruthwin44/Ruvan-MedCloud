# RUVAN MEDCLOUD

## Overview

RUVAN MEDCLOUD is a medical equipment distributor website with a Python Flask backend and React frontend. It showcases 4 specific medical equipment products (Anatomograph, Staan OT Table Glory, Staan Discover LED, Origin Ventilator) with a product catalog, company information pages, and contact information display. The site is a purely informational brochure — no authentication, no e-commerce, no forms or user inputs. Product categories: Digital Health, Surgical Equipment, Respiratory Care. Uses the RUVAN company logo (imported from @assets) in navigation and footer. Gradient styling throughout all pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Structure

The project follows a monorepo layout:

- **`client/`** — React single-page application (frontend)
- **`server/`** — Express.js dev server (proxies API to Flask, serves Vite in development)
- **`server_py/`** — Python Flask API server (backend)
- **`shared/`** — Shared TypeScript types and database schema (used by client and for reference)

### Frontend (`client/`)

- **Framework**: React with TypeScript
- **Bundler**: Vite (dev server with HMR, production builds to `dist/public`)
- **Routing**: Wouter (lightweight client-side router, NOT React Router)
- **State/Data Fetching**: TanStack React Query — queries use the URL path as the query key (e.g., `["/api/products"]`), and the default query function fetches from that path automatically
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support via CSS variables in `index.css`)
- **Animations**: Framer Motion for page transitions and scroll-triggered animations
- **Forms**: React Hook Form with Zod validation (schemas shared from `shared/schema.ts`)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

**Pages**: Home (`/`), Products (`/products`), About (`/about`), Contact (`/contact`), 404 Not Found

### Backend (`server_py/`)

- **Framework**: Flask (Python)
- **Language**: Python 3.11
- **Database Driver**: psycopg2-binary
- **API Pattern**: RESTful JSON API, all routes prefixed with `/api`
- **Key Endpoints**:
  - `GET /api/products` — list all products
  - `GET /api/products/:id` — get single product
  - `POST /api/contact` — submit contact form (validated server-side)
- **Files**:
  - `server_py/app.py` — Flask app setup, static file serving
  - `server_py/routes.py` — API route handlers (Blueprint with `/api` prefix)
  - `server_py/storage.py` — Database access functions (CRUD for products and contacts)
  - `server_py/db.py` — PostgreSQL connection utilities, table initialization
  - `server_py/seed.py` — Seeds database with 4 specific medical equipment products (Anatomograph, Staan OT Table Glory, Staan Discover LED, Origin Ventilator)
- **Runs on port 5001** in development (proxied from Express on port 5000)

### Dev Proxy (`server/`)

- **Purpose**: In development, Express.js starts Flask as a child process, proxies `/api` requests to Flask (port 5001), and serves Vite dev middleware for the frontend
- **Key Files**:
  - `server/index.ts` — Spawns Flask, sets up proxy, starts Vite dev server on port 5000
  - `server/routes.ts` — Configures http-proxy-middleware to forward `/api` to Flask

### Database

- **PostgreSQL** — connected via `DATABASE_URL` environment variable
- **Tables** (created by Flask on startup):
  - `products` table: id (serial), name, description, category, image, features (text array)
  - `contact_submissions` table: id (serial), name, email, phone (optional), company (optional), message, created_at (timestamp)
- **Schema Reference** (`shared/schema.ts`): Drizzle ORM schema kept for reference/frontend types
- **Validation**: `drizzle-zod` generates Zod schemas from Drizzle tables, used for frontend form validation

### Build Process

- **Development**: `npm run dev` — runs `tsx server/index.ts` which spawns Flask on port 5001, sets up API proxy, and starts Vite dev server on port 5000
- **Production Build**: `npm run build` — builds client with Vite (output: `dist/public`)

## External Dependencies

### Database
- **PostgreSQL** — required, connected via `DATABASE_URL` environment variable

### Key Python Packages
- **flask** — Python web framework for API
- **psycopg2-binary** — PostgreSQL driver
- **gunicorn** — Production WSGI server

### Key npm Packages
- **@tanstack/react-query** — client-side data fetching and caching
- **wouter** — client-side routing
- **framer-motion** — animations
- **react-hook-form** + **@hookform/resolvers** — form handling
- **zod** — schema validation (frontend form validation)
- **shadcn/ui** components (Radix UI primitives + Tailwind CSS + class-variance-authority)
- **http-proxy-middleware** — proxies /api requests from Express to Flask in development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — error overlay in development
- **@replit/vite-plugin-cartographer** and **@replit/vite-plugin-dev-banner** — development tooling (conditionally loaded when `REPL_ID` is set)
