/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'cairo' : ['Cairo', 'sans-serif'],
        'dosis' : ['Dosis', 'sans-serif'],
        'grotesque' : ['Dark Grotesque', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}