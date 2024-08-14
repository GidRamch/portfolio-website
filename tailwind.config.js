/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'white-smoke': '#F5F5F5',
        'eerie-black': '#222222',
        'savoy-blue': '#4C62AE',
        'tea-green': '#D9FFD2',
        'antique-white': '#FFEAD2',
        'anti-flash-white': '#EEEEEE',
      },
    },

  },
  plugins: [],
}
