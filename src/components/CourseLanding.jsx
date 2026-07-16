import { Link } from 'react-router-dom';

const CourseLanding = ({ eyebrow, title, intro, image, imageAlt, highlights, outcomesTitle = 'A stronger foundation for your next step', learnItems, questions, whatsappText, children }) => {
  const whatsappUrl = `https://wa.me/919846067770?text=${encodeURIComponent(whatsappText)}`;

  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <section className="section-container pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="pill-badge bg-white border-slate-200 text-brand-dark mb-6">{eyebrow}</div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-brand-dark mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-lime px-6">Book Free Counselling</a>
              <a href="tel:+919633130516" className="btn btn-secondary px-6">Call +91 96331 30516</a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3" aria-label="Course benefits">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-lime text-xs text-brand-dark" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 shadow-xl">
            <img src={image} alt={imageAlt} fetchPriority="high" className="h-full w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-lg bg-brand-dark/95 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-lime mb-1">Admissions Open 2026</p>
              <p className="font-display font-bold text-lg">Talk to a course advisor and find the right batch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 text-white" aria-labelledby="course-outcomes-title">
        <div className="section-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-lime mb-4">What you will build</p>
            <h2 id="course-outcomes-title" className="font-display font-extrabold text-3xl md:text-5xl leading-tight">{outcomesTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {learnItems.map((item, index) => (
              <article key={item.title} className="bg-brand-dark p-7">
                <span className="font-display font-bold text-brand-lime">0{index + 1}</span>
                <h3 className="font-display font-bold text-xl mt-4 mb-2">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        {children}
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 mt-20" aria-labelledby="course-faq-title">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Direct answers</p>
            <h2 id="course-faq-title" className="font-display font-extrabold text-3xl md:text-4xl text-brand-dark mb-5">Questions students ask before joining</h2>
            <Link to="/faq" className="font-bold text-brand-dark underline decoration-brand-lime decoration-4 underline-offset-4">View all FAQs</Link>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {questions.map((item) => (
              <article key={item.question} className="py-6">
                <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-8">
        <div className="rounded-box bg-brand-lime px-8 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/70 mb-3">Your next step</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-dark">Get batch timings and admission details</h2>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">Chat with Admissions</a>
        </div>
      </section>
    </main>
  );
};

export default CourseLanding;
