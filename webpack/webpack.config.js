const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    background: path.resolve(__dirname, '..', 'src', 'background.ts'),
    content: path.resolve(__dirname, '..', 'src', 'content.ts')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '.', context: 'public' }]
    }),
    new ESLintWebpackPlugin({
      extensions: ['js', 'ts', 'tsx'],
      fix: true
    })
  ]
}
