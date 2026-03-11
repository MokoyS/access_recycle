/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#7ec49a',
          DEFAULT: '#5fac7d',
          dark: '#4a8b64',
          yellow: '#C9973D',
        },
        forest: {
          DEFAULT: '#0D2B1F',
          mid: '#1A3D2B',
          light: '#2C5640',
        },
        ivory: {
          DEFAULT: '#F5F2EC',
          warm: '#FAFAF7',
          dark: '#EDE8DF',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
}
