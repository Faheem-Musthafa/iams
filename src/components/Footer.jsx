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
            <a href="#" aria-label="Facebook" className="hover:text-white focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">FB</a>
            <a href="#" aria-label="Instagram" className="hover:text-white focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">IN</a>
            <a href="#" aria-label="Twitter" className="hover:text-white focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
