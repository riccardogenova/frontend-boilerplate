/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // Assicurati che il punto di ingresso sia il tuo file TypeScript principale
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'], // Aggiungi '.ts' per gestire i file TypeScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Utilizza MiniCssExtractPlugin e css-loader per i file CSS
      },
      // Puoi aggiungere altri loader qui per CSS, SASS, ecc.
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/general.css', // I file CSS verranno generati nella cartella 'css' dentro 'build'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
    port: 3000,
  },
};
