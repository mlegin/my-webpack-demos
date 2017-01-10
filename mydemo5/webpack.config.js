/**
 * Created by Administrator on 17-1-9.
 */
// module.exports={
//     entry:'./main.js',
//     output:{
//         filename:'bundle.js'
//     },
//     module:{
//         loaders:[
//             {
//                 test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'
//             }
//         ]
//     }
// }

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};