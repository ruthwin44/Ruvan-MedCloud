# RUVAN MEDCLOUD

## Overview

RUVAN MEDCLOUD is a medical equipment distributor website with a full JavaScript/TypeScript stack — Express.js backend and React frontend. It showcases 4 specific medical equipment products (Anatomograph, Staan OT Table Glory, Staan Discover LED, Origin Ventilator) with a product catalog, company information pages, and contact information display. The site is a purely informational brochure — no authentication, no e-commerce, no forms or user inputs. Product categories: Digital Health, Surgical Equipment, Respiratory Care. Uses the RUVAN company logo (imported from @assets) in navigation. Orange color theme matching the logo. Company: Ruvan Medcloud Pvt Ltd, established 2021.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Structure

The project follows a monorepo layout:

- **`client/`** — React single-page application (frontend)
- **`server/`** — Express.js API server + Vite dev server
- **`shared/`** — Shared TypeScript types and database schema (Drizzle ORM)

### Frontend (`client/`)

- **Framework**: React with TypeScript
- **Bundler**: Vite (dev server with HMR, production builds to `dist/public`)
- **Routing**: Wouter (lightweight client-side router, NOT React Router)
- **State/Data Fetching**: TanStack React Query — queries use the URL path as the query key (e.g., `["/api/products"]`), and the default query function fetches from that path automatically
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming; orange primary color (hue 16) to match RUVAN logo
- **Animations**: Framer Motion for page transitions and scroll-triggered animations
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

**Pages**: Home (`/`), Products (`/products`), About (`/about`), Contact (`/contact`), 404 Not Found

### Backend (`server/`)

- **Framework**: Express.js (TypeScript)
- **ORM**: Drizzle ORM with PostgreSQL
- **API Pattern**: RESTful JSON API, all routes prefixed with `/api`
- **Key Endpoints**:
  - `GET /api/products` — list all products
  - `GET /api/products/:id` — get single product
  - `POST /api/contact` — submit contact form (validated with Zod)
- **Key Files**:
  - `server/index.ts` — Express app setup, seeds database, starts server on port 5000
  - `server/routes.ts` — API route handlers
  - `server/storage.ts` — Database access layer (IStorage interface + DatabaseStorage implementation)
  - `server/db.ts` — Drizzle ORM + pg Pool setup
  - `server/seed.ts` — Seeds database with 4 medical equipment products

### Database

- **PostgreSQL** — connected via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with schema defined in `shared/schema.ts`
- **Tables**:
  - `products` table: id (serial), name, description, category, image, features (text array)
  - `contact_submissions` table: id (serial), name, email, phone (optional), company (optional), message, created_at (timestamp)
- **Validation**: `drizzle-zod` generates Zod schemas from Drizzle tables

### Build Process

- **Development**: `npm run dev` — runs `tsx server/index.ts` which starts Express with Vite dev middleware on port 5000
- **Production Build**: `npm run build` — builds client with Vite (output: `dist/public`)
- **Schema Sync**: `npm run db:push` — pushes Drizzle schema to PostgreSQL

## External Dependencies

### Database
- **PostgreSQL** — required, connected via `DATABASE_URL` environment variable

### Key npm Packages
- **drizzle-orm** + **pg** — ORM and PostgreSQL driver
- **drizzle-zod** — generates Zod schemas from Drizzle tables
- **@tanstack/react-query** — client-side data fetching and caching
- **wouter** — client-side routing
- **framer-motion** — animations
- **zod** — schema validation
- **shadcn/ui** components (Radix UI primitives + Tailwind CSS + class-variance-authority)

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — error overlay in development
- **@replit/vite-plugin-cartographer** and **@replit/vite-plugin-dev-banner** — development tooling
