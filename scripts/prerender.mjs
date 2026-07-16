import { readFile, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const distDirectory = resolve('dist');
const serverDirectory = resolve('dist-ssr');
const shellHtml = await readFile(join(distDirectory, 'index.html'), 'utf8');
const sitemap = await readFile(join(distDirectory, 'sitemap.xml'), 'utf8');
const publicRoutes = [...sitemap.matchAll(/<loc>(https:\/\/iamscampus\.in[^<]*)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((route, index, allRoutes) => allRoutes.indexOf(route) === index);

if (!publicRoutes.length) {
  throw new Error('No prerender routes were found in dist/sitemap.xml.');
}

await rm(serverDirectory, { recursive: true, force: true });
await build({
  logLevel: 'warn',
  build: {
    ssr: resolve('src/entry-server.jsx'),
    outDir: serverDirectory,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'entry-server.mjs',
      },
    },
  },
});

const { render } = await import(`${pathToFileURL(join(serverDirectory, 'entry-server.mjs')).href}?t=${Date.now()}`);
const routes = [...publicRoutes, '/404'];

for (const route of routes) {
  const { appHtml, headHtml } = render(route);
  const html = shellHtml
    .replace('</head>', `${headHtml}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const titleCount = (html.match(/<title/g) || []).length;
  const canonicalCount = (html.match(/rel="canonical"/g) || []).length;

  if (titleCount !== 1 || canonicalCount !== 1) {
    throw new Error(`Invalid metadata at ${route}: titles=${titleCount}, canonicals=${canonicalCount}`);
  }

  const outputPath = route === '/'
    ? join(distDirectory, 'index.html')
    : join(distDirectory, `${route.replace(/^\/+|\/+$/g, '')}.html`);

  await writeFile(outputPath, html);
  console.log(`Prerendered ${route}`);
}

await rm(serverDirectory, { recursive: true, force: true });
console.log(`Prerendered ${publicRoutes.length} public routes from sitemap.xml plus 404.html.`);
