/**
 * Created by Administrator on 17-1-9.
 */
module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
        ]
    }
};