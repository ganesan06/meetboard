# Board Meet – Frontend

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Screens included:

| Route | What's there |
| --- | --- |
| `/home` | Greeting, quick-start cards, recent items, quick actions, help card |
| `/whiteboard` | Board toolbar, zoomable canvas with sticky notes, comments / AI Copilot panel |
| `/reports` | 4-step "Create Report" wizard (Select Data → Configure → Generate → Review) |
| `/meetings`, `/files`, `/history` | Simple starter pages |

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run typecheck`, `npm run lint`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Board Meet frontend"
git branch -M main
git remote add origin https://github.com/<your-user>/board-meet-frontend.git
git push -u origin main
```

## Deploy on Vercel

1. Go to <https://vercel.com/new> and import the GitHub repo.
2. Framework preset is detected as **Next.js** – keep the defaults (build: `next build`).
3. Click **Deploy**. No environment variables are required yet.

Later, add `NEXT_PUBLIC_API_URL` under **Project → Settings → Environment Variables** (see `.env.example`).

## Project layout

```
src/
  app/(dashboard)/     route group – every page shares the sidebar shell
  components/
    layout/            AppShell, Sidebar, Topbar (search / bell / user), PageHeader
    ui/                Button, Card, Avatar, Logo, ProgressBar, EmptyState, FileTypeIcon
    home/ whiteboard/ reports/ files/ meetings/
  hooks/               useNow, useSearchShortcut
  lib/                 utils.ts, report-config.ts
  services/api.ts      mock data layer – swap for real fetch calls
  store/               zustand stores (report wizard, whiteboard)
  types/index.ts       shared types
  styles/globals.css   Tailwind + base styles
```

## Connecting a backend

All data flows through `src/services/api.ts`. Each function is already `async`, so replace the mock
bodies with `fetch(`${process.env.NEXT_PUBLIC_API_URL}/…`)` and the pages keep working. The report
generation animation in `components/reports/GenerateStep.tsx` is simulated – swap it for a real
job/polling call.
