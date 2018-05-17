module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          formatter: 'codeFrame',
        },
      },
    ],
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
