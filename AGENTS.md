@promptkit/

# AGENTS.md

## Project Overview

boilerplate-fullstack-routing is a starter template for full-stack TypeScript applications with React Router pre-configured on the frontend. It extends the standard fullstack boilerplate with client-side routing via a `routes.tsx` file.

**Key Technologies:**
- **Frontend**: React, TypeScript, Vite, React Router, TanStack Query, Sass
- **Backend**: Node.js, Express.js, TypeScript, Knex.js, SQLite3
- **Testing**: Vitest, React Testing Library

**Architecture:**
- `client/`: React SPA — `client/routes.tsx` defines the route tree; `client/components/App.tsx` is the root layout component
- `server/`: Express backend — `server/routes/fruits.ts` is a working GET example; `server/db/` has Knex connection and migrations
- `models/`: Shared TypeScript interfaces
- API base path: `/api/v1`

## Building and Running

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run knex migrate:latest` | Run database migrations |
| `npm run knex seed:run` | Seed database with initial data |
| `npm run dev` | Start client (`http://localhost:5173`) and server (`http://localhost:3000`) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm test -- --run` | Run all tests once |
| `npm run lint` | Check code with ESLint |

**Important:** Always use `npm run dev`. Opening `index.html` directly won't load TypeScript.

## Development Conventions

- **Code Style**: ESLint with `@devacademy/eslint-config/react`. Run `npm run lint` before committing.
- **Routing**: React Router v7 (`react-router`). Routes defined in `client/routes.tsx` using `createRoutesFromElements`.
- **Testing**: Vitest and React Testing Library.

## Architecture Decisions

- **`routes.tsx` for route definitions**: Client-side routes use `createRoutesFromElements` and `<Route>` components. The initial scaffold has a single index route rendering `<App />` — add nested routes here.
- **React Router v7**: Uses `createBrowserRouter` in `client/index.tsx` and `RouterProvider`. Route components use `useParams`, `useNavigate`, and `Link` from `react-router`.
- **Server wildcard fallback**: In production, `server.ts` has a `*` catch-all that serves `index.html` — this ensures client-side routes work on page refresh.
- **Fruits example included**: The `fruits` API and React component are working end-to-end references — follow the same pattern for new resources.

## Key Conventions

- Add new routes to `client/routes.tsx` using nested `<Route>` elements.
- Route components go in `client/components/` and are referenced in `routes.tsx`.
- New server resources follow the same pattern as `fruits`: DB file → routes file → mounted in `server.ts`.
- **Note:** This template uses strict ESLint and Prettier rules. Follow them exactly when extending the boilerplate.

## Potential Pitfalls

- **Wildcard route in production**: The `*` catch-all in `server.ts` only applies in production mode. In development, Vite handles client-side routing — don't remove this catch-all for production builds.
- **`react-router` vs `react-router-dom`**: This project uses `react-router` v7 directly — `Link`, `Route`, `useNavigate`, etc. are all imported from `react-router`, not `react-router-dom`.
- **TanStack Query cache invalidation**: After mutations, call `queryClient.invalidateQueries` to refresh the list.

## Related Documentation

- [AGENTS.md](AGENTS.md): Shared AI context file — source of truth for all agent briefings.
- [CLAUDE.md](CLAUDE.md): Claude Code context (imports AGENTS.md; may include tutoring guidelines if used in educational settings).
- [GEMINI.md](GEMINI.md): Gemini AI context (self-contained copy of this file's content).

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
