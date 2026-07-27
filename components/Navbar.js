import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteInfo, navLinks } from '../data/siteData';

/* ─── Animation presets ──────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Track scroll position */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-xl shadow-soft py-3'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* ── Logo ──────────────────────────────────────────── */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          {/* Gold diamond mark */}
          <span className="relative flex items-center justify-center w-10 h-10 shrink-0">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-300 via-gold-500 to-amber-600 group-hover:scale-105 transition-transform duration-400" />
            <span className="relative text-xl text-charcoal-900 font-serif font-black leading-none drop-shadow-sm">O</span>
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal-900 uppercase hover:text-gold-500 transition-all duration-300">
            {siteInfo.name}
          </span>
        </a>

        {/* ── Desktop navigation ────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-sans text-[13px] font-medium tracking-wide text-charcoal-400
                         hover:text-charcoal-800 transition-colors duration-400 ease-luxury group"
            >
              {link.label}
              {/* Subtle gold underline on hover */}
              <span
                className="absolute -bottom-1 left-0 h-[1.5px] w-0
                           bg-gradient-to-r from-gold-500 to-gold-300/0
                           transition-all duration-400 ease-luxury group-hover:w-full"
              />
            </a>
          ))}

          {/* CTA */}
          <a href="#contact" className="btn-gold text-[12px] py-3 px-8 shadow-[0_4px_20px_rgba(182,157,86,0.35)] hover:shadow-[0_4px_24px_rgba(182,157,86,0.5)] hover:scale-105 transition-all duration-300">
            Book Now
          </a>
        </nav>

        {/* ── Mobile toggle ─────────────────────────────────── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Toggle navigation menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[1.5px] w-5 bg-charcoal-700 origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[1.5px] w-5 bg-charcoal-700"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[1.5px] w-5 bg-charcoal-700 origin-center"
          />
        </button>
      </div>

      {/* ── Mobile overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 top-0 bg-ivory/97 backdrop-blur-2xl z-40 flex flex-col"
          >
            {/* Close area — re-renders the top bar so user can close */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-2xl font-bold text-charcoal-900 uppercase">
                {siteInfo.name}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-beige-200" />

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-7 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease }}
                  className="font-serif text-2xl text-charcoal-700 hover:text-gold-600
                             transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 pb-10">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
