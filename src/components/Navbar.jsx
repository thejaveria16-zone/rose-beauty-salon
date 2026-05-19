import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/services',     label: 'Services' },
  { to: '/gallery',      label: 'Gallery' },
  { to: '/pricing',      label: 'Pricing' },
  { to: '/testimonials', label: 'Voices' },
  { to: '/contact',      label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-ivory/80 backdrop-blur-xl border-b border-ink/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container-luxe flex items-center justify-between">
          {/* Brand mark */}
          <Link to="/" className="group flex items-center gap-3" aria-label="Rose Beauty Salon home">
            <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-rose shadow-glow transition-transform duration-700 group-hover:rotate-180">
              <span className="font-serif italic text-ink text-lg">R</span>
            </span>
            <span className="font-display text-xl tracking-tight leading-none">
              <span className="block text-ink">Rose</span>
              <span className="block text-[10px] tracking-widest-luxe uppercase font-sans text-graphite/60 -mt-0.5">Beauty Salon</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `link-underline text-[11px] uppercase tracking-widest-luxe font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-graphite/70 hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + mobile button */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:inline-flex btn-primary !px-6 !py-3">
              <span>Reserve</span>
              <Arrow />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-11 h-11 inline-flex items-center justify-center border border-ink/20 rounded-full"
              aria-label="Open menu"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="block w-4 h-px bg-ink" />
                <span className="block w-4 h-px bg-ink" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-ivory shadow-luxe flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-ink/5">
                <span className="font-display text-2xl">Rose</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 inline-flex items-center justify-center border border-ink/20 rounded-full"
                  aria-label="Close menu"
                >
                  <span className="block w-4 h-px bg-ink rotate-45 absolute" />
                  <span className="block w-4 h-px bg-ink -rotate-45 absolute" />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `block py-4 border-b border-ink/5 font-display text-3xl transition-colors ${
                          isActive ? 'text-ink' : 'text-graphite hover:text-ink'
                        }`
                      }
                    >
                      <span className="section-num mr-3">{String(i + 1).padStart(2, '0')}</span>
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6">
                <Link to="/contact" className="btn-primary w-full">
                  <span>Reserve a visit</span>
                  <Arrow />
                </Link>
                <p className="mt-6 text-xs text-graphite/60">
                  +1 (212) 555 · 0188<br />
                  hello@rosebeauty.salon
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}
