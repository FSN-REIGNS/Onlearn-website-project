/** @type {import('tailwindcss').Config} */
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/ui/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/styles/**/*.{js,vue,ts,css,scss,sass}', // Include all files in the "assets" folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

