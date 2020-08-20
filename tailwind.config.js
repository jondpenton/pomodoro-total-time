const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./{components,pages}/**/*.tsx'],
  plugins: [require('@tailwindcss/ui')],
  theme: {
    extend: {
      boxShadow: {
        ...defaultTheme.boxShadow,
        focus: '0 0 0 3px rgba(141, 162, 251, 0.45)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
