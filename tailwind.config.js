module.exports = {
  purge: false,
  content: ['./src/**/*.hbs', './src/**/*.js', './src/**/*.css', './resume.json'],
  theme: { 
    extend: {
      colors: {
        'brand-teal': '#56817A',
      }
    } 
  },
  plugins: [],
};
