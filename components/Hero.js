import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroContent, siteInfo } from '../data/siteData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Animation presets ──────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = (distance = 24) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
});

export default function Hero() {
  /* Parallax — the background image moves slower than scroll */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 0.25]);

  const introContainerRef = useRef(null);
  const afterImgRef = useRef(null);
  const homeSectionRef = useRef(null);
  const homeContentRef = useRef(null);

  useGSAP(() => {
    // Horizontal wipe from left to right
    // Initially the clip path is inset(0% 100% 0% 0%) - meaning it's 100% cropped from the right side.
    // It animates to inset(0% 0% 0% 0%), fully revealing the image from left to right.
    gsap.to(afterImgRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      scrollTrigger: {
        trigger: introContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
      }
    });

    // Home Section Pinned Timeline
    // Pins for 150vh of scrolling, so it stays visible for a while before moving to About.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeSectionRef.current,
        start: 'top top',
        end: '+=150%', // Pin duration
        scrub: 0.5,
        pin: true,
      }
    });

    // Fades in quickly in the first 30% of the scroll
    tl.fromTo(homeContentRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, ease: 'power2.out', duration: 0.3 }
    )
    // Stays visible and pinned for the remaining 70% of the scroll
    .to({}, { duration: 0.7 });

  }, []);

  return (
    <>
      {/* ── 1. Initial Scroll Transition Section ─────────────────────────────── */}
      <section ref={introContainerRef} className="relative h-[200vh] bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Before Image */}
          <img 
            src="/images/Gemini_Generated_Image_Before.png" 
            alt="Before Transformation" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* After Image (Horizontal Wipe from left to right) */}
          <img 
            ref={afterImgRef}
            src="/images/ChatGPT Image After.png" 
            alt="After Transformation" 
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
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

      {/* ── 2. Original Elegant Home Section (Pinned Scroll) ─────────────────────────────── */}
      <section
        id="hero-home"
        ref={homeSectionRef}
        className="relative h-screen w-full flex items-center pt-20 overflow-hidden bg-charcoal-900"
      >
        {/* ── Background image ─────────────────────────────── */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-clinic.png"
            alt="Oralea Dental Care clinic interior"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>

        {/* ── Fine grain texture (CSS-only) ────────────────── */}
        <div
          className="absolute inset-0 -z-[5] opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(26,25,23,1) 1px, transparent 1px)',
            backgroundSize: '3px 3px',
          }}
        />

        {/* ── Content ──────────────────────────────────────── */}
        <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12 flex justify-start z-10" ref={homeContentRef}>
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl p-8 md:p-14 lg:p-16 border border-white/40 shadow-[0_16px_48px_rgba(0,0,0,0.25)] rounded-3xl backdrop-blur-xl bg-ivory/25"
          >
            {/* Overline label */}
            <motion.div variants={fadeUp(16)} className="mb-6">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full
                               bg-white/60 backdrop-blur-sm border border-beige-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse-soft" />
                <span className="text-[11px] font-sans font-semibold tracking-label uppercase text-gold-700">
                  Now Accepting New Patients
                </span>
              </span>
            </motion.div>

            {/* Headline / Punchline */}
            <div className="relative">
              <motion.h1
                variants={fadeUp(30)}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight text-charcoal-900 leading-[1.04]"
              >
                {heroContent.headline.split('\n').map((line, i) => (
                  <span key={i} className="block pb-2">
                    {i === 1 ? (
                      <span className="font-script font-normal text-6xl sm:text-[6.5rem] md:text-[8.5rem] tracking-normal leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] py-2">
                        {line}
                      </span>
                    ) : (
                      <span className="text-charcoal-900">
                        {line}
                      </span>
                    )}
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(20)}
              className="mt-6 max-w-prose-wide text-base md:text-lg text-charcoal-500 font-light leading-relaxed"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp(16)}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a href="#contact" className="btn-primary">
                {heroContent.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4 12h16m0 0l-5-5m5 5l-5 5" />
                </svg>
              </a>
              <a href="#about" className="btn-outline">
                Our Story
              </a>
            </motion.div>

            {/* Micro-stats bar */}
            <motion.div
              variants={fadeUp(12)}
              className="mt-16 flex flex-wrap items-center gap-8 md:gap-12"
            >
              {[
                { value: '25+', label: 'Years' },
                { value: '15K', label: 'Patients' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl md:text-3xl font-bold text-charcoal-800">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-sans font-medium tracking-label uppercase text-charcoal-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
