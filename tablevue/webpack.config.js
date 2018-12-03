const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'), //入口文件 __dirname:目录所在的地址
    output: {
        filename: 'bundle.js', //输出文件名
        path: path.join(__dirname, 'dist') //输出文件地址
    },
    module:{
        rules:[
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}