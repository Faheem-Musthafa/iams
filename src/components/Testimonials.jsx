const Testimonials = () => {
  const steps = [
    { num: '01', title: 'Pick Your Program', desc: 'Browse our extensive catalog.' },
    { num: '02', title: 'Consult Expert', desc: 'Get free career guidance.' },
    { num: '03', title: 'Start Learning', desc: 'Join campus & build future.' }
  ];

  const testimonials = [
    {
      name: 'ASHIQU',
      course: 'Business Management',
      img: 'https://iamscampus.in/wp-content/uploads/2025/05/r3.png',
      alt: 'Portrait of Ashiqu',
      text: 'The structured learning and supportive mentors have helped me grow immensely.'
    },
    {
      name: 'YAMIN',
      course: 'Digital Marketing',
      img: 'https://iamscampus.in/wp-content/uploads/2025/05/Artboard-1.png',
      alt: 'Portrait of Yamin',
      text: 'My two years at IAMS Campus were truly transformative with hands-on learning.'
    }
  ];

  return (
    <section id="reviews" className="section-container pb-20">
      
      {/* Enrollment Steps - Wander style */}
      <div className="bg-white rounded-box p-10 md:p-16 mb-10 border border-slate-100 shadow-sm">
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-10 text-center text-slate-900">Enrollment made as easy as 1-2-3.</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line hidden on mobile */}
          <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0" aria-hidden="true"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white border-2 border-brand-dark rounded-full flex items-center justify-center font-display font-bold text-brand-dark mb-4 shadow-[0_0_0_8px_white]" aria-hidden="true">
                {step.num}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials - Creatix style */}
      <div className="rounded-box bg-brand-dark text-white p-10 md:p-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="inline-block bg-brand-lime text-brand-dark font-bold px-3 py-1 text-xs uppercase tracking-wider rounded mb-4">
              Meet the Alumni
            </div>
            <h2 className="heading-md">What our students say</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test, idx) => (
            <article className="bg-[#151518] p-8 rounded-[2rem] border border-white/5 hover:border-brand-lime/30 transition-colors" key={idx}>
              <div className="flex gap-1 text-brand-lime mb-6" aria-label="5 out of 5 stars">
                <span aria-hidden="true">★★★★★</span>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={test.img} 
                  alt={test.alt} 
                  loading="lazy"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full object-cover grayscale" 
                />
                <div>
                  <div className="font-bold text-white">{test.name}</div>
                  <div className="text-xs text-slate-400">{test.course}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Massive Marquee */}
        <div className="mt-20 overflow-hidden border-t border-white/10 pt-10" aria-hidden="true">
          <div className="flex gap-8 whitespace-nowrap opacity-50 font-display font-black text-4xl md:text-6xl text-transparent [-webkit-text-stroke:1px_white]">
            <span>INNOVATE + INSPIRE + CREATE + </span>
            <span>INNOVATE + INSPIRE + CREATE + </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
