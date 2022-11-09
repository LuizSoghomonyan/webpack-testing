const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {

    mode: "development",
    entry: {//все файлы, которые нужно добавить а webpack обработку
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin(
            {
                template: "./src/index.html"
            }
        ),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                //все файлы с расширением css будут обработаны с loader-ами, которые
                //указаны в use массиве, также webpack читает справа налево,
                // то есть сначала обработает через css-loader, потом через style-loader
                test: /\.css$/,
                use: ['style-loader','css-loader']
                //с помощью css-loader мы можем использовать import для css в js файлах
                //style-loader добавляет все стили в <header>
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/public/icons/[name].[ext]'
                    }
                }
            }
        ]
    }

}

