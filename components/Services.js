import { motion } from 'framer-motion';
import { services } from '../data/siteData';

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease },
  }),
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream/50 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gold-100/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="section-label mb-3">Our Clinical Expertise</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900">
            Tailored Dental Services
          </h2>
          <span className="gold-rule" />
          <p className="mt-5 text-charcoal-500 font-light text-base md:text-lg">
            From subtle refinements to comprehensive rehabilitations, every procedure is executed with meticulous clinical precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.4, ease } }}
              className="group glass-card p-8 md:p-9 hover:border-gold-300/40 hover:shadow-soft-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Minimal Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center mb-6 group-hover:bg-gold-100 transition-colors duration-500">
                  <span className="text-xl text-gold-700 font-serif">{service.icon}</span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-3 group-hover:text-charcoal-900 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-charcoal-500 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Link Indicator */}
              <div className="mt-8 pt-6 border-t border-beige-200/50 flex items-center justify-between text-xs font-sans font-semibold tracking-label uppercase text-charcoal-400 group-hover:text-gold-700 transition-colors duration-500">
                <span>Inquire</span>
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
