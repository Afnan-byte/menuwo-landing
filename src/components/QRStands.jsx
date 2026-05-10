import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, SparklesIcon, PaintBrushIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

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
      description: "Crafted from dark oak and premium walnut. Perfect for upscale dining and warm, rustic interiors.",
      image: standWood,
      features: ["Premium Oak/Walnut", "Hand-Polished Finish", "Sustainable Sourcing", "Engraved Branding"],
      themeColor: "from-amber-900/10 to-transparent"
    },
    {
      id: "acrylic",
      name: "Modern Acrylic",
      description: "Crystal clear, high-grade acrylic for a minimalist, clean, and futuristic aesthetic.",
      image: standAcrylic,
      features: ["Ultra-Clear Grade", "Laser-Cut Precision", "Durable & Waterproof", "Floating Design"],
      themeColor: "from-sky-900/10 to-transparent"
    },
    {
      id: "metal",
      name: "Industrial Metal",
      description: "Brushed aluminum or matte black steel. Durable, heavy-duty, and extremely stylish for modern venues.",
      image: standMetal,
      features: ["Anodized Aluminum", "Weighted Base", "Scratch-Resistant", "Modern Industrial Look"],
      themeColor: "from-gray-900/10 to-transparent"
    }
  ];

  return (
    <section id="stands" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
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
              className="text-5xl md:text-8xl font-bold text-brand-dark mb-8 tracking-tighter"
            >
              Hardware that <br /> <span className="text-brand-green">Defines Your Space</span>
            </motion.h2>
          </div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-brand-muted text-lg md:text-xl max-w-md font-medium leading-relaxed"
          >
            Don't settle for cheap stickers. Elevate your tables with our <strong>custom QR stands</strong> designed for the modern hospitality industry in Kerala.
          </motion.p>
        </div>

        {/* Cinematic Vertical List */}
        <div className="space-y-32">
          {standOptions.map((stand, i) => (
            <motion.div
              key={stand.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-tr ${stand.themeColor} rounded-[4rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700`}></div>
                <div className="relative aspect-[4/5] md:aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
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
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="max-w-md">
                   <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Option {i + 1}</span>
                   <h3 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">{stand.name}</h3>
                   <p className="text-brand-muted text-lg md:text-xl font-medium mb-10 leading-relaxed">{stand.description}</p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                     {stand.features.map((feature, idx) => (
                       <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                         <CheckIcon className="w-5 h-5 text-brand-green shrink-0" />
                         <span className="text-sm font-bold text-brand-dark">{feature}</span>
                       </div>
                     ))}
                   </div>

                   <motion.button
                     whileHover={{ x: 10 }}
                     className="flex items-center space-x-3 text-brand-dark font-bold text-lg group"
                   >
                     <span>Request Sample Pack</span>
                     <span className="w-10 h-1 bg-brand-green group-hover:w-16 transition-all duration-300"></span>
                   </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bespoke Design Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 bg-[#010F1D] rounded-[4rem] p-12 md:p-24 relative overflow-hidden"
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
                 Consult Our Designers
               </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default QRStands;
