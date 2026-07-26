/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      /* ── Colour palette ─────────────────────────────────── */
      colors: {
        /* Warm neutrals */
        ivory:  '#FDFBF7',
        cream:  '#F9F5EE',
        beige: {
          50:  '#FAF8F4',
          100: '#F4F0E8',
          200: '#EBE5D9',
          300: '#DDD4C3',
          400: '#C9BBAA',
          500: '#B5A48E',
          600: '#9E8C74',
          700: '#847358',
          800: '#6B5C46',
          900: '#574A38',
        },
        /* Muted, dusty gold — elegant, not flashy */
        gold: {
          50:  '#FBF8F0',
          100: '#F5EDDA',
          200: '#ECDCB8',
          300: '#DFC98F',
          400: '#CDB46C',
          500: '#B69D56',
          600: '#9C8545',
          700: '#7F6C38',
          800: '#685830',
          900: '#564929',
        },
        /* Muted bronze accent */
        bronze: {
          50:  '#F9F5F1',
          100: '#F0E7DD',
          200: '#E0CCBA',
          300: '#CCAD90',
          400: '#B8916D',
          500: '#A07A56',
          600: '#886548',
          700: '#6F513B',
          800: '#5B4232',
          900: '#4B372B',
        },
        /* Warm charcoal (slight brown undertone) */
        charcoal: {
          50:  '#F7F6F5',
          100: '#EDECEB',
          200: '#D8D6D3',
          300: '#B5B1AC',
          400: '#8A8580',
          500: '#6B665F',
          600: '#524E48',
          700: '#3E3B37',
          800: '#2C2A27',
          900: '#1A1917',
        },
      },

      /* ── Typography ─────────────────────────────────────── */
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        /* Display sizes for hero / section headlines */
        'display-lg': ['4.5rem',  { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display':    ['3.5rem',  { lineHeight: '1.10', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        label: '0.18em',   /* section labels / overlines */
      },

      /* ── Spacing & sizing ───────────────────────────────── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'prose-wide': '72ch',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      /* ── Box-shadows (soft, warm) ───────────────────────── */
      boxShadow: {
        'soft':      '0 1px 3px rgba(26,25,23,0.04), 0 4px 12px rgba(26,25,23,0.03)',
        'soft-md':   '0 2px 6px rgba(26,25,23,0.05), 0 8px 24px rgba(26,25,23,0.04)',
        'soft-lg':   '0 4px 12px rgba(26,25,23,0.05), 0 16px 40px rgba(26,25,23,0.06)',
        'soft-xl':   '0 8px 20px rgba(26,25,23,0.06), 0 24px 56px rgba(26,25,23,0.07)',
        'inner-soft':'inset 0 1px 4px rgba(26,25,23,0.04)',
        'gold-glow': '0 0 0 1px rgba(182,157,86,0.12), 0 4px 16px rgba(182,157,86,0.08)',
      },

      /* ── Animations (subtle) ────────────────────────────── */
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(182,157,86,0.06)' },
          '50%':      { boxShadow: '0 0 16px 4px rgba(182,157,86,0.10)' },
        },
      },

      /* ── Transitions ────────────────────────────────────── */
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
