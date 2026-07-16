# IAMS Campus Website

SEO-focused React and Vite website for IAMS Campus, including prerendered local course pages for Malappuram and Tirurangadi.

## Local Development

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:5173` unless that port is already occupied.

## Production Checks

```bash
npm run lint
npm run build
```

The production build is written to `dist/`. The `postbuild` step uses current Puppeteer to prerender every URL listed in `sitemap.xml`, so page-specific titles, descriptions, canonical URLs, visible content, and JSON-LD are present in the generated HTML.

## Deploy To Vercel

1. Import the Git repository into Vercel.
2. Keep the project root set to the repository root.
3. Vercel reads these settings from `vercel.json`:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js: 24.x
4. Deploy. No application environment variables are currently required.
5. Add `iamscampus.in` and `www.iamscampus.in` in the Vercel project Domains settings, then apply the DNS records Vercel provides.

Each public route is generated as a flat HTML file. Vercel `cleanUrls` serves files such as `digital-marketing-course-malappuram.html` at `/digital-marketing-course-malappuram`. Every sitemap URL therefore has route-specific HTML for search engines and direct visits. The build also generates a branded, noindex `404.html` for unknown paths.

## Post-Deployment Checklist

- Confirm `/`, `/courses`, and at least one course URL load directly and after refresh.
- Confirm `https://iamscampus.in/sitemap.xml`, `/robots.txt`, and `/llms.txt` return HTTP 200.
- Submit `https://iamscampus.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Verify the first FormSubmit enquiry email sent to `info@iamscampus.in`; FormSubmit may require email confirmation before forwarding submissions.
- Confirm the production address, postcode, phone numbers, and social links match the Google Business Profile exactly.
- Test the call, WhatsApp, and enquiry form actions from a mobile device.

## Important Files

- `vercel.json`: Vercel build, routing, caching, and security headers.
- `public/sitemap.xml`: Public route inventory for search engines.
- `public/robots.txt`: Crawler access rules.
- `public/llms.txt`: Concise institute and course reference for answer engines.
- `src/components/SEO.jsx`: Shared metadata and JSON-LD rendering.
- `src/data/programPages.js`: Course-specific SEO, AEO, and conversion content.
