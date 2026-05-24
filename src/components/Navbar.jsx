import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Placements', href: '/placements' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <div className={`pointer-events-auto flex items-center justify-between bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-4 md:px-6 py-2 md:py-3 w-full max-w-[1200px] transition-all duration-500 ${scrolled ? 'py-1.5 md:py-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' : ''}`}>
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" aria-label="IAMS Campus Home" className="font-display text-xl md:text-2xl font-black text-brand-dark tracking-tighter hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-lime rounded-lg">
              IAMS
              <span className="text-brand-lime ml-1">●</span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`font-sans font-semibold text-[13px] px-4 py-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-brand-lime ${location.pathname === item.href ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-600 hover:text-brand-dark hover:bg-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA */}
          <div className="hidden md:flex gap-3 items-center">
            <Link to="/contact" className="text-[13px] font-bold text-brand-dark hover:opacity-70 transition-opacity mr-1 p-2 focus-visible:ring-2 focus-visible:ring-brand-lime rounded-lg">Contact Us</Link>
            <a href="https://play.google.com/store/apps/details?id=com.iamscampus.iamscampus_sm&hl=en_IN" target="_blank" rel="noreferrer" className="bg-brand-dark text-brand-lime px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2">
              Get App
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden text-brand-dark p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-32 px-6 pb-6 flex flex-col lg:hidden animate-[fadeUp_0.3s_ease_forwards] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`font-display font-bold text-2xl transition-colors py-3 border-b border-slate-100 ${location.pathname === item.href ? 'text-brand-lime' : 'text-brand-dark hover:text-brand-lime'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Link to="/contact" className="btn btn-secondary w-full justify-center">Contact Us</Link>
            <a href="https://play.google.com/store/apps/details?id=com.iamscampus.iamscampus_sm&hl=en_IN" target="_blank" rel="noreferrer" className="btn btn-primary w-full justify-center text-brand-lime">Download App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
