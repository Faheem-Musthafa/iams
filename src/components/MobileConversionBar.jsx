const MobileConversionBar = () => (
  <aside className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 bg-white/95 p-3 shadow-[0_-8px_30px_rgb(15,23,42,0.12)] backdrop-blur-xl md:hidden" aria-label="Admissions actions">
    <a href="tel:+919633130516" className="flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-bold text-brand-dark">
      Call Admissions
    </a>
    <a
      href="https://wa.me/919846067770?text=Hi%20IAMS%20Campus%2C%20I%20would%20like%20course%20and%20admission%20details."
      target="_blank"
      rel="noreferrer"
      className="flex min-h-12 items-center justify-center rounded-lg bg-brand-dark px-4 text-sm font-bold text-brand-lime"
    >
      WhatsApp Us
    </a>
  </aside>
);

export default MobileConversionBar;
