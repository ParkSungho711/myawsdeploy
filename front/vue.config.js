const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: '/aws/',
  outputDir: '../aws/src/main/resources/static', // 빌드된 파일의 출력 디렉토리
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
}
