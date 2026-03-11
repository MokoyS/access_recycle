import React from 'react';
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const Contact = () => {

  // Orchestration de la grille
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Délai entre chaque carte
        delayChildren: 0.1
      }
    }
  };

  // Animation de chaque carte
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 font-sans">
      <Helmet>
        <title>Contact Us | Access Recycle — UK & Spain Offices</title>
        <meta name="description" content="Get in touch with Access Recycle for inventory purchases, reverse logistics inquiries, or partnership opportunities. Offices in the UK and Barcelona, Spain." />
        <link rel="canonical" href="https://www.accessrecycle.com/contact" />
        <meta property="og:title" content="Contact Us | Access Recycle — UK & Spain Offices" />
        <meta property="og:description" content="Get in touch with Access Recycle for inventory purchases, reverse logistics inquiries, or partnership opportunities." />
        <meta property="og:url" content="https://www.accessrecycle.com/contact" />
        <meta property="og:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Access Recycle" />
        <meta name="twitter:description" content="Get in touch with Access Recycle for inventory purchases, reverse logistics inquiries, or partnership opportunities." />
        <meta name="twitter:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Access Recycle",
          "url": "https://www.accessrecycle.com",
          "email": "info@accessrecycle.com",
          "telephone": "+447474700700",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "151 High Street",
            "addressLocality": "Loughton",
            "postalCode": "IG10 4LG",
            "addressCountry": "GB"
          }
        })}</script>
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre Simple */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600">Get in touch with our team.</p>
        </motion.div>

        {/* Grille d'informations 2x2 avec animation de groupe */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Email */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }} // Petit effet au survol
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
            <a href="mailto:info@accessrecycle.com" className="text-lg font-medium text-slate-700 hover:text-brand transition-colors">
              info@accessrecycle.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">UK Tel</h3>
            <a href="tel:+447474700700" className="text-lg font-medium text-slate-700 hover:text-brand transition-colors">
              +44 74 74 700 700
            </a>
          </motion.div>

          {/* UK Address */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">UK Address</h3>
            <p className="text-slate-600 leading-relaxed">
              Access Recycle Europe SL<br />
              Calle Diputacion 301<br />
              08009 Barcelona, Spain
            </p>
          </motion.div>

          {/* Spanish Address */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-4">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Spanish Address</h3>
            <p className="text-slate-600 leading-relaxed">
              Access Recycle Europe SL<br />
              Calle Diputacion 301<br />
              08009 Barcelona, Spain
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;