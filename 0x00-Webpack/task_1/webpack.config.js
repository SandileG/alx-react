const path = require('path');

module.exports = {
  mode: 'production',  // Set the mode to production
  entry: './js/dashboard_main.js',  // Entry point for your app
  output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'public'),  // Output path
  },
};
