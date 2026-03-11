import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustedBy from '../components/TrustedBy';
import WhatWeDo from '../components/WhatWeDo';
import GlobalReach from '../components/GlobalReach';
import Reveal from '../components/Reveal';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Access Recycle | Mobile Lifecycle & Reverse Logistics Experts</title>
        <meta name="description" content="Access Recycle purchases, processes, and redistributes mobile devices to maximize value and minimize waste. Trusted by Amazon, Fnac, Orange and more." />
        <link rel="canonical" href="https://www.accessrecycle.com/" />
        <meta property="og:title" content="Access Recycle | Mobile Lifecycle & Reverse Logistics Experts" />
        <meta property="og:description" content="Access Recycle purchases, processes, and redistributes mobile devices to maximize value and minimize waste. Trusted by Amazon, Fnac, Orange and more." />
        <meta property="og:url" content="https://www.accessrecycle.com/" />
        <meta property="og:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Access Recycle | Mobile Lifecycle & Reverse Logistics Experts" />
        <meta name="twitter:description" content="Access Recycle purchases, processes, and redistributes mobile devices to maximize value and minimize waste." />
        <meta name="twitter:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Access Recycle",
          "url": "https://www.accessrecycle.com",
          "logo": "https://www.accessrecycle.com/images/logo.png",
          "description": "Access Recycle specializes in purchasing, processing, and redistributing mobile devices to maximize value and minimize waste.",
          "email": "info@accessrecycle.com",
          "telephone": "+447474700700",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "151 High Street",
              "addressLocality": "Loughton",
              "postalCode": "IG10 4LG",
              "addressCountry": "GB"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Calle Diputacion 301",
              "addressLocality": "Barcelona",
              "postalCode": "08009",
              "addressCountry": "ES"
            }
          ],
          "sameAs": []
        })}</script>
      </Helmet>

        <section className="relative bg-slate-900 py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[url('/images/bg_xl.jpg')] bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* 1. Titre (Animation immédiate) */}
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Dedicated to Extending the
              <br />
              <span className="text-brand-light">Mobile Lifecycle</span>
            </h1>
          </Reveal>

          {/* 2. Paragraphe (Délai de 0.2s) */}
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We specialize in purchasing, processing, and redistributing products to maximize value and minimize waste.
            </p>
          </Reveal>

          {/* 3. Boutons (Délai de 0.4s) */}
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold rounded-full transition-all shadow-lg hover:shadow-brand/50">
                Get Started
              </Link>
              <Link to="/services/unsold-inventory" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/30">
                Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections suivantes : Apparaissent quand on scroll dessus */}
      
        <TrustedBy />

        <WhatWeDo />

        <GlobalReach />
    </div>
  );
};

export default Home;