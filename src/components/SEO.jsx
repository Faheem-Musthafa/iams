import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://iamscampus.in';
const SITE_NAME = 'IAMS Campus';
// TODO: replace with a purpose-built 1200x630 branded OG image at /og-image.jpg.
// Using the live hero image for now so social previews render immediately.
const DEFAULT_OG_IMAGE = 'https://iamscampus.in/wp-content/uploads/2025/11/HEADER-IMAGE-2-scaled.png';

/**
 * Centralized SEO/meta block. Renders title, description, canonical, Open Graph,
 * Twitter Card and optional JSON-LD schema for every page.
 *
 * @param {string} title        Full <title> text.
 * @param {string} description  Meta description (~150-160 chars).
 * @param {string} path         Route path, e.g. "/courses" ("" for home).
 * @param {string} [image]      Absolute OG/Twitter image URL.
 * @param {string} [type]       og:type ("website" | "article" | ...).
 * @param {boolean} [noindex]   When true, emit robots noindex.
 * @param {object} [schema]     JSON-LD object (stringified into a script tag).
 */
const SEO = ({
  title,
  description,
  path = '',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  schema,
}) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} students and campus`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
