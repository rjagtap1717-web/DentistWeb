import { motion, useScroll, useTransform } from 'framer-motion';
import { heroContent, siteInfo } from '../data/siteData';

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pt-32 md:pt-40 pb-22 md:pb-30 overflow-hidden"
    >
      {/* ── Background image ─────────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="/images/hero-clinic.png"
          alt="Aurelian Dental clinic interior"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Gradient overlays ────────────────────────────── */}
      {/* Bottom-up ivory fade so text is readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ivory via-ivory/80 to-transparent" />
      {/* Subtle warm top tint */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-900/15 via-transparent to-transparent" />
      {/* Scroll-driven darkening overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-charcoal-900"
      />

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
      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
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
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-500 to-amber-300 italic font-bold drop-shadow-sm">
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

      {/* ── Scroll indicator ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-3 hidden md:flex"
      >
        <span className="text-[10px] font-sans font-medium tracking-label uppercase text-charcoal-400 rotate-90 origin-center translate-y-3">
          Scroll
        </span>
        <motion.div
          animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-[1.5px] h-12 bg-charcoal-300 overflow-hidden mt-6"
        >
           <motion.div 
             className="absolute top-0 left-0 w-full bg-gold-500"
             animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
           />
        </motion.div>
      </motion.div>
    </section>
  );
}
