/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // custom background color
    extend: {
      colors: {
        primary: 'rgb(47, 89, 204)',
        secondary: 'rgb(81, 53, 147)',
      }
    },
  },
  plugins: [],
}

