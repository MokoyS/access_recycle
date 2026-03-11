import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// 1. IMPORTS LAZY (On remplace les imports classiques)
// Cela divise le gros fichier JS en plusieurs petits morceaux
const Home = lazy(() => import('./pages/Home'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Petit composant de chargement pendant que la page arrive (très rapide)
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-16 h-16 border-4 border-brand/20 border-t-brand rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
          <Navbar />
          <main className="flex-grow">
            {/* 2. ENVELOPPER LES ROUTES DANS SUSPENSE */}
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <CookieBanner />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;