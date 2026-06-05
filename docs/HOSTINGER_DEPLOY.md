# Hostinger deployment

Production: **https://www.exceltradeint.com**

## Auto-deploy on push (GitHub integration)

Connect the repo in hPanel so every push to `master` rebuilds automatically:

1. **hPanel → Websites → Add Website → Node.js Apps → Import Git Repository**
2. Authorize GitHub and select `kaybee77/hostinger-etil`
3. Branch: `master`
4. Build settings:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Node.js | 20.x |
| Install | `npm ci` |
| Build | `npm run build` |
| Start | `npm run start -- -p $PORT` |
| Output | `.next` |

5. Domain: `exceltradeint.com`
6. Add environment variables (see below), then **Deploy**

## Environment variables

Set in **Node.js dashboard → Environment Variables**:

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_...` (secret) |
| `CONTACT_TO_EMAIL` | `info@exceltradeint.com` |
| `CONTACT_FROM_EMAIL` | `ETIL Website <onboarding@resend.dev>` |

Redeploy after changing env vars.

## DNS

`exceltradeint.com` DNS should use Hostinger CDN records (not GitHub Pages):

- `@` ALIAS → `exceltradeint.com.cdn.hstgr.net.`
- `www` CNAME → `www.exceltradeint.com.cdn.hstgr.net.`

## Note on API routes

API handlers live in `pages/api/` (not `app/api/`) because Hostinger archive builds hit permission errors on `app/api/*` directories.
