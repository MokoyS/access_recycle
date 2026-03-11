import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Petit délai pour ne pas agresser l'utilisateur dès l'arrivée
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 md:p-6 z-50 shadow-2xl border-t border-slate-700 transform transition-transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300 md:max-w-2xl">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. 
            For more information, please see our <Link to="/privacy" className="text-brand underline hover:text-brand-light">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={acceptCookies}
            className="px-6 py-2 bg-brand hover:bg-brand-dark text-white font-bold rounded-full text-sm transition-colors whitespace-nowrap"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;