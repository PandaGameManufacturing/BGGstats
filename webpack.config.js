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
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.md$/, loader: "html!markdown" },
      { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  node: {
    fs: "empty"
  }
};