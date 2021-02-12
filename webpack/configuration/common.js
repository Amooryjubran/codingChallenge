const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: {
            loader: "babel-loader",
            options: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
        },
      },
    ],
  },
  plugin: [
    new HtmlWebpackPlugin({
      title: "Coding Challenge",
      template: "./webpack/template/index.ejs",
      inject: "head",
    }),
  ],
};
