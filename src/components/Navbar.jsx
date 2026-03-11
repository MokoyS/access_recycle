import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Purchase of Unsold Inventory', path: '/services/unsold-inventory' },
    { name: 'Processing of Unwanted Products', path: '/services/unwanted-products' },
    { name: 'Handling of Returned Products', path: '/services/returned-products' },
    { name: 'Redistribution to the Independent Market', path: '/services/redistribution' },
  ];

  const isActive = (path) => location.pathname === path;

  // --- LA FONCTION MAGIQUE ---
  // Cette fonction ferme le menu. On l'appellera sur chaque clic de lien mobile.
  const closeMenu = () => {
    setIsOpen(false);
    setIsServiceOpen(false); // On referme aussi le sous-menu service pour la prochaine fois
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={closeMenu}>
              <img src="/images/logo.png" alt="Access Recycle Logo" className="h-10 w-auto" />©
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-brand ${isActive('/') ? 'text-brand' : 'text-slate-600'}`}>
              Home
            </Link>
            
            {/* Dropdown Services Desktop */}
            <div className="relative group h-full flex items-center">
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand ${location.pathname.includes('/services') ? 'text-brand' : 'text-slate-600'}`}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Le menu déroulant s'affiche au survol du parent "group" */}
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-100 rounded-b-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand/5 hover:text-brand border-b border-slate-50 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about-us" className={`text-sm font-medium transition-colors hover:text-brand ${isActive('/about-us') ? 'text-brand' : 'text-slate-600'}`}>
              About Us
            </Link>
            
            <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-brand ${isActive('/contact') ? 'text-brand' : 'text-slate-600'}`}>
              Contact
            </Link>

            <a 
              href="https://www.accessrecycle.es/en_GB/web/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Partner Log-In
            </a>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-brand p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (CORRIGÉ) --- */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            
            <Link 
              to="/" 
              onClick={closeMenu} // <--- AJOUTÉ ICI
              className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/') ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className={`flex w-full items-center justify-between px-3 py-3 rounded-md text-base font-medium ${location.pathname.includes('/services') ? 'text-brand' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                Services <ChevronDown className={`w-5 h-5 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServiceOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-brand/20 ml-3">
                  {services.map(s => (
                     <Link 
                        key={s.path} 
                        to={s.path} 
                        onClick={closeMenu} // <--- AJOUTÉ ICI
                        className="block px-3 py-3 text-sm text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                      >
                        {s.name}
                     </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about-us" 
              onClick={closeMenu} // <--- AJOUTÉ ICI
              className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/about-us') ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              onClick={closeMenu} // <--- AJOUTÉ ICI
              className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Contact
            </Link>

            <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                    href="https://www.accessrecycle.es/en_GB/web/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeMenu} // <--- AJOUTÉ ICI AUSSI
                    className="block w-full text-center px-3 py-3 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-colors shadow-md"
                >
                    Partner Log-In
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;