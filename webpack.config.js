module.exports = {

  entry: "./javascripts/user-inputs.js",
  output: {
    path: "./dist",
    publicPath: "http://localhost:9966/webpack-dev-server/",
    filename: "bundle.js"
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        include: /javascripts/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {
      // used when requiring jquery in modules
      'jquery-path': '../node_modules/jquery/src/jquery.js'
    }
  }
};