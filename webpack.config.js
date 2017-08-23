'use strict';
const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main:'./src/main.js'
    }
    ,output:{
        path:path.join(__dirname,'dist'),
        filename:'build.js'
    },
    module:{
        loaders:[
            //处理css
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
             //处理less
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            }
            //处理二进制文件
            ,{//url(路径)
                test:/\.(jpg|svg|png|jepg|ttf)$/,
                loader:'url-loader?limit=4096'
            },
            {
                test:/\.js$/,
                exclude : /node_modules/,
                loader:'babel-loader'
            },
            //vue-loader->  vue-template-compiler
            //style-loader!css-loader file-loader可以写在loader里面
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    }
    ,plugins:[
        new htmlWebPackPlugin({
            template:'./src/index.html'
        }),


    ]

    
}