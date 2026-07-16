import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppShell } from './App';

export const render = (url) => {
  const wrapperStart = '<div id="server-rendered-app">';
  const renderedHtml = renderToString(
    <div id="server-rendered-app">
      <HelmetProvider>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>
    </div>,
  );

  const wrapperIndex = renderedHtml.indexOf(wrapperStart);
  const wrapperEnd = renderedHtml.lastIndexOf('</div>');
  if (wrapperIndex === -1 || wrapperEnd === -1) {
    throw new Error(`Unable to split server-rendered metadata for ${url}.`);
  }

  // React 19 hoists Helmet metadata and image preloads before this wrapper.
  const headHtml = renderedHtml.slice(0, wrapperIndex);
  const appHtml = renderedHtml.slice(wrapperIndex + wrapperStart.length, wrapperEnd);

  return { appHtml, headHtml };
};
