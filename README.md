# Webpack Basics

This project introduces the basics of setting up and configuring Webpack for a simple project. By the end, you'll be familiar with core Webpack concepts, including entry points, output, loaders, plugins, code splitting, and setting up a development server. Each of these topics is essential for managing and optimizing assets in a modern JavaScript project.

## Table of Contents
1. [Setting Up Webpack](#setting-up-webpack)
2. [Entry Points, Output, and Loaders](#entry-points-output-and-loaders)
3. [Adding Plugins](#adding-plugins)
4. [Code Splitting](#code-splitting)
5. [Setting Up a Development Server](#setting-up-a-development-server)

---

## Setting Up Webpack

Webpack is a popular JavaScript module bundler. It takes in modules (e.g., `.js`, `.css`, `.html` files) and compiles them into a smaller set of files that can be efficiently served in production. To start with Webpack:

1. **Initialize Your Project**: Set up a new Node project:
   ```bash
   npm init -y
   ```

2. **Install Webpack and Webpack CLI**:
   ```bash
   npm install webpack webpack-cli --save-dev
   ```
   
3. **Create the Webpack Configuration File**: This file, `webpack.config.js`, allows you to define the main settings and behavior for Webpack:
   ```javascript
   // webpack.config.js
   module.exports = {
     // Configurations will go here
   };
   ```

## Entry Points, Output, and Loaders

### Entry Points
The entry point is the first file Webpack loads and starts analyzing your project’s dependencies. By default, Webpack looks for `./src/index.js`, but you can specify any entry point you like:

```javascript
module.exports = {
  entry: './src/index.js',
};
```

### Output
The `output` setting defines where Webpack will place the bundled files after processing. Typically, this is configured to output a single `bundle.js` file in a `dist` directory:

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
};
```

### Loaders
Loaders allow Webpack to process different types of files. For example, if you want to import CSS files directly into your JavaScript, you would use the `css-loader` and `style-loader`:

1. **Install the loaders**:
   ```bash
   npm install css-loader style-loader --save-dev
   ```

2. **Configure the loaders** in `webpack.config.js`:
   ```javascript
   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'bundle.js',
       path: __dirname + '/dist',
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
       ],
     },
   };
   ```

## Adding Plugins

Plugins are more powerful than loaders and allow you to perform a wider range of tasks in Webpack, like managing assets and optimizing the build. For example, the `HtmlWebpackPlugin` can automatically inject your bundled JavaScript into an HTML file.

1. **Install the plugin**:
   ```bash
   npm install html-webpack-plugin --save-dev
   ```

2. **Add it to the Webpack configuration**:
   ```javascript
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'bundle.js',
       path: __dirname + '/dist',
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html',
       }),
     ],
   };
   ```

## Code Splitting

Code splitting allows you to split your code into separate bundles. This can help reduce load times and optimize resource management, especially for large applications. For example, you can split your dependencies into a `vendor` file and your application code into an `app` file.

```javascript
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
};
```

Webpack will now generate two bundles: `app.bundle.js` for your main application code and `vendor.bundle.js` for any third-party libraries specified in `vendor.js`.

## Setting Up a Development Server

Webpack’s development server, `webpack-dev-server`, enables you to preview changes live without rebuilding every time manually.

1. **Install the dev server**:
   ```bash
   npm install webpack-dev-server --save-dev
   ```

2. **Add the dev server configuration** to `webpack.config.js`:
   ```javascript
   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'bundle.js',
       path: __dirname + '/dist',
     },
     devServer: {
       contentBase: './dist',
       open: true, // Opens browser after server is started
       hot: true, // Enables hot module replacement
     },
   };
   ```

3. **Start the Development Server**:
   ```bash
   npx webpack serve
   ```

Now, any changes you make in your source files will automatically update in the browser, making development faster and more efficient.
