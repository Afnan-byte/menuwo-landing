import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onDemoClick, whatsappLink }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-16 overflow-hidden bg-brand-bg bg-grid">

      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green"></span>
            <span className="text-sm font-bold text-gray-500 tracking-tight">Available for Demo</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-brand-dark leading-[1.05] mb-8 tracking-tighter">
            The Future of <span className="text-brand-green">Digital</span> <br />
            <span className="text-brand-green">
              Menus
            </span>
          </h1>

          <p className="text-lg md:text-xl text-brand-muted font-medium mb-12 leading-relaxed max-w-xl">
            Elevate your hospitality with instant-load digital menus. Contactless, customizable, and designed for modern dining environments.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <motion.button
              whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(25, 111, 1, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(whatsappLink)}
              className="bg-[#196F01] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:bg-green-700 w-full sm:w-72"
            >
              Get Free Demo
            </motion.button>

            <motion.a
              href="#features"
              whileHover={{ y: -4, backgroundColor: "rgba(1, 15, 30, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center px-10 py-5 rounded-full border-2 border-brand-dark text-brand-dark font-bold text-lg transition-all w-full sm:w-72"
            >
              Explore Features
            </motion.a>
          </div>
        </motion.div>

        {/* Right Animated Visual (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-[450px] h-[450px] md:w-[500px] md:h-[500px] flex items-center justify-center">

            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-gray-200"
            ></motion.div>

            {/* Second Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-dotted border-brand-green/20"
            ></motion.div>

            {/* Central QR Mockup */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white shadow-2xl rounded-[2.5rem] flex items-center justify-center border border-gray-100 overflow-hidden z-20">
              {/* QR Grid Pattern Simulation */}
              <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-50 rounded-xl grid grid-cols-4 grid-rows-4 gap-2 p-2">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className={`bg-brand-dark ${[0, 3, 12, 15].includes(i) ? 'w-full h-full rounded-md' : 'w-3 h-3 md:w-4 md:h-4 m-auto rounded-md'}`}
                  ></motion.div>
                ))}
              </div>

              {/* Animated Scanner Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-green shadow-[0_0_25px_rgba(25,111,1,0.6)] animate-scan z-30"></div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
