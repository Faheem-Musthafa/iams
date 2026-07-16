const Testimonials = () => {
  const steps = [
    { num: '01', title: 'Pick Your Program', desc: 'Browse our extensive catalog of commerce & digital courses.' },
    { num: '02', title: 'Consult an Expert', desc: 'Get free one-on-one career guidance from our mentors.' },
    { num: '03', title: 'Start Learning', desc: 'Join the campus community and build your professional future.' }
  ];

  const testimonials = [
    {
      name: 'ASHIQU',
      course: 'Business Management',
      img: 'https://iamscampus.in/wp-content/uploads/2025/05/r3.png',
      alt: 'Portrait of Ashiqu',
      text: 'The structured learning environment and supportive mentors at IAMS Campus have helped me grow immensely.'
    },
    {
      name: 'YAMIN',
      course: 'Digital Marketing',
      img: 'https://iamscampus.in/wp-content/uploads/2025/05/Artboard-1.png',
      alt: 'Portrait of Yamin',
      text: 'My time at IAMS Campus was truly transformative. The hands-on learning and practical training made all the difference.'
    }
  ];

  return (
    <section id="reviews" className="section-container pb-20">
      
      {/* Enrollment Steps - Clean Typographic Layout */}
      <div className="bg-white rounded-box p-8 md:p-16 mb-10 border border-slate-100 shadow-sm">
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-12 text-center text-slate-900">Enrollment in Three Simple Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="font-display font-black text-3xl text-brand-lime mb-4" aria-hidden="true">
                {step.num}
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-semibold">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials - Clean Grid Layout */}
      <div className="rounded-box bg-brand-dark text-white p-10 md:p-16">
        <div className="mb-12">
          <div className="inline-block bg-white/10 text-brand-lime font-bold px-3 py-1.5 text-xs uppercase tracking-wider rounded mb-4 border border-white/5">
            Meet the Alumni
          </div>
          <h2 className="heading-md">What Our Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <article className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col justify-between" key={idx}>
              <div>
                <div className="flex gap-0.5 text-brand-lime mb-6 text-sm" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed text-base font-medium">
                  "{test.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={test.img} 
                  alt={test.alt} 
                  loading="lazy"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full object-cover border border-white/10" 
                />
                <div>
                  <div className="font-bold text-white text-sm">{test.name}</div>
                  <div className="text-xs text-slate-400 font-semibold">{test.course}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
