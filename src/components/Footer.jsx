import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory pt-24 pb-10 overflow-hidden">
      {/* Floating gradient orbs */}
      <div aria-hidden className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-rose opacity-20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-sky/20 blur-3xl" />

      <div className="container-luxe relative">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="eyebrow !text-champagne/80 mb-6">— Begin your ritual</p>
          <h2 className="font-display text-display text-balance leading-[1.05]">
            Reserve a private hour at the <em className="font-light italic text-gold-foil">Rose atelier</em>.
          </h2>
          <Link to="/contact" className="btn-luxe mt-10 bg-ivory text-ink hover:bg-carnation transition-colors">
            <span>Book your appointment</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
            </svg>
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px bg-ivory/10" />

        {/* Columns */}
        <div className="grid md:grid-cols-12 gap-12 text-sm">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-rose">
                <span className="font-serif italic text-ink text-lg">R</span>
              </span>
              <span className="font-display text-2xl">Rose Beauty Salon</span>
            </div>
            <p className="text-ivory/60 leading-relaxed max-w-md">
              An atelier devoted to the slow craft of beauty. Established by master artisans, designed for those who believe beauty is best experienced in stillness.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow !text-champagne/80 mb-5">Atelier</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="link-underline text-ivory/80 hover:text-ivory">About</Link></li>
              <li><Link to="/services" className="link-underline text-ivory/80 hover:text-ivory">Services</Link></li>
              <li><Link to="/gallery" className="link-underline text-ivory/80 hover:text-ivory">Gallery</Link></li>
              <li><Link to="/pricing" className="link-underline text-ivory/80 hover:text-ivory">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow !text-champagne/80 mb-5">Visit</h4>
            <address className="not-italic text-ivory/80 space-y-2 leading-relaxed">
              48 Madison Avenue<br />
              New York, NY 10016
            </address>
            <p className="mt-4 text-ivory/60 text-xs leading-relaxed">
              Tuesday — Saturday<br />
              10:00 — 20:00
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow !text-champagne/80 mb-5">Correspondence</h4>
            <a href="mailto:hello@rosebeauty.salon" className="link-underline block text-ivory/80 hover:text-ivory">
              hello@rosebeauty.salon
            </a>
            <a href="tel:+12125550188" className="link-underline block mt-2 text-ivory/80 hover:text-ivory">
              +1 (212) 555 · 0188
            </a>
            <div className="flex gap-3 mt-6">
              {['IG', 'PIN', 'TT'].map((s) => (
                <a key={s} href="#" aria-label={s}
                  className="w-10 h-10 rounded-full border border-ivory/15 inline-flex items-center justify-center text-[10px] tracking-widest hover:bg-ivory hover:text-ink transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Rose Beauty Salon · Crafted with intention.</p>
          <div className="flex gap-6">
            <a href="#" className="link-underline hover:text-ivory/70">Privacy</a>
            <a href="#" className="link-underline hover:text-ivory/70">Terms</a>
            <a href="#" className="link-underline hover:text-ivory/70">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
