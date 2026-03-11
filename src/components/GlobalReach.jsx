import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const GlobalReach = () => {
    const mapImage = "/images/map.png";

    // Animation du conteneur de texte (Chef d'orchestre)
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Délai entre chaque ligne de texte
                delayChildren: 0.1,
            }
        }
    };

    // Animation des lignes de texte (Enfants)
    const textItemVariants = {
        hidden: { opacity: 0, x: -30 }, // Glisse depuis la gauche
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Animation de l'image (Indépendante)
    const imageVariants = {
        hidden: { opacity: 0, x: 50 }, // Glisse depuis la droite
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
        }
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Colonne Texte (Gauche) */}
                    <motion.div 
                        className="order-2 lg:order-1 font-sans"
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Badge */}
                        <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 bg-brand/10 text-brand font-bold px-4 py-2 rounded-full text-sm mb-6">
                            <Globe className="w-4 h-4" />
                            World-Wide Reach
                        </motion.div>

                        {/* Titre */}
                        <motion.h2 variants={textItemVariants} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Over 25 years experience in delivering <span className="text-brand">World-Wide</span> solutions.
                        </motion.h2>
                        
                        {/* Paragraphe */}
                        <motion.p variants={textItemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We provide collection of your unwanted mobile phone accessories or devices, quote and refurbishment. Our global reach finds the solutions that is right for your business.
                        </motion.p>
                        
                        {/* Bouton */}
                        <motion.div variants={textItemVariants}>
                            <Link 
                                to="/about-us" 
                                className="inline-flex items-center px-8 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:gap-4 gap-2"
                            >
                                More about us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Colonne Image (Droite) */}
                    <motion.div 
                        className="order-1 lg:order-2"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <img 
                            src={mapImage} 
                            alt="World-wide solutions map illustration" 
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GlobalReach;