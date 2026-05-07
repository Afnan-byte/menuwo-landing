import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ whatsappLink, instagramLink, emailAddress, phoneNumber }) => {
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
      <div className="py-12 relative z-10">
        <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.svg" 
                alt="Menuvo Logo" 
                className="h-8 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()} Menuvo. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex space-x-10 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <a href="#problem" className="hover:text-brand-green transition-colors">Problem</a>
              <a href="#features" className="hover:text-brand-green transition-colors">Features</a>
              <a href="#pricing" className="hover:text-brand-green transition-colors">Pricing</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-green hover:border-brand-green transition-all duration-300"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.789.306-1.459.717-2.126 1.384s-1.078 1.337-1.384 2.126c-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.789.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.789-.306 1.459-.717 2.126-1.384s1.078-1.337 1.384-2.126c.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.789-.717-1.459-1.384-2.126s-1.337-1.078-2.126-1.384c-.763-.296-1.634-.497-2.911-.554-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
              <a 
                href={`mailto:${emailAddress}`} 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-green hover:border-brand-green transition-all duration-300"
                title="Email Us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a 
                href={`tel:${phoneNumber}`} 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-green hover:border-brand-green transition-all duration-300"
                title="Call Us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-2 text-right">
            <span className="text-white font-bold text-sm">Direct Contact</span>
            <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-brand-green transition-colors font-medium">{phoneNumber}</a>
            <a href={`mailto:${emailAddress}`} className="text-gray-400 hover:text-brand-green transition-colors font-medium">{emailAddress}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
