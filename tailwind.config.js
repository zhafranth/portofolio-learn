module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-light': '#3BA4CF',
        'primary-dark' : '#1C1850'
      }
    },
    fontFamily: {
      'Montserrat': ['Monstserrat', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
