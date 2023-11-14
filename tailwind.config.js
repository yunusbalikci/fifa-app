module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
      }
    },
    extend: {
      fontFamily:{
        open:['Open Sans', 'sans-serif']
      },

      colors:{
        'fifa-blue' : '#04364A',
        'fifa-gray' : '#D8D8D8'
      },

      spacing:{
        '128': '32rem'
      }
    },
  },
  plugins: [],
}