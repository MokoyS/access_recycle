import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#eaf0f9] text-slate-600 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* Logo Image */}
              <img src="/images/logo.png" alt="Access Recycle Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-600">
              Providing sustainable solutions for unsold inventory and product processing for a greener future.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Our Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/unsold-inventory" className="hover:text-brand transition-colors">Purchase of Unsold Inventory</Link></li>
              <li><Link to="/services/unwanted-products" className="hover:text-brand transition-colors">Processing of Unwanted Products</Link></li>
              <li><Link to="/services/returned-products" className="hover:text-brand transition-colors">Handling of Returned Products</Link></li>
              <li><Link to="/services/redistribution" className="hover:text-brand transition-colors">Redistribution to Independent Market</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about-us" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Help</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
            </ul>
          </div>

           {/* Language & Extra */}
           <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Language</h3>
            <div className="flex items-center gap-2 mb-6 p-3 w-fit">
              <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-6 h-auto rounded-sm shadow-sm" />
              <span className="text-slate-700 font-medium text-sm">United Kingdom</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © Access Recycle. 2026. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-brand transition-colors">Privacy & Policy</Link>
            <Link to="/terms" className="hover:text-brand transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;