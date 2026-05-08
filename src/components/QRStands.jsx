import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, SparklesIcon, PaintBrushIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

// Import local assets
import standWood from '../assets/stand-wood.png';
import standAcrylic from '../assets/stand-acrylic.png';
import standMetal from '../assets/stand-metal.png';

const QRStands = () => {
  const standOptions = [
    {
      id: "wood",
      name: "Natural Wood",
      description: "Crafted from dark oak and premium walnut. Perfect for upscale dining and warm interiors.",
      image: standWood,
      features: ["Premium Oak/Walnut", "Hand-Polished Finish", "Sustainable Sourcing", "Engraved Branding"],
      color: "bg-amber-50"
    },
    {
      id: "acrylic",
      name: "Modern Acrylic",
      description: "Crystal clear, high-grade acrylic for a minimalist and futuristic aesthetic.",
      image: standAcrylic,
      features: ["Ultra-Clear Grade", "Laser-Cut Precision", "Durable & Waterproof", "Floating Design"],
      color: "bg-sky-50"
    },
    {
      id: "metal",
      name: "Industrial Metal",
      description: "Brushed aluminum or matte black steel. Durable, heavy-duty, and extremely stylish.",
      image: standMetal,
      features: ["Anodized Aluminum", "Weighted Base", "Scratch-Resistant", "Modern Industrial Look"],
      color: "bg-gray-100"
    }
  ];

  return (
    <section id="stands" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-green/10 border border-brand-green/20 rounded-full mb-8"
          >
            <SparklesIcon className="w-4 h-4 text-brand-green" />
            <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">Premium Hardware</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 tracking-tighter"
          >
            Hardware Designed <br /> to <span className="text-brand-green">Match Your Decor</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-brand-muted text-xl max-w-2xl mx-auto font-medium"
          >
            Don't settle for cheap stickers. Elevate your table presence with our customisable, professional QR stands.
          </motion.p>
        </div>

        {/* Stands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {standOptions.map((stand, i) => (
            <motion.div
              key={stand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col group"
            >
              <div className={`relative aspect-square mb-8 rounded-[3rem] overflow-hidden ${stand.color} border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={stand.image} 
                  alt={stand.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-3xl font-bold text-brand-dark mb-4">{stand.name}</h3>
              <p className="text-brand-muted font-medium mb-8 flex-grow">{stand.description}</p>
              
              <div className="space-y-3 mb-10">
                {stand.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-brand-green" />
                    <span className="text-sm font-semibold text-brand-dark">{feature}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Customization Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-[#010F1D] rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Need a Bespoke Design?</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Our design team can work with you to create completely custom hardware that matches your unique brand identity perfectly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                 <PaintBrushIcon className="w-6 h-6 text-brand-green" />
                 <span className="text-white font-semibold">Custom Logo Engraving</span>
              </div>
              <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                 <CubeTransparentIcon className="w-6 h-6 text-brand-green" />
                 <span className="text-white font-semibold">Multiple Material Mixing</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default QRStands;
