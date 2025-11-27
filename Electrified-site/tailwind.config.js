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
          // Complete gradient sequence for smooth transitions
          'gradient-1': '#6ac38e',  // Start: Green
          'gradient-2': '#63c299',  // Green-Teal
          'gradient-3': '#59c1a6',  // Teal
          'gradient-4': '#38c0bb',  // Teal-Cyan
          'gradient-5': '#21bfd9',  // Cyan
          'gradient-6': '#13b6e3',  // Cyan-Blue
          'gradient-7': '#26abe2',  // Blue-Cyan
          'gradient-8': '#35a0d9',  // Blue
          'gradient-9': '#379dd7',  // End: Blue
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #6ac38e, #63c299, #59c1a6, #38c0bb, #21bfd9, #13b6e3, #26abe2, #35a0d9, #379dd7)',
        'brand-gradient-vertical': 'linear-gradient(to bottom, #6ac38e, #63c299, #59c1a6, #38c0bb, #21bfd9, #13b6e3, #26abe2, #35a0d9, #379dd7)',
        'brand-gradient-diagonal': 'linear-gradient(135deg, #6ac38e, #63c299, #59c1a6, #38c0bb, #21bfd9, #13b6e3, #26abe2, #35a0d9, #379dd7)',
      },
    },
  },
  plugins: [],
}
