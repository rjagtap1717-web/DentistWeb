import { motion } from 'framer-motion';
import { services } from '../data/siteData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

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

        {/* Services Carousel */}
        <div className="w-full pb-8">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              prevEl: '.services-prev',
              nextEl: '.services-next',
            }}
            modules={[EffectCoverflow, Navigation]}
            className="w-full py-10 !px-4"
          >
            {services.map((service, i) => (
              <SwiperSlide key={service.title} className="!w-[85vw] !max-w-[340px] sm:!w-[340px]">
                <div
                  className="group glass-card overflow-hidden hover:bg-amber-50/50 hover:border-amber-200 transition-all duration-500 flex flex-col h-[420px] w-full"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-beige-200 relative overflow-hidden shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    {/* Minimal Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:bg-orange-100 group-hover:border-orange-200 transition-colors duration-500">
                      <span className="text-lg text-orange-600 font-sans">{service.icon}</span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-2 group-hover:text-amber-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-charcoal-500 font-light leading-relaxed group-hover:text-charcoal-700 transition-colors duration-300 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation */}
            <div slot="container-end" className="flex items-center gap-3 justify-center mt-8">
              <button
                aria-label="Scroll left"
                className="services-prev w-10 h-10 rounded-full border border-beige-300 bg-white/80 hover:bg-white hover:border-gold-400 flex items-center justify-center text-charcoal-600 hover:text-gold-500 transition-all shadow-sm hover:shadow-md active:scale-95 z-10 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                aria-label="Scroll right"
                className="services-next w-10 h-10 rounded-full border border-beige-300 bg-white/80 hover:bg-white hover:border-gold-400 flex items-center justify-center text-charcoal-600 hover:text-gold-500 transition-all shadow-sm hover:shadow-md active:scale-95 z-10 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
