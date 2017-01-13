/**
 * Created by Administrator on 17-1-11.
 */
module.exports={
    entry:"./main.jsx",
    output:{
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
        ]
    }
};