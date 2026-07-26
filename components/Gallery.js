import { motion } from 'framer-motion';
import { galleryImages } from '../data/siteData';

const ease = [0.22, 1, 0.36, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease },
  }),
};

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label mb-3">Sanctuary of Wellness</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900">
            Inside Aurelian Studio
          </h2>
          <span className="gold-rule" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
              className={`group relative rounded-3xl overflow-hidden border border-beige-200/80 shadow-soft ${
                i === 0 || i === 3 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image Placeholder with Editorial Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${img.gradient} transition-transform duration-700 ease-luxury group-hover:scale-105`}
              >
                {/* Subtle pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(26,25,23,0.8) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
              </div>

              {/* Minimal Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-[10px] font-sans font-semibold tracking-label uppercase text-gold-300 block mb-1">
                    Environment
                  </span>
                  <h3 className="font-serif text-xl text-white font-medium">
                    {img.label}
                  </h3>
                  <p className="text-xs text-ivory/80 font-light mt-1">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
