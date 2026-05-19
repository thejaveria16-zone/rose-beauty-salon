import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const services = ['Hair Couture', 'Makeup Artistry', 'Skin & Facial', 'Spa & Wellness', 'Nail Atelier', 'Bridal Concierge'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0],
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to your booking endpoint here.
    // For this build we simulate success.
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Reserve · Inquire · Visit"
        title="Begin your ritual"
        italicWord="ritual"
        subtitle="Tell us about the moment you are designing — bridal, anniversary, restoration, debut, or simply Tuesday. Our concierge will respond within one working day."
      />

      <section className="pb-32">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      onSubmit={handleSubmit}
                      className="space-y-10"
                      noValidate
                    >
                      <p className="eyebrow">— Booking inquiry</p>

                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                        <Field
                          label="Your name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                        <Field
                          label="Email address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                        <Field
                          label="Telephone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                        />
                        <Field
                          label="Preferred date"
                          name="date"
                          type="date"
                          value={form.date}
                          onChange={handleChange}
                        />
                      </div>

                      <Select
                        label="Service of interest"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        options={services}
                      />

                      <Field
                        label="The moment you are designing"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        as="textarea"
                        rows={4}
                        placeholder="Tell us a little about what you have in mind."
                      />

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-primary"
                        >
                          <span>Send inquiry</span>
                          <Arrow />
                        </motion.button>
                        <p className="text-xs text-graphite/60 max-w-xs">
                          Submitting this form is not a confirmed booking — our concierge will
                          respond personally to finalise your appointment.
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center py-16 lg:py-20 px-8 border border-ink/10 bg-cream/40"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-rose mb-8">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M5 14L11 20L23 8" stroke="#1A1418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="font-display text-4xl lg:text-5xl mb-5 text-balance">
                        Your letter is in our <em className="italic font-light text-gold-foil">hands</em>.
                      </h3>
                      <p className="text-graphite/70 max-w-md mx-auto leading-relaxed">
                        Our concierge will respond within one working day. In the meantime,
                        breathe slowly — the ritual has already begun.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service: services[0], date:'', message:'' }); }}
                        className="link-underline mt-10 eyebrow text-ink inline-block"
                      >
                        Send another inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            </div>

            {/* Visit info */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal delay={0.15}>
                <h3 className="font-display text-3xl mb-6">Visit us</h3>
                <address className="not-italic space-y-4 text-graphite/80 leading-relaxed">
                  <div>
                    <p className="eyebrow mb-1">Atelier · New York</p>
                    <p>48 Madison Avenue, NY 10016</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Hours</p>
                    <p>Tuesday — Saturday, 10:00 — 20:00</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Correspondence</p>
                    <a href="mailto:hello@rosebeauty.salon" className="link-underline block">hello@rosebeauty.salon</a>
                    <a href="tel:+12125550188" className="link-underline block">+1 (212) 555 · 0188</a>
                  </div>
                </address>
              </Reveal>

              {/* Minimal stylized "map" — pure CSS, no external dependency */}
              <Reveal delay={0.25}>
                <div className="relative aspect-[4/5] overflow-hidden bg-cream border border-ink/10">
                  <StylizedMap />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-transparent via-transparent to-ivory/90">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ink text-ivory mb-4">
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                        <path d="M7 17C7 17 13 11 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 11 7 17 7 17Z" stroke="currentColor" strokeWidth="1" />
                        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </span>
                    <p className="font-display text-2xl">Madison · Manhattan</p>
                    <p className="text-xs eyebrow mt-2">40.7505° N · 73.9824° W</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

/* ============================================================== */

function Field({ label, name, type = 'text', value, onChange, required, as = 'input', rows = 3, placeholder }) {
  const Component = as;
  return (
    <label className="block group">
      <span className="block eyebrow mb-3 transition-colors group-focus-within:text-ink">
        {label}{required && <span className="text-rose ml-1">·</span>}
      </span>
      <Component
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === 'textarea' ? rows : undefined}
        placeholder={placeholder}
        className="block w-full bg-transparent border-0 border-b border-ink/20 focus:border-ink py-2 px-0 font-sans text-base text-ink placeholder:text-graphite/40 focus:outline-none focus:ring-0 transition-colors resize-none"
      />
    </label>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <label className="block group">
      <span className="block eyebrow mb-3 transition-colors group-focus-within:text-ink">{label}</span>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full appearance-none bg-transparent border-0 border-b border-ink/20 focus:border-ink py-2 pr-8 pl-0 font-sans text-base text-ink focus:outline-none focus:ring-0 transition-colors cursor-pointer"
        >
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </label>
  );
}

function StylizedMap() {
  // Decorative SVG abstract street grid — feels editorial, not generic Google Maps
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full text-graphite/30">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#grid)" />
      {/* Wider avenues */}
      <line x1="0" y1="160" x2="400" y2="160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="320" x2="400" y2="320" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="0" x2="140" y2="500" stroke="currentColor" strokeWidth="1.5" />
      <line x1="280" y1="0" x2="280" y2="500" stroke="currentColor" strokeWidth="1.5" />
      {/* "Park" */}
      <rect x="160" y="60" width="100" height="80" fill="currentColor" opacity="0.08" />
      <text x="210" y="105" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill="currentColor" opacity="0.5">park</text>
      {/* Marker pulse */}
      <circle cx="200" cy="240" r="20" fill="#FFAFCC" opacity="0.3">
        <animate attributeName="r" values="14;26;14" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="240" r="6" fill="#1A1418" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}
