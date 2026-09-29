# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Using This Boilerplate

This is a starter template with React Router pre-configured. The `fruits` example is fully working end-to-end — use it as a pattern when building your own features.

**To add a new client-side route:**
1. Create a new component in `client/components/` (e.g. `BooksPage.tsx`)
2. Add a `<Route>` to `client/routes.tsx`:
   ```tsx
   <Route path="/books" element={<BooksPage />} />
   ```
3. Add a `<Link to="/books">` in your nav component

**To add a new API resource (e.g. `books`):**
1. Create `server/db/migrations/<timestamp>_create_books.ts`
2. Create `server/db/books.ts` — Knex query functions
3. Create `server/routes/books.ts` — Express router
4. Mount in `server/server.ts`: `server.use('/api/v1/books', booksRouter)`
5. Create `client/apis/books.ts` — API client functions
6. Use TanStack Query in the route component

## Tutoring Guidelines

- Follow the `promptkit/workflows/tutor.md` workflow for explanation sessions.
- Ask questions that move students toward the answer rather than stating it.
- When a student is adding a new route, show them how the existing index route in `routes.tsx` is structured and ask them to pattern-match it.
- Do not implement entire files on behalf of the student — guide them to the React Router docs or the existing `fruits` example.
