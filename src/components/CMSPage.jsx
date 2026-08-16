import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { urlFor } from '../lib/sanity';

const imageUrl = (image, width = 1600) => urlFor(image)?.width(width).auto('format').url();

const CMSPage = ({ page }) => (
  <main className="section-container pt-32 pb-20">
    <SEO
      title={page.seo?.title || page.title}
      description={page.seo?.description || page.title}
      path={page.slug === 'home' ? '/' : `/${page.slug}`}
      noindex={page.seo?.noindex}
    />
    <div className="space-y-10 md:space-y-16">
      {page.sections?.map((section) => <Section key={section._key} section={section} />)}
    </div>
  </main>
);

const Section = ({ section }) => {
  switch (section._type) {
    case 'hero': return <Hero section={section} />;
    case 'textSection': return <TextSection section={section} />;
    case 'featureGrid': return <FeatureGrid section={section} />;
    case 'courseList': return <CourseList section={section} />;
    case 'faqList': return <FaqList section={section} />;
    case 'galleryGrid': return <GalleryGrid section={section} />;
    case 'testimonialList': return <TestimonialList section={section} />;
    case 'cta': return <Cta section={section} />;
    default: return null;
  }
};

const Heading = ({ eyebrow, heading, intro, light = false }) => (
  <div className="max-w-3xl">
    {eyebrow && <p className={`mb-3 text-xs font-bold uppercase tracking-widest ${light ? 'text-brand-lime' : 'text-brand-accent'}`}>{eyebrow}</p>}
    {heading && <h2 className={`heading-lg mb-5 ${light ? 'text-white' : 'text-brand-dark'}`}>{heading}</h2>}
    {intro && <p className={light ? 'text-slate-300 text-lg leading-relaxed' : 'text-slate-600 text-lg leading-relaxed'}>{intro}</p>}
  </div>
);

const Hero = ({ section }) => {
  const image = imageUrl(section.image);
  return <section className="relative overflow-hidden rounded-box bg-brand-dark px-8 py-16 text-white md:px-16 md:py-24">
    {image && <img src={image} alt={section.image?.alt || ''} className="absolute inset-0 h-full w-full object-cover opacity-25" />}
    <div className="relative z-10 max-w-3xl"><Heading {...section} light />
      {section.ctaLabel && <Link to={section.ctaUrl || '/contact'} className="btn btn-lime mt-8">{section.ctaLabel}</Link>}
    </div>
  </section>;
};

const TextSection = ({ section }) => <section className="mx-auto max-w-4xl rounded-box bg-white p-8 md:p-14"><Heading {...section} /><div className="prose prose-slate mt-8 max-w-none"><PortableText value={section.body} /></div></section>;
const FeatureGrid = ({ section }) => <section><Heading {...section} /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{section.features?.map((item) => <article key={item._key} className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-brand-dark">{item.title}</h3><p className="mt-3 text-slate-600">{item.description}</p></article>)}</div></section>;
const CourseList = ({ section }) => <section><Heading {...section} /><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{section.courses?.map((course) => <Link key={course._id} to={course.slug ? `/${course.slug}` : '/courses'} className="overflow-hidden rounded-3xl bg-white shadow-sm transition-transform hover:-translate-y-1"><img src={imageUrl(course.image, 800)} alt={course.title} className="h-44 w-full object-cover" /><div className="p-6"><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{course.category}</p><h3 className="mt-2 font-display text-xl font-bold text-brand-dark">{course.title}</h3><p className="mt-3 text-sm text-slate-600">{course.description}</p></div></Link>)}</div></section>;
const FaqList = ({ section }) => <section><Heading {...section} /><div className="mt-8 space-y-3">{section.faqs?.map((faq) => <details key={faq._id} className="rounded-2xl bg-white p-6"><summary className="cursor-pointer font-display font-bold text-brand-dark">{faq.question}</summary><p className="mt-4 text-slate-600">{faq.answer}</p></details>)}</div></section>;
const GalleryGrid = ({ section }) => <section><Heading {...section} /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{section.images?.map((item) => <figure key={item._id} className="overflow-hidden rounded-3xl bg-white"><img src={imageUrl(item.image, 1000)} alt={item.title || ''} className="aspect-square w-full object-cover" /><figcaption className="p-4 font-bold text-brand-dark">{item.title}</figcaption></figure>)}</div></section>;
const TestimonialList = ({ section }) => <section className="rounded-box bg-brand-dark p-8 md:p-14"><Heading {...section} light /><div className="mt-8 grid gap-5 md:grid-cols-3">{section.testimonials?.map((item) => <blockquote key={item._id} className="rounded-3xl bg-white/10 p-6 text-white"><p>“{item.quote}”</p><footer className="mt-5 font-bold text-brand-lime">{item.name}{item.role && ` · ${item.role}`}</footer></blockquote>)}</div></section>;
const Cta = ({ section }) => <section className="rounded-box bg-brand-lime p-8 md:p-14"><Heading {...section} /><Link to={section.ctaUrl || '/contact'} className="btn btn-primary mt-8">{section.ctaLabel || 'Contact us'}</Link></section>;

export default CMSPage;
