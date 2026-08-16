# IAMS Campus Website

SEO-focused React and Vite website for IAMS Campus, including prerendered local course pages for Malappuram and Tirurangadi.

## Local Development

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:5173` unless that port is already occupied.

## Sanity CMS

1. Create a project and public dataset in [Sanity Manage](https://www.sanity.io/manage).
2. Copy `.env.example` to `.env.local` and replace both project ID placeholders with your Sanity project ID.
3. Run `npm run sanity:dev` to start the editor at `http://localhost:3333/studio`, then create a **Site Settings** document.
4. For Vercel, add `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` as build-time environment variables and redeploy.

The production build includes the Studio at `/studio`, so editors use `https://your-domain/studio` rather than a separate `sanity.studio` URL. In Sanity Manage, add the deployed website origin (for example `https://iamscampus.in`) under **Settings → API → CORS Origins** and enable **Allow credentials** so editors can sign in. The Studio itself is protected by Sanity authentication; do not make editor accounts public.

The website continues to use its bundled defaults until these values exist. Once connected, published Site Settings control the name, logo, navigation, footer copy, phone, email, and address shared by the header and footer.

Create **Page** documents to take full control of any route. A page document can be assigned to `/` with the `home` slug, or any route by using its path without the leading slash (for example `about` or `digital-marketing-course-malappuram`). Editors can compose Hero, text, feature-grid, course-list, FAQ, gallery, testimonial, and CTA sections. Courses, FAQs, gallery images, and testimonials are maintained as reusable documents and can be referenced from multiple pages.

## Production Checks

```bash
npm run lint
npm run build
```

The production build is written to `dist/`. The `postbuild` step uses React's server renderer to prerender every URL listed in `sitemap.xml`, so page-specific titles, descriptions, canonical URLs, visible content, and JSON-LD are present in the generated HTML. It does not require Chrome or system browser libraries.

## Deploy To Vercel

1. Import the Git repository into Vercel.
2. Keep the project root set to the repository root.
3. Vercel reads these settings from `vercel.json`:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js: 24.x
4. Add `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, `SANITY_STUDIO_PROJECT_ID`, and `SANITY_STUDIO_DATASET` to Vercel's build environment, then deploy. The Studio is served at `/studio`.
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
