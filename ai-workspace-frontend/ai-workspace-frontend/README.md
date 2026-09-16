# AI Workspace — Frontend

Next.js (App Router) + TypeScript + Tailwind implementation of the Home,
Whiteboard, and Report pages from the wireframes.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

```
app/
  layout.tsx          Root layout, global styles
  page.tsx             Home page
  whiteboard/page.tsx  Whiteboard page
  reports/page.tsx     Report page

components/
  layout/    Shared chrome (TopBar, AccountMenu)
  home/      Home page pieces (NavCard)
  whiteboard/ Whiteboard pieces (DateNav, NoteCard, AiPromptBar)
  reports/   Report pieces (DataSourceSelector, ReportChat, DownloadsHistory)

hooks/
  useWhiteboardNotes.ts  Owns note state; stubbed persistence

lib/
  types.ts       Shared domain types — keep in sync with backend API contracts
  constants.ts   App-wide constants and seed/mock data
```

## Design decisions

- **State stays close to the page that owns it.** `ReportsPage` and
  `WhiteboardPage` hold their own state and pass callbacks down; nothing
  reaches for global state management until the app actually needs it
  across pages.
- **Types first.** `lib/types.ts` defines the shapes the backend is
  expected to return (`WhiteboardNote`, `ReportMessage`,
  `DownloadHistoryItem`, etc.) so wiring up real API calls later is a
  matter of replacing the `TODO` stubs, not redesigning components.
- **No dead ends in the UI.** The report input disables itself with an
  explanation until a data source is picked, and the downloads list has
  a real empty state — see `frontend-design` conventions around
  treating empty/disabled states as guidance, not blank space.
- **Dark theme, single functional accent.** Matches the wireframes
  directly: the accent color (`accent` in `tailwind.config.ts`) is only
  used for selection/success states (a selected data source, the send
  button), never as decoration.

## Wiring up the backend

Every network call is currently a `TODO` stub returning local state:

- `hooks/useWhiteboardNotes.ts` → `persist()` should call
  `PUT /whiteboard/:day`
- `components/whiteboard/AiPromptBar.tsx` → `onSubmit` should call
  `POST /chat`
- `app/reports/page.tsx` → `handleSend` should call `POST /reports`
  with `{ sources: selectedSources, prompt: content }`

These map directly to the API routes described in the system design
doc (`/whiteboard`, `/reports`, `/chat`, `/files`).

## Notes

- `npm install` requires network access to the npm registry; it was
  not run in the environment this project was generated in, so double
  check `npm run typecheck` and `npm run lint` locally before shipping.
