/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        forest: {
          light: '#d1fae5',
          DEFAULT: '#16a34a',
          dark: '#14532d',
        },
        cream: '#fafdf7',
        earth: '#78716c',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(20,83,45,0.85) 0%, rgba(22,163,74,0.6) 100%)',
        'gradient-green': 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
        'gradient-light': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(22,163,74,0.10)',
        'card-hover': '0 8px 40px rgba(22,163,74,0.18)',
        'green': '0 4px 24px rgba(22,163,74,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
