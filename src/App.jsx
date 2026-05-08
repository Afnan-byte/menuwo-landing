import React from 'react';
import { motion } from 'framer-motion';

// Icons
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import BeforeAfter from './components/BeforeAfter';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import QRStands from './components/QRStands';
import Footer from './components/Footer';

const App = () => {
  const whatsappLink = "https://wa.me/918089685278?text=Hello%20Menuvo,%20I'm%20interested%20in%20elevating%20my%20restaurant%20with%20your%20digital%20menu%20solution.";
  const instagramLink = "https://www.instagram.com/menuw.o/?hl=en";
  const emailAddress = "info@menuwo.in";
  const phoneNumber = "+918089685278";

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark selection:bg-brand-green/20 selection:text-brand-dark relative overflow-x-hidden">
      
      <Navbar onDemoClick={() => window.open(whatsappLink)} whatsappLink={whatsappLink} />
      
      <main className="relative z-10">
        <Hero onDemoClick={() => window.open(whatsappLink)} whatsappLink={whatsappLink} />
        <ProblemSolution />
        <Comparison />
        <Features />
        <BeforeAfter /> {/* Acts as Demo Preview & Custom Stand */}
        <QRStands />
        <Pricing whatsappLink={whatsappLink} />
      </main>

      <Footer 
        whatsappLink={whatsappLink} 
        instagramLink={instagramLink}
        emailAddress={emailAddress}
        phoneNumber={phoneNumber}
      />

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[9000] bg-brand-green text-white p-4 rounded-full shadow-elegant hover:shadow-elegant-hover flex items-center justify-center w-16 h-16 transition-shadow"
      >
        <ChatBubbleLeftRightIcon className="w-8 h-8" />
      </motion.a>
    </div>
  );
};

export default App;
