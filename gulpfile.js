const gulp = require('gulp');
const scss = require('gulp-sass');
//const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const base64 = require('gulp-base64');
const browserify = require('gulp-browserify');
const htmlmin = require('gulp-htmlmin');
const inlinesource = require('gulp-inline-source');
const del = require('del');
const fs = require('fs');
//webpack开始
const webpack = require('webpack');//调用插件需要这个
const autoprefixer = require('autoprefixer');//css3加前缀
const ExtractTextPlugin = require("extract-text-webpack-plugin");//scss文件转css文件需要这个
//webpack结束
function fn(type) {
    let mark = type;
    class Path {
        constructor() {
            this.dirname = __dirname;
            this.publicPath = `${this.dirname}/static/${mark}/`;
            this.devPath = `${this.publicPath}dev/`;
            this.minPath = `${this.publicPath}min/`;
            this.scssEnterPath = `${this.devPath}scss/**/*.scss`;
            this.scssExitPath = `${this.minPath}css/`;
            this.jsEnterPath = `${this.devPath}js/**/*.js`;
            this.jsExitPath = `${this.minPath}js/`;
            this.imagesEnterPath = `${this.devPath}images/**/*.*`;
            this.imagesExitPath = `${this.minPath}images/`;
            this.fontEnterPath = `${this.devPath}font/**/*.*`;
            this.fontExitPath = `${this.minPath}font/`;
            this.uiEnterPath = `${this.devPath}ui/**/*.*`;
            this.uiExitPath = `${this.minPath}ui/`;
            this.htmlEnterPath = `${this.devPath}html/**/*.html`;
            this.htmlExitPath = `${this.minPath}html/`;
        }
    }
    let path = new Path();
    //清空dist目录
    gulp.task(`${mark}Del`, function () {
        return del.sync([`${path.minPath}`]);
    });
    //html
    gulp.task(`${mark}Html`, function () {//html转移并压缩
        return gulp.src(path.htmlEnterPath)
            .pipe(inlinesource())
            .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
            .pipe(gulp.dest(path.htmlExitPath))
    });
    //webpack处理css,js,图片开始
    gulp.task("webpack", function (callback) {
        let entry = {};
        fs.readdirSync(path.devPath);
        webpack({
            entry: entry,
            //出口文件
            output: {
                path: `${path.jsExitPath}`,
                //publicPath: '',
                filename: `[name].js`
            },
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
                                    limit: 8192
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
                                    limit: 8192
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
                    //处理html里的src
                    {
                        test: /\.html$/,
                        exclude: /(node_modules|bower_components)/,
                        use: ['html-loader']
                    }
                ]
            },
            //插件
            plugins: [
                //提取css样式到文件
                new ExtractTextPlugin(`[name]${isProduction ? '.[hash:7]' : ''}.css`),
                //处理html
                new HtmlWebpackPlugin({
                    template: `${configPath.entry}app.html`,
                    filename: 'app.html'
                })
            ]
        }, function (err, stats) {
            console.log('err', err);
            console.log('stats', stats);
        });
    });
    //webpack处理css,js,图片结束


    //webpack热更新开始
    // gulp.task("webpack-dev-server", function (callback) {
    //     // Start a webpack-dev-server
    //     var compiler = webpack({
    //         // configuration
    //     });
    //
    //     new WebpackDevServer(compiler, {
    //         // server and middleware options
    //     }).listen(8080, "localhost", function (err) {
    //         if (err) throw new gutil.PluginError("webpack-dev-server", err);
    //         // Server listening
    //         gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    //
    //         // keep the server alive or continue?
    //         // callback();
    //     });
    // });
    //webpack热更新结束

    //监听
    gulp.task(`${mark}Dev:watch`, function () {//开发
        gulp.watch(path.htmlEnterPath, [`${mark}Html`]);//html监听
        gulp.watch(path.fontEnterPath, [`${mark}Font`]);//font监听
        gulp.watch(path.uiEnterPath, [`${mark}Ui`]);//ui监听
    });
    //执行任务
    gulp.task(`${mark}Dev`, [`${mark}Del`, `${mark}Html`, `${mark}Webpack`, `${mark}Dev:watch`]);//开发
}
fn('phone');
fn('pc');