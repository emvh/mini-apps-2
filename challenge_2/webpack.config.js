// Webpack uses this to work with directories
const path = require('path');
const src_dir = path.join(__dirname, '/client')
const dist_dir = path.join(__dirname, '/public')

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: `${src_dir}/index.jsx`,

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: dist_dir,
    filename: 'bundle.js'
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ]
  }
};