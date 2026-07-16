import { Link } from 'react-router-dom';
import commerceTuitionImg from '../assets/courses/commerce_tuition.webp';
import aiToolsImg from '../assets/courses/ai_tools.webp';
import businessManagementImg from '../assets/courses/business_management.webp';
import corporateAccountsImg from '../assets/courses/corporate_accounts.webp';
import digitalMarketingImg from '../assets/courses/digital_marketing.webp';
import graphicDesigningImg from '../assets/courses/graphic_designing.webp';
import spokenEnglishImg from '../assets/courses/spoken_english.webp';

const Courses = () => {
  const courses = [
    {
      title: '+1, +2 Commerce Tuition',
      desc: 'Building strong concepts for high scores.',
      duration: 'Tuition',
      img: commerceTuitionImg,
      alt: 'Students studying commerce topics',
      href: '/plus-one-commerce-tuition-malappuram'
    },
    {
      title: 'AI Integrated Digital Tools',
      desc: 'Automate tasks & boost productivity.',
      duration: '6 Months',
      img: aiToolsImg,
      alt: 'Concept art of artificial intelligence integration',
      href: '/ai-tools-course-malappuram'
    },
    {
      title: 'Business Management',
      desc: 'Elevate your career.',
      duration: '1 Year',
      img: businessManagementImg,
      alt: 'Professionals discussing business strategies',
      href: '/business-management-course-malappuram'
    },
    {
      title: 'Corporate Accounts with GST',
      desc: 'Streamline corporate accounting.',
      duration: '6 Months',
      img: corporateAccountsImg,
      alt: 'Financial accounting and charts',
      href: '/corporate-accounting-gst-course-malappuram'
    },
    {
      title: 'Digital Marketing',
      desc: 'Master the art of digital marketing.',
      duration: '6 Months',
      img: digitalMarketingImg,
      alt: 'Student learning digital marketing on a laptop',
      href: '/digital-marketing-course-malappuram'
    },
    {
      title: 'Graphic Designing',
      desc: 'Elevate your creativity.',
      duration: '6 Months',
      img: graphicDesigningImg,
      alt: 'Designer working on a digital illustration',
      href: '/graphic-design-course-malappuram'
    },
    {
      title: 'Spoken English',
      desc: 'Improve your English proficiency.',
      duration: '6 Months',
      img: spokenEnglishImg,
      alt: 'People speaking and communicating',
      href: '/spoken-english-course-malappuram'
    }
  ];

  return (
    <section id="courses" className="section-container pb-24 relative z-10">
      <div className="bg-white rounded-box p-8 md:p-16 border border-slate-100 shadow-[0_20px_50px_rgb(0,0,0,0.02)]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">
              Featured Programs
            </div>
            <h2 className="heading-md text-brand-dark">Our Top Programs</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium mt-2">
              From marketing mastery to business leadership, discover where your next educational journey will take you.
            </p>
          </div>
        </div>

        {/* 2-Column Grid on Mobile, Multi-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, idx) => (
            <Link
              to={course.href || '/courses'}
              className="group relative h-[240px] md:h-[360px] rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-100 hover:shadow-lg transition-all duration-500" 
              key={idx}
            >
              <img 
                src={course.img} 
                alt={course.alt} 
                loading="lazy"
                width="400"
                height="600"
                className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-slate-800 shadow-sm border border-white/20">
                {course.duration}
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 pointer-events-none">
                <h3 className="font-display text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight group-hover:text-brand-lime transition-colors duration-300">{course.title}</h3>
                <p className="text-white/80 text-[10px] md:text-xs font-medium flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 line-clamp-1 md:line-clamp-none">
                  <span className="text-brand-lime" aria-hidden="true">✦</span> {course.desc}
                </p>
              </div>
            </Link>
          ))}
          
          {/* View All Card */}
          <Link
            to="/courses"
            className="group relative h-[240px] md:h-[360px] rounded-3xl overflow-hidden bg-brand-lime flex flex-col items-center justify-center cursor-pointer p-4 md:p-8 text-center hover:bg-[#a3e635] transition-all duration-300 shadow-sm"
          >
             <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-dark rounded-full flex items-center justify-center text-brand-lime mb-3 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </div>
             <h3 className="font-display text-sm md:text-xl font-bold text-brand-dark mb-1 md:mb-2">Explore All</h3>
             <p className="text-slate-700 text-[10px] md:text-xs font-semibold max-w-[200px] leading-relaxed">Browse all courses & degree programs.</p>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Courses;
