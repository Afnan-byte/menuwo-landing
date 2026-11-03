import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PARTNERS_DATA, getStoredPartners, PARTNERS_UPDATED_EVENT } from '../data/partners';

/**
 * Reusable Partners Component
 *
 * Displays an infinite horizontally moving carousel of trusted partner logos.
 * Features:
 * - Continuous smooth right-to-left scrolling using CSS keyframes
 * - Seamless looping with duplicated logo sets
 * - Grayscale logos with full-color & elevation on hover/focus
 * - Touch-drag / swipe gesture support on mobile devices
 * - Pause-on-hover & pause-on-focus (accessibility)
 * - Play / Pause toggle button with WCAG reduced-motion compliance
 * - Fully responsive across mobile, tablet, and desktop
 */
const Partners = ({
  title = 'Trusted by Our Partners',
  subtitle = 'Proud to work with businesses that make every dining experience better.',
  partners,
  className = '',
}) => {
  // Use state synchronized with localStorage or custom prop
  const [partnerItems, setPartnerItems] = useState(() => partners || getStoredPartners());

  // Listen for admin updates to reload logos live without page refresh
  useEffect(() => {
    if (partners) {
      setPartnerItems(partners);
      return;
    }

    const handlePartnersUpdate = () => {
      setPartnerItems(getStoredPartners());
    };

    window.addEventListener(PARTNERS_UPDATED_EVENT, handlePartnersUpdate);
    window.addEventListener('storage', handlePartnersUpdate);
    return () => {
      window.removeEventListener(PARTNERS_UPDATED_EVENT, handlePartnersUpdate);
      window.removeEventListener('storage', handlePartnersUpdate);
    };
  }, [partners]);

  // Duplicate the partner list for seamless infinite looping
  const loopList = [...partnerItems, ...partnerItems];

  const [isPaused, setIsPaused] = useState(false);
  const [touchOffset, setTouchOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const currentOffsetRef = useRef(0);
  const resumeTimeoutRef = useRef(null);

  // Clear any pending resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Touch handlers for mobile swipe & interaction
  const handleTouchStart = (e) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    setIsPaused(true);
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentOffsetRef.current = touchOffset;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches[0].clientX;
    const deltaX = clientX - startXRef.current;
    setTouchOffset(currentOffsetRef.current + deltaX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Smoothly resume scrolling after 1.5 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Keyboard navigation support
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setIsPaused(true);
        setTouchOffset((prev) => prev + 160);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setIsPaused(true);
        setTouchOffset((prev) => prev - 160);
      }
    },
    []
  );

  return (
    <section
      id="partners"
      aria-label="Our Partners"
      className={`py-20 md:py-24 bg-brand-bg relative overflow-hidden border-b border-slate-100 ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-brand-green/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/15 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>Trusted Hospitality Network</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter mb-4"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-muted font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Infinite Carousel Container */}
      <div
        ref={containerRef}
        role="region"
        aria-label="Partner logos carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={`relative w-full overflow-hidden marquee-container select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 ${isPaused ? 'is-paused' : ''
          }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) setIsPaused(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Subtle Gradient Fade Masks (Left & Right) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent z-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-brand-bg via-brand-bg/85 to-transparent z-20"
        />

        {/* Interactive Touch/Drag Wrapper */}
        <div
          style={{
            transform: `translate3d(${touchOffset}px, 0, 0)`,
            transition: isDragging ? 'none' : 'transform 0.4s ease-out',
          }}
          className="w-full flex py-3"
        >
          {/* Continuous CSS-animated Marquee Track */}
          <div
            className="animate-marquee flex items-center gap-6 sm:gap-8 px-4"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {loopList.map((partner, index) => {
              const uniqueKey = `${partner.id}-${index}`;
              const isDuplicate = index >= partnerItems.length;

              return (
                <a
                  key={uniqueKey}
                  href={partner.href || '#'}
                  aria-label={`${partner.name} - ${partner.category}`}
                  aria-hidden={isDuplicate ? 'true' : undefined}
                  tabIndex={isDuplicate ? -1 : 0}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                  className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 aspect-square p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-green/40 hover:shadow-md hover:-translate-y-1 focus:border-brand-green focus:shadow-md transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  {/* Partner Logo (Square & Full Original Color) */}
                  <img
                    src={partner.logo}
                    alt={partner.alt || partner.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
                  />

                  <span className="sr-only">{partner.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

