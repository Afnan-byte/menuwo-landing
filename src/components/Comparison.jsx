import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, CheckIcon, NoSymbolIcon, SparklesIcon, PrinterIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const Comparison = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 tracking-tighter"
          >
            The Smart <span className="text-brand-green">Transition</span>
          </motion.h2>
          <p className="text-brand-muted text-lg font-medium">
            Visualizing the difference between outdated paper and the digital future.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Traditional Paper Menu Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#FDFBF7] border-2 border-orange-100 rounded-[3rem] p-10 md:p-14 shadow-xl relative overflow-hidden group"
          >
            {/* Visual Header */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-14 h-14 bg-orange-100/50 rounded-2xl flex items-center justify-center">
                <PrinterIcon className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-900">Traditional Paper</h3>
                <p className="text-orange-700/60 text-sm font-bold uppercase tracking-widest">The High-Cost Past</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                "Expensive re-printing for every price change",
                "Easily damaged, stained, and unhygienic",
                "Zero data on what customers are looking at",
                "Slow service — staff must manually bring menus",
                "Limited space for high-quality dish photos"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <XMarkIcon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <p className="text-orange-900/80 font-medium text-lg leading-snug">{item}</p>
                </div>
              ))}
            </div>

            {/* Negative Overlay */}
            <div className="absolute top-0 right-0 p-6">
              <NoSymbolIcon className="w-32 h-32 text-orange-200 opacity-20 -rotate-12" />
            </div>
          </motion.div>

          {/* VS Divider */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-dark text-white font-black flex items-center justify-center shadow-2xl relative z-20 border-4 border-white">
              VS
            </div>
          </div>

          {/* Menuvo Digital Menu Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#010F1D] border-2 border-[#196F01] rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-brand-green/10 relative overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>

            {/* Visual Header */}
            <div className="flex items-center space-x-4 mb-12 relative z-10">
              <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/20">
                <DevicePhoneMobileIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Menuvo Digital</h3>
                <p className="text-brand-green text-sm font-bold uppercase tracking-widest">The High-Efficiency Future</p>
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              {[
                "Instant updates with zero printing costs",
                "100% Contactless, safe, and always clean",
                "Real-time analytics on guest behavior",
                "Instant access via QR — No waiting time",
                "Unlimited space for stunning retina visuals"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <CheckIcon className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <p className="text-white font-bold text-lg leading-snug">{item}</p>
                </div>
              ))}
            </div>

            {/* Positive Overlay */}
            <div className="absolute bottom-0 right-0 p-6">
              <SparklesIcon className="w-40 h-40 text-brand-green opacity-5 rotate-12" />
            </div>
          </motion.div>

        </div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-brand-dark font-black text-2xl md:text-3xl leading-tight">
            It's not just a change. <br className="md:hidden" /> It's an <span className="text-brand-green underline decoration-brand-green/30 underline-offset-8">Evolution.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Comparison;
