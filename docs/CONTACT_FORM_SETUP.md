# Contact form setup (Resend + Hostinger)

The contact form on `/contact` sends enquiries via [Resend](https://resend.com). Production is hosted at **https://www.exceltradeint.com**.

## Current status

Without `RESEND_API_KEY` on Hostinger, submissions return:

> Our messaging service is not configured yet. Please email us directly.

Follow the steps below to enable live delivery.

---

## Step 1 — Create a Resend account

1. Go to [resend.com/signup](https://resend.com/signup) and create a free account (3,000 emails/month, no card required).
2. Confirm your email address.

## Step 2 — Create an API key

1. Open [resend.com/api-keys](https://resend.com/api-keys).
2. Click **Create API Key**.
3. Name it `ETIL Website Production`.
4. Permission: **Sending access** (full access is fine).
5. Copy the key — it starts with `re_`. You will not see it again.

## Step 3 — Verify your domain (recommended for production)

To send from `@exceltradeint.com` (not the test sender), add your domain in Resend:

1. Go to [resend.com/domains](https://resend.com/domains) → **Add Domain**.
2. Enter `exceltradeint.com` (or `send.exceltradeint.com` for a subdomain).
3. Resend shows DNS records (SPF, DKIM). Add them in **Hostinger hPanel → Domains → exceltradeint.com → DNS / DNS Zone**.

   Typical records Resend provides:

   | Type | Name | Value |
   | --- | --- | --- |
   | TXT | `@` or `send` | SPF record from Resend |
   | TXT | `resend._domainkey` | DKIM public key from Resend |

4. Click **Verify** in Resend. Status should become **verified** (may take a few minutes).

5. Once status is **verified**, set the sender address:

   ```env
   CONTACT_FROM_EMAIL=ETIL Website <noreply@exceltradeint.com>
   ```

   This is now the default in [`.env.example`](../.env.example) and [`lib/contactConfig.ts`](../lib/contactConfig.ts).

---

## Step 4 — Add environment variables on Hostinger

1. Log in to **hPanel → Websites → exceltradeint.com**.
2. Open the **Node.js dashboard**.
3. Go to **Deployments → Settings & Redeploy** (or **Environment Variables**).
4. Add these variables (or **Import .env** using [`.env.example`](../.env.example) as a template):

   ```env
   RESEND_API_KEY=re_your_actual_key_here
   CONTACT_TO_EMAIL=info@exceltradeint.com
   CONTACT_FROM_EMAIL=ETIL Website <noreply@exceltradeint.com>
   ```

5. Click **Save and Redeploy**.

   > If the site was originally deployed via ZIP upload, Hostinger requires re-uploading the archive during redeploy. After connecting GitHub in hPanel, future redeploys pull from the repo automatically.

---

## Step 5 — Local development

```bash
cp .env.example .env.local
# Edit .env.local and paste your RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000/contact](http://localhost:3000/contact) and submit a test enquiry.

---

## Step 6 — Verify production

Test the live API:

```bash
curl -X POST https://www.exceltradeint.com/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"you@example.com","message":"Production test"}'
```

Expected: HTTP `200` with `{"ok":true}`.

Then check `info@exceltradeint.com` (or your `CONTACT_TO_EMAIL` inbox) for the enquiry.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `503` — messaging service not configured | Add `RESEND_API_KEY` in Hostinger and redeploy |
| `502` — couldn't send your message | Check Resend dashboard → Logs; verify `CONTACT_FROM_EMAIL` uses a verified domain |
| Email not received | Check spam; confirm `CONTACT_TO_EMAIL` is correct; review Resend logs |
| Resend domain stuck on `pending` | Confirm DNS records in Hostinger match Resend exactly; wait up to 72h |

API route: `pages/api/enquiry.ts` → `POST /api/enquiry`
