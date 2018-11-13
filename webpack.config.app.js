/* webpack3 */
const myConfig = process.env.NODE_ENV.split('-');
myConfig.forEach(function (v, i, a) {
    a[i] = v.trim();
});
const isProduction = myConfig[0] === 'production'; // 是否是生产环境
const projectDirPath = `${myConfig[1]}/`; // 项目目录路径
const projectDirname = `${projectDirPath.split('/')[1]}`; // 项目目录名称
const fs = require('fs');
const path = require('path');
const webpack = require('webpack'); // 调用插件需要这个
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // scss文件转css文件需要这个
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空目录
const ImageminPlugin = require('imagemin-webpack-plugin').default; // 压缩图片

class ConfigPath {
    constructor() {
        this.rootPath = `${__dirname}/`; // 根目录的目录路径
        this.projectDirname = projectDirname; // 项目的目录名称
        this.projectPath = `${this.rootPath}${projectDirPath}`; // 项目的目录路径
        this.assetsEntryPath = `${this.projectPath}assets/`; // 开发资源的目录路径
        this.viewsEntryPath = `${this.assetsEntryPath}views/`; // 开发视图的目录路径
        this.jsEntryPath = `${this.assetsEntryPath}js/`; // 开发js的目录路径
        this.distPath = `${this.rootPath}dist/`; // 生产的目录路径
        this.assetsOutputPath = `${this.distPath}assets/static-cache/${this.projectDirname}/`; // 生产资源的目录路径
        this.viewsOutputPath = `${this.distPath}views/${this.projectDirname}/`; // 生产视图的目录路径
    }
}

const configPath = new ConfigPath(); // 配置路径
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
        isWatch: false, // 是否监听
        minView: {
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: true, // 删除空白符与换行符
        },
        devtool: '#source-map', // #source-map
    };
}
// 别名----配置
const alias = {
    // '@': __dirname,
    // 'zhf.g-ui': `${__dirname}/node_modules/zhf.g-ui`,
    vue: `vue/dist/vue.${configEnvironment.min}js`,
    axios: `axios/dist/axios.min.js`,
};
// 入口----配置
const entry = {};
const allJs = fs.readdirSync(`${configPath.jsEntryPath}pages/`);
allJs.forEach(function (v) {
    // const fileName = path.basename(v, '.js');
    entry[v] = `${configPath.assetsEntryPath}js/pages/${v}/index.js`;
});
entry['this-is-global-file-vendor'] = ['vue', 'axios'];// 公用的第三方库
// 出口----配置
const output = {
    path: `${configPath.assetsOutputPath}`, // 出口目录路径，此处必须是绝对路径。
    publicPath: `/static-cache/${configPath.projectDirname}/`, // 引入静态资源文件时，资源的前缀路径。
    filename: `js/pages/[name].${configEnvironment.chunkhash}js`,
    /*
    chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
    比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
    只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
    或者这样require.ensure(['./greeter'],function(require){alert(11);})
    chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
    注意1：对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取。
    注意2：CommonsChunkPlugin在webpack4中不支持了，支持使用optimization.splitChunks属性进行公共模块(chunks)的提取。css使用mini-css-extract-plugin模块进行提取。
    */
    chunkFilename: `js/chunks/[name].[id].chunk.${configEnvironment.chunkhash}js`,
};
// 插件----集合
const plugins = [
    // 插件----清空dist/assets目录下对应的项目文件
    new CleanWebpackPlugin([configPath.projectDirname], {
        root: `${configPath.distPath}assets/static-cache/`,
        verbose: true,
        dry: false,
    }),
    // 插件----清空dist/views目录下对应的项目文件
    new CleanWebpackPlugin([configPath.projectDirname], {
        root: `${configPath.distPath}views/`,
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
// 插件----处理页面视图模板页面文件
const allPagesViews = fs.readdirSync(`${configPath.viewsEntryPath}pages/`);
allPagesViews.forEach(function (v) {
    const fileName = path.basename(v, '.ejs');
    plugins.push(new HtmlWebpackPlugin({
        template: `${configPath.viewsEntryPath}pages/${v}`, // 模板
        filename: `${configPath.viewsOutputPath}pages/${v}`, // 文件名
        // 需要引入的chunk,不配置就会引入所有被CommonsChunkPlugin提取出的公共js和所有入口js,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)
        chunks: [fileName, 'this-is-global-file-common', 'this-is-global-file-vendor', 'this-is-global-file-manifest'],
        minify: configEnvironment.minView, // 压缩视图模板文件
    }));
});
// 插件----处理页面视图模板公共文件
const allPartialsViews = fs.readdirSync(`${configPath.viewsEntryPath}commons/`);
allPartialsViews.forEach(function (v) {
    plugins.push(new HtmlWebpackPlugin({
        template: `${configPath.viewsEntryPath}commons/${v}`, // 模板
        filename: `${configPath.viewsOutputPath}commons/${v}`, // 文件名
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
const webpackConfigApp = {
    // devtool----#source-map
    devtool: configEnvironment.devtool,
    // resolve----配置用来影响webpack模块解析规则
    resolve: {
        // 加速----默认的配置会采用向上递归搜索的方式去寻找node_modules,为了减少搜索我们直接写明node_modules的全路径
        modules: [`${__dirname}/node_modules/`],
        // 别名----引入开发版本还是生产版本
        alias: alias,
        // 后缀----如果不加后缀，则默认按以下后缀查找文件。
        extensions: ['.js', '.vue', '.scss', '.css', '.json'],
    },
    // 忽略----从输出的bundle中排除依赖
    externals: {
        jquery: 'window.jQuery',
        laydate: 'window.laydate',
        swiper: 'window.Swiper',
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
                // exclude: /(node_modules|bower_components)/,
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
            // loader----处理音频
            {
                test: /\.(mp3)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `audios/[name].${configEnvironment.hash}[ext]`,
                        },
                    },
                ],
            },
            // loader----处理vue单文件
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            transformToRequire: {
                                img: ['src', 'data-src'],
                                image: 'xlink:href',
                            },
                        },
                    },
                ],
            },
            // loader----处理视图模板文件里的src
            {
                test: /\.ejs/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'img:data-src', 'link:href', 'audio:src'],
                        },
                    },
                ],
            },
        ],
    },
};
module.exports = webpackConfigApp;
