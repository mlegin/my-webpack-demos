/**
 * Created by Administrator on 17-1-16.
 */
var webpack =require('webpack');
var uglifyJsPlugin =webpack.optimize.UglifyJsPlugin;

module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new uglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]
};