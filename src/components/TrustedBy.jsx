import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Amazon', logo: '/images/partners/amazon.png' },
  { name: 'Dipli', logo: '/images/partners/dipli.png' },
  { name: 'Fnac', logo: '/images/partners/fnac.png' },
  { name: 'Orange', logo: '/images/partners/orange.png' },
  { name: 'Pixmania', logo: '/images/partners/pixmania.png' },
  { name: 'Recommerce', logo: '/images/partners/recommerce.png' },
  { name: 'Swisscom', logo: '/images/partners/swisscom.png' },
];

// 1. Animation du CONTENEUR
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,
    },
  },
};

// 2. Animation des ENFANTS
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  },
};

const TrustedBy = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by the Best
        </p>

        {/* Grille avec animation Stagger */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.name} 
              className="flex justify-center w-full"
              variants={itemVariants} 
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                // C'est ici que j'ai simplifié : plus de grayscale, plus de hover, juste la taille
                className="h-8 md:h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;