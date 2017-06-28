const del = require('del');
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');//调用插件需要这个
const autoprefixer = require('autoprefixer');//css3加前缀
const ExtractTextPlugin = require("extract-text-webpack-plugin");//scss文件转css文件需要这个
const HtmlWebpackPlugin = require('html-webpack-plugin');//html生成的插件
class ConfigPath {
    constructor() {
        this.projectDir = 'phone';//项目目录名称
        this.publicPath = `${__dirname}/static/${this.projectDir}/`;//项目的路径
        this.devPath = `${this.publicPath}src/`;//开发的目录
        this.buildPath = `${this.publicPath}dist/`;//生产的目录
        this.imagesEntryPath = `${this.devPath}images/`;//images的开发目录
        this.jsEntryPath = `${this.devPath}js/`;//js的开发目录
        this.viewEntryPath = `${this.devPath}views/`;//视图的开发目录
        this.viewOutputPath = `${this.buildPath}views/`;//视图的生产目录
    }
}
let configPath = new ConfigPath();
//resolve
let resolve = {
    alias: {
        vue: `${__dirname}/node_modules/vue/dist/vue.js`
    }
};
//入口
let entry = {};
let allJs = fs.readdirSync(`${configPath.jsEntryPath}pages/`);
allJs.forEach(function (v) {
    let fileName = path.basename(v, '.js');
    entry[fileName] = `${configPath.devPath}js/pages/${v}`;
});

//出口
let output = {
    path: `${configPath.buildPath}`,
    publicPath: `/${configPath.projectDir}/dist/`,
    filename: `js/[name].js`,
    chunkFilename: "[id].chunk.js"
};
//插件
let plugins = [
    //提取css样式到文件
    new ExtractTextPlugin(`css/[name].css`),
    //把每个入口都有用到的js和css分别提取为this-is-global-file.js和this-is-global-file.css
    new webpack.optimize.CommonsChunkPlugin({name: 'this-is-global-file'})
];
//插件----处理视图模板页面文件
let allPageHtml = fs.readdirSync(`${configPath.viewEntryPath}pages/`);
allPageHtml.forEach(function (v) {
    let fileName = path.basename(v, '.hbs');
    plugins.push(
        new HtmlWebpackPlugin({
            template: `${configPath.viewEntryPath}pages/${v}`,//模板
            filename: `${configPath.viewOutputPath}pages/${v}`,//文件名
            favicon: `${configPath.imagesEntryPath}partials/favicon.ico`,//网站的icon图标
            chunks: ['this-is-global-file', fileName],//需要引入的chunk，不配置就会引入所有页面的资源
        })
    );
});
//插件----处理视图模板模块文件
let allPartialsHtml = fs.readdirSync(`${configPath.viewEntryPath}partials/`);
allPartialsHtml.forEach(function (v) {
    plugins.push(
        new HtmlWebpackPlugin({
            template: `${configPath.viewEntryPath}partials/${v}`,//模板
            filename: `${configPath.viewOutputPath}partials/${v}`,//文件名
            inject: false
        })
    );
});
let webpackConfig = {
    resolve: resolve,
    entry: entry,
    //出口文件
    output: output,
    //模块
    module: {
        //loaders加载器
        rules: [
            //处理sass
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            //es6转成es5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            //处理图片
            {
                test: /\.(png|jp(e)?g|gif|svg|ico)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            //处理字体
            {
                test: /\.(woff|eot|ttf)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            //处理.vue文件
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: ['vue-loader']
            },
            //处理hbs试图模板文件里的src
            {
                test: /\.hbs/,
                exclude: /(node_modules|bower_components)/,
                use: ['html-loader']
            }
        ]
    },
    //插件
    plugins: plugins,
    watch: true
};

module.exports = webpackConfig;