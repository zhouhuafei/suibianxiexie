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
//别名----引入开发版本还是生产版本
let alias = {
    vue: `${__dirname}/node_modules/vue/dist/vue.${isProduction ? 'min.' : ''}js`
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
    filename: `js/[name].${isProduction ? '[chunkhash].' : ''}js`,
    chunkFilename: `js/[id].chunk.${isProduction ? '[chunkhash].' : ''}js`
};
//插件的集合
let plugins = [
    //插件----自动加载模块
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery"}),
    //插件----提取css样式到文件
    new ExtractTextPlugin(`css/[name].${isProduction ? '[contenthash].' : ''}css`),
    //插件----把每个入口都有用到的js和css分别提取为this-is-global-file.js和this-is-global-file.css
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
//加载----loader加载器的规则集合
let rules = [
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
];
let webpackConfig = {
    resolve: {//resolve配置用来影响webpack模块解析规则
        alias: alias//别名
    },
    entry: entry,//入口
    output: output,//出口
    module: {//模块的加载相关
        rules: rules//loader加载器的规则
    },
    plugins: plugins,//插件
    //watch: !isProduction//监听
    watch: true//监听
};
module.exports = webpackConfig;