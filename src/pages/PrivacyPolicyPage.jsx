import { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy | IAMS Campus"
        description="Read our privacy policy to understand how IAMS Campus collects, uses, and protects your personal information."
        path="/privacy"
      />
      <main className="pt-36 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">

      <div className="section-container max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Legal
          </div>
          <h1 className="heading-lg tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-slate-500 text-lg">Last updated: June 2026</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            At IAMS Campus, we are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice, or our practices with regards to your 
            personal information, please contact us at info@iamscampus.in.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We collect personal information that you voluntarily provide to us when you register on the website, 
            express an interest in obtaining information about us or our courses, or otherwise contact us. The 
            personal information that we collect depends on the context of your interactions with us and may include:
          </p>
          <ul className="list-disc pl-6 mb-8 text-slate-600 space-y-2">
            <li>Names, phone numbers, email addresses, and contact preferences.</li>
            <li>Educational background and career interests.</li>
            <li>Billing and payment information (when applicable for course registrations).</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We use personal information collected via our website for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our 
            legal obligations. This includes:
            <br/><br/>
            - To facilitate account creation and login processes.<br/>
            - To send administrative information to you.<br/>
            - To fulfill and manage your enrollment in our programs.<br/>
            - To send you marketing and promotional communications.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Will Your Information Be Shared?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We only share information with your consent, to comply with laws, to provide you with services, 
            to protect your rights, or to fulfill business obligations. We may process or share your data 
            that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of 
            a Contract, and Legal Obligations.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have questions or comments about this notice, you may email us at info@iamscampus.in or by post to:
            <br/><br/>
            <strong>IAMS Campus</strong><br/>
            Calicut, Kerala, India
          </p>
        </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
