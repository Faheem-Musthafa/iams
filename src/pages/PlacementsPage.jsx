import { useEffect } from 'react';
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
    <main className="pt-32 pb-20 min-h-screen">
      
      {/* Header Section */}
      <div className="section-container">
        <div className="bg-brand-dark rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-white relative overflow-hidden mb-20 animate-[fadeUp_0.8s_ease_forwards] opacity-0">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-lime/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-lime font-bold text-xs uppercase tracking-widest mb-6">
              Our Success Stories
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl mb-6 leading-none">
              Your Career,<br/> Our <span className="text-brand-lime">Priority.</span>
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
        {/* Decorative background for the gallery */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="text-center mb-16 animate-[fadeUp_0.8s_ease_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
            Alumni Showcase
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-lime">Placed Students</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A glimpse into the bright futures of our alumni who have successfully secured roles in top organizations. Their success is our greatest achievement.
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 animate-[fadeUp_0.8s_ease_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
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
              className={`group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 ease-out cursor-pointer ${
                idx % 4 === 1 || idx % 4 === 3 ? 'lg:translate-y-12' : ''
              }`}
            >
              <img 
                src={student.img} 
                alt={`Placement success story of ${student.name}`} 
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
              />
              
              {/* Premium Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                 <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">
                    <h3 className="text-white font-display font-bold text-2xl mb-2">{student.name}</h3>
                    <div className="flex items-center gap-2.5 backdrop-blur-md bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-[0_0_8px_rgba(202,240,15,0.8)] animate-pulse"></span>
                      <span className="text-white text-xs font-bold uppercase tracking-wider">Placed</span>
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
  );
};

export default PlacementsPage;
