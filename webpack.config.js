var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 必须是 'source-map' 或者 'inline-source-map'
  devtool: 'source-map',
  entry:{
    app:["./js/1.es6.js","./less/test.less"]
  },
  output:{
    path:__dirname+"/dist",
    filename:"js/[name].bundle.js"
  },
  module: {
    rules: [
      {
      test:/\.js$/,
      exclude: /(node_modules|bower_components)/,
     loader: 'babel-loader',
     query: {
       presets: ['es2015']
     }
    },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'less-loader']
        }
        )
      }
    ]
  },
  plugins: [
    // 提取 CSS 到单独的文件中
    new ExtractTextPlugin('./css/app.bundle.css')
  ]
};
