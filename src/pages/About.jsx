import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="The story behind the atelier"
        title="A house built on stillness"
        italicWord="stillness"
        subtitle="Rose Beauty Salon was founded on a simple conviction — that beauty practiced slowly is beauty practiced well. Below, the story of how that conviction became a house."
      />

      <Story />
      <Mission />
      <Founder />
      <Values />
      <Pillars />

      <section className="py-32 text-center">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— The invitation</p>
            <h2 className="font-display text-display max-w-3xl mx-auto text-balance leading-tight mb-10">
              Come find us. Bring nothing but <em className="italic font-light text-gold-foil">time</em>.
            </h2>
            <Link to="/contact" className="btn-primary">
              <span>Reserve a visit</span>
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

/* ============================================================== */

function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '12%']);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 relative">
            <motion.div style={{ y }} className="luxe-frame relative aspect-[4/5] shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85"
                alt="The Rose atelier — soft daylight on rituals"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -top-6 -right-6 glass p-5 rounded-[2px] hidden md:block">
              <p className="font-display italic text-2xl">Est.</p>
              <p className="font-display text-4xl text-gold-foil">2009</p>
            </div>
          </div>

          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5">— Chapter one</p>
            <h2 className="font-display text-display leading-[1] text-balance mb-8">
              It began with a <em className="italic font-light text-gold-foil">single chair</em>.
            </h2>
            <div className="space-y-5 text-lg text-graphite/80 leading-relaxed">
              <p>
                In 2009, our founder Camille Rosier opened a one-chair studio above a bookshop on
                Rue de Sèvres. There was a velvet bench, a pot of jasmine tea, and a conviction that
                beauty was being rushed.
              </p>
              <p>
                Word travelled the way it always does — quietly, through the women who knew. By 2014
                we had crossed an ocean. By 2019 we had three ateliers and the same single conviction.
              </p>
              <p className="font-serif italic text-graphite">
                We have grown. We have not hurried.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function Mission() {
  return (
    <section className="relative py-32 bg-cream/40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
      <div className="container-luxe relative">
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">— Our north</p>
          <h2 className="font-display text-mega leading-[1] text-balance">
            We are an atelier, not a salon. <br />
            <em className="italic font-light text-gold-foil">A house of slow craft</em>.
          </h2>
          <div className="divider-ornament">
            <span className="text-champagne">✦</span>
          </div>
          <p className="text-lg text-graphite/75 leading-relaxed max-w-2xl mx-auto">
            Our mission is to return beauty to its native pace. To train artisans for years before they
            ever touch a client. To select formulations the way couturiers select cloth. To create
            ninety minutes that feel like a quiet act of restoration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================== */

function Founder() {
  return (
    <section className="relative py-32">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-5">— Founder · Creative Director</p>
            <h2 className="font-display text-mega leading-[0.95] text-balance mb-8">
              Camille <em className="italic font-light text-gold-foil">Rosier</em>.
            </h2>
            <div className="space-y-5 text-lg text-graphite/80 leading-relaxed">
              <p>
                Trained in Paris and Tokyo, Camille spent a decade backstage at the houses of
                Chanel, Givenchy and Sonia Rykiel before opening her first studio. Her work has
                been published in <em>Vogue</em>, <em>Harper's Bazaar</em>, and <em>The Gentlewoman</em>.
              </p>
              <p>
                She is rarely behind a single chair these days. But she is always at the
                house — consulting on every formulation, every protocol, every gesture.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-champagne">
              <p className="font-display italic text-2xl text-balance leading-snug">
                "Hurried beauty is not beauty. It is performance. Real beauty insists on time."
              </p>
              <cite className="not-italic block mt-4 eyebrow text-graphite/60">— Camille Rosier</cite>
            </blockquote>
          </Reveal>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="luxe-frame relative aspect-[3/4] shadow-luxe"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                alt="Founder portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-ink opacity-20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function Values() {
  const values = [
    { n: '01', title: 'Slowness',      desc: 'We refuse the cult of speed. Every ritual unfolds at the pace beauty actually requires.' },
    { n: '02', title: 'Privacy',       desc: 'Each appointment is held in a private suite. You are not displayed. You are tended to.' },
    { n: '03', title: 'Mastery',       desc: 'Our artisans complete a three-year apprenticeship before they perform a single service.' },
    { n: '04', title: 'Provenance',    desc: 'Our formulations come from named ateliers in Grasse, Kyoto and Florence. Always.' },
  ];

  return (
    <section className="relative py-32 bg-ink text-ivory overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-thistle/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="container-luxe relative">
        <Reveal className="max-w-3xl mb-20">
          <p className="eyebrow !text-champagne mb-5">— The four convictions</p>
          <h2 className="font-display text-mega leading-[0.95] text-balance">
            What we will not <em className="italic font-light text-gold-foil">compromise</em>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-ivory/10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="bg-ink p-10 lg:p-14"
            >
              <span className="section-num !text-champagne/70">{v.n}</span>
              <h3 className="font-display text-4xl mt-4 mb-5">{v.title}</h3>
              <p className="text-ivory/70 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */

function Pillars() {
  return (
    <section className="relative py-32">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">— Where we are</p>
            <h3 className="font-display text-display mb-6">Three private ateliers.</h3>
            <ul className="space-y-5 text-graphite/80">
              {[
                { city: 'Paris',    addr: '12 Rue de Sèvres, 7ème' },
                { city: 'New York', addr: '48 Madison Avenue, NY' },
                { city: 'Tokyo',    addr: '4-2-1 Aoyama, Minato' },
              ].map((c) => (
                <li key={c.city} className="flex items-baseline gap-6 pb-5 border-b border-ink/10">
                  <span className="font-display text-3xl text-ink">{c.city}</span>
                  <span className="text-sm text-graphite/60">{c.addr}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow mb-5">— Recognition</p>
            <h3 className="font-display text-display mb-6">Featured in.</h3>
            <div className="grid grid-cols-2 gap-6">
              {['Vogue', "Harper's Bazaar", 'The Gentlewoman', 'Architectural Digest', 'Cabana', 'Wallpaper*'].map((m) => (
                <div key={m} className="aspect-[3/2] flex items-center justify-center border border-ink/10 font-display italic text-2xl text-graphite/70 hover:text-ink hover:border-ink/40 transition-colors">
                  {m}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
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
