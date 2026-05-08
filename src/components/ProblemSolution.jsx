import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, CheckIcon, CurrencyRupeeIcon, ClockIcon, UserGroupIcon, ChartBarSquareIcon, BoltIcon, SparklesIcon, TrashIcon, ScissorsIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const ProblemSolution = () => {
  const losses = [
    { title: "Physical Waste", desc: "Menus ruined by spills and wear & tear every month.", icon: TrashIcon },
    { title: "Design Fees", desc: "Paying designers for every minor menu adjustment.", icon: ScissorsIcon },
    { title: "Bulk Printing", desc: "High costs of professional printing runs.", icon: DocumentDuplicateIcon },
    { title: "Lost Revenue", desc: "Missing out on upselling and dynamic pricing.", icon: ChartBarSquareIcon }
  ];

  return (
    <section id="problem" className="py-32 bg-white relative overflow-hidden">

      <div className="container mx-auto px-8 md:px-12 lg:px-20 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-4 tracking-tighter">The Cost of <span className="text-red-500">Analog</span></h2>
            <p className="text-brand-muted text-lg font-medium">Traditional paper menus aren't just dated—they are a significant financial drain on your business.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-red-50 px-6 py-4 rounded-2xl border border-red-100 flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20">
              <XMarkIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-red-600 font-semibold text-lg leading-tight">Net Loss</p>
              <p className="text-red-400 text-xs font-semibold uppercase tracking-widest">Calculated Annually</p>
            </div>
          </motion.div>
        </div>

        {/* Cost Breakdown Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {losses.map((loss, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-red-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors duration-500">
                <loss.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-brand-dark font-semibold text-lg mb-2">{loss.title}</h3>
              <p className="text-brand-muted text-sm font-medium leading-relaxed">{loss.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Solution Transition */}
        {/* The Solution Transition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#010F1D] rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 blur-[150px] rounded-full -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold uppercase tracking-widest mb-6">
                  The Future is Here
                </span>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                  The Menuvo <br />
                  <span className="text-brand-green">Effect</span>
                </h3>
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                  We transform recurring losses into high-efficiency growth with a platform that pays for itself in weeks, not months.
                </p>

                <button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-green/20">
                  Experience the Difference
                </button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto relative">
              {[
                { title: "Instant Updates", desc: "Live menu changes in seconds", icon: BoltIcon },
                { title: "Zero Printing", desc: "Save lakhs on annual printing", icon: SparklesIcon },
                { title: "Cloud Control", desc: "Manage from anywhere", icon: ChartBarSquareIcon },
                { title: "Data Insights", desc: "Know exactly what sells", icon: UserGroupIcon }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ y: -5, borderColor: 'rgba(25, 111, 1, 0.4)' }}
                  className="bg-[#010F1D] border border-white/30 p-6 rounded-3xl flex flex-col items-start space-y-4 group transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <item.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg leading-tight">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-medium mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSolution;
