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
      width: {
        '256': '256px',
      },
      height: {
        '120': '120px',
      },
      fontFamily:{
        open:['Open Sans', 'sans-serif']
      },

      colors:{
        'fifa-blue' : '#04364A',
        'fifa-gray' : '#D8D8D8',
        'fifa-blue2': '#0C356A',
        'fifa-blue3': '#279EFF',
        'fifa-blue4': '#40F8FF',
        'fifa-blue5': '#313866',
        'fifa-red'  : '#8E3200',
        'fifa-red2' : '#931A25',
        'fifa-red3' : '#B22222',
        'fifa-new'  : '#A5CCE5',
        'fifa-yellow' : '#F9F871',
        'fifa-new-red':'#763335',
        'fifa-bg' : '#EBFCFF',
        'fifa-newgray' : '#5F6970',
        'fifa-gray2' : '#8B9192'
      },

      spacing:{
        '128': '32rem'
      }
    },
  },
  plugins: [],
}