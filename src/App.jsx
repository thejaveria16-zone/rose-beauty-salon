import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';

// Lazy-load pages for better performance
const Home         = lazy(() => import('./pages/Home'));
const About        = lazy(() => import('./pages/About'));
const Services     = lazy(() => import('./pages/Services'));
const Gallery      = lazy(() => import('./pages/Gallery'));
const Pricing      = lazy(() => import('./pages/Pricing'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact      = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-gradient-rose animate-pulse" />
        <p className="font-serif italic text-graphite/60">A moment, please…</p>
      </div>
    </div>
  );
}

export default function App() {
  useScrollToTop();
  const location = useLocation();

  return (
    <div className="app-enter">
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/"             element={<Home />} />
              <Route path="/about"        element={<About />} />
              <Route path="/services"     element={<Services />} />
              <Route path="/gallery"      element={<Gallery />} />
              <Route path="/pricing"      element={<Pricing />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact"      element={<Contact />} />
              <Route path="*"             element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="eyebrow mb-5">— A page astray</p>
        <h1 className="font-display text-hero leading-none mb-6">404</h1>
        <p className="font-serif italic text-2xl text-graphite/70 mb-10">
          This path has not yet been laid.
        </p>
        <a href="/" className="btn-primary">
          <span>Return home</span>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" />
          </svg>
        </a>
      </div>
    </section>
  );
}
