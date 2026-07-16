import { useEffect } from 'react';
import SEO from '../components/SEO';
import commerceTuitionImg from '../assets/courses/commerce_tuition.webp';
import aiToolsImg from '../assets/courses/ai_tools.webp';
import businessManagementImg from '../assets/courses/business_management.webp';
import corporateAccountsImg from '../assets/courses/corporate_accounts.webp';
import digitalMarketingImg from '../assets/courses/digital_marketing.webp';
import graphicDesigningImg from '../assets/courses/graphic_designing.webp';
import spokenEnglishImg from '../assets/courses/spoken_english.webp';

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificationCourses = [
    { title: '+1, +2 Commerce Tuition', desc: 'Simplifies Commerce, building strong concepts for high exam scores. A comprehensive foundation for advanced accounting and business studies.', duration: 'Tuition', img: commerceTuitionImg, href: '/plus-one-commerce-tuition-malappuram' },
    { title: 'AI Integrated Tools', desc: 'A practical 6-month course that teaches how to use AI-powered features in Google Docs, Sheets, Slides, and Canva. Designed for students, teachers, professionals, and content creators to work smarter and faster.', duration: '6 Months', img: aiToolsImg, href: '/ai-tools-course-malappuram' },
    { title: 'Business Management', desc: 'Embark on an extraordinary journey towards a fulfilling career in business management. Designed to equip you with the skills and knowledge necessary to thrive in today’s dynamic business environment with a comprehensive curriculum.', duration: '1 Year', img: businessManagementImg, href: '/business-management-course-malappuram' },
    { title: 'Corporate Accounts with GST', desc: 'Take control of company finances and navigate the complexities of modern accounting with our Company Accounts course, focusing on Tally, Peachtree software, GST, and Gulf VAT.', duration: '6 Months', img: corporateAccountsImg, href: '/corporate-accounting-gst-course-malappuram' },
    { title: 'Digital Marketing', desc: 'The Digital Marketing Masterclass is an intensive and hands-on course designed to equip students with the knowledge and skills required to excel in the ever-evolving field of digital marketing. Covers a wide range of concepts, strategies, and tools.', duration: '6 Months', img: digitalMarketingImg, href: '/digital-marketing-course-malappuram' },
    { title: 'Graphic Designing', desc: 'Unlock your creativity and unleash your potential with our Graphic Designing course, focusing on Adobe Photoshop and Illustrator. Whether you’re a beginner or a seasoned professional, our course offers a dynamic learning experience.', duration: '6 Months', img: graphicDesigningImg, href: '/graphic-design-course-malappuram' },
    { title: 'Spoken English', desc: 'Aims to help learners become confident, articulate speakers. Focuses on improving speaking and listening skills, building vocabulary, and enhancing pronunciation and fluency for academic and professional situations.', duration: '6 Months', img: spokenEnglishImg, href: '/spoken-english-course-malappuram' }
  ];

  const degreePrograms = [
    { title: 'B.Com', desc: 'Explore the fundamentals of commerce and finance. Learn accounting, business law, and economics. A strong base for CA, CMA, and other professional corporate roles.', tag: 'Undergrad', href: '/bcom-course-malappuram' },
    { title: 'BBA', desc: 'Begin your journey in business administration. Study principles of management, marketing, and HR for corporate management. Learn how to apply them effectively in real-world scenarios.', tag: 'Undergrad', href: '/bba-course-malappuram' },
    { title: 'MBA', desc: 'Master the world of business and management. Develop leadership, strategic thinking, and financial management skills necessary to thrive in today’s dynamic business environment.', tag: 'Postgrad', href: '/mba-course-malappuram' },
    { title: 'MCA', desc: 'Data Science & Analytics. A comprehensive and career-focused course designed to equip students with technical expertise and an analytical mindset. Blends computer science, statistical modeling, machine learning, and data visualization.', tag: 'Postgrad', href: '/mca-data-science-course-malappuram' }
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
        "url": c.href ? `https://iamscampus.in${c.href}` : undefined,
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
        title="Commerce, Business & Career Courses in Malappuram | IAMS"
        description="Explore +1 Commerce tuition, Business Management, Corporate Accounts, Digital Marketing and career courses near Tirurangadi, Malappuram. Enquire for 2026."
        path="/courses"
        schema={courseSchema}
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
        
        {/* Page Header */}
        <div className="section-container text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Explore Curriculums
          </div>

          <h1 className="heading-xl tracking-tight mb-8">
            Career-focused courses <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">in Malappuram</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-semibold">
            From +1 Commerce tuition to Business Management and professional skills, choose a practical learning path near Tirurangadi that fits your goals.
          </p>
        </div>

        {/* Certification Courses Grid */}
        <div className="section-container mb-32 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-3">
                Professional Skills
              </div>
              <h2 className="heading-md text-brand-dark">Certification Programs</h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base font-semibold">Accelerated skill-building programs with internship opportunities.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {certificationCourses.map((course, idx) => (
              <div 
                key={idx} 
                className="relative bg-glassmorphism rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 overflow-hidden group hover:-translate-y-1 hover:shadow-md hover:border-slate-200 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="h-32 md:h-64 overflow-hidden relative">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-brand-dark shadow-sm border border-white/50">
                    {course.duration}
                  </div>
                </div>
                <div className="p-4 md:p-8 relative z-10 bg-white/50 backdrop-blur-sm flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base md:text-2xl text-brand-dark mb-2 md:mb-4">{course.title}</h3>
                    <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8 line-clamp-2 md:line-clamp-4 font-semibold">{course.desc}</p>
                  </div>
                  <a
                    href={course.href || `https://wa.me/919846067770?text=${encodeURIComponent(`Hi IAMS Campus, I would like details about ${course.title}.`)}`}
                    target={course.href ? undefined : '_blank'}
                    rel={course.href ? undefined : 'noreferrer'}
                    className="group/btn flex items-center justify-center gap-1 md:gap-2 w-full py-2.5 md:py-4 text-center rounded-xl md:rounded-2xl bg-white border border-slate-200 font-bold text-[10px] md:text-sm text-brand-dark hover:bg-brand-lime hover:border-brand-lime transition-all duration-300 shadow-sm"
                  >
                    {course.href ? 'View Details' : 'Apply Now'}
                    <span className="group-hover/btn:translate-x-1 inline-block transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Degrees Section */}
        <div className="bg-brand-dark text-white py-32 relative overflow-hidden">
          
          <div className="section-container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-lime font-bold text-xs uppercase tracking-widest mb-4">
                Academic Degrees
              </div>
              <h2 className="heading-lg text-white mb-6">University Programs</h2>
              <p className="text-slate-400 text-lg md:text-xl font-semibold">
                Explore undergraduate and postgraduate study pathways for comprehensive academic growth.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
              {degreePrograms.map((degree, idx) => (
                <div 
                  key={idx} 
                  className="relative bg-glass-dark rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 border border-white/5 group flex flex-col justify-between hover:border-brand-lime/40 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-lime/0 via-brand-lime/0 to-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4 md:mb-8">
                      <h3 className="font-display font-bold text-base md:text-4xl text-white group-hover:text-brand-lime transition-colors duration-300 leading-tight">
                        {degree.title}
                      </h3>
                      <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-xs font-bold text-slate-300 tracking-wider uppercase border border-white/5">
                        {degree.tag}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[10px] md:text-lg leading-relaxed font-semibold mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
                      {degree.desc}
                    </p>
                  </div>
                  <div className="relative z-10">
                    <a
                      href={degree.href}
                      className="inline-flex items-center gap-1.5 text-brand-lime font-bold text-[10px] md:text-sm tracking-wider uppercase group/link"
                    >
                      View Details
                      <svg className="group-hover/link:translate-x-1.5 transition-transform duration-300 w-3.5 h-3.5 md:w-4 md:h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
