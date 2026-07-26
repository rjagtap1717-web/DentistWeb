import { motion } from 'framer-motion';
import { contactContent, siteInfo } from '../data/siteData';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-cream/30 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-100/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column — Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="section-label mb-3">
              {contactContent.sectionLabel}
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight"
            >
              {contactContent.headline}
            </motion.h2>

            <motion.span custom={2} variants={fadeUp} className="gold-rule-left" />

            <motion.p
              custom={3}
              variants={fadeUp}
              className="mt-6 text-charcoal-500 font-light text-base md:text-lg leading-relaxed max-w-md"
            >
              {contactContent.description}
            </motion.p>

            {/* Info Items List */}
            <motion.div custom={4} variants={fadeUp} className="mt-10 space-y-6">
              {[
                {
                  label: 'Location',
                  text: siteInfo.address,
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  ),
                },
                {
                  label: 'Telephone',
                  text: siteInfo.phone,
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.29-5.11-3.574-6.4-6.4l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  ),
                },
                {
                  label: 'Inquiries',
                  text: siteInfo.email,
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  ),
                },
                {
                  label: 'Hours',
                  text: siteInfo.hours,
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200/50 flex items-center justify-center flex-shrink-0 text-gold-700 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold tracking-label uppercase text-charcoal-400 block">
                      {item.label}
                    </span>
                    <p className="text-sm text-charcoal-700 font-medium mt-0.5">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-card p-8 sm:p-10 space-y-5"
            >
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-2">
                Request an Appointment
              </h3>
              <p className="text-xs text-charcoal-500 font-light mb-6">
                Please complete the details below and our patient concierge will reach out to confirm your visit.
              </p>

              {contactContent.formFields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-[11px] font-sans font-semibold tracking-label uppercase text-charcoal-600 mb-2"
                  >
                    {field.label}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      className="input-base resize-none"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      defaultValue=""
                      className="input-base appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="input-base"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="btn-primary w-full justify-center mt-4"
              >
                Submit Consultation Request
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>

              <p className="text-[11px] text-center text-charcoal-400 font-light mt-4">
                We prioritize your privacy. All information submitted is strictly confidential under HIPAA guidelines.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
