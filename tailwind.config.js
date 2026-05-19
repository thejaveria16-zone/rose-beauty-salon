/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary palette from coolors.co (user-provided)
        thistle:    '#CDB4DB', // soft mauve
        lavender:   '#FFC8DD', // pink lavender
        carnation:  '#FFAFCC', // carnation pink
        powder:     '#BDE0FE', // powder blue
        sky:        '#A2D2FF', // light sky blue
        // Luxury neutrals
        ivory:      '#FBF7F2',
        cream:      '#F4EBE0',
        champagne:  '#D6B98C',
        gold:       '#B8893D',
        ink:        '#1A1418', // near-black with warm undertone
        graphite:   '#2A2128',
        rose:       '#E8A4B8', // deeper rose for accents
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
        script:  ['"Pinyon Script"', 'cursive'],
      },
      fontSize: {
        'hero':   ['clamp(3.5rem, 11vw, 11rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'mega':   ['clamp(2.5rem, 7vw, 6rem)',   { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display':['clamp(2rem, 4.5vw, 4rem)',    { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        'widest-luxe': '0.32em',
      },
      boxShadow: {
        'soft':   '0 20px 60px -20px rgba(26, 20, 24, 0.18)',
        'glow':   '0 0 60px -10px rgba(255, 175, 204, 0.45)',
        'gold':   '0 0 60px -10px rgba(214, 185, 140, 0.55)',
        'luxe':   '0 30px 80px -30px rgba(26, 20, 24, 0.25), 0 8px 20px -8px rgba(26, 20, 24, 0.12)',
      },
      backgroundImage: {
        'gradient-luxe':  'linear-gradient(135deg, #FFC8DD 0%, #CDB4DB 50%, #A2D2FF 100%)',
        'gradient-rose':  'linear-gradient(135deg, #FFAFCC 0%, #FFC8DD 100%)',
        'gradient-gold':  'linear-gradient(135deg, #D6B98C 0%, #B8893D 100%)',
        'gradient-ink':   'linear-gradient(180deg, transparent 0%, rgba(26,20,24,0.85) 100%)',
        'gradient-radial':'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'float':       'float 7s ease-in-out infinite',
        'float-slow':  'float 11s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'marquee':     'marquee 40s linear infinite',
        'fade-up':     'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'spin-slow':   'spin 24s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-22px) rotate(2deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'luxe': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
