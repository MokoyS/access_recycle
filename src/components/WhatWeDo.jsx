import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Banknote, Settings, RotateCcw, Store } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Purchase of Unsold Inventory',
    desc: 'We offer a seamless solution for businesses looking to offload unsold inventory.',
    link: '/services/unsold-inventory',
    icon: Banknote,
  },
  {
    title: 'Processing of Unwanted Products',
    desc: 'Access Recycle provides efficient processing services for unwanted products.',
    link: '/services/unwanted-products',
    icon: Settings,
  },
  {
    title: 'Handling of Returned Products',
    desc: 'Dealing with returned products can be a logistical challenge for businesses.',
    link: '/services/returned-products',
    icon: RotateCcw,
  },
  {
    title: 'Redistribution to the Independent Market',
    desc: 'Access Recycle specializes in redistributing processed products to the independent market.',
    link: '/services/redistribution',
    icon: Store,
  },
];

// 1. Animation pour le Header (Titre) - On garde le petit mouvement ou on l'enlève selon ton goût
// Ici je le laisse très subtil
const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// 2. Animation pour le CONTENEUR
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre chaque carte
    }
  }
};

// 3. Animation pour CHAQUE CARTE (Modifiée)
const cardVariants = {
  // J'ai retiré le "y: 50". Maintenant ça part juste de l'invisibilité.
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    // Pas de y: 0 ici non plus, donc pas de mouvement vertical
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">WHAT WE DO</h3>
          <div className="w-16 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Grille des services */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className="group flex flex-col h-full bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 hover:border-brand/20"
            >
              {/* Cercle Icône */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand transition-colors duration-300">
                <service.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Contenu */}
              <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                {service.title}
              </h4>

              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>

              {/* Lien */}
              <Link 
                to={service.link} 
                className="inline-flex items-center text-sm font-bold text-brand hover:text-brand-dark uppercase tracking-wide group-hover:translate-x-1 transition-transform"
              >
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;