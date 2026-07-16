const About = () => {
  const stats = [
    { value: '1000+', label: 'Students Placed' },
    { value: '10+', label: 'Years of Experience' },
    { value: '15+', label: 'Expert Faculty' },
    { value: '100%', label: 'Placement Support' },
  ];

  return (
    <section id="about" className="section-container pb-24 relative z-10">
      <div className="rounded-box bg-brand-dark text-white p-10 md:p-20 relative overflow-hidden shadow-xl border border-slate-900">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="font-display font-bold text-4xl md:text-5xl text-brand-lime mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-white/10 text-brand-lime font-bold px-4 py-2 text-xs uppercase tracking-widest rounded-lg mb-6 border border-white/10">
              About IAMS Campus
            </div>
            <h2 className="heading-lg text-white mb-6">
              A Decade of <br className="hidden md:block"/> Academic Excellence
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg font-medium">
              We provide industry-aligned commerce, business, and creative design education in Malappuram. By combining rigorous theory with practical, hands-on training, we help students build successful corporate careers and creative pathways.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 h-[400px]">
            <div className="rounded-[2rem] overflow-hidden h-[90%] bg-slate-800 border border-white/10 hover:border-brand-lime/40 transition-colors duration-500">
              <img 
                src="https://iamscampus.in/wp-content/uploads/2025/05/394266147_24100616746220454_3943914626806249714_n2.jpg" 
                alt="Students collaborating together on campus" 
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden h-[90%] mt-8 bg-slate-800 border border-white/10 hover:border-brand-lime/40 transition-colors duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Student focused on their laptop working on a digital project" 
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
