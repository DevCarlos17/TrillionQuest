/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 15px 5px rgba(249, 212, 35, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 25px 10px rgba(249, 212, 35, 0.8)',
          },
          '100%': {
            boxShadow: '0 0 15px 5px rgba(249, 212, 35, 0.5)',
          },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        glow: 'glow 3s infinite',
        pulseScale: 'pulseScale 2s infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
};
