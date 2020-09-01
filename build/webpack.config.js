const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('./helpers').root;

module.exports = {
  devtool: 'cheap-source-map',

  performance: {
    hints: false
  },
  // node:{fs: 'empty'},
  devServer: {
    contentBase: root('src'),
    watchContentBase: true,
    port: 9090,
    stats: 'errors-only'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
    alias: { // fix "duplicated react" issue when using npm link
      'react': require.resolve('react'),
    }
  },
  entry: ['./src/index.tsx'],
  output: {
    path: root('dist'),
    filename: 'main.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/],
      },
      {
        test: /\.graphql$/,
        use:'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new CopyWebpackPlugin([
      { from: './node_modules/graphql-voyager/dist/voyager.worker.js' },
      { from: './node_modules/graphql-voyager/dist/voyager.css' }
    ])
  ]
}
