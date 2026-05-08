import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onDemoClick, whatsappLink }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed z-[100] transition-all duration-300 left-1/2 w-[95%] md:w-[90%] lg:max-w-6xl ${scrolled ? 'top-4 glass py-3 rounded-full shadow-md border border-gray-200' : 'top-6 bg-brand-bg py-4 rounded-full border border-gray-200 shadow-sm'}`}
    >
      <div className="px-6 md:px-10 flex justify-between items-center">

        <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/logo.svg"
            alt="Menuvo Logo"
            className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
          />
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {[
            { name: 'Problem', href: '#problem' },
            { name: 'Solution', href: '#solution' },
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-all relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-green rounded-full transition-all group-hover:w-1.5 group-hover:h-1.5 group-hover:bottom-[-4px]"></span>
            </a>
          ))}
        </div>

        <div>
          <button
            onClick={() => window.open(whatsappLink)}
            className="bg-brand-dark text-white px-7 py-2.5 rounded-full font-medium text-sm hover:bg-brand-green transition-all shadow-md hover:shadow-brand-green/20 active:scale-95"
          >
            Get Free Demo
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
