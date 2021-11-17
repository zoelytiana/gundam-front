module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Roboto', 'sans-serif'],
        'text': ['Mandali', 'sans-serif'],
      },
      colors: {
        primary: {
          '100': '#880c01',
          '200': '#5380B1',
          '300': '#F6CD35',
          '400': '#404040',
        },
        secondary: {
          '100': '#F5F5F5',
        }
      }
    }
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled"
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
//tes