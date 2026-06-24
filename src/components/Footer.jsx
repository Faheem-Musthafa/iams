import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="section-container pb-6">
      <div className="rounded-box bg-brand-lime text-brand-dark p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
        <div className="max-w-md text-center md:text-left">
          <h2 className="heading-md mb-4">Get in Touch Today!</h2>
          <p className="text-brand-dark/80 font-medium">
            Let's transform your ideas into exceptional digital experiences. Whether you're looking to start a new journey or elevate your skills.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <form className="flex w-full md:w-[400px] bg-white rounded-full p-1.5 shadow-lg" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
            <input 
              id="newsletter-email"
              type="email" 
              placeholder="Enter your email" 
              required
              className="flex-grow bg-transparent px-4 outline-none text-slate-800 placeholder-slate-400 focus:ring-0"
            />
            <button 
              type="submit"
              className="bg-brand-dark text-brand-lime px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Join Us
            </button>
          </form>
        </div>
      </div>

      <div className="rounded-box bg-brand-dark text-white p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="font-display text-2xl font-black text-white tracking-tighter mb-6">
              IAMS<span className="text-brand-lime ml-1" aria-hidden="true">●</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Equipping students with knowledge and practical skills they need to thrive in the modern corporate world.
            </p>
          </div>
          
          <nav aria-label="Company Navigation">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">About Us</Link></li>
              <li><Link to="/courses" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Courses</Link></li>
              <li><Link to="/placements" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Reviews</Link></li>
            </ul>
          </nav>

          <nav aria-label="Support Navigation">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Privacy Policy</Link></li>
            </ul>
          </nav>
          
          <address className="not-italic">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:9633130516" className="text-slate-300 text-sm hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">+91 96331 30516</a>
              </li>
              <li>
                <a href="mailto:info@iamscampus.in" className="text-slate-300 text-sm hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">info@iamscampus.in</a>
              </li>
            </ul>
          </address>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} IAMS Campus. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/iams_campus/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-500 hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/iams__campus/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@IAMSCAMPUS" target="_blank" rel="noreferrer" aria-label="Youtube" className="text-slate-500 hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z"></path><polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
