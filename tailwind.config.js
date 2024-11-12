const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    colors: {
      'white' : '#ffffff',
      'indigoBackground' : '#11131F',
      'ligtBackground' : '#ffffff',
      'indigo-3' : '#182449',
      'indigo-4' : '#70B8FF',
      'indigo-dark-text' : '#9EB1FF',
      'black' : '#000000'

    },
    extend: {},
  },
  plugins: [require('daisyui')],
}

