import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    };
  }, []);
};

export const AppShell = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/placements" element={<PlacementsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/plus-one-commerce-tuition-malappuram" element={<CommerceTuitionPage />} />
      <Route path="/business-management-course-malappuram" element={<BusinessManagementPage />} />
      {programPages.map((program) => (
        <Route key={program.path} path={program.path} element={<ProgramPage program={program} />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
    <MobileConversionBar />
  </>
);

function App() {
  useSmoothScrolling();

  return (
    <HelmetProvider>
      <Router>
        <AppShell />
      </Router>
    </HelmetProvider>
  );
}

export default App;
