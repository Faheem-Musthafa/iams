import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 section-container overflow-hidden">
      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
          Admissions Open 2026
        </div>

        <h1 className="heading-xl tracking-tight mb-8">
          Commerce Tuition & Career Courses <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-600 font-black">in Malappuram</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-semibold">
          Join +1 and +2 Commerce tuition or build job-ready skills through Business Management, Corporate Accounts, Digital Marketing, and more near Tirurangadi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a href="https://wa.me/919846067770?text=Hi%20IAMS%20Campus%2C%20I%20would%20like%20admission%20details%20for%202026." target="_blank" rel="noreferrer" className="btn btn-primary w-full sm:w-auto group/btn flex items-center justify-center gap-2">
            Book Free Counselling
            <span className="group-hover/btn:translate-x-1 inline-block transition-transform duration-300">→</span>
          </a>
          <Link to="/plus-one-commerce-tuition-malappuram" className="btn btn-secondary w-full sm:w-auto">Commerce Tuition Details</Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600" aria-label="IAMS Campus highlights">
          <span>10+ years of experience</span><span aria-hidden="true">•</span><span>Personal mentoring</span><span aria-hidden="true">•</span><span>Career support</span>
        </div>
      </div>

      {/* Massive Rounded Image Container */}
      <div className="w-full relative rounded-[2.5rem] md:rounded-[3.5rem] bg-brand-dark overflow-hidden h-[450px] md:h-[600px] shadow-xl border border-slate-100">
        <img
          src="https://iamscampus.in/wp-content/uploads/2025/11/HEADER-IMAGE-2-scaled.png"
          alt="Students at IAMS Campus in Malappuram"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-95 scale-[1.01] hover:scale-[1.03] transition-transform duration-[3000ms] ease-out"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
