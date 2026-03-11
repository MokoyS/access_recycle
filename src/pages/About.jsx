import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  AlertTriangle, 
  Lightbulb, 
  Leaf, 
  Recycle, 
  Users, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {

  // --- VARIANTS D'ANIMATION ---
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white overflow-hidden font-sans">
      <Helmet>
        <title>About Us | Access Recycle — Zero Waste Mission & Vision</title>
        <meta name="description" content="Learn how Access Recycle is leading the zero waste revolution in mobile recycling and reverse logistics, partnering with businesses and governments worldwide." />
        <link rel="canonical" href="https://www.accessrecycle.com/about-us" />
        <meta property="og:title" content="About Us | Access Recycle — Zero Waste Mission & Vision" />
        <meta property="og:description" content="Learn how Access Recycle is leading the zero waste revolution in mobile recycling and reverse logistics, partnering with businesses and governments worldwide." />
        <meta property="og:url" content="https://www.accessrecycle.com/about-us" />
        <meta property="og:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Access Recycle — Zero Waste Mission & Vision" />
        <meta name="twitter:description" content="Learn how Access Recycle is leading the zero waste revolution in mobile recycling and reverse logistics." />
        <meta name="twitter:image" content="https://www.accessrecycle.com/images/og-image.jpg" />
      </Helmet>

      {/* --- SECTION 1: HERO & MISSION --- */}
      <section className="relative py-32 md:py-48 bg-slate-900 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1542601902048-2297cad40627?q=80&w=2070&auto=format&fit=crop" 
            alt="Clean environment and sustainability" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Leading the Way Towards <span className="text-brand-light">Zero Waste</span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                <span className="font-bold text-brand-light block mb-2">Our Mission:</span> 
                Redefining recycling and reverse logistics with an unwavering commitment to achieving zero waste.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* --- SECTION 2: THE CHALLENGE VS OUR VISION --- */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            
            {/* The Challenge (Left side) */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Zero Waste Challenge</h2>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800 block mb-1">Growing environmental concerns:</strong> 
                  The world is facing a waste crisis, with landfills overflowing and ecosystems suffering under the weight of discarded products.
                </p>
                <p>
                  <strong className="text-slate-800 block mb-1">The imperative for change:</strong> 
                  Transitioning towards a zero waste approach is no longer optional—it's essential for preserving the planet and securing a sustainable future.
                </p>
              </div>
            </motion.div>

            {/* Our Vision (Right side) */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/10 rounded-full filter blur-3xl -z-10"></div>
              
              <div className="bg-white p-10 rounded-3xl border border-brand/20 shadow-xl shadow-brand/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand/20 p-3 rounded-full">
                    <Lightbulb className="w-8 h-8 text-brand" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
                </div>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800 block mb-1">Pioneering a revolution:</strong> 
                    To pioneer a zero waste revolution in recycling and reverse logistics.
                  </p>
                  <p>
                    <strong className="text-slate-800 block mb-1">Driving innovation:</strong> 
                    Harnessing technology and sustainable practices to minimize waste at every single stage of the process.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* --- SECTION 3: HOW WE DO IT (Practices) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Zero Waste Solutions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              From purchase to redistribution, our end-to-end solutions are designed with a single mindset: eliminate waste throughout the supply chain.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Practice 1 */}
            <motion.div variants={fadeInUp} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand transition-colors group">
              <Leaf className="w-10 h-10 text-brand-light mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Sustainable Sourcing</h3>
              <p className="text-slate-300 leading-relaxed">
                Partnering with eco-conscious suppliers and manufacturers to ensure materials are responsibly sourced and minimally packaged.
              </p>
            </motion.div>
             {/* Practice 2 */}
             <motion.div variants={fadeInUp} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand transition-colors group">
              <Recycle className="w-10 h-10 text-brand-light mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Efficient Processing</h3>
              <p className="text-slate-300 leading-relaxed">
                Implementing streamlined processes and advanced technologies to maximize resource recovery and minimize waste generation.
              </p>
            </motion.div>
             {/* Practice 3 */}
             <motion.div variants={fadeInUp} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand transition-colors group">
              <Target className="w-10 h-10 text-brand-light mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Zero Waste Mindset</h3>
              <p className="text-slate-300 leading-relaxed">
                Every decision and action is guided by the principle of waste reduction and resource conservation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* --- SECTION 4: PARTNERSHIPS & IMPACT (Split Screen) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Side */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
                alt="Collaboration and partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand/20 mix-blend-multiply"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-brand" />
                  <h3 className="text-2xl font-bold text-slate-900">Collaborative Partnerships</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Access Recycle collaborates with businesses, governments, and communities to promote a zero waste agenda.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  By working together, we can create a circular economy where resources are continually reused and repurposed.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-brand" />
                  <h3 className="text-2xl font-bold text-slate-900">Impact and Results</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our efforts have resulted in significant tangible outcomes: waste reduction, resource conservation, and environmental preservation.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  We lead by example, inspiring others to embrace zero waste practices.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* --- SECTION 5: CTA & JOURNEY --- */}
      <section className="py-24 bg-brand-light/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <Recycle className="absolute -top-20 -left-20 w-64 h-64 text-brand/5 rotate-45 pointer-events-none" />
        <Leaf className="absolute -bottom-20 -right-20 w-64 h-64 text-brand/5 -rotate-45 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Journey, Not A Destination</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We are dedicated to ongoing innovation, constantly seeking new ways to enhance our zero waste initiatives. Achieving zero waste requires dedication, perseverance, and a willingness to adapt.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-10 rounded-3xl shadow-xl border border-brand/20 mt-12"
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold text-brand mb-4">Join the Movement</h3>
            <p className="text-slate-600 mb-8 text-lg">
              Be part of the solution. Together, we can build a world where waste is no longer an option.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:gap-4 gap-2 text-lg"
            >
              Partner With Us
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;