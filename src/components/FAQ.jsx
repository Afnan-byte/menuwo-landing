import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-xl font-semibold text-brand-dark">{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-brand-green transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-brand-muted leading-relaxed font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Menuwo digital menu?",
      answer: "Menuwo is a premium digital menu system specifically designed for restaurants and cafes in Kerala. It uses QR code technology to provide guests with a fast, contactless, and visually stunning menu experience on their own smartphones."
    },
    {
      question: "How does the QR menu system work?",
      answer: "Each table is equipped with a custom QR stand. When a guest scans the code using their phone camera, your digital menu loads instantly in their web browser. There is no need for them to download any application."
    },
    {
      question: "Can I customize the QR stands for my restaurant?",
      answer: "Absolutely! We specialize in custom QR stands and restaurant branding in Kerala. You can choose from high-grade acrylic, natural wood, or industrial metal, and we can engrave your logo directly onto the hardware."
    },
    {
      question: "Why is Menuwo the best choice for cafes in Kerala?",
      answer: "Menuwo is optimized for the local market, offering lightning-fast load speeds, easy real-time updates for daily specials, and premium hardware that matches the aesthetic of high-end Kerala cafes."
    },
    {
      question: "How do I update my menu items and prices?",
      answer: "Our system features an instant sync capability. You can modify any item, price, or description from your dashboard, and the changes will reflect universally across all QR codes in milliseconds."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6 tracking-tighter">
            Frequently Asked <span className="text-brand-green">Questions</span>
          </h2>
          <p className="text-brand-muted text-lg font-medium">
            Everything you need to know about our digital menu system.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
