const path = require('path');

const PUBLIC_PATH = '/';
module.exports = {
  entry: {
    vendor: ['lodash', 'antd'],
    main: path.resolve(__dirname, '../src/single-spa.config.js'),
  },
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
};