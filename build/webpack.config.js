/**
 * Created by tianpf on 2017/5/3.
 *
 *
 *
 */
//nodejs下的path模块，用来配置路径
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件，其中path.resolve()方法，有两个参数
    //__dirname和一个url地址，他们通过resolve()方法，生成一个绝对路径
    //指向index.js
    entry:path.resolve(__dirname,'../app/index/index.js'),
    //输入配置,一个项目应该至少必须有entry和output
    output:{
        path:path.resolve(__dirname,'../output/static'),
        publicPath:'/',
        filename:'[name].[hash].js',
        chunkFilename:'[id].[chunkhash].js'
    },
    //webpack试图加载模块式，默认是以查找.js结尾的文件，
    //所以我们需要通过resolve属性告诉wbepack,可以加载以哪些后缀结尾的文件。
    resolve:{
        extensions:['','.js','.vue']
    },
    module:{
        loaders:[
            //使用vue-loader加载.vue文件
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test:/\.js$/,
                loader:'babel-loader?presets=es2015',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'app/index/index.html',
            template:path.resolve(__dirname,'../app/index/index.html'),
            inject:true
        })
    ]
};
/*
*
*
*  webpack-dev-middleware 是对webpack一个简单的包装，他 可以通过连接服务器服务那些
*  webpack发射出来的文件:
*  1 不会向硬盘写文件，而是在内存中，本来我们构建项目其实就是在向硬盘写文件，这个中间件不会
*  将文件写入硬盘中。
*  2 当文件改变的时候，这个中间件不会再服务旧的报，你可以直接刷新浏览器就能看到最新的修改效果。
*  不必等待构建时间，马上就可以见到效果，提高效率。
*
*
*
*  html-webpack-plugin 通过这个插件自动向html中引入相应文件。
*
*
*  webpack --display-modules --display-chunks --config build/webpack.config.js
*  通过webpack命令，并且通过--config命令指定了我们的配置文件应该是'build/webpack.config.js'
*  并通过--display-modules和--display-chunks选项显示相应的信息。
*
* */