import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import ServiceIcon from '../components/ServiceIcon';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Rituals & services"
        title="Couture, by hand"
        italicWord="hand"
        subtitle="Six chapters of beauty, each performed in private suites by master artisans. Every service begins with consultation, a tea ritual, and the unhurried understanding of who you are today."
      />

      {/* Grid of all services */}
      <section className="pb-24">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process — how an appointment unfolds */}
      <Process />

      {/* Custom packaging CTA */}
      <CustomCTA />
    </PageTransition>
  );
}

/* ============================================================== */

function Process() {
  const steps = [
    {
      n: '01',
      title: 'Consultation',
      desc: 'Each visit opens with a private fifteen-minute consultation and a porcelain pot of tea selected to your preference.',
    },
    {
      n: '02',
      title: 'Preparation',
      desc: 'Robes, slippers, soft music chosen by you. We never rush this passage — the ritual begins before the service does.',
    },
    {
      n: '03',
      title: 'The Service',
      desc: 'Performed by a single master artisan. No interruptions, no rotations, no distractions. Only the gesture of beauty being made.',
    },
    {
      n: '04',
      title: 'After-care',
      desc: 'A personalised home regimen, hand-written by your artisan. We ask after you in the days that follow.',
    },
  ];

  return (
    <section className="relative py-32 lg:py-40 bg-cream/40 overflow-hidden">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-luxe opacity-20 blur-3xl rounded-full" />

      <div className="container-luxe relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow mb-5">— The unfolding</p>
          <h2 className="font-display text-mega leading-[0.95] text-balance">
            Four <em className="italic font-light text-gold-foil">movements</em> of an appointment.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-ivory p-10 lg:p-12 relative"
            >
              <span className="font-display text-7xl text-gold-foil leading-none">{s.n}</span>
              <h3 className="font-display text-2xl mt-6 mb-4">{s.title}</h3>
              <p className="text-graphite/70 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function CustomCTA() {
  return (
    <section className="relative py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="relative bg-ink text-ivory overflow-hidden rounded-[2px] p-12 lg:p-20 grid md:grid-cols-12 gap-10 items-center">
            <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-rose opacity-20 blur-3xl" />
            <div className="md:col-span-7 relative">
              <p className="eyebrow !text-champagne mb-5">— Bespoke services</p>
              <h2 className="font-display text-mega leading-[0.95] text-balance">
                Cannot find what you imagined? <br />
                <em className="italic font-light text-gold-foil">We compose to order.</em>
              </h2>
              <p className="mt-6 text-ivory/70 max-w-xl leading-relaxed">
                Birthday rituals, mother-daughter mornings, half-day editorial preparation,
                pre-event renewals — our concierge will design an appointment around your moment.
              </p>
            </div>
            <div className="md:col-span-5 relative flex md:justify-end">
              <Link to="/contact" className="btn-luxe bg-ivory text-ink hover:bg-carnation transition-colors">
                <span>Speak with concierge</span>
                <Arrow />
              </Link>
            </div>
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
