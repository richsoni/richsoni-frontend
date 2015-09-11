module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname,
    filename: "dst/bundle.js"
  },
  module: {
    loaders: [
    { test: /\.css$/, loader: "style!css" },
    { test: /\.js$/, loader: "jsx-loader?insertPragma=React.DOM&harmony" }
    ]
  }
};
