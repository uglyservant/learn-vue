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
      // webpack CSS 打包
      {
        test: /\.css$/,
        // 顺序重要，从右向左读取
        use: ["style-loader", "css-loader"]
      },
      // {
      //   test: /\.less$/,
      //   use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "less-loader"}]
      // },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{loader: "url-loader", options: {limit: 8192}}]
      }
    ]
  }
};