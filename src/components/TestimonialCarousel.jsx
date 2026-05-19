import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel({ auto = true, interval = 7000 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), interval);
    return () => clearInterval(id);
  }, [auto, interval]);

  const t = testimonials[i];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Decorative quotation mark */}
      <div aria-hidden className="absolute -top-16 left-1/2 -translate-x-1/2 font-display italic text-[10rem] leading-none text-champagne/30 select-none">
        “
      </div>

      <div className="relative min-h-[260px] md:min-h-[220px] text-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="px-4"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-balance leading-snug text-ink">
              <em className="italic font-light">{t.quote}</em>
            </p>

            <footer className="mt-10">
              <div className="divider-ornament !my-6">
                <span className="text-champagne text-xs">✦</span>
              </div>
              <cite className="not-italic block">
                <p className="font-serif text-lg">{t.name}</p>
                <p className="text-xs uppercase tracking-widest-luxe text-graphite/60 mt-1">
                  {t.role} · {t.city}
                </p>
              </cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((tt, idx) => (
          <button
            key={tt.id}
            onClick={() => setI(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-px transition-all duration-500 ${
              idx === i ? 'w-12 bg-ink' : 'w-6 bg-ink/20 hover:bg-ink/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
