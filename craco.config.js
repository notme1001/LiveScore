// eslint-disable-next-line no-global-assign
require = require('esm')(module);
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          // require('./customize-cra-config.js')
        ],
      },
    },
  }