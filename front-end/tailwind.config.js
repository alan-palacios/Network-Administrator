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
          light: '#8B8B8B',
          medium: '#4D4D4D',
          dark: '#373737',
          transparent: 'rgba(55,55,55,0.6)'
        },
        black:{
          DEFAULT:'#000',
          transparent: 'rgba(0,0,0,0.6)'
        }
      },
      borderWidth:{
        '1': '1px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
