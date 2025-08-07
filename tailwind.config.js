module.exports = {
  purge: false,
  content: ['./src/**/*.hbs', './src/**/*.js', './src/**/*.css', './resume.json'],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#56817A',
      },
      fontFamily: {
        sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
