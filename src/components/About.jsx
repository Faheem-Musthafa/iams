const About = () => {
  const stats = [
    { value: '1000+', label: 'Students' },
    { value: '10+', label: 'Years Exp.' },
    { value: '15+', label: 'Expert Faculty' },
    { value: '100%', label: 'Placement Help' },
  ];

  return (
    <section id="about" className="section-container pb-24 relative z-10">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="rounded-box bg-brand-dark text-white p-10 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Background glow inside the dark container */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-lime/15 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 border-b border-white/10 pb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-brand-lime text-brand-dark font-black px-4 py-2 text-xs uppercase tracking-widest rounded-lg mb-6">
              An Educational Institute
            </div>
            <h2 className="heading-lg text-white mb-6">
              Turning Potential Into <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-lime font-black">Masterpieces</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg font-medium">
              We may be a campus, but our vision knows no bounds. By staying agile and working hand-in-hand with our students, we transform raw talent into cutting-edge skills that make a lasting impression in the corporate world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 h-[400px]">
            <div className="rounded-[2rem] overflow-hidden h-[90%] bg-slate-800 border-2 border-white/10 hover:border-brand-lime/40 transition-colors duration-500">
              <img 
                src="https://iamscampus.in/wp-content/uploads/2025/05/394266147_24100616746220454_3943914626806249714_n2.jpg" 
                alt="Students collaborating together on campus" 
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover grayscale hover:grayscale-0 scale-100 hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden h-[90%] mt-8 bg-slate-800 border-2 border-white/10 hover:border-brand-lime/40 transition-colors duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Student focused on their laptop working on a digital project" 
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover grayscale hover:grayscale-0 scale-100 hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
