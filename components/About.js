import { motion } from 'framer-motion';
import { aboutContent } from '../data/siteData';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory relative overflow-hidden">
      {/* Background subtle radial warm glow */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column — Editorial Image Composition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg bg-beige-100 border border-beige-200/60">
              <img
                src="/images/about-clinic.png"
                alt="Oralea Dental Care studio treatment suite"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle top/bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass-card p-6 md:p-7 shadow-soft-xl max-w-[220px]"
            >
              <p className="font-serif text-4xl font-bold text-gold-gradient">25+</p>
              <p className="text-xs font-sans font-semibold text-charcoal-700 tracking-label uppercase mt-1">
                Years of Excellence
              </p>
              <p className="text-[12px] text-charcoal-400 font-light mt-1.5 leading-snug">
                Pioneering bespoke cosmetic & restorative care.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column — Content */}
          <div>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label mb-3"
            >
              {aboutContent.sectionLabel}
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight whitespace-pre-line"
            >
              {aboutContent.headline}
            </motion.h2>

            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="gold-rule-left"
            />

            <div className="space-y-4 mt-6">
              {aboutContent.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3 + i}
                  variants={fadeUp}
                  className="text-charcoal-500 font-light leading-relaxed text-base md:text-lg max-w-prose"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-beige-200/80"
            >
              {aboutContent.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  className="space-y-1"
                >
                  <p className="font-serif text-2xl md:text-3xl font-bold text-charcoal-800">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-sans font-medium text-charcoal-400 tracking-label uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
