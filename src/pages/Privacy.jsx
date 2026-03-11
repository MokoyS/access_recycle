import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, Server, Globe, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  
  // Scroll en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Helmet>
        <title>Privacy Policy | Access Recycle Ltd — GDPR Compliant</title>
        <meta name="description" content="Privacy Policy and GDPR data protection information for Access Recycle Ltd. Learn how we collect, use, and protect your personal data." />
        <link rel="canonical" href="https://www.accessrecycle.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Access Recycle Ltd" />
        <meta property="og:description" content="Privacy Policy and GDPR data protection information for Access Recycle Ltd." />
        <meta property="og:url" content="https://www.accessrecycle.com/privacy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Access Recycle Ltd" />
        <meta name="twitter:description" content="Privacy Policy and GDPR data protection information for Access Recycle Ltd." />
      </Helmet>

      {/* --- HEADER --- */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand/20 rounded-full mb-6">
            <ShieldCheck className="w-8 h-8 text-brand" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">
            How we collect, use, and protect your data. <br />
            <span className="text-brand text-sm">Last Updated: October 2025</span>
          </p>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed text-sm md:text-base">
          
          <div className="space-y-12">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p className="mb-4">
                Access Recycle Ltd ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
              </p>
              <p>
                Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting <strong>www.accessrecycle.com</strong>, you are accepting and consenting to the practices described in this policy.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-brand/10 p-1.5 rounded-lg"><Eye className="w-5 h-5 text-brand" /></span>
                1. Information We Collect
              </h2>
              <p className="mb-4">We may collect and process the following data about you:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Information you give us:</strong> You may give us information about you by filling in forms on our site (such as the Contact form) or by corresponding with us by phone, e-mail, or otherwise. This includes information provided when you register for our Partner Portal, subscribe to our service, or request a quote. The information you give us may include your name, address, e-mail address, phone number, and financial information.
                </li>
                <li>
                  <strong>Information we collect about you:</strong> With regard to each of your visits to our site we may automatically collect technical information, including the Internet protocol (IP) address, browser type, time zone setting, and operating system.
                </li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-brand/10 p-1.5 rounded-lg"><Server className="w-5 h-5 text-brand" /></span>
                2. How We Use Your Information
              </h2>
              <p className="mb-4">We use information held about you in the following ways:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To carry out our obligations arising from any contracts entered into between you and us (Purchase or Sale of inventory).</li>
                <li>To provide you with the information, products, and services that you request from us.</li>
                <li>To notify you about changes to our service.</li>
                <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            {/* 3. Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-brand/10 p-1.5 rounded-lg"><Lock className="w-5 h-5 text-brand" /></span>
                3. Data Security
              </h2>
              <p className="mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed.
              </p>
              <p>
                In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </section>

            {/* 4. International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-brand/10 p-1.5 rounded-lg"><Globe className="w-5 h-5 text-brand" /></span>
                4. International Transfers
              </h2>
              <p>
                As we operate in both the UK and Spain, your data may be transferred to, and stored at, a destination outside the UK but within the European Economic Area ("EEA"). It may also be processed by staff operating inside the EEA who work for us. By submitting your personal data, you agree to this transfer, storing, or processing.
              </p>
            </section>

            {/* 5. Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p className="mb-4">Under the General Data Protection Regulation (GDPR), you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Request access</strong> to your personal data.</li>
                <li><strong>Request correction</strong> of the personal data that we hold about you.</li>
                <li><strong>Request erasure</strong> of your personal data.</li>
                <li><strong>Object to processing</strong> of your personal data.</li>
                <li><strong>Request restriction</strong> of processing of your personal data.</li>
              </ul>
              <p className="mt-4">
                If you wish to exercise any of the rights set out above, please contact us at <a href="mailto:info@accessrecycle.com" className="text-brand font-bold">info@accessrecycle.com</a>.
              </p>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie Policy.
              </p>
            </section>

            {/* Contact Section */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 mt-8">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand" /> Contact Us
              </h3>
              <p className="mb-4">
                Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to:
              </p>
              <p className="font-medium text-slate-900">Access Recycle Ltd</p>
              <p>151 High Street, Loughton, IG10 4LG, United Kingdom</p>
              <p className="mt-2 text-brand font-bold">info@accessrecycle.com</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;