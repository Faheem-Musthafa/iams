import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 section-container overflow-hidden">
      {/* Background Grids & Glowing Blobs */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-accent/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>

      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 px-4 animate-[fadeUp_0.8s_ease_forwards] opacity-0">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-lime shadow-[0_0_8px_rgba(202,240,15,0.8)] animate-pulse"></span>
          Admissions Open 2026
        </div>

        <h1 className="heading-xl tracking-tight mb-8">
          Empowering Careers <br className="hidden md:block" /> Through <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">Education<span className="absolute bottom-2 left-0 w-full h-[6px] bg-brand-lime -z-10 rounded-full"></span></span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
          From digital marketing to business management, we deliver industry-focused programs that elevate your skills and drive career growth. Let's create your future.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <Link to="/courses" className="btn btn-primary w-full sm:w-auto">
            Explore Programs
          </Link>
          <Link to="/about" className="btn btn-secondary w-full sm:w-auto">
            Learn More
          </Link>
        </div>
      </div>

      {/* Massive Rounded Image Container */}
      <div className="w-full relative rounded-[2.5rem] md:rounded-[3.5rem] bg-brand-dark overflow-hidden h-[500px] md:h-[680px] animate-[fadeUp_0.8s_ease_0.2s_forwards] opacity-0 shadow-2xl border-4 border-white">
        <img
          src="https://iamscampus.in/wp-content/uploads/2025/11/HEADER-IMAGE-2-scaled.png"
          alt="Students at IAMS Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.01] hover:scale-[1.03] transition-transform duration-[4000ms] ease-out"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/10 to-transparent"></div>

        {/* Floating Badges */}
        <div className="absolute top-10 left-10 hidden md:flex flex-col gap-1 bg-white/95 backdrop-blur-md border border-slate-100 px-6 py-4 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '4s'}}>
          <div className="flex gap-1 text-brand-lime text-xl" aria-hidden="true">★★★★★</div>
          <div className="font-display font-black text-slate-900 text-lg">10+ Years</div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Excellence</div>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-4 bg-brand-dark/95 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
          <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center text-brand-dark font-black text-lg shadow-[0_0_15px_rgba(190,242,100,0.4)]">
            1K+
          </div>
          <div className="text-white">
            <div className="font-display font-black text-lg leading-none mb-1">Students</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Placed Successfully</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
