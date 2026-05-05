import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, SparklesIcon, DevicePhoneMobileIcon, CursorArrowRaysIcon, BoltIcon } from '@heroicons/react/24/outline';

const BeforeAfter = () => {
   return (
      <section className="bg-white relative">

         {/* Background Orbs */}
         <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

         {/* Section 1: Interface Showcase - Immersive Redesign */}
         <div id="solution" className="py-32 relative z-10 overflow-hidden bg-brand-bg">
            <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl">

               <div className="flex flex-col lg:flex-row items-center gap-20">

                  {/* Left Content: Text & Features */}
                  <div className="lg:w-1/2">
                     <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                     >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full mb-8">
                           <SparklesIcon className="w-4 h-4 text-brand-green" />
                           <span className="text-[10px] font-black text-brand-green uppercase tracking-widest">Next-Gen Experience</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-8 tracking-tighter leading-none">
                           The Interface of <br />
                           <span className="text-brand-green">Tomorrow</span>
                        </h2>
                        <p className="text-brand-muted text-lg md:text-xl font-medium leading-relaxed mb-12">
                           We've engineered a zero-friction digital environment that feels like a native app but works instantly in any mobile browser.
                           <span className="text-brand-dark font-bold"> No downloads. No lag. No limits.</span>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                           {[
                              { title: "Fluid Navigation", desc: "Designed for one-handed dining use.", icon: CursorArrowRaysIcon },
                              { title: "Retina Assets", desc: "Every dish looks appetizingly real.", icon: SparklesIcon }
                           ].map((item, i) => (
                              <div key={i} className="space-y-3">
                                 <div className="w-10 h-10 rounded-xl bg-brand-green/5 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-brand-green" />
                                 </div>
                                 <h4 className="font-bold text-brand-dark">{item.title}</h4>
                                 <p className="text-sm text-brand-muted font-medium">{item.desc}</p>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  </div>

                  {/* Right Content: Immersive Mockup */}
                  <div className="lg:w-1/2 relative flex justify-center lg:justify-end">

                     {/* Background Glows */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>

                     {/* Main Phone Mockup */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative w-[320px] h-[650px] bg-[#010F1E] rounded-[3.5rem] border-[12px] border-[#010F1E] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden z-20 group"
                     >
                        {/* Internal Screen Content */}
                        <div className="absolute inset-0 bg-white flex flex-col pt-12">
                           {/* Header Area */}
                           <div className="px-6 py-4 flex justify-between items-center border-b border-gray-50">
                              <div className="w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center">
                                 <div className="w-3 h-3 bg-brand-green rounded-sm"></div>
                              </div>
                              <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                 <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                              </div>
                           </div>

                           {/* Hero Item */}
                           <div className="p-6">
                              <div className="h-44 w-full bg-gray-50 rounded-[2rem] relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                 <div className="absolute bottom-4 left-4 space-y-2">
                                    <div className="h-3 w-24 bg-white/80 rounded-full"></div>
                                    <div className="h-2 w-16 bg-white/40 rounded-full"></div>
                                 </div>
                              </div>
                           </div>

                           {/* Categories */}
                           <div className="px-6 flex space-x-3 mb-8">
                              {['Menu', 'Specials', 'Drinks'].map((cat, i) => (
                                 <div key={i} className={`px-4 py-2 rounded-full text-[10px] font-bold ${i === 0 ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'bg-gray-100 text-gray-500'}`}>
                                    {cat}
                                 </div>
                              ))}
                           </div>

                           {/* Items List */}
                           <div className="px-6 space-y-4">
                              {[1, 2, 3].map(i => (
                                 <div key={i} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-2xl border border-gray-100/50">
                                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                                    <div className="space-y-2 flex-1">
                                       <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                                       <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <div className="w-8 h-8 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green font-bold text-xs">
                                       +
                                    </div>
                                 </div>
                              ))}
                           </div>

                           {/* Floating Action Button */}
                           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-brand-dark p-4 rounded-2xl flex justify-between items-center shadow-2xl">
                              <div className="space-y-1.5 ml-2">
                                 <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
                                 <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
                              </div>
                              <div className="h-10 w-24 bg-brand-green rounded-xl flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-brand-green/20">
                                 View Order
                              </div>
                           </div>
                        </div>
                     </motion.div>

                     {/* Floating Callouts Removed */}
                  </div>
               </div>

            </div>
         </div>

         {/* Section 2: Branding Showcase - Premium Redesign */}
         <div className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">

               <div className="text-center max-w-4xl mx-auto mb-24">
                  <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="px-4 py-1.5 bg-brand-green/10 rounded-full inline-block mb-6 border border-brand-green/20"
                  >
                     <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.3em]">Pure Identity Control</span>
                  </motion.div>
                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-5xl md:text-7xl font-black text-brand-dark mb-8 tracking-tighter leading-none"
                  >
                     Your Table. <br />
                     <span className="text-brand-green">Your Brand.</span>
                  </motion.h2>
                  <p className="text-brand-muted text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                     We remove the "powered by" and put your brand front and center. Full white-label capabilities that turn every scan into a brand experience.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                  {/* Bento Card 1: Domain/White Label */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="md:col-span-8 bg-gray-50 rounded-[3rem] p-12 border border-gray-100 relative overflow-hidden group"
                  >
                     <div className="relative z-10">
                        <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">Custom Domain</h3>
                        <p className="text-brand-muted text-lg mb-8 max-w-sm">Use your own domain name (menu.yourrestaurant.com) for a 100% native brand experience.</p>

                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 inline-flex items-center space-x-4 max-w-full">
                           <div className="flex space-x-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                           </div>
                           <div className="h-6 w-px bg-gray-200"></div>
                           <p className="text-sm font-bold text-brand-dark overflow-hidden text-ellipsis whitespace-nowrap">https://menu.thegrillhouse.com</p>
                        </div>
                     </div>

                     <div className="absolute right-0 bottom-0 w-1/2 h-full bg-brand-green/5 translate-x-1/4 translate-y-1/4 rounded-full blur-[100px]"></div>
                  </motion.div>

                  {/* Bento Card 2: Speed/Performance */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="md:col-span-4 bg-brand-dark rounded-[3rem] p-12 relative overflow-hidden group"
                  >
                     <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20">
                           <BoltIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-2">Instant Load</h3>
                           <p className="text-gray-400 text-sm">Lightweight code for lightning fast scans.</p>
                        </div>
                     </div>
                  </motion.div>

                  {/* Bento Card 3: Color Engine */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="md:col-span-5 bg-[#010F1D] rounded-[3rem] p-12 border border-white/5 relative overflow-hidden"
                  >
                     <h3 className="text-2xl font-bold text-white mb-6">Visual Identity</h3>
                     <div className="flex flex-wrap gap-3">
                        {['#196F01', '#010F1E', '#FF5733', '#8B4513', '#2E8B57'].map(color => (
                           <motion.div
                              key={color}
                              whileHover={{ scale: 1.2 }}
                              className="w-10 h-10 rounded-full border-2 border-white/20 shadow-lg cursor-pointer"
                              style={{ backgroundColor: color }}
                           ></motion.div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-white/50">
                           +
                        </div>
                     </div>
                     <p className="text-gray-400 text-sm mt-8">Pick your palette. We match your aesthetics perfectly across the entire interface.</p>
                  </motion.div>

                  {/* Bento Card 4: Full Showcase */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="md:col-span-7 bg-[#F1F5F9] rounded-[3rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
                  >
                     <div className="relative z-10 w-full md:w-1/2">
                        <h3 className="text-3xl font-black text-brand-dark mb-4">The Premium Stand</h3>
                        <p className="text-brand-muted font-medium mb-6">Custom hardware designed to match your interior décor.</p>
                        <ul className="space-y-3">
                           {["Wood", "Acrylic", "Metal"].map(mat => (
                              <li key={mat} className="flex items-center space-x-2 text-brand-dark font-bold text-sm">
                                 <CheckIcon className="w-4 h-4 text-brand-green" />
                                 <span>{mat} Finishes</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-48 h-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 flex flex-col items-center">
                           <div className="w-full h-40 bg-gray-50 rounded-xl mb-4 border border-dashed border-gray-200 flex items-center justify-center">
                              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">QR SPACE</span>
                           </div>
                           <div className="w-12 h-12 bg-brand-dark rounded-full mb-3 flex items-center justify-center">
                              <span className="text-[8px] font-bold text-white">LOGO</span>
                           </div>
                           <div className="h-1.5 w-24 bg-gray-100 rounded-full"></div>
                        </div>
                     </div>
                  </motion.div>

               </div>
            </div>
         </div>

      </section>
   );
};

export default BeforeAfter;
