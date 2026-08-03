import React, { useRef } from 'react';
import { siteInfo } from '../data/siteData';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Splash() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
      }
    });

    // Animate logo scaling up and fading out
    tl.to(logoRef.current, {
      scale: 5,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut'
    }, 0);

    // Animate particles exploding outward
    particlesRef.current.forEach((particle, i) => {
      if (!particle) return;
      const angle = (Math.PI * 2 * i) / particlesRef.current.length + (Math.random() * 0.5);
      const distance = 400 + Math.random() * 600;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      // Starting from center, bursting out
      tl.fromTo(particle, 
        { x: 0, y: 0, opacity: 0, scale: 0, rotation: 0 },
        {
          x: x,
          y: y,
          rotation: Math.random() * 720 - 360,
          opacity: Math.random() > 0.5 ? 0 : 0.8, // some fade out completely, some stay partially
          scale: Math.random() * 1.5 + 0.5,
          duration: 1,
          ease: 'power3.out'
        }, 
      0);
    });

    // Hide scroll prompt immediately when starting scroll
    tl.to('.scroll-prompt', {
      opacity: 0,
      duration: 0.2
    }, 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      
      {/* Particle Container (centered) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <img
            key={i}
            ref={el => particlesRef.current[i] = el}
            src="/images/3d-tooth-bright.png"
            alt=""
            className="absolute w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-0 mix-blend-lighten"
          />
        ))}
      </div>

      <div ref={logoRef} className="flex flex-col items-center justify-center gap-6 z-10">
        {/* Gold diamond mark */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 shrink-0"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-300 via-gold-500 to-amber-600 shadow-2xl hover:scale-105 transition-transform duration-500" />
          <span className="relative text-5xl sm:text-7xl text-ivory font-serif font-black leading-none drop-shadow-md">O</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ivory text-center"
        >
          {siteInfo.name}
        </motion.h1>
      </div>

      {/* Scroll Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="scroll-prompt absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-ivory/60 drop-shadow-sm">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-12 bg-ivory/20 relative overflow-hidden rounded-full">
           <motion.div 
             className="absolute top-0 left-0 w-full bg-gold-500"
             animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
           />
        </div>
      </motion.div>
    </section>
  );
}
