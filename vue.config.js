const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/spotify-clone-vueJS',
  devServer:{
    proxy:'https://cse.google.com'
  }
})

