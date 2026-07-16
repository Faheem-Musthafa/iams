import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import LocalSearchSection from '../components/LocalSearchSection';
import { localAnswers } from '../data/localAnswers';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://iamscampus.in/#organization",
        "name": "IAMS Campus",
        "url": "https://iamscampus.in",
        "logo": "https://iamscampus.in/favicon.png",
        "telephone": "+91-96331-30516",
        "email": "info@iamscampus.in",
        "areaServed": ["Malappuram", "Tirurangadi", "Kakkad"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NP Center, Kakkad",
          "addressLocality": "Malappuram",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/iams_campus/",
          "https://www.instagram.com/iams__campus/",
          "https://www.youtube.com/@IAMSCAMPUS"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://iamscampus.in/#website",
        "url": "https://iamscampus.in",
        "name": "IAMS Campus",
        "publisher": { "@id": "https://iamscampus.in/#organization" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "mainEntity": localAnswers.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="+1 Commerce Tuition & Business Courses in Malappuram | IAMS"
        description="Join IAMS Campus for +1 and +2 Commerce tuition and career-focused Business Management courses near Tirurangadi, Malappuram. Admissions open for 2026."
        path="/"
        schema={schema}
      />
      <main>
      <Hero />
      <About />
      <LocalSearchSection />
      <Courses />
      <Testimonials />
    </main>
    </>
  );
};

export default Home;
