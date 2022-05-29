module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {      
      'title': ['Inter'],
      'body': ['Encode Sans Condensed'],
    },
    extend: {
      colors: {
        'darkblue': '#013F49',
        'lightblue': '#E1EBED',
        'whight-1': '#FFF3E9',
        'whight-2': '#FDFDFD',
        'orange': '#FD7E14',
        'lightblue': '#0096B0',
        'grey': '#B7B7B7',
        'darkgrey': '#373737',
        'darkbrown': '#3D1E05',

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
