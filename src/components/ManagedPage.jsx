import { useEffect, useState } from 'react';
import CMSPage from './CMSPage';
import { getPageBySlug } from '../lib/sanity';

const ManagedPage = ({ slug, fallback }) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    getPageBySlug(slug).then(setPage).catch((error) => console.error(`Unable to load the ${slug} CMS page.`, error));
  }, [slug]);

  return page ? <CMSPage page={page} /> : fallback;
};

export default ManagedPage;
