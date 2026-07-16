import { Link } from 'react-router-dom';
import { localAnswers } from '../data/localAnswers';

const LocalSearchSection = () => (
  <section className="section-container pb-24" aria-labelledby="local-learning-title">
    <div className="bg-white border border-slate-200 rounded-box overflow-hidden shadow-sm">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-brand-lime p-8 md:p-14 flex flex-col justify-between gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/70 mb-4">Local learning, clear outcomes</p>
            <h2 id="local-learning-title" className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-brand-dark mb-6">
              Commerce tuition and career courses near Tirurangadi
            </h2>
            <p className="text-brand-dark/75 text-base md:text-lg font-medium leading-relaxed">
              Build a strong +1 and +2 Commerce foundation, then move confidently into business, accounting, or professional skill programs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <Link to="/plus-one-commerce-tuition-malappuram" className="btn btn-primary px-6">
              Explore Commerce Tuition
            </Link>
            <Link to="/business-management-course-malappuram" className="btn bg-white text-brand-dark px-6 hover:bg-slate-50">
              Business Management
            </Link>
          </div>
        </div>

        <div className="p-8 md:p-14">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Quick answers for parents and students</p>
          <div className="divide-y divide-slate-200">
            {localAnswers.map((item) => (
              <article key={item.question} className="py-6 first:pt-2 last:pb-0">
                <h3 className="font-display font-bold text-lg md:text-xl text-brand-dark mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocalSearchSection;
