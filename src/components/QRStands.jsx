import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, PaintBrushIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

// Import local assets
import standWood from '../assets/stand-wood.png';
import standAcrylic from '../assets/stand-acrylic.png';
import standMetal from '../assets/stand-metal.png';

const QRStands = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const standOptions = [
    {
      id: "wood",
      name: "Natural Wood",
      image: standWood,
      themeColor: "from-amber-900/10 to-transparent"
    },
    {
      id: "acrylic",
      name: "Modern Acrylic",
      image: standAcrylic,
      themeColor: "from-sky-900/10 to-transparent"
    },
    {
      id: "metal",
      name: "Industrial Metal",
      image: standMetal,
      themeColor: "from-gray-900/10 to-transparent"
    }
  ];

  return (
    <section id="stands" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full mb-6"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">Premium Hardware</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tighter"
          >
            Hardware that <br /> <span className="text-brand-green">Defines Your Space</span>
          </motion.h2>
        </div>

        {/* Simplified Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {standOptions.map((stand, i) => (
            <motion.div
              key={stand.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col group"
            >
              {/* Image Side */}
              <div className="relative mb-10">
                <div className={`absolute inset-0 bg-gradient-to-tr ${stand.themeColor} rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700`}></div>
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white">
                  <AnimatePresence>
                    {!loadedImages[stand.id] && (
                      <motion.div 
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 shimmer"
                      />
                    )}
                  </AnimatePresence>
                  <motion.img 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: loadedImages[stand.id] ? 1 : 0, scale: loadedImages[stand.id] ? 1 : 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    src={stand.image} 
                    alt={`${stand.name} - Custom QR Stand for Restaurants & Cafes in Kerala`} 
                    onLoad={() => handleImageLoad(stand.id)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Side - Just Heading */}
              <div className="text-center">
                 <h3 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">{stand.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bespoke Design Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 bg-[#010F1D] rounded-[4rem] p-12 md:p-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 blur-[150px] rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[0.9]">Need a Completely <br /> <span className="text-brand-green">Bespoke Design?</span></h3>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed">
                Our engineering team can create custom shapes and mixed-material hardware that perfectly matches your venue's unique brand identity.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center space-x-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <PaintBrushIcon className="w-6 h-6 text-brand-green" />
                   <span className="text-white font-bold text-sm">Logo Engraving</span>
                </div>
                <div className="flex items-center space-x-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <CubeTransparentIcon className="w-6 h-6 text-brand-green" />
                   <span className="text-white font-bold text-sm">Material Mixing</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <button className="w-full bg-brand-green text-white py-6 rounded-3xl font-bold text-xl hover:bg-green-700 transition-all shadow-2xl shadow-brand-green/20">
                 Consult Designers
               </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default QRStands;
