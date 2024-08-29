/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'light-text': '#98989a',
        'dark-bg': '#141414',
        'banner-bg': '#1e1e1e',
        'color-border': '#262626',
        'button-bg': '#1a1a1a',
        'description-text': '#666666'
      }
    }
  },
  plugins: []
};
