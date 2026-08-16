import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-08-16',
      useCdn: true,
    })
  : null;

const imageBuilder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export const urlFor = (source) => (source && imageBuilder ? imageBuilder.image(source) : null);

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  logo,
  contactPhone,
  contactEmail,
  addressLine1,
  addressLine2,
  footerDescription,
  navigation[]{label, href}
}`;

export const getSiteSettings = async () => {
  if (!sanityClient) return null;

  return sanityClient.fetch(siteSettingsQuery);
};

const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seo,
  sections[]{
    ...,
    _type == "courseList" => { ..., courses[]->{title, "slug": slug.current, category, description, image, duration} },
    _type == "faqList" => { ..., faqs[]->{question, answer} },
    _type == "galleryGrid" => { ..., images[]->{title, image} },
    _type == "testimonialList" => { ..., testimonials[]->{name, role, quote, image, rating} }
  }
}`;

export const getPageBySlug = async (slug) => {
  if (!sanityClient) return null;

  return sanityClient.fetch(pageBySlugQuery, { slug });
};
