import React from 'react';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, BoltIcon, CloudArrowUpIcon, ShieldCheckIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Features = () => {
  const feats = [
    {
      title: "Mobile Optimized",
      desc: "Liquid layout algorithms ensure perfect rendering on any smartphone. No zooming required.",
      icon: DevicePhoneMobileIcon,
      size: "lg"
    },
    {
      title: "Instant Sync",
      desc: "Modify parameters remotely and sync universally in milliseconds.",
      icon: CloudArrowUpIcon,
      size: "sm"
    },
    {
      title: "Contactless",
      desc: "Zero physical contact vectors for safe dining.",
      icon: ShieldCheckIcon,
      size: "sm"
    },
    {
      title: "Real-time Analytics",
      desc: "Track which items are being viewed the most and optimize your menu accordingly.",
      icon: ChartBarIcon,
      size: "md"
    },
    {
      title: "Ultra Low Latency",
      desc: "Our CDN edge servers deliver your menu at light speed.",
      icon: BoltIcon,
      size: "md"
    }
  ];

  return (
    <section id="features" className="py-32 bg-white relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-semibold text-brand-dark mb-4 tracking-tighter">Advanced <span className="text-brand-green">Capabilities</span></h2>
            <p className="text-brand-muted text-lg font-medium leading-relaxed">Built with cutting-edge technology to provide the fastest, most reliable digital menu experience on the market.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="px-4 py-2 bg-brand-green/5 border border-brand-green/20 rounded-full text-brand-green text-xs font-semibold uppercase tracking-widest">
              Enterprise Ready
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

          {/* Large Featured Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#010F1D] rounded-[2.5rem] p-10 border border-[#196F01]/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-green transition-colors duration-500">
                <DevicePhoneMobileIcon className="w-7 h-7 text-brand-green group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">Liquid Display Optimization</h3>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Our proprietary rendering engine automatically adapts your menu content to fit any screen size perfectly, ensuring your dishes look appetizing on every device.
              </p>
            </div>
            {/* Visual element for bento feel */}
            <div className="mt-12 flex space-x-3 opacity-30 group-hover:opacity-50 transition-opacity">
              <div className="h-2 w-24 bg-brand-green rounded-full"></div>
              <div className="h-2 w-12 bg-white rounded-full"></div>
              <div className="h-2 w-8 bg-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Sync Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-[#010F1D] rounded-[2.5rem] p-10 border border-[#196F01]/30 flex flex-col justify-between group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-green transition-colors duration-500">
              <CloudArrowUpIcon className="w-7 h-7 text-brand-green group-hover:text-white" />
            </div>
            <div className="mt-12">
               <h3 className="text-xl font-semibold text-white mb-2">Global Cloud Sync</h3>
              <p className="text-gray-400 text-sm">Update prices or hide out-of-stock items across all tables instantly.</p>
            </div>
          </motion.div>

          {/* Analytics Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-[#010F1D] rounded-[2.5rem] p-10 border border-[#196F01]/30 group"
          >
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-green transition-colors duration-500 shrink-0">
                <ChartBarIcon className="w-7 h-7 text-brand-green group-hover:text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="text-xl font-semibold text-white">Deep Analytics</h3>
                  <span className="px-2 py-0.5 bg-brand-green/20 border border-brand-green/40 rounded text-[10px] font-bold text-brand-green uppercase tracking-widest">Custom</span>
                </div>
                <p className="text-gray-400 text-sm">Understand guest behavior like never before.</p>
              </div>
            </div>
            {/* Mock chart element */}
            <div className="mt-8 flex items-end space-x-2 h-16">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  className="w-full bg-brand-green/20 rounded-t-sm"
                ></motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security/Contactless Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-[#010F1D] rounded-[2.5rem] p-10 border border-[#196F01]/30 group flex items-center space-x-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-green transition-colors duration-500 shrink-0">
              <ShieldCheckIcon className="w-7 h-7 text-brand-green group-hover:text-white" />
            </div>
            <div>
               <h3 className="text-xl font-semibold text-white mb-1">Zero Friction</h3>
              <p className="text-gray-400 text-sm">No apps, no downloads, no physical contact. 100% web-based security.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
