import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, width = "100%", delay = 0, className = "" }) => {
  return (
    <motion.div
      // L'état initial (invisible et décalé vers le bas)
      initial={{ opacity: 0, y: 50 }}
      // L'état quand l'élément entre dans l'écran (visible et à sa place)
      whileInView={{ opacity: 1, y: 0 }}
      // Options du viewport
      viewport={{ once: true, margin: "-50px" }} // once: true = l'anim ne se joue qu'une fois
      // Durée et fluidité de l'animation
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      // On passe les classes CSS (pour les grilles, flex, etc.)
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;