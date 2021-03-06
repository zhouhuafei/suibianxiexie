/* webpack3 */
const myConfig = process.env.NODE_ENV.split('-');
myConfig.forEach(function (v, i, a) {
    a[i] = v.trim();
});
const isProduction = myConfig[0] === 'production'; // 是否是生产环境
const projectDirPath = `${myConfig[1]}/`; // 项目目录路径
const projectDirname = `${projectDirPath.split('/')[1]}-vue`; // 项目目录名称
const webpack = require('webpack'); // 调用插件需要这个
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // scss文件转css文件需要这个
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空目录
const ImageminPlugin = require('imagemin-webpack-plugin').default; // 压缩图片
// 配置入口路径和出口路径
const configPath = {
    entry: `${__dirname}/${projectDirPath}`, // 入口目录路径
    output: `${__dirname}/dist/assets/${projectDirname}/`, // 出口目录路径，此处必须是绝对路径。
};
// 环境----开发环境
let configEnvironment = {
    publicPath: `/${projectDirname}/`, // 引入静态资源文件时，资源的前缀路径。
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
        publicPath: `/${projectDirname}/`, // 引入静态资源文件时，资源的前缀路径。
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
    vue: `vue/dist/vue.${configEnvironment.min}js`,
    'vue-router': `vue-router/dist/vue-router.min.js`,
    vuex: `vuex/dist/vuex.min.js`,
    axios: `axios/dist/axios.min.js`,
};
// 入口----配置
const entry = {
    app: `${configPath.entry}/app.js`,
    'this-is-global-file-vendor': ['vue', 'vue-router', 'vuex', 'axios'],
    'this-is-global-file-common': ['zhf.extend', 'zhf.type-of'],
};
// 出口----配置
const output = {
    path: configPath.output, // 出口路径----用来存放打包后文件的输出目录
    publicPath: configEnvironment.publicPath, // 出口路径----指定资源文件引用的目录
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
    new CleanWebpackPlugin([projectDirname], {root: `${__dirname}/dist/assets/`, verbose: true, dry: false}),
    // 插件----编译时期可以创建全局变量
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(myConfig[0]),
        },
    }),
    // 插件----提取css样式到文件
    new ExtractTextPlugin({
        filename: `css/[name].${configEnvironment.contenthash}css`,
        allChunks: true,
    }),
    // 插件----处理视图模板页面文件
    new HtmlWebpackPlugin({
        template: `${configPath.entry}index.html`,
        filename: 'index.html',
        minify: configEnvironment.minView, // 压缩视图模板文件
    }),
    // 插件----把公用的js提取为this-is-global-file.js
    new webpack.optimize.CommonsChunkPlugin({
        names: ['this-is-global-file-common', 'this-is-global-file-vendor', 'this-is-global-file-manifest'], // this-is-global-file-manifest:抽取变动部分，防止第三方控件的多次打包
    }),
];
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
        alias,
        // 后缀----如果不加后缀，则默认按以下后缀查找文件。
        extensions: ['.js', '.vue', '.scss', '.css', '.json'],
    },
    // 入口----配置
    entry,
    // 出口----配置
    output,
    // 插件----配置
    plugins,
    // 监听----配置
    watch: configEnvironment.isWatch,
    // 模块----配置
    module: {
        // rules----loader加载器的规则集合
        rules: [
            // loader----处理sass
            {
                test: /\.(css|scss)$/,
                // exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: configEnvironment.isMinCss, // css压缩
                            },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
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
                test: /\.html/,
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
    // 重载----自动刷新
    devServer: {
        historyApiFallback: true, // 对于单页应用，如果路由不是hash方式，防止回退404，所有的路径都执行index.html。
        inline: true, // 设置为true，代码有变化，浏览器端刷新。
        open: true, // 打开浏览器
        port: 1555, // 端口
        /*
        output.publicPath是：/h5-vue/
        output.path是：`${__dirname}/dist/assets/h5-vue/`
        正确的访问路径是：output.publicPath 拼接上 output.path之后的路径
        所以访问路径是：/h5-vue/index.html。但是使用openPage配置时，前面不要带反斜杠，否则浏览器上会出现两个反斜杠。
        */
        openPage: `${projectDirname}/index.html`, // 打开指定的路径
        // 代理实现接口跨域
        proxy: {
            '/': { // 需要代理的路径
                target: 'http://127.0.0.1:5551/', // 需要代理的域名
                changeOrigin: true, // 必须配置为true，才能正确代理
            },
        },
    },
};
module.exports = webpackConfig;
