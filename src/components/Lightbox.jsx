import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback } from 'react';

export default function Lightbox({ open, items, index, onClose, onPrev, onNext }) {
  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (!open) return;
    if (e.key === 'Escape')     onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft')  onPrev();
  }, [open, onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else      document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!items || items.length === 0) return null;
  const current = items[index];

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 inline-flex items-center justify-center border border-ivory/20 rounded-full text-ivory hover:bg-ivory hover:text-ink transition-colors z-10"
            aria-label="Close gallery"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-10 w-12 h-12 inline-flex items-center justify-center border border-ivory/20 rounded-full text-ivory hover:bg-ivory hover:text-ink transition-colors z-10"
            aria-label="Previous image"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          {/* Image */}
          <motion.figure
            key={current.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl max-h-[80vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[80vh] object-contain shadow-luxe"
            />
            <figcaption className="absolute -bottom-12 left-0 right-0 text-center text-ivory">
              <p className="eyebrow !text-champagne mb-1">{current.category}</p>
              <p className="font-serif italic text-sm">{current.alt}</p>
            </figcaption>
          </motion.figure>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-10 w-12 h-12 inline-flex items-center justify-center border border-ivory/20 rounded-full text-ivory hover:bg-ivory hover:text-ink transition-colors z-10"
            aria-label="Next image"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 text-xs tracking-widest-luxe uppercase">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
