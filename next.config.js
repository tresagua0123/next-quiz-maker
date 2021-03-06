module.exports = {
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 1000000
        }
      }
    })
    return config
  }
}
