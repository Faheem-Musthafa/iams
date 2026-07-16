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
        path="/404"
        noindex
      />
      
      <main className="pt-36 pb-20 min-h-[80vh] bg-slate-50 relative overflow-hidden flex items-center justify-center">

        <div className="text-center px-4 relative z-10">
          <div className="font-display font-black text-9xl text-brand-dark mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Page Not Found</h1>
          <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto font-semibold">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link to="/" className="inline-block py-4 px-10 rounded-full bg-brand-dark text-brand-lime hover:bg-brand-lime hover:text-brand-dark font-bold text-lg transition-all duration-300 shadow-sm">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
