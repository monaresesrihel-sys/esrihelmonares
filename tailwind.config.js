/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#F2F5F4',
        ink: '#10272B',
        deep: '#0E4B4F',
        sun: '#F4B63F',
        mist: '#DCE7E5',
        night: '#0B1A1D',
        nightcard: '#122B30',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { rise: 'rise 0.35s ease-out' },
    },
  },
  plugins: [],
}
