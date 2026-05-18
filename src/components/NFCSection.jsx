import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  BoltIcon, 
  SparklesIcon, 
  QrCodeIcon, 
  ClockIcon, 
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const features = [
  { icon: BoltIcon, title: "Instant Tap Access" },
  { icon: QrCodeIcon, title: "QR + NFC Support" },
  { icon: ClockIcon, title: "Faster Customer Experience" },
  { icon: SparklesIcon, title: "Premium Smart Stand" },
  { icon: DevicePhoneMobileIcon, title: "Contactless Experience" },
  { icon: CheckBadgeIcon, title: "Modern Restaurant Branding" }
];

const NFCSection = ({ whatsappLink }) => {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden text-white">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#196F01]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#196F01]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#196F01]/10 border border-[#196F01]/20 text-[#196F01] font-medium text-sm mb-6">
            <SparklesIcon className="w-4 h-4" />
            <span>Premium Hardware</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Just Tap. <span className="text-[#196F01]">Menu Opens.</span>
          </h2>
          <p className="text-lg text-brand-light/80 leading-relaxed">
            Introducing Menuwo Smart NFC Stands — a faster and more premium way for customers to access your digital menu.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Features */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, borderColor: 'rgba(25, 111, 1, 0.3)' }}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-4 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#196F01]/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#196F01]" />
                </div>
                <h3 className="font-medium text-white/90 text-sm mt-2">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Animated Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center p-8 overflow-hidden group"
          >
            {/* Ambient table glow */}
            <div className="absolute bottom-0 w-3/4 h-20 bg-[#196F01]/20 blur-3xl" />
            
            {/* NFC Stand */}
            <div className="relative z-10 w-48 h-64 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center justify-between py-6">
              <div className="w-24 h-24 border border-[#196F01]/50 rounded-lg flex items-center justify-center relative">
                <QrCodeIcon className="w-16 h-16 text-white/50" />
                {/* Pulsing NFC icon */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-[#196F01] rounded-lg"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-white/70 tracking-widest uppercase">Tap Here</p>
                <div className="flex gap-1 justify-center mt-2">
                  {[1,2,3].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                      className="w-1 h-4 bg-[#196F01] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Smartphone Animation */}
            <motion.div 
              initial={{ x: 100, y: -50, rotate: -15, opacity: 0 }}
              whileInView={{ x: 20, y: 10, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, type: "spring", stiffness: 50 }}
              className="absolute z-20 w-40 h-80 bg-brand-dark border-4 border-gray-800 rounded-[2rem] shadow-2xl overflow-hidden right-12 md:right-24"
            >
              {/* Phone Screen */}
              <div className="w-full h-full relative bg-gray-900">
                <div className="absolute top-0 w-full h-6 bg-black flex justify-center rounded-t-3xl">
                  <div className="w-16 h-4 bg-black rounded-b-xl absolute top-0" />
                </div>
                
                {/* Screen Content - Appears after tap */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="w-full h-full p-4 pt-8 flex flex-col gap-3"
                >
                  <div className="w-full h-32 rounded-xl bg-gray-800 animate-pulse" />
                  <div className="w-3/4 h-4 rounded bg-gray-800" />
                  <div className="w-1/2 h-4 rounded bg-gray-800" />
                  <div className="w-full h-16 rounded-xl bg-[#196F01]/20 border border-[#196F01]/50 mt-auto mb-4" />
                </motion.div>

                {/* Tap Ripple Effect */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 3, opacity: [0, 0.5, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute top-1/2 left-0 w-16 h-16 bg-[#196F01] rounded-full -translate-x-1/2 -translate-y-1/2 blur-md"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default NFCSection;
