import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import { gallery } from '../data/gallery';

const categories = ['All', 'Hair', 'Makeup', 'Skin', 'Spa', 'Nails', 'Editorial', 'Atelier', 'Bridal'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  const openAt = (i) => { setIndex(i); setOpen(true); };
  const next   = () => setIndex((p) => (p + 1) % items.length);
  const prev   = () => setIndex((p) => (p - 1 + items.length) % items.length);

  return (
    <PageTransition>
      <PageHeader
        eyebrow="The Rose portfolio"
        title="Quiet moments, captured"
        italicWord="captured"
        subtitle="A curation of work from our ateliers — bridal mornings, editorial sittings, signature rituals, and the architecture of the houses themselves."
      />

      {/* Filter */}
      <section className="pb-16">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2 text-[11px] uppercase tracking-widest-luxe transition-all duration-500 border ${
                    filter === c
                      ? 'bg-ink text-ivory border-ink'
                      : 'border-ink/15 text-graphite/70 hover:border-ink hover:text-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Masonry-ish grid using CSS columns for fluid heights */}
      <section className="pb-32">
        <div className="container-luxe">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
            >
              {items.map((g, i) => (
                <motion.figure
                  layout
                  key={g.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, delay: (i % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className={`luxe-frame group relative cursor-pointer overflow-hidden ${
                    g.span === 'tall' ? 'row-span-2' : ''
                  }`}
                  onClick={() => openAt(i)}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className={`w-full ${
                      g.span === 'tall' ? 'aspect-[3/4] md:aspect-[3/5]' : 'aspect-[4/5]'
                    } object-cover transition-transform duration-1000 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="eyebrow !text-champagne mb-1">{g.category}</p>
                    <p className="font-serif italic text-sm text-ivory">{g.alt}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </AnimatePresence>

          {items.length === 0 && (
            <Reveal className="text-center py-20">
              <p className="font-serif italic text-2xl text-graphite/60">
                No work to show in this chapter — yet.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <Lightbox
        open={open}
        items={items}
        index={index}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </PageTransition>
  );
}
