import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

const serviceData = {
  'unsold-inventory': {
    title: 'Purchase of Unsold Inventory',
    desc: 'We purchase your excess stock directly, freeing up your warehouse space and capital immediately. Our process is designed to be quick, confidential, and beneficial for your bottom line.',
    points: ['Immediate Valuation & Offer', 'Quick Logistics & Removal', 'Fair Market Pricing', 'Confidential Handling'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000'
  },
  'unwanted-products': {
    title: 'Processing of Unwanted Products',
    desc: 'Professional sorting and processing of products that no longer fit your primary sales channels. We ensure every item is categorized to maximize its remaining value or recycled responsibly.',
    points: ['Advanced Sorting & Grading', 'Secure Data Destruction', 'Eco-friendly Disposal', 'Zero-Landfill Policy'],
    img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=2000'
  },
  'returned-products': {
    title: 'Handling of Returned Products',
    desc: 'Efficient management of customer returns (Reverse Logistics). We assess the condition of every return to determine the best route for recovery: restocking, refurbishment, or recycling.',
    points: ['Seamless Reverse Logistics', 'Detailed Condition Assessment', 'Refurbishment Capabilities', 'Warranty Management'],
    img: 'https://images.unsplash.com/photo-1566576912906-60034a6195cc?auto=format&fit=crop&q=80&w=2000'
  },
  'redistribution': {
    title: 'Redistribution to Independent Market',
    desc: 'We connect your products with secondary markets where demand exists, protecting your primary brand equity while recovering value from otherwise stagnant assets.',
    points: ['Global Network of Buyers', 'Strict Brand Protection', 'Optimized Sales Channels', 'Market Analysis'],
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000'
  }
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = serviceData[slug] || serviceData['unsold-inventory'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // --- VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      <Helmet>
          <title>{service.title} - Access Recycle Services</title>
          <meta name="description" content={service.desc} />
      </Helmet>
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          {/* Image de fond (change sans animation lourde pour la perf) */}
          <img 
            key={slug} // Force le rechargement de l'image de fond si besoin
            src={service.img} 
            alt={service.title} 
            loading="eager" 
            fetchPriority="high"
            className="w-full h-full object-cover opacity-30 blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* AJOUT DE key={slug} POUR RELANCER L'ANIMATION DU TITRE */}
          <motion.div
            key={slug} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-brand-light font-bold uppercase tracking-widest text-sm mb-4">
              <span>Services</span>
              <ChevronRight className="w-4 h-4" />
              <span>{service.title.split(' ').slice(0, 2).join(' ')}...</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Column - TOUJOURS SANS ANIMATION (Affichage instantané) */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand/20 rounded-2xl transform -rotate-2 -z-10"></div>
              <img 
                key={slug} // key ici assure que React remplace l'image proprement
                src={service.img} 
                alt={service.title} 
                loading="eager" 
                fetchPriority="high"
                className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
              />
            </div>

            {/* Text Column */}
            <div className="space-y-8">
              
              {/* AJOUT DE key={slug} POUR RELANCER L'ANIMATION DU TEXTE */}
              <motion.div
                key={`text-${slug}`} 
                initial="hidden"
                animate="visible" // On utilise 'animate' au lieu de 'whileInView' pour forcer le jeu immédiat
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
                  How We Help
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-brand rounded-full"></span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>

              {/* AJOUT DE key={slug} POUR RELANCER L'ANIMATION DE LA LISTE */}
              <motion.div
                key={`list-${slug}`}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">Key Benefits</h3>
                <motion.ul 
                  className="space-y-4"
                  variants={listContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {service.points.map((point, idx) => (
                    <motion.li 
                      key={idx} 
                      variants={listItem}
                      className="flex items-center gap-4 group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <Check className="w-5 h-5" />
                      </span>
                      <span className="font-medium text-slate-700 text-lg group-hover:text-brand transition-colors">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <div className="pt-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:gap-4 gap-2 text-lg"
                >
                  Get a Custom Quote 
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;