import { useEffect } from 'react';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';

const PlacementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '100%', label: 'Placement Assistance' },
    { value: '150+', label: 'Hiring Partners' },
    { value: '1K+', label: 'Careers Launched' },
  ];

  return (
    <>
      <SEO
        title="Placements & Reviews | IAMS Campus"
        description="Discover our success stories. IAMS Campus offers 100% placement support, partnering with top tech companies and corporate firms to kickstart careers."
        path="/placements"
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">

        {/* Header Section */}
        <div className="section-container">
          <div className="bg-brand-dark rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-white relative overflow-hidden mb-20 shadow-xl border border-slate-900">
            <div className="max-w-3xl relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-lime font-bold text-xs uppercase tracking-widest mb-6">
                Our Success Stories
              </div>
              <h1 className="font-display font-black text-5xl md:text-7xl mb-6 leading-none">
                Your Career,<br /> Our <span className="text-brand-lime">Priority.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl font-medium leading-relaxed">
                We don't just train you; we prepare you for the corporate world. Our dedicated placement cell works tirelessly to connect our top talent with industry-leading companies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-display font-bold text-4xl text-brand-lime mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Placement Gallery Section */}
        <div className="section-container mb-32 relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
              Alumni Showcase
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight">
              Meet Our Placed Students
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-semibold">
              A glimpse into the bright futures of our alumni who have successfully secured roles in top organizations. Their success is our greatest achievement.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pb-12">
            {[
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-Amaljith.png', name: 'Amaljith' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-minhaj.png', name: 'Minhaj' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-razil.png', name: 'Razil' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-sabiqa.png', name: 'Sabiqa' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-safa.png', name: 'Safa' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-shamil.png', name: 'Shamil' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-shifla-sheri.png', name: 'Shifla Sheri' },
              { img: 'https://iamscampus.in/wp-content/uploads/2025/11/Placements-iams-for-suhana.png', name: 'Suhana' }
            ].map((student, idx) => (
              <div
                key={idx}
                className="group relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-[4/5] bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 ease-out cursor-pointer"
              >
                <img
                  src={student.img}
                  alt={`Placement success story of ${student.name}`}
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                />

                {/* Premium Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]">
                    <h3 className="text-white font-display font-bold text-lg md:text-2xl mb-1.5 md:mb-2">{student.name}</h3>
                    <div className="flex items-center gap-1.5 md:gap-2.5 backdrop-blur-md bg-white/10 w-fit px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-white/20">
                      <span className="text-white text-[9px] md:text-xs font-bold uppercase tracking-wider">Placed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reuse the existing Testimonials component for the reviews part */}
        <Testimonials />

      </main>
    </>
  );
};

export default PlacementsPage;
