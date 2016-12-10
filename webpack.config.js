module.exports = {
  entry: "./javascripts/user-inputs.js",
  output: {
    path: "./dist",
    publicPath: "http://localhost:9966/webpack-dev-server/",
    filename: "bundle.js"
  },
  module: {
    exprContextCritical: false,
    preLoaders:[
      { test: /\.json$/, loader: 'json'},
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
      },
      { test: /\.md$/, loader: "html!markdown" }
    ]
  },
  node: {
    fs: "empty"
  }
};