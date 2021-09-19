const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.glsl$/,
        use: [
          {
            loader: "raw-loader",
            options: { esModule: false },
          },
        ],
        include: [path.resolve(__dirname, "src/res")],
      },
    ],
  },
  output: {
    publicPath: "public",
    filename: "tspw.build.js",
    path: path.resolve(__dirname, "public"),
  },
};
