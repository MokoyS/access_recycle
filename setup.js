const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("🚀 Initialisation du projet Access Recycle...");

// 1. Structure des dossiers
const dirs = [
  'src',
  'src/components',
  'src/pages',
  'src/assets',
  'public'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 2. Fichiers de configuration
const packageJson = {
  "name": "access-recycle-modern",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.6"
  }
};

const viteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`;

const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#4ade80', // green-400
          DEFAULT: '#16a34a', // green-600
          dark: '#14532d', // green-900
        }
      }
    },
  },
  plugins: [],
}
`;

const postCssConfig = `
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

const indexHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Access Recycle - Modern Solutions</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

const indexCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
`;

// 3. Composants React

const navbarComponent = `
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Recycle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Purchase of Unsold Inventory', path: '/services/unsold-inventory' },
    { name: 'Processing of Unwanted Products', path: '/services/unwanted-products' },
    { name: 'Handling of Returned Products', path: '/services/returned-products' },
    { name: 'Redistribution to the independent Market', path: '/services/redistribution' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Recycle className="h-8 w-8 text-brand" />
              <span className="font-bold text-2xl text-slate-800">Access<span className="text-brand">Recycle</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={\`text-sm font-medium transition-colors hover:text-brand \${isActive('/') ? 'text-brand' : 'text-slate-600'}\`}>
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className={\`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand \${location.pathname.includes('/services') ? 'text-brand' : 'text-slate-600'}\`}
                onClick={() => setIsServiceOpen(!isServiceOpen)}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Hover CSS based */}
              <div className="absolute left-0 mt-2 w-72 bg-white border border-slate-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-light/10 hover:text-brand border-b border-slate-50 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about-us" className={\`text-sm font-medium transition-colors hover:text-brand \${isActive('/about-us') ? 'text-brand' : 'text-slate-600'}\`}>
              About Us
            </Link>
            
            <Link to="/contact" className={\`text-sm font-medium transition-colors hover:text-brand \${isActive('/contact') ? 'text-brand' : 'text-slate-600'}\`}>
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

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand hover:bg-white rounded-md">Home</Link>
            <div className="px-3 py-2">
              <span className="block text-base font-medium text-slate-700 mb-2">Services</span>
              <div className="pl-4 space-y-2 border-l-2 border-brand-light">
                {services.map(s => (
                   <Link key={s.path} to={s.path} className="block text-sm text-slate-600 hover:text-brand" onClick={() => setIsOpen(false)}>{s.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/about-us" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand hover:bg-white rounded-md">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand hover:bg-white rounded-md">Contact</Link>
            <a href="https://www.accessrecycle.es/en_GB/web/login" target="_blank" className="block w-full text-center mt-4 px-3 py-3 bg-brand text-white font-bold rounded-md">Partner Log-In</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
`;

const footerComponent = `
import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Recycle className="h-8 w-8 text-brand-light" />
              <span className="font-bold text-2xl text-white">Access<span className="text-brand-light">Recycle</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing sustainable solutions for unsold inventory and product processing for a greener future.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="/services/unsold-inventory" className="hover:text-brand-light transition-colors">Purchase of Unsold Inventory</Link></li>
              <li><Link to="/services/unwanted-products" className="hover:text-brand-light transition-colors">Processing of Unwanted Products</Link></li>
              <li><Link to="/services/returned-products" className="hover:text-brand-light transition-colors">Handling of Returned Products</Link></li>
              <li><Link to="/services/redistribution" className="hover:text-brand-light transition-colors">Redistribution to Independent Market</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about-us" className="hover:text-brand-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-light transition-colors">Help</Link></li>
              <li><Link to="/contact" className="hover:text-brand-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

           {/* Language & Extra */}
           <div>
            <h3 className="text-white font-semibold text-lg mb-6">Language</h3>
            <div className="flex items-center gap-2 mb-6">
              <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-6 h-auto rounded-sm" />
              <span className="text-white">United Kingdom</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © Access Recycle. 2026. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-brand-light">Privacy & Policy</Link>
            <Link to="/terms" className="hover:text-brand-light">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`;

// 4. Pages

const homePage = `
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Giving New Life to <br />
            <span className="text-brand-light">Unsold Inventory</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            We specialize in purchasing, processing, and redistributing products to maximize value and minimize waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold rounded-full transition-all shadow-lg hover:shadow-brand/50">
              Get Started
            </Link>
            <Link to="/services/unsold-inventory" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/30">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Access Recycle?</h2>
            <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Maximize Value", desc: "Turn your dormant stock into liquid assets quickly and efficiently." },
              { icon: CheckCircle, title: "Compliance Guaranteed", desc: "Full adherence to international recycling and redistribution regulations." },
              { icon: Globe, title: "Global Network", desc: "Access to a vast independent market for redistribution." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                <feature.icon className="w-12 h-12 text-brand mb-6" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
`;

