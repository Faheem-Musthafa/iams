import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer a diverse range of programs including +1 & +2 Commerce Tuition, AI Integrated Digital Tools, Business Management, Corporate Accounts with GST, Digital Marketing, Graphic Designing, and Spoken English."
  },
  {
    question: "What is the duration of your programs?",
    answer: "Our standard diploma and certificate programs (like Digital Marketing, Graphic Designing, Corporate Accounts) run for 6 Months. The comprehensive Business Management program is a 1-Year course."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, absolutely! We have dedicated placement support. With over 1K+ students successfully placed, we help our graduates connect with top companies and prepare for interviews."
  },
  {
    question: "Who are the mentors?",
    answer: "Our mentors are industry experts with years of practical experience. They bring real-world corporate scenarios into the classroom to ensure you learn relevant, up-to-date skills."
  },
  {
    question: "How do I apply for a course?",
    answer: "You can apply directly through our website by visiting the 'Courses' page and clicking 'Apply Now'. Alternatively, you can visit our campus at NP Center Kakkad, Malappuram or call us at 96331 30516."
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="FAQ - Common Questions | IAMS Campus Malappuram"
        description="Find answers to frequently asked questions about our courses, admissions, placements, and campus life at IAMS Campus."
        path="/faq"
        schema={faqSchema}
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-blob"></div>
      <div className="absolute top-80 left-10 w-[400px] h-[400px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="section-container max-w-4xl mx-auto">
        <div className="mb-16 text-center animate-[fadeUp_0.8s_ease_forwards] opacity-0">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Help Center
          </div>
          <h1 className="heading-xl tracking-tight mb-6">
            Frequently Asked <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">Questions<span className="absolute bottom-2 left-0 w-full h-[6px] bg-brand-lime -z-10 rounded-full"></span></span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Find answers to the most common questions about our courses, admissions, and campus life.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`relative bg-glassmorphism rounded-3xl border transition-all duration-500 overflow-hidden group animate-[fadeUp_0.8s_ease_forwards] opacity-0`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s`, borderColor: isOpen ? 'rgba(202,240,15,0.4)' : 'rgba(255,255,255,0.5)' }}
              >
                {/* Sheen effect on hover when closed */}
                {!isOpen && <div className="sheen-overlay"></div>}
                
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none relative z-10"
                >
                  <h3 className={`font-display font-black text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-slate-700 group-hover:text-brand-dark'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-dark text-brand-lime rotate-180 shadow-lg' : 'bg-white border border-slate-200 text-slate-500 group-hover:bg-brand-lime group-hover:text-brand-dark group-hover:border-transparent'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                
                {/* CSS Grid trick for smooth height transition */}
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-16 bg-glass-dark rounded-[2.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden animate-[fadeUp_0.8s_ease_forwards] opacity-0" style={{ animationDelay: '0.8s' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="font-display font-black text-3xl mb-4 relative z-10">Still have questions?</h3>
          <p className="text-slate-300 text-lg mb-8 relative z-10 max-w-xl mx-auto">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <Link to="/contact" className="inline-block py-4 px-8 rounded-full bg-brand-lime hover:bg-white hover:shadow-[0_0_30px_rgba(190,242,100,0.4)] hover:-translate-y-1 text-brand-dark font-black text-lg transition-all duration-300 relative z-10">
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
    </>
  );
};

export default FAQPage;
