import { Link } from 'react-router-dom';
import { urlFor } from '../lib/sanity';

const logo = '/favicon.png';

const Footer = ({ siteSettings }) => {
  const siteTitle = siteSettings?.siteTitle || 'IAMS Campus';
  const logoUrl = urlFor(siteSettings?.logo)?.width(128).height(128).fit('max').url() || logo;
  const contactPhone = siteSettings?.contactPhone || '+91 96331 30516';
  const contactEmail = siteSettings?.contactEmail || 'info@iamscampus.in';
  const phoneHref = `tel:${contactPhone.replace(/[^+\\d]/g, '')}`;
  const addressLine1 = siteSettings?.addressLine1 || 'NP Center, Kakkad';
  const addressLine2 = siteSettings?.addressLine2 || 'Malappuram, Kerala';
  const footerDescription = siteSettings?.footerDescription || 'Equipping students with knowledge and practical skills they need to thrive in the modern corporate world.';
  return (
    <footer className="section-container pb-24 md:pb-6">
      <div className="rounded-box bg-brand-lime text-brand-dark p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
        <div className="max-w-md text-center md:text-left">
          <h2 className="heading-md mb-4">Find the right course for your next step</h2>
          <p className="text-brand-dark/80 font-medium">
            Ask about Commerce tuition, Business Management, course fees, eligibility, and available 2026 batches.
          </p>
        </div>
        <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
          <a href="tel:+919633130516" className="btn bg-white text-brand-dark px-6 hover:bg-slate-50">Call Admissions</a>
          <a href="https://wa.me/919846067770?text=Hi%20IAMS%20Campus%2C%20I%20would%20like%20course%20and%20admission%20details." target="_blank" rel="noreferrer" className="btn btn-primary px-6">WhatsApp Us</a>
        </div>
      </div>

      <div className="rounded-box bg-brand-dark text-white p-10 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <img src={logoUrl} alt={`${siteTitle} logo`} className="h-12 w-auto object-contain" />
              <span className="font-display text-xl font-black tracking-tight text-white">{siteTitle}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{footerDescription}</p>
          </div>
          
          <nav aria-label="Company Navigation">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">About Us</Link></li>
              <li><Link to="/courses" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Courses</Link></li>
              <li><Link to="/plus-one-commerce-tuition-malappuram" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Commerce Tuition</Link></li>
              <li><Link to="/business-management-course-malappuram" className="text-slate-300 hover:text-brand-lime text-sm transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">Business Management</Link></li>
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
                <a href={phoneHref} className="text-slate-300 text-sm hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">{contactPhone}</a>
              </li>
              <li>
                <a href={`mailto:${contactEmail}`} className="text-slate-300 text-sm hover:text-brand-lime transition-colors focus-visible:ring-2 focus-visible:ring-brand-lime rounded-sm">{contactEmail}</a>
              </li>
              <li className="text-slate-400 text-sm leading-relaxed">{addressLine1}<br />{addressLine2}</li>
            </ul>
          </address>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteTitle}. All Rights Reserved.</p>
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
