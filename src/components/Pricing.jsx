import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = ({ whatsappLink }) => {
  return (
    <section id="pricing" className="py-24 bg-white relative border-t border-gray-100">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-brand-dark mb-4 tracking-tighter">Transparent <span className="text-brand-green">Pricing</span></h2>
          <p className="text-brand-muted text-lg font-medium">No hidden fees. Scale your digital infrastructure effortlessly.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-[#010F1D] p-8 rounded-[2.5rem] border border-[#196F01]/30 hover:border-[#196F01]/60 transition-all shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">Perfect for small cafes.</p>
            <div className="text-4xl font-semibold text-white mb-8">₹199<span className="text-lg text-gray-500 font-normal">/3mo</span></div>
            <ul className="space-y-4 mb-8">
              {['Digital Menu Creation', 'Dashboard Access', 'Basic Stand (Acrylic) 4 pieces', 'Basic QR Code', '24/7 Support'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300 font-medium">
                  <CheckIcon className="w-5 h-5 text-brand-green mr-3" /> {item}
                </li>
              ))}
            </ul>
            <button onClick={() => window.open(whatsappLink)} className="w-full py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
              Select Starter
            </button>
          </motion.div>

          {/* Pro Plan (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-[#010F1D] p-10 rounded-[2.5rem] border-2 border-[#196F01] relative z-10 transition-all shadow-2xl shadow-brand-green/10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-green text-white text-[10px] font-semibold rounded-full uppercase tracking-widest">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Professional</h3>
            <p className="text-brand-green text-sm mb-6 font-semibold uppercase tracking-tight">For growing restaurants.</p>
            <div className="text-5xl font-semibold text-white mb-8">₹499<span className="text-lg text-gray-500 font-normal">/3mo</span></div>
            <ul className="space-y-4 mb-8">
              {['Digital Menu Creation', 'Dashboard Access', 'Premium Stands (Wood, Acrylic, Steel) - 4 pieces', 'Priority 24/7 Support'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-100 font-medium">
                  <CheckIcon className="w-5 h-5 text-brand-green mr-3" /> {item}
                </li>
              ))}
            </ul>
            <button onClick={() => window.open(whatsappLink)} className="w-full py-4 rounded-full bg-brand-green text-white font-semibold text-lg hover:bg-green-700 shadow-lg transition-all active:scale-95">
              Upgrade Now
            </button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-[#010F1D] p-8 rounded-[2.5rem] border border-[#196F01]/30 hover:border-[#196F01]/60 transition-all shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">For large hospitality chains.</p>
            <div className="text-4xl font-semibold text-white mb-8">Custom</div>
            <ul className="space-y-4 mb-8">
              {['Digital Menu Creation', 'Dashboard Access', 'Branding Included', 'Customisable Stand Design', 'Bespoke POS Integration'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300 font-medium">
                  <CheckIcon className="w-5 h-5 text-brand-green mr-3" /> {item}
                </li>
              ))}
            </ul>
            <button onClick={() => window.open(whatsappLink)} className="w-full py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
