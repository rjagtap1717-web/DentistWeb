import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/siteData';

const ease = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-padding bg-charcoal-900 text-ivory relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-bronze-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-sans font-semibold tracking-label uppercase text-gold-400 mb-3">
            Patient Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Reflections on Excellence
          </h2>
          <span className="gold-rule" />
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease }}
              className="text-center px-4 md:px-12"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory/90 leading-relaxed font-light italic max-w-3xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="mt-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-gold-500/30 flex items-center justify-center mb-3">
                  <span className="font-serif text-sm font-semibold text-gold-400">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <p className="font-sans font-semibold text-white text-base tracking-wide">
                  {t.name}
                </p>
                <p className="text-xs text-gold-400/80 font-light tracking-wider mt-0.5 uppercase">
                  {t.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-charcoal-700 hover:border-gold-500/50 flex items-center justify-center text-charcoal-300 hover:text-gold-400 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === active
                      ? 'w-6 bg-gold-400'
                      : 'w-1.5 bg-charcoal-700 hover:bg-charcoal-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-charcoal-700 hover:border-gold-500/50 flex items-center justify-center text-charcoal-300 hover:text-gold-400 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
