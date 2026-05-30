import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const courses = [
    {
      title: '+1, +2 Commerce Tuition',
      desc: 'Building strong concepts for high scores.',
      duration: 'Tuition',
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
      alt: 'Students studying commerce topics'
    },
    {
      title: 'AI Integrated Digital Tools',
      desc: 'Automate tasks & boost productivity.',
      duration: '6 Months',
      img: 'https://iamscampus.in/wp-content/uploads/2025/05/ChatGPT-Image-May-14-2025-07_41_54-PM-1024x683.png',
      alt: 'Concept art of artificial intelligence integration'
    },
    {
      title: 'Business Management',
      desc: 'Elevate your career.',
      duration: '1 Year',
      img: 'https://iamscampus.in/wp-content/uploads/2025/07/0654.png',
      alt: 'Professionals discussing business strategies'
    },
    {
      title: 'Corporate Accounts with GST',
      desc: 'Streamline corporate accounting.',
      duration: '6 Months',
      img: 'https://iamscampus.in/wp-content/uploads/2025/07/0956.png',
      alt: 'Financial accounting and charts'
    },
    {
      title: 'Digital Marketing',
      desc: 'Master the art of digital marketing.',
      duration: '6 Months',
      img: 'https://iamscampus.in/wp-content/uploads/2025/05/ChatGPT-Image-May-14-2025-07_48_43-PM-1024x683.png',
      alt: 'Student learning digital marketing on a laptop'
    },
    {
      title: 'Graphic Designing',
      desc: 'Elevate your creativity.',
      duration: '6 Months',
      img: 'https://iamscampus.in/wp-content/uploads/2025/07/237643.png',
      alt: 'Designer working on a digital illustration'
    },
    {
      title: 'Spoken English',
      desc: 'Improve your English proficiency.',
      duration: '6 Months',
      img: 'https://iamscampus.in/wp-content/uploads/2025/06/5646757-1024x269.png',
      alt: 'People speaking and communicating'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="courses" className="section-container pb-24 relative z-10">
      <div className="bg-white rounded-box p-8 md:p-16 border border-slate-100 shadow-[0_20px_50px_rgb(0,0,0,0.02)]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">
              Featured Programs
            </div>
            <h2 className="heading-md text-brand-dark">Our Top Programs</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium mt-2">
              From marketing mastery to business leadership, discover where your next educational journey will take you.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => handleScroll('left')}
              aria-label="Previous courses" 
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime cursor-pointer"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              onClick={() => handleScroll('right')}
              aria-label="Next courses" 
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime cursor-pointer"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container with Scroll Snap */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, idx) => (
            <div 
              onClick={() => navigate('/courses')}
              className="group relative min-w-[280px] sm:min-w-[320px] h-[420px] rounded-[2rem] overflow-hidden cursor-pointer snap-start bg-slate-900 border border-slate-100 hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] transition-all duration-500" 
              key={idx}
            >
              <img 
                src={course.img} 
                alt={course.alt} 
                loading="lazy"
                width="400"
                height="600"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
              
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-white/20">
                {course.duration}
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight group-hover:text-brand-lime transition-colors duration-300">{course.title}</h3>
                <p className="text-white/80 text-sm font-medium flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-lime" aria-hidden="true">✦</span> {course.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* View All Card */}
          <div 
            onClick={() => navigate('/courses')}
            className="group relative min-w-[280px] sm:min-w-[320px] h-[420px] rounded-[2rem] overflow-hidden bg-brand-lime flex flex-col items-center justify-center cursor-pointer p-8 text-center hover:bg-[#a3e635] transition-all duration-300 snap-start shadow-sm hover:shadow-[0_20px_40px_rgba(190,242,100,0.2)]"
          >
             <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-lime mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </div>
             <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">Explore All Programs</h3>
             <p className="text-slate-700 text-sm font-semibold max-w-[200px] leading-relaxed">Browse our full university degree programs & online courses.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;
