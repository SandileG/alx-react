const path = require('path');

module.exports = {
  mode: 'development',  // Change this to 'production' for optimized builds
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
