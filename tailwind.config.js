/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown-color': '#A0705B',
      },
      keyframes: {
        float1: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(15px,-15px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        float2: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-5px,-5px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        float1: 'float1 4s ease-in-out infinite',
        float2: 'float2 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
});
