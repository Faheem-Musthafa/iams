import { createServer } from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import puppeteer from 'puppeteer';

const distDirectory = resolve('dist');
const shellHtml = await readFile(join(distDirectory, 'index.html'), 'utf8');
const sitemap = await readFile(join(distDirectory, 'sitemap.xml'), 'utf8');
const publicRoutes = [...sitemap.matchAll(/<loc>(https:\/\/iamscampus\.in[^<]*)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((route, index, allRoutes) => allRoutes.indexOf(route) === index);

if (!publicRoutes.length) {
  throw new Error('No prerender routes were found in dist/sitemap.xml.');
}

const routes = [...publicRoutes, '/404'];

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const isPageRequest = pathname === '/' || extname(pathname) === '';

    if (isPageRequest) {
      response.writeHead(200, { 'Content-Type': contentTypes['.html'] });
      response.end(shellHtml);
      return;
    }

    const filePath = join(distDirectory, pathname.replace(/^\/+/, ''));
    if (!filePath.startsWith(`${distDirectory}/`)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    const file = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream' });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

await new Promise((resolveServer) => server.listen(0, '127.0.0.1', resolveServer));

const address = server.address();
const origin = `http://127.0.0.1:${address.port}`;
let browser;

try {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 480, height: 850, deviceScaleFactor: 1 });
  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.url().startsWith(origin)) {
      interceptedRequest.continue();
    } else {
      interceptedRequest.abort();
    }
  });

  for (const route of routes) {
    await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.waitForSelector('main h1', { timeout: 10_000 });
    await page.evaluate(() => new Promise((resolveFrame) => {
      requestAnimationFrame(() => requestAnimationFrame(resolveFrame));
    }));

    const html = await page.content();
    const titleCount = (html.match(/<title/g) || []).length;
    const canonicalCount = (html.match(/rel="canonical"/g) || []).length;

    if (titleCount !== 1 || canonicalCount !== 1) {
      throw new Error(`Invalid metadata at ${route}: titles=${titleCount}, canonicals=${canonicalCount}`);
    }

    const outputPath = route === '/'
      ? join(distDirectory, 'index.html')
      : join(distDirectory, `${route.replace(/^\/+|\/+$/g, '')}.html`);

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
    console.log(`Prerendered ${route}`);
  }
} finally {
  await browser?.close();
  await new Promise((resolveServer, rejectServer) => {
    server.close((error) => error ? rejectServer(error) : resolveServer());
  });
}

console.log(`Prerendered ${publicRoutes.length} public routes from sitemap.xml plus 404.html.`);
