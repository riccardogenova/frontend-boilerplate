/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // Assicurati che il punto di ingresso sia il tuo file TypeScript principale
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'], // Aggiungi '.ts' per gestire i file TypeScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Puoi aggiungere altri loader qui per CSS, SASS, ecc.
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
    port: 3000,
  },
};
