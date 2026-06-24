import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

function App() {
  return (
    <HelmetProvider>
      <Router>
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
    </HelmetProvider>
  );
}

export default App;
