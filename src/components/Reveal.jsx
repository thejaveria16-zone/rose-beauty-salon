import { motion } from 'framer-motion';

/**
 * Fade-and-rise reveal triggered when the element enters the viewport.
 * Used throughout for scroll-driven storytelling.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.9,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
