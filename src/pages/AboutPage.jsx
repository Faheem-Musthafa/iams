import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Experienced Teachers", desc: "Learn from highly qualified and dedicated faculty." },
    { title: "AC Classrooms", desc: "Comfortable, modern learning spaces for better focus." },
    { title: "Personal Mentoring", desc: "Individual attention to help students discover their passion." },
    { title: "Moral & Social Values", desc: "Emphasis on character building and social responsibility." },
    { title: "Career Guidance", desc: "Clear pathways and support for future goals." },
    { title: "Modern Facilities", desc: "Well-equipped labs, library, and digital learning tools." },
    { title: "Freedom of Expression", desc: "A campus culture that respects student voices and creativity." },
    { title: "Student-Centered", desc: "Every decision revolves around students' growth and success." }
  ];

  return (
    <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="section-container relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 animate-[fadeUp_0.8s_ease_forwards]">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Our Story
          </div>
          <h1 className="heading-xl tracking-tight mb-8">
            Welcome to <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">IAMS Campus<span className="absolute bottom-2 left-0 w-full h-[6px] bg-brand-lime -z-10 rounded-full"></span></span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold">
            Established to promote and protect the rights to education, freedom of expression, thought, and career. We nurture youth with strong moral values and a deep sense of responsibility toward society.
          </p>
        </div>

        {/* Vision & Mission Grid (Bento Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 animate-[fadeUp_0.8s_ease_0.2s_forwards] opacity-0">
          
          {/* Highlight Block: Mission */}
          <div className="lg:col-span-7 bg-brand-dark text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group shadow-2xl border-4 border-slate-900">
            <div className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] bg-brand-lime/15 blur-[100px] rounded-full pointer-events-none" aria-hidden="true"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-lime font-bold text-xs uppercase tracking-widest mb-8 w-fit">
              Our Mission
            </div>
            
            <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-6 leading-tight">
              Evolving as a globally eminent institute for career solutions.
            </h3>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              We achieve our objective in an environment swarmed with fairness, honesty, and courtesy towards students, faculties, parents, and society. Paving the perfect path to help students achieve their intimate dreams.
            </p>
          </div>

          {/* Large Image Block */}
          <div className="lg:col-span-5 h-[350px] lg:h-auto rounded-[2.5rem] overflow-hidden relative group shadow-lg border-4 border-white">
            <img 
              src="https://iamscampus.in/wp-content/uploads/2025/11/HEADER-IMAGE-2-scaled.png" 
              alt="Campus building with students" 
              className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-32 scroll-mt-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">
              Our Mentors
            </div>
            <h2 className="heading-md text-brand-dark">Meet Our Team</h2>
            <p className="text-slate-500 text-sm md:text-base font-semibold mt-2">
              Our experienced teachers, staff, and administrators foster a nurturing, inclusive environment, guiding students to discover their passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 text-center border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-all duration-500 group relative">
              <div className="w-40 h-40 mx-auto rounded-2xl bg-slate-100 mb-8 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://iamscampus.in/wp-content/uploads/2024/04/Untitled-1-Recovered-150x150.jpg" 
                  alt="Salih" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <h3 className="font-display font-black text-2xl text-brand-dark mb-2">Salih</h3>
              <p className="text-brand-lime font-black uppercase text-xs tracking-widest bg-brand-dark px-4 py-1.5 rounded-full inline-block">
                Founder
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-[2.5rem] p-10 text-center border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-all duration-500 group relative">
              <div className="w-40 h-40 mx-auto rounded-2xl bg-slate-100 mb-8 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://iamscampus.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-13.36.49_a910addf-150x150.jpg" 
                  alt="Nisamudheen" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <h3 className="font-display font-black text-2xl text-brand-dark mb-2">Nisamudheen</h3>
              <p className="text-brand-lime font-black uppercase text-xs tracking-widest bg-brand-dark px-4 py-1.5 rounded-full inline-block">
                Graphic Designer Faculty
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-[2.5rem] p-10 text-center border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-all duration-500 group relative">
              <div className="w-40 h-40 mx-auto rounded-2xl bg-slate-100 mb-8 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://iamscampus.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-13.13.16_fa12b4ff-150x150.jpg" 
                  alt="Jamsheer" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <h3 className="font-display font-black text-2xl text-brand-dark mb-2">Jamsheer</h3>
              <p className="text-brand-lime font-black uppercase text-xs tracking-widest bg-brand-dark px-4 py-1.5 rounded-full inline-block">
                IT Faculty
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="scroll-mt-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">
              Why IAMS
            </div>
            <h2 className="heading-md text-brand-dark">The IAMS Advantage</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-brand-dark transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="font-display font-black text-xl text-brand-dark mb-3 group-hover:text-brand-lime transition-colors duration-300">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-semibold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutPage;
