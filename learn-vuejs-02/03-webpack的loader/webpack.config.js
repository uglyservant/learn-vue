const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    // 动态获取文件路径
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 顺序重要，从右向左
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};