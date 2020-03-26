const base = require('./webpack.config');

const PORT = process.env.PORT || 8082;
module.exports = {
  mode: 'development',
  ...base,
  devServer: {
    inline: true,
    port: PORT,
    proxy: {
      '/': {
        target: `http://localhost:${PORT}`,
        bypass: function(req, res, proxyOptions) {
          return `${base.output.publicPath}/index.html`;
        },
      },
    },
    historyApiFallback: true,
  },
};