const path = require('path');
const base = require('./webpack.config');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除旧版本dist
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // css压缩
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 打包体积查看

module.exports = Object.assign({}, base, {
  mode: 'production',
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors', 
          minSize: 0,
          minChunks: 1, 
          chunks: 'initial',
          priority: 2, // 该配置项是设置处理的优先级，数值越大越优先处理 
        },
        commons: {
          name: 'comomns',
          test: path.resolve(__dirname, '../src/main'), // 可自定义拓展规则
          minChunks: 2, // 最小共用次数
          minSize: 0,   //代码最小多大，进行抽离
          priority: 1, //该配置项是设置处理的优先级，数值越大越优先处理 
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(), // 清楚插件
    new webpack.DefinePlugin({
      'SERVICE_PROFIX': JSON.stringify(''),
    }),
    ...base.plugins,
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
    }), //优化css为压缩格式
    new BundleAnalyzerPlugin(),
  ],
});