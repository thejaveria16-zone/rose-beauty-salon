/**
 * Bespoke iconography for service categories.
 * Hairline strokes to match the editorial aesthetic.
 */
export default function ServiceIcon({ name, className = 'w-10 h-10' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (name) {
    case 'scissors':
      return (
        <svg viewBox="0 0 40 40" className={className} {...common}>
          <circle cx="10" cy="12" r="4" />
          <circle cx="10" cy="28" r="4" />
          <path d="M14 14L34 30M14 26L34 10" />
        </svg>
      );
    case 'brush':
      return (
        <svg viewBox="0 0 40 40" className={className} {...common}>
          <path d="M8 32L18 22" />
          <path d="M16 24C16 24 22 18 26 14C30 10 34 8 32 14C30 20 24 24 18 22Z" />
          <path d="M6 34C6 34 7 30 10 30C13 30 14 33 14 33" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 40 40" className={className} {...common}>
          <path d="M20 6C10 12 8 22 12 32C22 32 30 24 32 14C32 14 24 16 20 22C16 28 20 6 20 6Z" />
          <path d="M14 30L20 22" />
        </svg>
      );
    case 'flower':
      return (
        <svg viewBox="0 0 40 40" className={className} {...common}>
          <circle cx="20" cy="20" r="4" />
          <circle cx="20" cy="10" r="5" />
          <circle cx="20" cy="30" r="5" />
          <circle cx="10" cy="20" r="5" />
          <circle cx="30" cy="20" r="5" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg viewBox="0 0 40 40" className={className} {...common}>
          <path d="M20 4L22 18L36 20L22 22L20 36L18 22L4 20L18 18Z" />
          <path d="M8 8L10 12L14 14L10 16L8 20L6 16L2 14L6 12Z" opacity="0.6" />
        </svg>
      );
    case 'crown':
      return (
        <svg viewBox="0 0 40 40" className={className} {...common}>
          <path d="M6 28L8 14L14 22L20 10L26 22L32 14L34 28H6Z" />
          <path d="M6 32H34" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="32" cy="12" r="1.5" />
          <circle cx="20" cy="6" r="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
