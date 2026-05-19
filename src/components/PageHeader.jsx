import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, subtitle, italicWord }) {
  // Split title to italicise a specific word if requested
  const renderTitle = () => {
    if (!italicWord || !title.includes(italicWord)) {
      return title;
    }
    const [before, after] = title.split(italicWord);
    return (
      <>
        {before}
        <em className="font-light italic text-gold-foil">{italicWord}</em>
        {after}
      </>
    );
  };

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Soft gradient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-luxe opacity-30 blur-3xl" />
      </div>

      <div className="container-luxe text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6"
          >
            — {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-hero text-balance leading-[0.9]"
        >
          {renderTitle()}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-2xl mx-auto text-graphite/70 text-lg leading-relaxed text-pretty"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-14 mx-auto w-px h-16 bg-gradient-to-b from-champagne via-champagne/40 to-transparent origin-top"
        />
      </div>
    </section>
  );
}
