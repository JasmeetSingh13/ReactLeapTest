const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
 
  module: {
    entry: './app/index.js',
  output: {
       path: path.join(__dirname, '/bundle'),
       filename: 'index_bundle.js',
       publicPath: '/'
  },
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
     
    ]
 
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]

};
