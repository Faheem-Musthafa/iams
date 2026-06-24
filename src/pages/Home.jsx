import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IAMS Campus",
    "url": "https://iamscampus.in",
    "logo": "https://iamscampus.in/favicon.svg",
    "telephone": "+91-96331-30516",
    "email": "info@iamscampus.in",
    "areaServed": "Malappuram, Kerala, India",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NP Center, Kakkad",
      "addressLocality": "Malappuram",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/iams__campus/",
      "https://www.youtube.com/@IAMSCAMPUS"
    ]
  };

  return (
    <>
      <SEO
        title="Premium Educational Institute in Malappuram | IAMS Campus"
        description="IAMS Campus in Malappuram, Kerala offers premium courses in digital marketing, business management, corporate accounts, and commerce tuition."
        path="/"
        schema={schema}
      />
      <main>
      <Hero />
      <About />
      <Courses />
      <Testimonials />
    </main>
    </>
  );
};

export default Home;
