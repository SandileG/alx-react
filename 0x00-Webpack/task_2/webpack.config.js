const path = require('path');

module.exports = {
  mode: 'production',  // Set mode to production for optimization
  entry: './js/dashboard_main.js',  // Entry point for the app
  output: {
    filename: 'bundle.js',  // Output file
    path: path.resolve(__dirname, 'public'),  // Output folder
  },
  module: {
    rules: [
      {
        test: /\.css$/i,  // Handle .css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,  // Handle image files
        type: 'asset/resource',  // Use file-loader for images
        generator: {
          filename: 'assets/[name][hash][ext][query]',  // Save images in 'assets' folder
        },
      },
    ],
  },
  optimization: {
    minimize: true,  // Minimize the output bundle for production
  },
};
