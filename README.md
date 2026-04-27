# Gumroad Growth Hub

A Whop app for Gumroad sellers — curated resources, tools, and downloads to grow their business.

Built by **Bennett AI Solutions Inc.**

## Stack

- Next.js 15 (App Router)
- `@whop/sdk` + `@whop/react`
- Tailwind CSS
- Vercel deploy

## Whop Dashboard Configuration

After deploying to Vercel, set these in your Whop Developer Dashboard:

| Setting | Value |
|---|---|
| Base Domain | `https://your-app.vercel.app` |
| App Path | `/experiences/[experienceId]` |
| Dashboard Path | `/dashboard/[companyId]` |

## Local Development

```bash
pnpm install
cp .env.example .env.local
# Add your WHOP_API_KEY and NEXT_PUBLIC_WHOP_APP_ID to .env.local
pnpm dev
```

## Routes

| Route | Purpose |
|---|---|
| `/experiences/[experienceId]` | Member home |
| `/experiences/[experienceId]/resources` | Resource library |
| `/experiences/[experienceId]/tools` | Creator tools |
| `/experiences/[experienceId]/downloads` | Downloads |
| `/dashboard/[companyId]` | Seller dashboard |

## Deploy

1. Push to GitHub (this repo)
2. Import to [Vercel](https://vercel.com)
3. Add env vars from `.env.example`
4. Set Whop dashboard paths above
