/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'dark-violet': 'hsl(255, 11%, 22%)',
        'violet':'hsl(257, 27%, 26%)',
        'dark':'rgba(35,32,39,255)',
      },
    },
  },
  plugins: [],
}
