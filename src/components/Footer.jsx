import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ whatsappLink }) => {
  return (
    <footer className="bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rVrf2QAAzQyAAEgwAD4AwL4D7Ua1QAAAABJRU5ErkJggg==')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      {/* Final CTA Section: High-Impact Redesign */}
      <section className="py-32 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden group shadow-2xl border-2 border-white/10"
          >
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 blur-[120px] rounded-full -mr-64 -mt-64 group-hover:bg-brand-green/20 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
               <motion.div
                 initial={{ scale: 0.9, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8"
               >
                  <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.4em]">Limited Time Onboarding</span>
               </motion.div>

               <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                 Ready to <br className="md:hidden" />
                 <span className="text-brand-green">Evolve?</span>
               </h2>
               
               <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                 Join 500+ restaurants that have already transitioned to the future of dining. Deploy your digital menu today.
               </p>

               <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
                  <motion.button 
                    whileHover={{ y: -5, shadow: "0 25px 30px -10px rgba(25, 111, 1, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(whatsappLink)}
                    className="bg-brand-green text-white px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl w-full sm:w-auto"
                  >
                    Start Free Trial
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(whatsappLink)}
                    className="bg-transparent border-2 border-white/10 text-white px-12 py-6 rounded-3xl font-black text-xl transition-all w-full sm:w-auto"
                  >
                    Book a Call
                  </motion.button>
               </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10 hidden lg:block">
               <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
               </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer Footer */}
      <div className="py-10 relative z-10">
        <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo.svg" 
              alt="Menuvo Logo" 
              className="h-8 w-auto brightness-0 invert" 
            />
          </div>
          
          <div className="flex space-x-8 text-gray-400 text-sm font-semibold">
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Menuvo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
