const myConfig = process.env.NODE_ENV.split('-');
myConfig.forEach(function (v, i, a) {
    a[i] = v.trim();
});
const isProduction = myConfig[0] === 'production';// 是否是生产环境
const projectDir = myConfig[1];// 项目目录
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');// 调用插件需要这个
const ExtractTextPlugin = require('extract-text-webpack-plugin');// scss文件转css文件需要这个
const HtmlWebpackPlugin = require('html-webpack-plugin');// html生成的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清空目录
const ImageminPlugin = require('imagemin-webpack-plugin').default;// 压缩图片

class ConfigPath {
    constructor() {
        this.projectDir = projectDir;// 项目名称
        this.projectPath = `${__dirname}/app/${this.projectDir}/`;// 项目目录
        this.staticPath = `${this.projectPath}static/`;// 静态文件的目录
        this.devPath = `${this.staticPath}src/`;// 开发的目录
        this.buildPath = `${this.staticPath}dist/`;// 生产的目录
        this.imagesEntryPath = `${this.devPath}images/`;// images的开发目录
        this.jsEntryPath = `${this.devPath}js/`;// js的开发目录
        this.viewEntryPath = `${this.devPath}views/`;// 视图的开发目录
        this.viewOutputPath = `${this.projectPath}views/`;// 视图的生产目录
    }
}

const configPath = new ConfigPath();// 配置路径
// 环境----开发环境
let configEnvironment = {
    hash: '[hash:8].', // 图片和字体用到了这个hash
    chunkhash: '', // js用到了这个chunkhash
    contenthash: '', // css用到了这个contenthash
    min: '', // 第三方库是否引用压缩版(生产环境引用压缩版)
    isMinCss: false, // 是否压缩css
    isWatch: true, // 是否监听
    minView: {}, // 压缩视图模板文件
    devtool: '', // #source-map
};
// 环境----生产环境
if (isProduction) {
    configEnvironment = {
        hash: '[hash:8].', // 图片和字体用到了这个hash
        chunkhash: '[chunkhash].', // js用到了这个chunkhash
        contenthash: '[contenthash].', // css用到了这个contenthash
        min: 'min.', // 第三方库是否引用压缩版(生产环境引用压缩版)
        isMinCss: true, // 是否压缩css
        isWatch: true, // 是否监听
        minView: {
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: true, // 删除空白符与换行符
        },
        devtool: '#source-map', // #source-map
    };
}
// 别名----配置
const alias = {
    vue: `vue/dist/vue.${configEnvironment.min}js`,
    axios: `axios/dist/axios.${configEnvironment.min}js`,
    jquery: `jquery/dist/jquery.${configEnvironment.min}js`,
};
// 入口----配置
const entry = {};
const allJs = fs.readdirSync(`${configPath.jsEntryPath}pages/`);
allJs.forEach(function (v) {
    const fileName = path.basename(v, '.js');
    entry[fileName] = `${configPath.devPath}js/pages/${v}`;
});
entry['this-is-global-file-vendor'] = ['vue', 'axios'];// 公用的第三方库
// 出口----配置
const output = {
    path: `${configPath.buildPath}`,
    publicPath: '/dist/',
    filename: `js/pages/[name].${configEnvironment.chunkhash}js`,
    chunkFilename: `js/chunks/[name].[id].chunk.${configEnvironment.chunkhash}js`,
};
// 插件----集合
const plugins = [
    // 插件----清空项目文件下对应的dist目录
    new CleanWebpackPlugin(['dist'], {
        root: configPath.staticPath,
        verbose: true,
        dry: false,
    }),
    // 插件----清空项目文件下对应的views目录
    new CleanWebpackPlugin(['views'], {
        root: configPath.projectPath,
        verbose: true,
        dry: false,
    }),
    // 插件----提取css样式到文件
    new ExtractTextPlugin(`css/pages/[name].${configEnvironment.contenthash}css`),
    // 插件----把每个入口都有用到的js和css分别提取为this-is-global-file-common.js和this-is-global-file-common.css
    new webpack.optimize.CommonsChunkPlugin({
        // 0.这里的打包方式是倒叙的
        // 1.this-is-global-file-manifest:抽取变动部分,防止第三方控件的多次打包
        // 2.this-is-global-file-vendor:公用的第三方库
        // 3.this-is-global-file-common:提取每个入口都有用到的js和css
        name: ['this-is-global-file-common', 'this-is-global-file-vendor', 'this-is-global-file-manifest'],
    }),
];
// 插件----处理视图模板页面文件
const allPageHtml = fs.readdirSync(`${configPath.viewEntryPath}pages/`);
allPageHtml.forEach(function (v) {
    const fileName = path.basename(v, '.hbs');
    plugins.push(new HtmlWebpackPlugin({
        template: `${configPath.viewEntryPath}pages/${v}`, // 模板
        filename: `${configPath.viewOutputPath}pages/${v}`, // 文件名
        // 需要引入的chunk,不配置就会引入所有页面的资源,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)
        chunks: ['this-is-global-file-manifest', 'this-is-global-file-vendor', 'this-is-global-file-common', fileName],
        minify: configEnvironment.minView, // 压缩视图模板文件
    }));
});
// 插件----处理视图模板模块文件
const allPartialsHtml = fs.readdirSync(`${configPath.viewEntryPath}partials/`);
allPartialsHtml.forEach(function (v) {
    plugins.push(new HtmlWebpackPlugin({
        template: `${configPath.viewEntryPath}partials/${v}`, // 模板
        filename: `${configPath.viewOutputPath}partials/${v}`, // 文件名
        inject: false,
        minify: configEnvironment.minView, // 压缩视图模板文件
    }));
});
if (isProduction) {
    // 插件----压缩js
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        sourceMap: true,
    }));
    // 插件----压缩图片
    plugins.push(new ImageminPlugin({
        disable: false,
        pngquant: {
            quality: '95-100',
        },
    }));
}
const webpackConfig = {
    // devtool----#source-map
    devtool: configEnvironment.devtool,
    // resolve----配置用来影响webpack模块解析规则
    resolve: {
        // 加速----默认的配置会采用向上递归搜索的方式去寻找node_modules,为了减少搜索我们直接写明node_modules的全路径
        modules: [`${__dirname}/node_modules/`],
        // 别名----引入开发版本还是生产版本
        alias: alias,
    },
    // 入口----配置
    entry: entry,
    // 出口----配置
    output: output,
    // 插件----配置
    plugins: plugins,
    // 监听----配置
    watch: configEnvironment.isWatch,
    // 模块----模块加载相关的配置
    module: {
        // rules----loader加载器的规则集合
        rules: [
            // loader----处理sass
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: configEnvironment.isMinCss, // css压缩
                        },
                    }, 'postcss-loader', 'sass-loader'],
                }),
            },
            // loader----es6转成es5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            // loader----处理图片
            {
                test: /\.(png|jp(e)?g|gif|svg|ico)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `images/[name].${configEnvironment.hash}[ext]`,
                        },
                    },
                ],
            },
            // loader----处理字体
            {
                test: /\.(woff|eot|ttf)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `fonts/[name].${configEnvironment.hash}[ext]`,
                        },
                    },
                ],
            },
            // loader----处理视图模板文件里的src
            {
                test: /\.hbs/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'img:data-src', 'link:href'],
                        },
                    },
                ],
            },
        ],
    },
};
module.exports = webpackConfig;
