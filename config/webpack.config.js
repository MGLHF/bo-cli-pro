const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PUBLIC_PATH = '/';
module.exports = {
  entry: path.resolve(__dirname, '../src/single-spa.config.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:8].js',
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@main': path.resolve(__dirname, '../src/main'),
      '@app1': path.resolve(__dirname, '../src/app1'),
      '@app2': path.resolve(__dirname, '../src/app2'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          },
        ],
      },
      // {
      //   test: /\.(jsx|js)$/i,
      //   exclude: /node_modules/,
      //   include: [path.resolve(__dirname, '../src/main')],
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.vue$/i,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        },
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/[path][name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV !== 'production' ? 'css/[name].css' : 'css/[name].[hash:8].css',
      chunkFilename: process.env.NODE_ENV !== 'production' ? 'css/[id].css' : 'css/[id].[hash:8].css',
    }),
    new VueLoaderPlugin(),
  ],
};