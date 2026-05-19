import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative p-10 lg:p-12 bg-ivory border border-ink/5 overflow-hidden transition-shadow duration-700 hover:shadow-luxe"
    >
      {/* Hover gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-luxe opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
      />

      {/* Soft glow ring */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-carnation/0 group-hover:bg-carnation/40 blur-3xl transition-all duration-700"
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-10">
          <span className="section-num">{service.number}</span>
          <div className="text-graphite/60 group-hover:text-ink transition-colors duration-500">
            <ServiceIcon name={service.icon} />
          </div>
        </div>

        <h3 className="font-display text-4xl lg:text-5xl leading-tight mb-3 text-balance">
          {service.title}
        </h3>
        <p className="font-serif italic text-graphite/60 mb-6">{service.tagline}</p>

        <p className="text-graphite/75 leading-relaxed mb-8 text-sm">
          {service.description}
        </p>

        <ul className="space-y-2 mb-8">
          {service.rituals.map((r) => (
            <li key={r} className="flex items-center gap-3 text-sm text-graphite/80">
              <span className="w-1 h-1 rounded-full bg-champagne" />
              {r}
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-ink/10 flex items-center justify-between text-xs uppercase tracking-widest-luxe">
          <span className="text-graphite/60">{service.duration}</span>
          <span className="link-underline text-ink">Reserve →</span>
        </div>
      </div>
    </motion.article>
  );
}