const servicePage = `
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const serviceData = {
  'unsold-inventory': {
    title: 'Purchase of Unsold Inventory',
    desc: 'We purchase your excess stock directly, freeing up your warehouse space and capital immediately.',
    points: ['Immediate Valuation', 'Quick Removal', 'Fair Market Pricing'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000'
  },
  'unwanted-products': {
    title: 'Processing of Unwanted Products',
    desc: 'Professional sorting and processing of products that no longer fit your primary sales channels.',
    points: ['Sorting & Grading', 'Secure Destruction if needed', 'Eco-friendly disposal'],
    img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=2000'
  },
  'returned-products': {
    title: 'Handling of Returned Products',
    desc: 'Efficient management of customer returns, assessing condition and determining the best route for recovery.',
    points: ['Reverse Logistics', 'Condition Assessment', 'Refurbishment Potential'],
    img: 'https://images.unsplash.com/photo-1566576912906-60034a6195cc?auto=format&fit=crop&q=80&w=2000'
  },
  'redistribution': {
    title: 'Redistribution to Independent Market',
    desc: 'We connect your products with secondary markets where demand exists, protecting your primary brand equity.',
    points: ['Global Network', 'Brand Protection', 'Optimized Sales Channels'],
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000'
  }
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = serviceData[slug] || serviceData['unsold-inventory'];

  return (
    <div className="pt-10 pb-20">
      <div className="bg-slate-900 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <img 
              src={service.img} 
              alt={service.title} 
              className="rounded-2xl shadow-2xl object-cover h-96 w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">How we help</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {service.desc}
            </p>
            <ul className="space-y-4 mb-10">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="bg-brand/10 p-1 rounded-full"><Check className="w-5 h-5 text-brand" /></span>
                  <span className="font-medium text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 text-brand font-bold hover:gap-4 transition-all">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
`;

const aboutPage = `
import React from 'react';

const About = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">About Access Recycle</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          Founded with a mission to reduce waste and maximize value, Access Recycle has become a leader in inventory management solutions. We bridge the gap between unsold stock and new market opportunities.
        </p>
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
          <p className="italic text-slate-500">"Our vision is a world where no product goes to waste, finding value in every item through strategic redistribution and responsible recycling."</p>
        </div>
      </div>
    </div>
  );
};

export default About;
`;

const contactPage = `
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600">Get in touch with our team for a custom solution.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600">contact@accessrecycle.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900">Phone</h3>
                  <p className="text-slate-600">+44 20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900">Headquarters</h3>
                  <p className="text-slate-600">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
`;

const appJsx = `
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<div className='p-20 text-center'>Privacy Policy Page (Content Pending)</div>} />
            <Route path="/terms" element={<div className='p-20 text-center'>Terms & Conditions Page (Content Pending)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
`;

const mainJsx = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;

// 4. Ecriture des fichiers
const files = {
  'package.json': JSON.stringify(packageJson, null, 2),
  'vite.config.js': viteConfig,
  'tailwind.config.js': tailwindConfig,
  'postcss.config.js': postCssConfig,
  'index.html': indexHtml,
  'src/index.css': indexCss,
  'src/main.jsx': mainJsx,
  'src/App.jsx': appJsx,
  'src/components/Navbar.jsx': navbarComponent,
  'src/components/Footer.jsx': footerComponent,
  'src/pages/Home.jsx': homePage,
  'src/pages/ServicePage.jsx': servicePage,
  'src/pages/About.jsx': aboutPage,
  'src/pages/Contact.jsx': contactPage,
};

// Ecriture
for (const [file, content] of Object.entries(files)) {
  const filePath = path.join(process.cwd(), file);
  // S'assure que le contenu est une chaîne de caractères
  const fileContent = typeof content === 'string' ? content.trim() : JSON.stringify(content, null, 2);
  
  try {
      fs.writeFileSync(filePath, fileContent);
      console.log(`✅ Créé : ${file}`);
  } catch (err) {
      console.error(`❌ Erreur lors de la création de ${file}:`, err.message);
  }
}

console.log("\n🎉 Projet créé avec succès !");
console.log("👉 Lancez maintenant : npm install");
console.log("👉 Puis : npm run dev");