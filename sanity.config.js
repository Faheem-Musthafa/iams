/* global process */

import { defineConfig, defineField, defineType } from 'sanity';
import { structureTool } from 'sanity/structure';

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site name',
      type: 'string',
      initialValue: 'IAMS Campus',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'A square PNG works best. The website keeps its bundled logo until one is published here.',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Phone number',
      type: 'string',
      initialValue: '+91 96331 30516',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email address',
      type: 'string',
      initialValue: 'info@iamscampus.in',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address line 1',
      type: 'string',
      initialValue: 'NP Center, Kakkad',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address line 2',
      type: 'string',
      initialValue: 'Malappuram, Kerala',
    }),
    defineField({ name: 'footerDescription', title: 'Footer description', type: 'text' }),
    defineField({ name: 'navigation', title: 'Navigation links', type: 'array', of: [{ type: 'navigationLink' }] }),
  ],
  preview: {
    select: { title: 'siteTitle' },
    prepare: ({ title }) => ({ title: title || 'IAMS Campus' }),
  },
});

const navigationLink = defineType({ name: 'navigationLink', title: 'Navigation link', type: 'object', fields: [defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'href', title: 'Path', type: 'string', description: 'Example: /courses', validation: (rule) => rule.required() })] });
const imageWithAlt = defineType({ name: 'imageWithAlt', title: 'Image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required() })] });
const course = defineType({ name: 'course', title: 'Course', type: 'document', fields: [defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }), defineField({ name: 'category', type: 'string' }), defineField({ name: 'duration', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'image', type: 'imageWithAlt' })] });
const faq = defineType({ name: 'faq', title: 'FAQ', type: 'document', fields: [defineField({ name: 'question', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'answer', type: 'text', validation: (rule) => rule.required() })] });
const galleryImage = defineType({ name: 'galleryImage', title: 'Gallery image', type: 'document', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'image', type: 'imageWithAlt', validation: (rule) => rule.required() })] });
const testimonial = defineType({ name: 'testimonial', title: 'Testimonial', type: 'document', fields: [defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'role', type: 'string' }), defineField({ name: 'quote', type: 'text', validation: (rule) => rule.required() }), defineField({ name: 'rating', type: 'number', validation: (rule) => rule.min(1).max(5) }), defineField({ name: 'image', type: 'imageWithAlt' })] });
const page = defineType({ name: 'page', title: 'Page', type: 'document', fields: [defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }), defineField({ name: 'seo', type: 'seo' }), defineField({ name: 'sections', type: 'array', of: [{ type: 'hero' }, { type: 'textSection' }, { type: 'featureGrid' }, { type: 'courseList' }, { type: 'faqList' }, { type: 'galleryGrid' }, { type: 'testimonialList' }, { type: 'cta' }] })] });
const seo = defineType({ name: 'seo', title: 'SEO', type: 'object', fields: [defineField({ name: 'title', title: 'SEO title', type: 'string' }), defineField({ name: 'description', title: 'SEO description', type: 'text', rows: 3 }), defineField({ name: 'noindex', title: 'Hide from search engines', type: 'boolean', initialValue: false })] });
const sectionFields = [defineField({ name: 'eyebrow', type: 'string' }), defineField({ name: 'heading', type: 'string' }), defineField({ name: 'intro', type: 'text', rows: 3 })];
const hero = defineType({ name: 'hero', title: 'Hero', type: 'object', fields: [...sectionFields, defineField({ name: 'image', type: 'imageWithAlt' }), defineField({ name: 'ctaLabel', type: 'string' }), defineField({ name: 'ctaUrl', type: 'string' })] });
const textSection = defineType({ name: 'textSection', title: 'Text section', type: 'object', fields: [...sectionFields, defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] })] });
const featureGrid = defineType({ name: 'featureGrid', title: 'Feature grid', type: 'object', fields: [...sectionFields, defineField({ name: 'features', type: 'array', of: [{ type: 'feature' }] })] });
const feature = defineType({ name: 'feature', title: 'Feature', type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' })] });
const courseList = defineType({ name: 'courseList', title: 'Course list', type: 'object', fields: [...sectionFields, defineField({ name: 'courses', type: 'array', of: [{ type: 'reference', to: [{ type: 'course' }] }] })] });
const faqList = defineType({ name: 'faqList', title: 'FAQ list', type: 'object', fields: [...sectionFields, defineField({ name: 'faqs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] })] });
const galleryGrid = defineType({ name: 'galleryGrid', title: 'Gallery grid', type: 'object', fields: [...sectionFields, defineField({ name: 'images', type: 'array', of: [{ type: 'reference', to: [{ type: 'galleryImage' }] }] })] });
const testimonialList = defineType({ name: 'testimonialList', title: 'Testimonial list', type: 'object', fields: [...sectionFields, defineField({ name: 'testimonials', type: 'array', of: [{ type: 'reference', to: [{ type: 'testimonial' }] }] })] });
const cta = defineType({ name: 'cta', title: 'Call to action', type: 'object', fields: [...sectionFields, defineField({ name: 'ctaLabel', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'ctaUrl', type: 'string' })] });

export default defineConfig({
  name: 'default',
  title: 'IAMS Campus CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [structureTool()],
  schema: { types: [siteSettings, navigationLink, imageWithAlt, course, faq, galleryImage, testimonial, page, seo, hero, textSection, featureGrid, feature, courseList, faqList, galleryGrid, testimonialList, cta] },
});
