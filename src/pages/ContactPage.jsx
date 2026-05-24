import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="section-container relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeUp_0.8s_ease_forwards]">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Get In Touch
          </div>
          <h1 className="heading-xl tracking-tight mb-8">
            Talk To <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-slate-700 font-black">Us<span className="absolute bottom-2 left-0 w-full h-[6px] bg-brand-lime -z-10 rounded-full"></span></span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-semibold leading-relaxed">
            Have questions about our programs, admissions, or anything else? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-[fadeUp_0.8s_ease_0.2s_forwards] opacity-0">
          
          {/* Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex items-start gap-6 hover:shadow-[0_20px_40px_rgba(15,23,42,0.05)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-lime transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brand-dark mb-1">Phone Number</h3>
                <a href="tel:9633130516" className="text-slate-500 font-semibold hover:text-brand-lime transition-colors text-lg">96331 30516</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex items-start gap-6 hover:shadow-[0_20px_40px_rgba(15,23,42,0.05)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-lime transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brand-dark mb-1">Email Address</h3>
                <a href="mailto:iamscampus@gmail.com" className="text-slate-500 font-semibold hover:text-brand-lime transition-colors text-lg">iamscampus@gmail.com</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex items-start gap-6 hover:shadow-[0_20px_40px_rgba(15,23,42,0.05)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-lime transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brand-dark mb-1">Address</h3>
                <p className="text-slate-500 font-semibold text-lg leading-relaxed">NP Center Kakkad,<br/>Malappuram</p>
              </div>
            </div>
          </div>

          {/* Contact Form & Socials */}
          <div className="lg:col-span-7 bg-brand-dark rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden border-4 border-slate-900">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h3 className="font-display font-black text-3xl mb-8">Send us a message</h3>
            
            <form className="flex flex-col gap-6 relative z-10" action="https://formsubmit.co/iamscampus@gmail.com" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" name="name" id="name" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-lime transition-all font-semibold" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-lime transition-all font-semibold" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="_subject" id="subject" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-lime transition-all font-semibold" />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows="5" placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-lime transition-all resize-none font-semibold"></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 rounded-2xl bg-brand-lime hover:bg-white text-brand-dark font-black text-lg transition-colors duration-300 shadow-lg cursor-pointer">
                Send Message
              </button>
            </form>

            {/* Follow Us */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="font-black text-xs uppercase tracking-widest text-slate-400">Connect with us</span>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/iams__campus/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.youtube.com/@IAMSCAMPUS" target="_blank" rel="noreferrer" aria-label="Youtube" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z"></path><polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
