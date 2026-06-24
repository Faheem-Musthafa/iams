import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found | IAMS Campus"
        description="The page you are looking for does not exist."
        noindex
      />
      
      <main className="pt-36 pb-20 min-h-[80vh] bg-slate-50 relative overflow-hidden flex items-center justify-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-blob"></div>

        <div className="text-center px-4 relative z-10">
          <div className="font-display font-black text-9xl text-brand-dark mb-4 drop-shadow-sm">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Page Not Found</h1>
          <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link to="/" className="inline-block py-4 px-10 rounded-full bg-brand-dark text-brand-lime hover:bg-brand-lime hover:text-brand-dark font-black text-lg transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(190,242,100,0.4)] hover:-translate-y-1">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
