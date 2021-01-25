// const autoprefixer = require('autoprefixer');
// const postcss-nested = require('postcss-nested');
// const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};