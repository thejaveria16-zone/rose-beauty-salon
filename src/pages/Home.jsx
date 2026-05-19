import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import Marquee from '../components/Marquee';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { services } from '../data/services';
import { gallery } from '../data/gallery';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <PhilosophySection />
      <ServicesPreview />
      <EditorialMarquee />
      <SignatureExperience />
      <GalleryPreview />
      <TestimonialsSection />
      <FinalCTA />
    </PageTransition>
  );
}

/* ============================================================== */

function PhilosophySection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">— A philosophy of slow beauty</p>
            <h2 className="font-display text-mega leading-[0.95] text-balance">
              Beauty unfolds at the speed of <em className="font-light italic text-gold-foil">attention</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-graphite/75 leading-relaxed mb-6">
              Rose is not a place to rush. It is a place to be considered.
              Every appointment is private, every formulation is chosen with intention,
              every gesture is rehearsed until it becomes craft.
            </p>
            <p className="text-lg text-graphite/75 leading-relaxed">
              Our artisans train for years — in Paris, Kyoto, Milan — before they
              touch a single client. We do not believe in quick service. We believe in beauty
              that emerges from quiet hands.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-24 grid sm:grid-cols-3 gap-px bg-ink/10">
          {[
            { n: '15', label: 'Years of practice' },
            { n: '32', label: 'Master artisans' },
            { n: '04', label: 'Continents served' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-ivory p-10 lg:p-14 text-center"
            >
              <div className="font-display text-7xl lg:text-8xl text-gold-foil">{s.n}</div>
              <div className="eyebrow mt-4">{s.label}</div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================== */

function ServicesPreview() {
  const featured = services.slice(0, 4);
  return (
    <section className="relative py-32 lg:py-40 bg-cream/40 overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-rose opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 rounded-full" />

      <div className="container-luxe relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="eyebrow mb-5">— Our rituals</p>
            <h2 className="font-display text-mega leading-[0.95] text-balance max-w-2xl">
              Couture services, <em className="font-light italic text-gold-foil">crafted by hand</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/services" className="btn-ghost">
              <span>View all services</span>
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function EditorialMarquee() {
  return (
    <div className="border-y border-ink/10 bg-ivory py-2">
      <Marquee items={['Hair Couture', 'Makeup Artistry', 'Skin Rituals', 'Spa & Wellness', 'Nail Atelier', 'Bridal Concierge']} />
    </div>
  );
}

/* ============================================================== */

function SignatureExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image with parallax */}
          <div className="lg:col-span-6 lg:order-2 relative">
            <motion.div style={{ y }} className="luxe-frame relative aspect-[4/5] shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80"

                alt="Rose petals and luxury serums"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-[2px] max-w-[240px] hidden md:block">
              <p className="eyebrow !text-champagne mb-2">Signature</p>
              <p className="font-display text-2xl leading-tight">75 minutes of stillness</p>
            </div>
          </div>

          {/* Text */}
          <Reveal className="lg:col-span-6 lg:order-1">
            <p className="eyebrow mb-6">— The signature experience</p>
            <h2 className="font-display text-mega leading-[0.95] text-balance mb-8">
              The Rose <em className="font-light italic text-gold-foil">Quartz Ritual</em>.
            </h2>
            <p className="text-lg text-graphite/75 leading-relaxed mb-6">
              A 75-minute facial designed in our atelier and performed in private suites.
              Cool quartz, warm hands, French serums. You enter as you are. You leave luminous.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Personalised skin diagnostic',
                'Sculpting facial massage with rose quartz',
                'Cryo lift & lymphatic drainage',
                'French botanical mask & finishing serums',
              ].map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="font-serif italic text-champagne text-xl mt-0.5">·{String(i+1).padStart(2,'0')}</span>
                  <span className="text-graphite leading-relaxed">{step}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/services" className="btn-primary">
              <span>Discover the ritual</span>
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function GalleryPreview() {
  const items = gallery.slice(0, 6);
  return (
    <section className="relative py-32 lg:py-40 bg-ink text-ivory overflow-hidden">
      <div aria-hidden className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-thistle/10 blur-3xl rounded-full -translate-x-1/3" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-carnation/10 blur-3xl rounded-full translate-x-1/3" />

      <div className="container-luxe relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="eyebrow !text-champagne mb-5">— A look inside</p>
            <h2 className="font-display text-mega leading-[0.95] text-balance max-w-2xl">
              The <em className="font-light italic text-gold-foil">Rose</em> portfolio.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/gallery" className="btn-luxe border border-ivory/30 hover:bg-ivory hover:text-ink transition-colors">
              <span>Explore gallery</span>
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {items.map((g, i) => (
            <motion.figure
              key={g.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`luxe-frame group relative overflow-hidden ${i === 0 ? 'md:row-span-2 md:col-span-1' : ''}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className={`w-full ${i === 0 ? 'h-full md:aspect-[3/4]' : 'aspect-square md:aspect-[4/5]'} object-cover transition-transform duration-1000 group-hover:scale-110`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="eyebrow !text-champagne">{g.category}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function TestimonialsSection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-luxe opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="container-luxe">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow mb-5">— Voices from our atelier</p>
          <h2 className="font-display text-mega leading-[0.95] text-balance">
            Words from <em className="font-light italic text-gold-foil">our clients</em>.
          </h2>
        </Reveal>

        <TestimonialCarousel />
      </div>
    </section>
  );
}

/* ============================================================== */

function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container-luxe">
        <Reveal>
          <div className="relative bg-gradient-luxe overflow-hidden rounded-[2px] p-12 lg:p-24 text-center">
            <div aria-hidden className="absolute inset-0 grain" />
            <p className="eyebrow !text-ink/70 mb-6 relative">— The next chapter</p>
            <h2 className="relative font-display text-mega leading-[0.95] text-balance max-w-3xl mx-auto text-ink">
              Beauty waits for those who arrive <em className="italic font-light">with intention</em>.
            </h2>
            <Link to="/contact" className="relative inline-flex btn-primary mt-12 !bg-ink hover:!text-ink">
              <span>Reserve your hour</span>
              <Arrow />
            </Link>
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
