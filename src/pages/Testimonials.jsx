import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="The voices of our atelier"
        title="Words from those we tend to"
        italicWord="tend"
        subtitle="Beauty is private — and so the deepest compliments are usually whispered. We are grateful when our guests allow us to share them."
      />

      {/* Featured carousel */}
      <section className="py-16 lg:py-20">
        <div className="container-luxe">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Quote wall */}
      <section className="relative py-24 lg:py-32 bg-cream/40 overflow-hidden">
        <div aria-hidden className="absolute inset-0 grain pointer-events-none" />

        <div className="container-luxe relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-5">— A correspondence</p>
            <h2 className="font-display text-mega leading-[0.95] text-balance">
              Letters we keep <em className="italic font-light text-gold-foil">on the wall</em>.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="relative bg-ivory p-10 lg:p-12 shadow-soft hover:shadow-luxe transition-shadow duration-700 border border-ink/5 overflow-hidden group"
              >
                <div aria-hidden className="absolute top-6 right-8 font-display italic text-[6rem] leading-none text-champagne/30 select-none">
                  “
                </div>

                <blockquote className="relative">
                  <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-graphite text-balance">
                    {t.quote}
                  </p>
                  <footer className="mt-8 pt-6 border-t border-ink/10">
                    <p className="font-display text-xl text-ink">{t.name}</p>
                    <p className="eyebrow mt-1">
                      {t.role} · {t.city}
                    </p>
                  </footer>
                </blockquote>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Press strip */}
      <section className="py-24">
        <div className="container-luxe">
          <Reveal className="text-center mb-12">
            <p className="eyebrow">— As seen in</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {['Vogue', "Harper's Bazaar", 'The Gentlewoman', 'Architectural Digest', 'Cabana', 'Wallpaper*'].map((m, i) => (
                <span
                  key={m}
                  className="font-display italic text-3xl text-graphite/60 hover:text-ink transition-colors"
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
