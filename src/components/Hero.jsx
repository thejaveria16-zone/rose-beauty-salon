import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// Headline word-by-word stagger
const headlineWords = ['Where', 'Beauty', 'Becomes', 'Art'];

const wordVariants = {
  hidden: { opacity: 0, y: 60, rotate: 4 },
  show:  (i) => ({
    opacity: 1, y: 0, rotate: 0,
    transition: { duration: 1.1, delay: 0.5 + i * 0.13, ease: [0.22, 1, 0.36, 1] }
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yImg   = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yText  = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale  = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity= useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Atmospheric gradient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-ivory" />
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] rounded-full bg-gradient-luxe opacity-50 blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-carnation/40 blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Grain overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 grain" />

      {/* Floating ornamental shapes */}
      <FloatingOrnament
        className="absolute top-1/4 left-[8%] w-24 h-24 hidden md:block"
        delay={1.2}
      >
        <div className="w-full h-full rounded-full bg-gradient-rose opacity-70 blur-sm animate-float" />
      </FloatingOrnament>
      <FloatingOrnament
        className="absolute bottom-[18%] right-[6%] w-32 h-32 hidden md:block"
        delay={1.5}
      >
        <div className="w-full h-full rounded-full border border-champagne/40 animate-spin-slow" />
      </FloatingOrnament>
      <FloatingOrnament
        className="absolute top-1/3 right-[12%] w-3 h-3 hidden md:block"
        delay={1.8}
      >
        <div className="w-full h-full bg-champagne rounded-full animate-float-slow" />
      </FloatingOrnament>

      <div className="container-luxe relative w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div style={{ y: yText, opacity }} className="lg:col-span-7 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="eyebrow flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-champagne" />
              An Atelier of Beauty · Est. 2009
            </motion.p>

            <h1 className="font-display text-hero leading-[0.88] text-balance">
              {headlineWords.map((word, i) => (
                <span key={word} className="inline-block overflow-hidden align-bottom pr-3">
                  <motion.span
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                    className={`inline-block ${
                      word === 'Becomes' ? 'font-light italic text-gold-foil' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.6 }}
              className="mt-10 max-w-md text-graphite/70 text-lg leading-relaxed"
            >
              A private atelier where master artisans craft hair, makeup, skin
              and spa rituals — slowly, deliberately, beautifully.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.85 }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link to="/contact" className="btn-primary">
                <span>Book an appointment</span>
                <Arrow />
              </Link>
              <Link to="/services" className="btn-ghost">
                <span>Explore services</span>
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="mt-16 flex items-center gap-8 text-xs uppercase tracking-widest-luxe text-graphite/50"
            >
              <span>15 years</span>
              <span className="w-px h-3 bg-ink/20" />
              <span>3 ateliers worldwide</span>
              <span className="w-px h-3 bg-ink/20 hidden sm:block" />
              <span className="hidden sm:inline">Featured · Vogue · Harper's</span>
            </motion.div>
          </motion.div>

          {/* Cinematic image stack */}
          <motion.div style={{ y: yImg, scale }} className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="luxe-frame absolute inset-0 rounded-[2px] shadow-luxe"
              >
                <img
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=85"
                  alt="Editorial beauty portrait — soft pink lighting"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-ink opacity-30" />
              </motion.div>

              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="luxe-frame absolute -bottom-10 -left-10 w-40 aspect-[3/4] rounded-[2px] shadow-luxe hidden md:block animate-float"
              >
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80"
                  alt="Spa ritual close-up"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Decorative caption card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute -bottom-6 -right-6 md:-right-12 glass px-6 py-5 rounded-[2px] max-w-[200px]"
              >
                <p className="eyebrow !text-champagne mb-2">Featured Ritual</p>
                <p className="font-display text-xl leading-tight">Rose Quartz Facial</p>
                <p className="text-xs text-graphite/70 mt-2">A signature 75-minute renewal</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-widest-luxe text-graphite/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-ink/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingOrnament({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay }}
      className={className}
      aria-hidden
    >
      {children}
    </motion.div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}
