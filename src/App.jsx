import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import GalleryPage from './pages/GalleryPage';
import PlacementsPage from './pages/PlacementsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import CommerceTuitionPage from './pages/CommerceTuitionPage';
import BusinessManagementPage from './pages/BusinessManagementPage';
import MobileConversionBar from './components/MobileConversionBar';
import ProgramPage from './pages/ProgramPage';
import programPages from './data/programPages';
import { getSiteSettings } from './lib/sanity';
import ManagedPage from './components/ManagedPage';

let lenisInstance = null;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const useSmoothScrolling = () => {
  useEffect(() => {
    let animationFrame;
    let disposed = false;
    let lenis;

    const initialize = async () => {
      const { default: Lenis } = await import('lenis');
      if (disposed) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });
      lenisInstance = lenis;

      const raf = (time) => {
        lenis.raf(time);
        animationFrame = requestAnimationFrame(raf);
      };

      animationFrame = requestAnimationFrame(raf);
    };

    initialize();

    return () => {
      disposed = true;
      if (animationFrame) cancelAnimationFrame(animationFrame);
      lenis?.destroy();
      lenisInstance = null;
    };
  }, []);
};

export const AppShell = ({ siteSettings = null }) => (
  <>
    <ScrollToTop />
    <Navbar siteSettings={siteSettings} />
    <Routes>
      <Route path="/" element={<ManagedPage slug="home" fallback={<Home />} />} />
      <Route path="/about" element={<ManagedPage slug="about" fallback={<AboutPage />} />} />
      <Route path="/courses" element={<ManagedPage slug="courses" fallback={<CoursesPage />} />} />
      <Route path="/gallery" element={<ManagedPage slug="gallery" fallback={<GalleryPage />} />} />
      <Route path="/placements" element={<ManagedPage slug="placements" fallback={<PlacementsPage />} />} />
      <Route path="/contact" element={<ManagedPage slug="contact" fallback={<ContactPage />} />} />
      <Route path="/privacy" element={<ManagedPage slug="privacy" fallback={<PrivacyPolicyPage />} />} />
      <Route path="/faq" element={<ManagedPage slug="faq" fallback={<FAQPage />} />} />
      <Route path="/plus-one-commerce-tuition-malappuram" element={<ManagedPage slug="plus-one-commerce-tuition-malappuram" fallback={<CommerceTuitionPage />} />} />
      <Route path="/business-management-course-malappuram" element={<ManagedPage slug="business-management-course-malappuram" fallback={<BusinessManagementPage />} />} />
      {programPages.map((program) => (
        <Route key={program.path} path={program.path} element={<ManagedPage slug={program.path.slice(1)} fallback={<ProgramPage program={program} />} />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer siteSettings={siteSettings} />
    <MobileConversionBar />
  </>
);

function App() {
  const [siteSettings, setSiteSettings] = useState(null);
  useSmoothScrolling();

  useEffect(() => {
    getSiteSettings()
      .then(setSiteSettings)
      .catch((error) => console.error('Unable to load Sanity site settings.', error));
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AppShell siteSettings={siteSettings} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
