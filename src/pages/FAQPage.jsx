import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

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
  },
  {
    question: "Do you offer +1 Commerce tuition near Tirurangadi?",
    answer: "Yes. IAMS Campus at NP Center, Kakkad serves +1 and +2 Commerce students from Tirurangadi, Malappuram, and nearby areas. Contact admissions for current batch timings."
  },
  {
    question: "Which subjects are covered in +1 Commerce tuition?",
    answer: "The tuition focuses on building clear concepts and exam confidence across core Commerce areas such as Accountancy, Business Studies, and Economics. Contact the campus for the current subject and batch schedule."
  },
  {
    question: "Is the Business Management course available in Malappuram?",
    answer: "Yes. IAMS Campus offers a one-year Business Management program in Malappuram with practical learning, career guidance, and placement support."
  },
  {
    question: "How can I get course fees and batch timings?",
    answer: "Call admissions at +91 96331 30516 or send IAMS Campus a WhatsApp message. The team will share the latest fee details, eligibility, available batches, and admission steps."
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
        title="Commerce Tuition & Course FAQs | IAMS Campus Malappuram"
        description="Get answers about +1 Commerce tuition, Business Management, fees, batches, admissions and placement support at IAMS Campus near Tirurangadi."
        path="/faq"
        schema={faqSchema}
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">

      <div className="section-container max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Help Center
          </div>
          <h1 className="heading-xl tracking-tight mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">Questions</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-semibold max-w-2xl mx-auto">
            Get clear answers about Commerce tuition, Business Management, admissions, batch timings, and career support.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`relative bg-glassmorphism rounded-2xl md:rounded-3xl border transition-all duration-500 overflow-hidden group ${isOpen ? 'border-slate-300 shadow-sm' : 'border-slate-100'}`}
              >
                
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-5 py-4 md:px-8 md:py-6 flex items-center justify-between focus:outline-none relative z-10 gap-4"
                >
                  <h3 className={`font-display font-bold text-base md:text-xl lg:text-2xl transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-slate-700 group-hover:text-brand-dark'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-dark text-brand-lime rotate-180 shadow-md' : 'bg-white border border-slate-200 text-slate-500 group-hover:bg-brand-lime group-hover:text-brand-dark group-hover:border-transparent'}`}>
                    <svg className="w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                
                {/* CSS Grid trick for smooth height transition */}
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 md:px-8 md:pb-8 text-slate-600 text-xs md:text-base leading-relaxed font-semibold">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-16 bg-glass-dark rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 text-center text-white relative overflow-hidden border border-white/5">
          <h3 className="font-display font-bold text-xl md:text-3xl mb-4 relative z-10">Still have questions?</h3>
          <p className="text-slate-300 text-sm md:text-lg mb-8 relative z-10 max-w-xl mx-auto font-medium">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <a href="https://wa.me/919846067770?text=Hi%20IAMS%20Campus%2C%20I%20have%20a%20question%20about%20admissions." target="_blank" rel="noreferrer" className="inline-block py-3 px-6 md:py-4 md:px-8 rounded-full bg-brand-lime hover:bg-white text-brand-dark font-bold text-sm md:text-lg transition-all duration-300 relative z-10">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </main>
    </>
  );
};

export default FAQPage;
