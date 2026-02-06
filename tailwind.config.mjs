/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DB5200',
          50: '#FFF3EB',
          100: '#FFE4D1',
          200: '#FFC6A3',
          300: '#FFA06B',
          400: '#FF7A33',
          500: '#DB5200',
          600: '#B84500',
          700: '#953800',
          800: '#722B00',
          900: '#4F1E00',
          hover: '#FF6B1A',
          dark: '#B84500',
          glow: 'rgba(219, 82, 0, 0.3)',
        },
        gold: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        dark: {
          DEFAULT: '#0C1117',
          900: '#0C1117',
          800: '#141C27',
          700: '#1E2836',
          600: '#283548',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['clamp(3rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1-mobile': ['clamp(2rem, 6vw, 2.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2-desktop': ['clamp(2.25rem, 4vw, 3rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2-mobile': ['clamp(1.75rem, 5vw, 2rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3-desktop': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25', fontWeight: '600' }],
        'h3-mobile': ['clamp(1.25rem, 4vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      letterSpacing: {
        cta: '0.05em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(219, 82, 0, 0.2)',
        'glow-gold': '0 0 40px rgba(245, 158, 11, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'blob-pulse': 'blobPulse 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(219, 82, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(219, 82, 0, 0.6)' },
        },
        blobPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.15' },
          '50%': { transform: 'scale(1.2)', opacity: '0.25' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
