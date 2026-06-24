import { useEffect } from 'react';
import SEO from '../components/SEO';

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificationCourses = [
    { title: '+1, +2 Commerce Tuition', desc: 'Simplifies Commerce, building strong concepts for high exam scores. A comprehensive foundation for advanced accounting and business studies.', duration: 'Tuition', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop' },
    { title: 'AI Integrated Tools', desc: 'A practical 6-month course that teaches how to use AI-powered features in Google Docs, Sheets, Slides, and Canva. Designed for students, teachers, professionals, and content creators to work smarter and faster.', duration: '6 Months', img: 'https://iamscampus.in/wp-content/uploads/2025/05/ChatGPT-Image-May-14-2025-07_41_54-PM-1024x683.png' },
    { title: 'Business Management', desc: 'Embark on an extraordinary journey towards a fulfilling career in business management. Designed to equip you with the skills and knowledge necessary to thrive in today’s dynamic business environment with a comprehensive curriculum.', duration: '1 Year', img: 'https://iamscampus.in/wp-content/uploads/2025/07/0654.png' },
    { title: 'Corporate Accounts with GST', desc: 'Take control of company finances and navigate the complexities of modern accounting with our Company Accounts course, focusing on Tally, Peachtree software, GST, and Gulf VAT.', duration: '6 Months', img: 'https://iamscampus.in/wp-content/uploads/2025/07/0956.png' },
    { title: 'Digital Marketing', desc: 'The Digital Marketing Masterclass is an intensive and hands-on course designed to equip students with the knowledge and skills required to excel in the ever-evolving field of digital marketing. Covers a wide range of concepts, strategies, and tools.', duration: '6 Months', img: 'https://iamscampus.in/wp-content/uploads/2025/05/ChatGPT-Image-May-14-2025-07_48_43-PM-1024x683.png' },
    { title: 'Graphic Designing', desc: 'Unlock your creativity and unleash your potential with our Graphic Designing course, focusing on Adobe Photoshop and Illustrator. Whether you’re a beginner or a seasoned professional, our course offers a dynamic learning experience.', duration: '6 Months', img: 'https://iamscampus.in/wp-content/uploads/2025/07/237643.png' },
    { title: 'Spoken English', desc: 'Aims to help learners become confident, articulate speakers. Focuses on improving speaking and listening skills, building vocabulary, and enhancing pronunciation and fluency for academic and professional situations.', duration: '6 Months', img: 'https://iamscampus.in/wp-content/uploads/2025/06/5646757-1024x269.png' }
  ];

  const degreePrograms = [
    { title: 'B.Com', desc: 'Explore the fundamentals of commerce and finance. Learn accounting, business law, and economics. A strong base for CA, CMA, and other professional corporate roles.', tag: 'Undergrad' },
    { title: 'BBA', desc: 'Begin your journey in business administration. Study principles of management, marketing, and HR for corporate management. Learn how to apply them effectively in real-world scenarios.', tag: 'Undergrad' },
    { title: 'MBA', desc: 'Master the world of business and management. Develop leadership, strategic thinking, and financial management skills necessary to thrive in today’s dynamic business environment.', tag: 'Postgrad' },
    { title: 'MCA', desc: 'Data Science & Analytics. A comprehensive and career-focused course designed to equip students with technical expertise and an analytical mindset. Blends computer science, statistical modeling, machine learning, and data visualization.', tag: 'Postgrad' }
  ];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [...certificationCourses, ...degreePrograms].map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.desc,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "IAMS Campus",
          "sameAs": "https://iamscampus.in"
        }
      }
    }))
  };

  return (
    <>
      <SEO
        title="Diploma & Degree Courses in Malappuram | IAMS Campus"
        description="Explore digital marketing, business management, corporate accounts with GST, graphic design & commerce tuition in Malappuram, Kerala. Placement support, 1000+ placed."
        path="/courses"
        schema={courseSchema}
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-blob"></div>
        <div className="absolute top-60 right-10 w-[400px] h-[400px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>
        
        {/* Page Header */}
        <div className="section-container text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm animate-[fadeUp_0.8s_ease_forwards] opacity-0">
            Explore Curriculums
          </div>

          <h1 className="heading-xl tracking-tight mb-8 animate-[fadeUp_0.8s_ease_0.1s_forwards] opacity-0">
            Begin Your Learning <br className="hidden md:block" /> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">Adventure<span className="absolute bottom-2 left-0 w-full h-[6px] bg-brand-lime -z-10 rounded-full"></span></span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium animate-[fadeUp_0.8s_ease_0.2s_forwards] opacity-0">
            Upgrade your skills from anywhere with our flexible and industry-relevant online and offline programs. Choose the course that suits your goals.
          </p>
        </div>

        {/* Certification Courses Grid */}
        <div className="section-container mb-32 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-widest mb-3">
                Professional Skills
              </div>
              <h2 className="heading-md text-brand-dark">Certification Programs</h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base font-semibold">Accelerated skill-building programs with internship opportunities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationCourses.map((course, idx) => (
              <div 
                key={idx} 
                className="relative bg-glassmorphism rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)] transition-all duration-500 animate-[fadeUp_0.8s_ease_forwards] opacity-0"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="sheen-overlay"></div>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand-dark shadow-sm border border-white/50">
                    {course.duration}
                  </div>
                </div>
                <div className="p-8 relative z-10 bg-white/50 backdrop-blur-sm">
                  <h3 className="font-display font-black text-2xl text-brand-dark mb-4 group-hover:text-brand-lime transition-colors duration-300">{course.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-4 font-medium">{course.desc}</p>
                  <a 
                    href="https://wa.me/919846067770" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group/btn flex items-center justify-center gap-2 w-full py-4 text-center rounded-2xl bg-white border border-slate-200 font-bold text-sm text-brand-dark hover:bg-brand-lime hover:border-brand-lime hover:shadow-[0_10px_20px_rgba(190,242,100,0.3)] transition-all duration-300"
                  >
                    Apply & Get Details
                    <span className="group-hover/btn:translate-x-1 inline-block transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Degrees Section */}
        <div className="bg-brand-dark text-white py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true"></div>
          
          <div className="section-container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-lime font-bold text-xs uppercase tracking-widest mb-4">
                Academic Degrees
              </div>
              <h2 className="heading-lg text-white mb-6">University Programs</h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium">
                We offer accredited undergraduate and postgraduate degree programs for comprehensive academic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {degreePrograms.map((degree, idx) => (
                <div 
                  key={idx} 
                  className="relative bg-glass-dark rounded-[2.5rem] p-8 md:p-12 hover:border-brand-lime/40 group flex flex-col justify-between hover:shadow-[0_0_40px_rgba(190,242,100,0.1)] hover:-translate-y-1 transition-all duration-500 animate-[fadeUp_0.8s_ease_forwards] opacity-0 overflow-hidden"
                  style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-lime/0 via-brand-lime/0 to-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <h3 className="font-display font-black text-3xl md:text-4xl text-white group-hover:text-brand-lime transition-colors duration-300 leading-tight">
                        {degree.title}
                      </h3>
                      <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-300 tracking-wider uppercase border border-white/5">
                        {degree.tag}
                      </span>
                    </div>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed font-semibold mb-8">
                      {degree.desc}
                    </p>
                  </div>
                  <div className="relative z-10">
                    <a 
                      href="https://wa.me/919846067770" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-brand-lime font-bold text-sm tracking-wider uppercase group/link"
                    >
                      Request Prospectus 
                      <svg className="group-hover/link:translate-x-1.5 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default CoursesPage;
