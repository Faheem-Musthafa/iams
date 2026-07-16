import { useEffect } from 'react';
import SEO from '../components/SEO';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: "https://iamscampus.in/wp-content/uploads/2025/11/HEADER-IMAGE-2-scaled.png", title: "Campus Life" },
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", title: "Classrooms" },
    { src: "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop", title: "Design Lab" },
    { src: "https://iamscampus.in/wp-content/uploads/2025/05/ChatGPT-Image-May-14-2025-07_48_43-PM-1024x683.png", title: "Digital Seminars" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", title: "Group Discussions" },
    { src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop", title: "Interactive Learning" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", title: "Seminars" },
    { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop", title: "Student Work" },
    { src: "https://iamscampus.in/wp-content/uploads/2025/05/394266147_24100616746220454_3943914626806249714_n2.jpg", title: "Study Sessions" }
  ];

  return (
    <>
      <SEO
        title="Campus Life & Gallery | IAMS Campus Malappuram"
        description="Take a look at the vibrant campus life, modern facilities, classrooms, and student events at IAMS Campus in Malappuram, Kerala."
        path="/gallery"
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">

      <div className="section-container relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Campus Life
          </div>
          <h1 className="heading-xl tracking-tight mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-semibold leading-relaxed">
            A glimpse into life at IAMS Campus. Explore our classrooms, events, and the vibrant student community.
          </p>
        </div>

        {/* Gallery Grid - Masonry style column layout */}
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative bg-brand-dark border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer mb-4"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy"
                className="w-full h-auto object-cover scale-[1.01] group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              
              {/* Premium overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-lime text-[10px] md:text-xs font-bold uppercase tracking-wider block mb-1">Gallery</span>
                  <h3 className="text-white font-display font-bold text-sm md:text-2xl leading-snug">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
    </>
  );
};

export default GalleryPage;
