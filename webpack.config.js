const myConfig = process.env.myConfig.split('-');
myConfig.forEach(function (v, i, a) {
    a[i] = v.trim();
});
const isProduction = myConfig[0] === 'production';//是否是生产环境
const projectDir = myConfig[1];//项目目录
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');//调用插件需要这个
const autoprefixer = require('autoprefixer');//css3加前缀
const ExtractTextPlugin = require("extract-text-webpack-plugin");//scss文件转css文件需要这个
const HtmlWebpackPlugin = require('html-webpack-plugin');//html生成的插件
class ConfigPath {
    constructor() {
        this.projectDir = projectDir;//项目目录
        this.projectPath = `${__dirname}/static/${this.projectDir}/`;//项目的路径
        this.devPath = `${this.projectPath}src/`;//开发的目录
        this.buildPath = `${this.projectPath}dist/`;//生产的目录
        this.imagesEntryPath = `${this.devPath}images/`;//images的开发目录
        this.jsEntryPath = `${this.devPath}js/`;//js的开发目录
        this.viewEntryPath = `${this.devPath}views/`;//视图的开发目录
        this.viewOutputPath = `${this.buildPath}views/`;//视图的生产目录
    }
}
const configPath = new ConfigPath();//配置路径
//环境----是否是生产环境(默认是开发环境)
let productionConfig = {
    hash: '',//图片和字体用到了这个hash
    chunkhash: '',//js用到了这个chunkhash
    contenthash: '',//css用到了这个contenthash
    min: '',//第三方库是否引用压缩版(生产环境引用压缩版)
    isMinCss: false,//是否压缩css
    isWatch: true,//是否监听
    minView: {},//压缩视图模板文件
};
if (isProduction) {
    productionConfig = {
        hash: '[hash:8].',//图片和字体用到了这个hash
        chunkhash: '[chunkhash].',//js用到了这个chunkhash
        contenthash: '[contenthash].',//css用到了这个contenthash
        min: 'min.',//第三方库是否引用压缩版(生产环境引用压缩版)
        isMinCss: true,//是否压缩css
        isWatch: true,//是否监听
        minView: {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    };
}
//插件----集合
let plugins = [
    //插件----自动加载模块
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery"}),
    //插件----提取css样式到文件
    new ExtractTextPlugin(`css/pages/[name].${productionConfig.contenthash}css`),
    //插件----把每个入口都有用到的js和css分别提取为this-is-global-file.js和this-is-global-file.css
    new webpack.optimize.CommonsChunkPlugin({name: 'this-is-global-file'})
];
//插件----压缩js
if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
}
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
            minify: productionConfig.minView//压缩视图模板文件
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
            inject: false,
            minify: productionConfig.minView//压缩视图模板文件
        })
    );
});
//别名----配置
let alias = {
    vue: `${__dirname}/node_modules/vue/dist/vue.${productionConfig.min}js`
};
//入口----配置
let entry = {};
let allJs = fs.readdirSync(`${configPath.jsEntryPath}pages/`);
allJs.forEach(function (v) {
    let fileName = path.basename(v, '.js');
    entry[fileName] = `${configPath.devPath}js/pages/${v}`;
});
//出口----配置
let output = {
    path: `${configPath.buildPath}`,
    publicPath: `/${configPath.projectDir}/dist/`,
    filename: `js/pages/[name].${productionConfig.chunkhash}js`,
    chunkFilename: `js/chunk/[name].[id].chunk.${productionConfig.chunkhash}js`
};
let webpackConfig = {
    //resolve----配置用来影响webpack模块解析规则
    resolve: {
        //别名----引入开发版本还是生产版本
        alias: alias
    },
    //入口----配置
    entry: entry,
    //出口----配置
    output: output,
    //插件----配置
    plugins: plugins,
    //监听----配置
    watch: productionConfig.isWatch,
    //模块----模块加载相关的配置
    module: {
        //rules----loader加载器的规则集合
        rules: [
            //loader----处理sass
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: productionConfig.isMinCss //css压缩
                        }
                    }, 'postcss-loader', 'sass-loader']
                })
            },
            //loader----es6转成es5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            //loader----处理图片
            {
                test: /\.(png|jp(e)?g|gif|svg|ico)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `images/[name].${productionConfig.hash}[ext]`
                        }
                    }
                ]
            },
            //loader----处理字体
            {
                test: /\.(woff|eot|ttf)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `fonts/[name].${productionConfig.hash}[ext]`
                        }
                    }
                ]
            },
            //loader----处理vue单文件
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: ['vue-loader']
            },
            //loader----处理视图模板文件里的src
            {
                test: /\.hbs/,
                exclude: /(node_modules|bower_components)/,
                use: ['html-loader']
            }
        ]
    }
};
module.exports = webpackConfig;