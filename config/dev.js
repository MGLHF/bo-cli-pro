const base = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 多进程构建
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  mode: 'development',
  ...base,
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'babel',
      //如何处理  用法和loader 的配置一样
      loaders: ['babel-loader?cacheDirectory=true'],
      //共享进程池
      threadPool: happyThreadPool,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? 'css/[id].[hash:8].css' : '[name].css',
      chunkFilename: process.env.NODE_ENV === 'production' ? 'css/[id].chunk.[hash:8].css' : '[name].chunk.css',
    }),
    new webpack.DefinePlugin({}),
    new VueLoaderPlugin(),
  ],
  devServer: {
    inline: true,
    port: process.env.PORT || 8082,
    historyApiFallback: true,
    proxy: {
      '/': {
        target: `http://localhost:${process.env.PORT || 8082}`,
        bypass: function(req, res, proxyOptions) {
          return `${base.output.publicPath}/index.html`;
        },
      },
    },
  },
};