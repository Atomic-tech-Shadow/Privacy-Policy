# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.
Migrated from Vercel to Replit — both frontend and API server run as persistent workflows.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (`artifacts/atomic-flix-privacy`) — Privacy Policy page
- **API framework**: Express 5 (`artifacts/api-server`)
- **Database**: PostgreSQL + Drizzle ORM (Replit built-in DB, `DATABASE_URL` auto-set)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (ESM bundle)

## Running Services

| Service | Port | Workflow |
|---------|------|----------|
| Frontend (Vite) | 24997 | "Start application" |
| API Server (Express) | 8080 | "API Server" |

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/atomic-flix-privacy run dev` — run frontend locally

## Environment Variables

- `DATABASE_URL` — set automatically by Replit's built-in PostgreSQL
- `PORT` — set by workflow commands (8080 for API, 24997 for frontend)

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
