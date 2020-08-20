const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./{components,pages}/**/*.tsx'],
  plugins: [require('@tailwindcss/ui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
