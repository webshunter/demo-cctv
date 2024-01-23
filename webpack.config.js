const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  "mode": "production",
  "entry": "./src/scripts.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Project Demo',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        test: /\.css$/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
        ]
    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    open: true,
    hot: false, // disable hot reload for plain HTML/CSS/JS development
    compress: true,
    client: {
      logging: 'none',
      overlay: {
        errors:false,
        warnings:false
      }
    },
    static: {
      directory: path.join(__dirname, 'src'),
      publicPath: '/'
    }
  }
};
