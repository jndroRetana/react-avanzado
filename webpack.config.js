const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //archivo js de salida para producción
  output: {
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      //regla para poder leer jsx y javascript moderno con babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  //plugin para copiar html
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
