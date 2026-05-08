import React from 'react';
import { SwatchIcon, CubeTransparentIcon, QrCodeIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      title: "Design Consultation",
      desc: "Our design team creates a bespoke digital interface tailored to your restaurant's unique branding.",
      icon: SwatchIcon
    },
    {
      title: "Hardware Production",
      desc: "We manufacture premium QR stands using high-grade acrylic or wood, shipped directly to your venue.",
      icon: CubeTransparentIcon
    },
    {
      title: "Immediate Deployment",
      desc: "Place the stands on your tables. Guests scan instantly—no application downloads required.",
      icon: QrCodeIcon
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Seamless Integration</h2>
          <p className="text-gray-500 font-medium leading-relaxed">Three simple steps to digitize your dining experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gray-100 z-0"></div>

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative z-10 flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="w-20 h-20 bg-brand-navy rounded-2xl border border-white/10 shadow-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-500">
                <step.icon className="w-8 h-8 text-white group-hover:text-white" />
              </div>
              
              <h4 className="text-xl font-semibold text-brand-dark mb-3">{step.title}</h4>
              <p className="text-brand-muted font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
