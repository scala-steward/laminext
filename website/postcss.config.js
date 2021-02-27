module.exports = () => {
  return {
    plugins: [
      require('postcss-import')({}),
      process.env.NODE_ENV === 'production' ?
        require('tailwindcss')('./tailwind.prod.config.js') :
        require('tailwindcss')('./tailwind.dev.config.js'),
      require('postcss-preset-env')({
        /* use stage 3 features + css nesting rules */
        stage: 3,
        features: {
          'nesting-rules': true
        }
      })
    ]
  };
}
