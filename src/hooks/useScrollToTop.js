import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smoothly resets scroll on route change. Mounted at the App root.
 */
export default function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
}
