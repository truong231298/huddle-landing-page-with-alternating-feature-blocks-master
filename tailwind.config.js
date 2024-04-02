/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Pink': 'hsl(322, 100%, 66%)',
        // bg
        'VeryPaleCyan': 'hsl(193, 100%, 96%)',
        //h1
        'VeryDarkCyan': 'hsl(192, 100%, 9%)',
        //p
        'GrayishBlue': 'hsl(208, 11%, 55%)'
      }
    },
    backgroundImage:{
      "bg-desktop": "url('/images/bg-hero-desktop.svg')",
      "bg-mobile": "url('/images/bg-hero-mobile.svg')",
    }
  },
  plugins: [],
}