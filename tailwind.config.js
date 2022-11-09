/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '12rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      fontFamily: {
        inter : ['Inter'],
      },
      colors: {
        primary: "#6366f1",
        dark: "#0f172a",
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
}
