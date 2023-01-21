/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        "accent-color": "hsl(277, 64%, 61%)",
        "main-header-stats": "hsl(0, 0%, 100%)",
        "main-paragraph": "hsla(0, 0%, 100%, 0.75)",
        "stat-headers": "hsla(0, 0%, 100%, 0.6)"
      },
      fontSize:{
        "tiny": "10px"
      }
    },
  },
  plugins: [],
}
