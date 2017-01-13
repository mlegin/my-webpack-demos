/**
 * Created by Administrator on 17-1-13.
 */
module.exports={
    entry:'./main.jsx',
    output:{
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                // 排除掉node_modules的js文件
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?modules'
            }
        ]
    }
};