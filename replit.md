# RUVAN MEDCLOUD

## Overview

RUVAN MEDCLOUD is a medical equipment distributor website built as a full-stack TypeScript application. It showcases premium medical equipment products (patient monitors, imaging systems, surgical instruments, lab equipment, respiratory care) with a product catalog, company information pages, and a contact form. The site is a brochure/lead-generation style application — no authentication, no e-commerce transactions, just product browsing and contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Structure

The project follows a monorepo layout with three top-level code directories:

- **`client/`** — React single-page application (frontend)
- **`server/`** — Express.js API server (backend)
- **`shared/`** — Shared TypeScript types and database schema (used by both client and server)

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

### Backend (`server/`)

- **Framework**: Express.js v5 running on Node.js
- **Language**: TypeScript, executed via `tsx` in development
- **API Pattern**: RESTful JSON API, all routes prefixed with `/api`
- **Key Endpoints**:
  - `GET /api/products` — list all products
  - `GET /api/products/:id` — get single product
  - `POST /api/contact` — submit contact form (validated with Zod)
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation using Drizzle ORM. The storage singleton is exported for use in routes.
- **Database Seeding**: `server/seed.ts` seeds the products table with sample medical equipment data on startup
- **Dev vs Prod**: In development, Vite middleware serves the frontend with HMR. In production, the built static files are served from `dist/public`.

### Database

- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: `node-postgres` (pg) pool, connected via `DATABASE_URL` environment variable
- **Schema** (`shared/schema.ts`):
  - `products` table: id (serial), name, description, category, image, features (text array)
  - `contact_submissions` table: id (serial), name, email, phone (optional), company (optional), message, createdAt (timestamp)
- **Migrations**: Drizzle Kit configured with `drizzle.config.ts`, migrations output to `./migrations`. Use `npm run db:push` to push schema changes.
- **Validation**: `drizzle-zod` generates Zod schemas from Drizzle tables, shared between client and server for form validation.

### Build Process

- **Development**: `npm run dev` — runs `tsx server/index.ts` which starts Express with Vite dev middleware
- **Production Build**: `npm run build` — runs `script/build.ts` which:
  1. Builds the client with Vite (output: `dist/public`)
  2. Bundles the server with esbuild (output: `dist/index.cjs`), externalizing most deps except an allowlist
- **Production Start**: `npm start` — runs `node dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL** — required, connected via `DATABASE_URL` environment variable. The app will crash on startup without it.

### Key npm Packages
- **drizzle-orm** + **drizzle-kit** + **drizzle-zod** — ORM, migration tooling, and schema-to-Zod conversion
- **express** v5 — HTTP server
- **@tanstack/react-query** — client-side data fetching and caching
- **wouter** — client-side routing
- **framer-motion** — animations
- **react-hook-form** + **@hookform/resolvers** — form handling
- **zod** — schema validation (shared between client/server)
- **shadcn/ui** components (Radix UI primitives + Tailwind CSS + class-variance-authority)
- **connect-pg-simple** — PostgreSQL session store (available but not actively used for sessions currently)

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — error overlay in development
- **@replit/vite-plugin-cartographer** and **@replit/vite-plugin-dev-banner** — development tooling (conditionally loaded when `REPL_ID` is set)