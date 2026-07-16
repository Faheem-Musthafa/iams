import { useEffect } from 'react';
import SEO from '../components/SEO';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "AC Classrooms", desc: "Comfortable, modern learning spaces for better focus." },
    { title: "Career Guidance", desc: "Clear pathways and support for future goals." },
    { title: "Experienced Teachers", desc: "Learn from highly qualified and dedicated faculty." },
    { title: "Freedom of Expression", desc: "A campus culture that respects student voices and creativity." },
    { title: "Modern Facilities", desc: "Well-equipped labs, library, and digital learning tools." },
    { title: "Moral & Social Values", desc: "Emphasis on character building and social responsibility." },
    { title: "Personal Mentoring", desc: "Individual attention to help students discover their passion." },
    { title: "Student-Centered", desc: "Every decision revolves around students' growth and success." }
  ];

  return (
    <>
      <SEO
        title="About IAMS Campus | Premium Education in Malappuram"
        description="Learn about our 10+ years of excellence in education. IAMS Campus provides top-tier facilities, expert mentors, and hands-on learning in Malappuram, Kerala."
        path="/about"
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">

        <div className="section-container relative z-10">
          
          {/* Page Header */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
              Our Story
            </div>
            <h1 className="heading-xl tracking-tight mb-8">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">IAMS Campus</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold">
              Established to promote and protect the rights to education, freedom of expression, thought, and career. We nurture youth with strong moral values and a deep sense of responsibility toward society.
            </p>
          </div>

          {/* Vision & Mission Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
            
            {/* Card 1: Mission (col-span-7) */}
            <div className="lg:col-span-7 bg-brand-dark text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group shadow-xl border border-slate-900 transition-all duration-500">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-lime font-bold text-xs uppercase tracking-widest mb-8 w-fit shadow-inner">
                Our Mission
              </div>
              
              <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-6 leading-tight">
                Evolving as a globally eminent institute for career solutions.
              </h3>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                We achieve our objective in an environment swarmed with fairness, honesty, and courtesy towards students, faculties, parents, and society. Paving the perfect path to help students achieve their intimate dreams.
              </p>
            </div>

            {/* Card 2: Campus Image Block (col-span-5) */}
            <div className="lg:col-span-5 h-[350px] lg:h-auto rounded-[2.5rem] overflow-hidden relative group shadow-sm border border-slate-200 transition-all duration-500">
              <img 
                src="https://iamscampus.in/wp-content/uploads/2025/11/HEADER-IMAGE-2-scaled.png" 
                alt="Campus life and students collaboration at IAMS" 
                className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/10"></div>
            </div>

            {/* Card 3: Vision (col-span-5) */}
            <div className="lg:col-span-5 bg-glassmorphism rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-0.5 border border-slate-100">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-8 w-fit">
                Our Vision
              </div>
              
              <h3 className="font-display font-black text-2xl md:text-3xl text-brand-dark mb-4 leading-tight">
                To Inspire and Lead
              </h3>
              
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold">
                To become a premier center of learning that fosters innovation, moral integrity, and practical capability, empowering students to lead the corporate and creative ecosystems of tomorrow.
              </p>
            </div>

            {/* Card 4: Core Values & Culture (col-span-7) */}
            <div className="lg:col-span-7 bg-glassmorphism rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-0.5 border border-slate-100">
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 w-fit">
                  Campus Culture
                </div>
                
                <h3 className="font-display font-black text-2xl md:text-3xl text-brand-dark mb-4 leading-tight">
                  Guided by Core Principles
                </h3>
                
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold mb-8">
                  We shape our environment to value unique student voices, ethical behavior, and hands-on professional learning that creates real career solutions.
                </p>
              </div>

              {/* Values Badges */}
              <div className="flex flex-wrap gap-2.5">
                {['Student-First', 'Practical Focus', 'Moral Values', 'Creative Freedom', 'Career Support', 'Ethical Standards'].map((val, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full font-bold text-xs text-slate-700 hover:bg-brand-lime hover:text-brand-dark hover:border-brand-lime transition-all duration-300 shadow-sm cursor-default"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Meet Our Team */}
          <div className="mb-32 scroll-mt-32">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">
                Our Mentors
              </div>
              <h2 className="heading-md text-brand-dark">Meet Our Team</h2>
              <p className="text-slate-500 text-sm md:text-base font-semibold mt-2">
                Our experienced teachers, staff, and administrators foster a nurturing, inclusive environment, guiding students to discover their passion.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 group relative">
                <div className="w-24 h-24 md:w-40 md:h-40 mx-auto rounded-2xl bg-slate-100 mb-4 md:mb-8 overflow-hidden border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://iamscampus.in/wp-content/uploads/2024/04/Untitled-1-Recovered-150x150.jpg" 
                    alt="Salih" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700" 
                  />
                </div>
                <h3 className="font-display font-bold text-lg md:text-2xl text-brand-dark mb-1 md:mb-2">Salih</h3>
                <p className="text-brand-lime font-black uppercase text-[9px] md:text-xs tracking-widest bg-brand-dark px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-block">
                  Founder
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 group relative">
                <div className="w-24 h-24 md:w-40 md:h-40 mx-auto rounded-2xl bg-slate-100 mb-4 md:mb-8 overflow-hidden border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://iamscampus.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-13.36.49_a910addf-150x150.jpg" 
                    alt="Nisamudheen" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700" 
                  />
                </div>
                <h3 className="font-display font-bold text-lg md:text-2xl text-brand-dark mb-1 md:mb-2">Nisamudheen</h3>
                <p className="text-brand-lime font-black uppercase text-[9px] md:text-xs tracking-widest bg-brand-dark px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-block">
                  Graphic Designer Faculty
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 group relative">
                <div className="w-24 h-24 md:w-40 md:h-40 mx-auto rounded-2xl bg-slate-100 mb-4 md:mb-8 overflow-hidden border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://iamscampus.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-13.13.16_fa12b4ff-150x150.jpg" 
                    alt="Jamsheer" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700" 
                  />
                </div>
                <h3 className="font-display font-bold text-lg md:text-2xl text-brand-dark mb-1 md:mb-2">Jamsheer</h3>
                <p className="text-brand-lime font-black uppercase text-[9px] md:text-xs tracking-widest bg-brand-dark px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-block">
                  IT Faculty
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div id="features" className="scroll-mt-32">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">
                Why IAMS
              </div>
              <h2 className="heading-md text-brand-dark">The IAMS Advantage</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 text-brand-dark flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-lime group-hover:text-brand-dark transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="font-display font-bold text-base md:text-xl text-brand-dark mb-2 md:mb-3 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-slate-500 text-[11px] md:text-sm leading-relaxed font-semibold">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default AboutPage;
