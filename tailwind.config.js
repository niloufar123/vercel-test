/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');





module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {  ...defaultColors, "gray-dark":"#1E293B"}
  }
},
  plugins:[
    require('@tailwindcss/forms')
  ],

    darkMode: 'class'
}

