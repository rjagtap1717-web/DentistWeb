import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/siteData';

const ease = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const scrollContainerRef = useRef(null);

  // Multiply items to guarantee continuous right-to-left looping
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-charcoal-900 text-ivory relative overflow-hidden py-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-bronze-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] font-sans font-semibold tracking-widest uppercase text-gold-400 mb-3 px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full">
            Patient Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Reflections on Excellence
          </h2>
          <p className="mt-4 text-charcoal-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Read authentic experiences shared by our valued patients. Stories automatically move right to left — place your cursor over any testimonial to stop the movement and read.
          </p>
          <span className="gold-rule" />

          {/* Interactive Live Status Indicator */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800/80 border border-charcoal-700/60 text-xs text-charcoal-300 shadow-inner">
            {isPaused ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
                </span>
                <span className="text-gold-400 font-medium tracking-wide">
                  ⏸ Paused for Reading — Move cursor away to resume
                </span>
              </>
            ) : (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide">
                  Auto-Scrolling Right to Left — Hover to Pause
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Continuous Right-to-Left Moving Track Container */}
        <div
          className="relative w-full overflow-hidden fade-edges py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle gradient side vignettes */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-charcoal-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-charcoal-900 to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            <div
              className="animate-marquee-track flex gap-6"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {duplicatedTestimonials.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  onClick={() => setSelectedStory(item)}
                  className="w-[340px] sm:w-[420px] shrink-0 bg-charcoal-800/60 hover:bg-charcoal-800/90 border border-gold-500/15 hover:border-gold-500/40 rounded-3xl p-7 sm:p-8 backdrop-blur-md transition-all duration-400 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Stars + Quote Mark */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-1">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-serif text-3xl font-bold text-gold-500/20 group-hover:text-gold-400/40 transition-colors">
                        &ldquo;
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="font-serif text-base sm:text-lg text-ivory/90 leading-relaxed font-light italic mb-6 group-hover:text-white transition-colors">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Footer Info */}
                  <div className="pt-6 border-t border-charcoal-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/20 to-charcoal-900 border border-gold-500/40 flex items-center justify-center text-gold-400 font-serif font-semibold text-sm shadow-inner shrink-0">
                        {item.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-sans font-medium text-white text-sm tracking-wide">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-gold-400/80 uppercase tracking-wider mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Treatment Pill */}
                    {item.treatment && (
                      <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-charcoal-900/80 text-gold-300 border border-gold-500/20">
                        {item.treatment}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Manual Controls */}
        <div className="flex items-center justify-between mt-10 max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal-700 bg-charcoal-800/80 text-xs font-medium text-charcoal-300 hover:text-gold-400 hover:border-gold-500/40 transition-all"
            >
              {isPaused ? (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Resume Motion
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                  Pause Motion
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-charcoal-700 bg-charcoal-800/80 hover:border-gold-500/50 flex items-center justify-center text-charcoal-300 hover:text-gold-400 transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={handleScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-charcoal-700 bg-charcoal-800/80 hover:border-gold-500/50 flex items-center justify-center text-charcoal-300 hover:text-gold-400 transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Story Detail Modal when clicking any card */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease }}
              className="bg-charcoal-900 border border-gold-500/30 rounded-3xl p-8 max-w-xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-5 right-5 text-charcoal-400 hover:text-gold-400 p-2 text-xl"
              >
                ✕
              </button>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: selectedStory.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-ivory font-light italic leading-relaxed mb-6">
                &ldquo;{selectedStory.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-charcoal-800">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-serif font-bold text-base">
                  {selectedStory.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-base">
                    {selectedStory.name}
                  </h4>
                  <p className="text-xs text-gold-400 uppercase tracking-wider">
                    {selectedStory.role} {selectedStory.location ? `· ${selectedStory.location}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

