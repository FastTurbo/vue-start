/**
 * Created by tianpf on 2017/5/3.
 */
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.js')

//获得express对象
var app = express()

//将webpack的配置传递过去，并调用webpack
var compiler = webpack(config)


//使用webpack-dev-middleware中间件
var devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath:config.output.publicPath,
    stats:{
        colors:true,
        chunks:false
    }
})

//注册中间件
app.use(devMiddleware)


//监听8888端口，开启服务器
app.listen(8888,function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('Listen at http:localhost:8888')
})