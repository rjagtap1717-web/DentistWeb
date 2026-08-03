import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '../data/siteData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const introContainerRef = useRef(null);
  const afterImgRef = useRef(null);
  const cardRef = useRef(null);
  const scrollPromptRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
      }
    });

    // 1st scroll: Horizontal wipe from left to right
    tl.to(afterImgRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      duration: 1
    })
    // Hide the scroll prompt as the card appears
    .to(scrollPromptRef.current, {
      opacity: 0,
      duration: 0.2
    }, "-=0.2")
    // 2nd scroll: Fade in and slide up the card on the right
    .fromTo(cardRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 }
    )
    // Add some empty space at the end so it stays visible before unpinning/scrolling past
    .to({}, { duration: 0.5 });
  }, []);

  return (
    <section ref={introContainerRef} className="relative h-[300vh] bg-[#0a0a0a]">
      <div className="sticky top-[64px] md:top-[72px] h-[75vh] md:h-[calc(100vh-72px)] w-full overflow-hidden">
        {/* Before Image */}
        <img 
          src="/images/b4smile.png" 
          alt="Before Transformation" 
          className="absolute inset-0 w-full h-full object-cover object-[25%_35%] md:object-[20%_center] lg:object-[15%_center]"
        />
        {/* After Image (Horizontal Wipe from left to right) */}
        <img 
          ref={afterImgRef}
          src="/images/aftersmile.png" 
          alt="After Transformation" 
          className="absolute inset-0 w-full h-full object-cover object-[25%_35%] md:object-[20%_center] lg:object-[15%_center]"
          style={{ clipPath: 'inset(0% 100% 0% 0%)' }}
        />
        
        {/* Card Overlay - Aligned to bottom on mobile, right on desktop */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-end pb-32 md:pb-0 md:items-center justify-center md:justify-end z-20 pointer-events-none">
          <div 
            ref={cardRef} 
            className="max-w-xl p-6 sm:p-8 md:p-10 border border-white/40 shadow-[0_16px_48px_rgba(0,0,0,0.25)] rounded-3xl backdrop-blur-xl bg-ivory/40 pointer-events-auto opacity-0 translate-y-[50px] mr-0 lg:-mr-12 xl:-mr-16"
          >
            {/* Overline label */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full
                               bg-white/70 backdrop-blur-sm border border-beige-200/60 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse-soft" />
                <span className="text-[11px] font-sans font-semibold tracking-label uppercase text-gold-700">
                  Now Accepting New Patients
                </span>
              </span>
            </div>

            {/* Headline / Punchline */}
            <div className="relative">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-charcoal-900 leading-[1.04]">
                {heroContent.headline.split('\n').map((line, i) => (
                  <span key={i} className="block pb-1 sm:pb-2">
                    {i === 1 ? (
                      <span className="font-script font-normal text-[3.25rem] sm:text-5xl md:text-7xl tracking-normal leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] py-1 sm:py-2">
                        {line}
                      </span>
                    ) : (
                      <span className="text-charcoal-900">
                        {line}
                      </span>
                    )}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 max-w-prose text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed drop-shadow-sm">
              {heroContent.subheadline}
            </p>

            {/* CTA row */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <a href="#contact" className="btn-primary">
                {heroContent.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4 12h16m0 0l-5-5m5 5l-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Prompt */}
        <div ref={scrollPromptRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
          <span className="text-[10px] font-sans font-semibold tracking-label uppercase text-white drop-shadow-md">
            Scroll to reveal
          </span>
          <div className="w-[1.5px] h-12 bg-white/20 relative overflow-hidden rounded-full">
             <motion.div 
               className="absolute top-0 left-0 w-full bg-white"
               animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
