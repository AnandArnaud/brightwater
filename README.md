# brightwater

Brightwater is a minimal SaaS project workspace — sign up, log in, create and complete tasks, invite teammates, upgrade.

**Stack:** Next.js 15 (App Router, TypeScript)

It is intentionally small.

## Key user actions

sign up · log in · create task · complete task · invite · upgrade

## Running it

```bash
npm install
npm run dev   # http://localhost:3000
```

## Analytics

Adobe Analytics runs through the Adobe Experience Platform Web SDK (alloy), loaded in `app/layout.tsx`. `app/adobe.ts` sends a page view per route, link-click events for `sign up`, `log in`, `create task`, `complete task`, `invite member`, `upgrade plan` (mapped to `event1` and `eVar1` for the report suite), and sets the email in the identity map on sign-in with consent. The datastream and org ids come from `NEXT_PUBLIC_ADOBE_DATASTREAM_ID` and `NEXT_PUBLIC_ADOBE_ORG_ID` (see `.env.example`).
