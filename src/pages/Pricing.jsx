import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { pricingTiers, aLaCarte } from '../data/pricing';

export default function Pricing() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Investment"
        title="Considered pricing"
        italicWord="Considered"
        subtitle="Three curated experiences, plus an à la carte selection. All prices include the consultation, the tea ritual, your private suite, and a hand-written aftercare card."
      />

      <Tiers />
      <ALaCarte />
      <Notes />
    </PageTransition>
  );
}

/* ============================================================== */

function Tiers() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden p-10 lg:p-12 transition-all duration-700 ${
                t.featured
                  ? 'bg-ink text-ivory shadow-luxe lg:-mt-6 lg:mb-6'
                  : 'bg-ivory border border-ink/10 hover:shadow-luxe'
              }`}
            >
              {t.featured && (
                <div aria-hidden className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-rose opacity-30 blur-3xl" />
              )}

              <div className="relative">
                {t.featured && (
                  <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-widest-luxe bg-champagne text-ink">
                    Most beloved
                  </span>
                )}

                <p className={`eyebrow mb-3 ${t.featured ? '!text-champagne' : ''}`}>{t.tagline}</p>
                <h3 className="font-display text-5xl mb-6">{t.name}</h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`font-display text-7xl ${t.featured ? 'text-gold-foil' : 'text-ink'}`}>${t.price}</span>
                </div>
                <p className={`text-sm uppercase tracking-widest-luxe ${t.featured ? 'text-ivory/60' : 'text-graphite/60'}`}>
                  {t.duration}
                </p>

                <div className={`my-8 h-px ${t.featured ? 'bg-ivory/15' : 'bg-ink/10'}`} />

                <ul className="space-y-3 mb-10">
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className={`mt-2 w-1 h-1 rounded-full ${t.featured ? 'bg-champagne' : 'bg-ink'}`} />
                      <span className={t.featured ? 'text-ivory/80' : 'text-graphite/80'}>{inc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn-luxe w-full ${
                    t.featured
                      ? 'bg-ivory text-ink hover:bg-carnation'
                      : 'bg-ink text-ivory'
                  } transition-colors`}
                >
                  <span>Reserve {t.name}</span>
                  <Arrow />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function ALaCarte() {
  return (
    <section className="relative py-32 bg-cream/40">
      <div className="container-luxe">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-5">— À la carte</p>
          <h2 className="font-display text-mega leading-[0.95] text-balance">
            Choose your own <em className="italic font-light text-gold-foil">composition</em>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {aLaCarte.map((cat, ci) => (
            <Reveal key={cat.category} delay={ci * 0.08}>
              <h3 className="font-display text-3xl mb-6 pb-4 border-b border-ink/15">
                {cat.category}
              </h3>
              <ul>
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-4 py-4 border-b border-ink/5 hover:bg-ivory/60 transition-colors"
                  >
                    <span className="font-serif text-lg text-ink">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-ink/20 translate-y-[-4px]" aria-hidden />
                    <span className="font-display text-xl text-gold-foil">${item.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function Notes() {
  return (
    <section className="py-24">
      <div className="container-luxe">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="divider-ornament">
              <span className="text-champagne">✦</span>
            </div>
            <p className="font-serif italic text-xl text-graphite/70 leading-relaxed text-balance">
              Members of La Maison receive a private concierge, priority booking, and a complimentary
              Discover ritual on their birthday month. Inquire at the front desk.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}
