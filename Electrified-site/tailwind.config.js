/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'green': '#6ac38e',
          'blue': '#3e99d3',
          'green-light': '#8dd4a8',
          'green-dark': '#4fa876',
          'blue-light': '#5eaee0',
          'blue-dark': '#2d7db8',
        },
      },
    },
  },
  plugins: [],
}
