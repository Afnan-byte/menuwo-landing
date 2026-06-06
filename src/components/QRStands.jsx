import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, PaintBrushIcon, CubeTransparentIcon, QrCodeIcon } from '@heroicons/react/24/outline';

const QRStands = () => {

  const standOptions = [
    {
      id: "wood",
      name: "Natural Wood",
      themeColor: "from-amber-900/10 to-transparent",
      standBg: "bg-gradient-to-b from-[#e5cca4] to-[#cba370] border border-[#a87a41]",
      standBase: "bg-[#4a2e16] w-[110%] h-6 -ml-[5%] rounded-t-sm shadow-xl",
      textColor: "text-[#4a2e16]",
      label: "SCAN FOR MENU"
    },
    {
      id: "acrylic",
      name: "Modern Acrylic",
      themeColor: "from-yellow-500/10 to-transparent",
      standBg: "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg border border-yellow-200/50 backdrop-blur-sm",
      standBase: "bg-[#111] w-[80%] h-8 ml-[10%] rounded-t-xl shadow-2xl",
      textColor: "text-gray-900",
      label: "SCAN TO VIEW MENU"
    },
    {
      id: "metal",
      name: "Industrial Metal",
      themeColor: "from-gray-500/10 to-transparent",
      standBg: "bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 border-l border-t border-white shadow-[inset_-2px_-2px_10px_rgba(0,0,0,0.1)]",
      standBase: "bg-gradient-to-r from-gray-400 to-gray-500 w-[100%] h-3 shadow-xl transform skew-x-[20deg] ml-2",
      textColor: "text-gray-800",
      label: "SCAN TO VIEW MENU"
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
              {/* Image Side -> CSS Design Side */}
              <div className="relative mb-10">
                <div className={`absolute inset-0 bg-gradient-to-tr ${stand.themeColor} rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700`}></div>
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white flex items-center justify-center p-10">
                  
                  {/* CSS Stand Representation */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-[200px] h-[260px] flex flex-col justify-end relative"
                  >
                     {/* Stand Body */}
                     <div className={`w-full h-full rounded-2xl flex flex-col items-center pt-8 pb-4 px-4 absolute bottom-4 z-10 ${stand.standBg}`}>
                        <div className={`text-2xl font-black tracking-tight mb-4 ${stand.textColor}`}>
                          menu<span className={stand.id === 'wood' ? 'text-[#196F01]' : 'text-brand-green'}>wo</span>
                        </div>
                        
                        <div className="w-28 h-28 bg-white p-2 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center relative">
                           <QrCodeIcon className="w-full h-full text-black" />
                           {/* Decorative QR inner elements */}
                           <div className="absolute top-3 left-3 w-3 h-3 border-2 border-black" />
                           <div className="absolute top-3 right-3 w-3 h-3 border-2 border-black" />
                           <div className="absolute bottom-3 left-3 w-3 h-3 border-2 border-black" />
                        </div>
                        
                        <div className={`mt-auto text-[10px] font-bold tracking-widest ${stand.textColor}`}>
                          {stand.label}
                        </div>
                     </div>
                     
                     {/* Stand Base */}
                     <div className={`absolute bottom-0 z-20 ${stand.standBase}`} />
                  </motion.div>

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
