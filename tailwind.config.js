/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '90': '21rem',
      },
      margin: {
        '110': '33rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
