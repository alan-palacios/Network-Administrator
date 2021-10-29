module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors:{
        green:'#91CC62',
        red:{
          DEFAULT: '#8E2525',
          dark: '#481818'
        },
        gray:{
          dark: '#373737'
        }
      },
      borderWidth:{
        '1': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
