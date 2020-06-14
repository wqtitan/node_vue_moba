module.exports = {
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8090,
    https: false,
    hotOnly: false,
  },
};
