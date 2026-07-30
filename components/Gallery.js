import { motion } from 'framer-motion';
import { galleryImages } from '../data/siteData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
            Gallery
          </h2>
          <span className="gold-rule" />
        </motion.div>

        {/* Gallery Carousel */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <Swiper
            effect={'fade'}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, EffectFade]}
            className="w-full rounded-3xl overflow-hidden shadow-soft"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={img.label}>
                <div className="group relative w-full aspect-video bg-charcoal-900">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                  {/* Minimal Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent flex items-end p-6 md:p-10 pointer-events-none">
                    <div>
                      <span className="text-[10px] font-sans font-semibold tracking-label uppercase text-gold-300 block mb-1">
                        Environment
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-white font-medium drop-shadow-md">
                        {img.label}
                      </h3>
                      <p className="text-sm md:text-base text-ivory/90 font-light mt-2 max-w-lg drop-shadow-md">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
