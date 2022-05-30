module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {      
      'title': [''],
      'body': ['Encode Sans Condensed'],
    },
    extend: {
      boxShadow: {
        'box': '2px 6px 12px 2px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'darkblue': '#013F49',
        'lightblue': '#E1EBED',
        'white-1': '#FFF3E9',
        'white-2': '#FDFDFD',
        'orange': '#FD7E14',
        'lightblue': '#0096B0',
        'grey': '#B7B7B7',
        'darkgrey': '#373737',
        'darkbrown': '#3D1E05',

      },
      backgroundImage: {
        'homepage': "url('./public/img/background1.png')",
        'loginpage': "url('./public/img/background4.png')",
      },
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}
