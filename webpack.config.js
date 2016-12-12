module.exports = {
  entry: "./javascripts/user-inputs.js",
  output: {
    path: "./public",
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
      { test: /\.md$/, loader: "html!markdown" },
      { test: /\.ejs$/, loader: 'ejs-loader?variable=data' }
    ]
  },
  node: {
    fs: "empty"
  }
};