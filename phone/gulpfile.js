/**
 * Created by zhouhuafei on 16/12/4.
 */
const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const base64 = require('gulp-base64');
const browserify = require('gulp-browserify');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');
class Path {
    constructor(opt) {
        this.publicPath = `${__dirname}/public`;
        if (opt) {
            this.basePath = `${this.publicPath}/${opt.type}`;
            this.devPath = `${this.basePath}/dev`;
            this.distPath = `${this.basePath}/dist`;
            this.scssEnterPath = `${this.devPath}/scss/**/*.scss`;
            this.scssExitPath = `${this.distPath}/scss/`;
            this.jsEnterPath = `${this.devPath}/js/**/*.js`;
            this.jsExitPath = `${this.distPath}/js/`;
            this.imagesEnterPath = `${this.devPath}/images/**/*.*`;
            this.imagesExitPath = `${this.distPath}/images/`;
            this.fontEnterPath = `${this.devPath}/font/**/*.*`;
            this.fontExitPath = `${this.distPath}/font/`;
            this.uiEnterPath = `${this.devPath}/ui/**/*.*`;
            this.uiExitPath = `${this.distPath}/ui/`;
            this.htmlEnterPath = `${this.devPath}/html/**/*.html`;
            this.htmlExitPath = `${this.distPath}/html/`;
        }
    }
}
function task(opt) {
    if (!opt) {
        return false;
    }
    const path = opt.path;
    const type = opt.type;
    //转移
    gulp.task(`${type}font`, function () {//font转移
        return gulp.src(path.fontEnterPath)
            .pipe(gulp.dest(path.fontExitPath))
    });
    gulp.task(`${type}ui`, function () {//ui转移
        return gulp.src(path.uiEnterPath)
            .pipe(gulp.dest(path.uiExitPath))
    });
    gulp.task(`${type}html`, function () {//html转移并压缩
        return gulp.src(path.htmlEnterPath)
            .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
            .pipe(gulp.dest(path.htmlExitPath))
    });
    //开发
    gulp.task(`${type}scss`, function () {//scss编译
        return gulp.src(path.scssEnterPath)
            .pipe(scss())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest(path.scssExitPath))
    });
    gulp.task(`${type}js`, function () {//js编译
        return gulp.src(path.jsEnterPath)
            .pipe(browserify())
            .pipe(babel({presets: ['es2015']}))
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${type}images`, function () {//images转移
        return gulp.src(path.imagesEnterPath)
            .pipe(gulp.dest(path.imagesExitPath))
    });
    //开发监听
    gulp.task(`${type}:watch`, function () {
        gulp.watch(path.scssEnterPath, [`${type}scss`]);//scss监听
        gulp.watch(path.jsEnterPath, [`${type}js`]);//js监听
        gulp.watch(path.imagesEnterPath, [`${type}images`]);//images监听
        gulp.watch(path.fontEnterPath, [`${type}font`]);//font监听
        gulp.watch(path.uiEnterPath, [`${type}ui`]);//ui监听
        gulp.watch(path.htmlEnterPath, [`${type}html`]);//html监听
    });
    //压缩
    gulp.task(`${type}scssMin`, function () {//scss压缩
        return gulp.src(path.scssEnterPath)
            .pipe(scss())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(minifycss())
            .pipe(gulp.dest(path.scssExitPath))
    });
    gulp.task(`${type}jsMin`, function () {//js压缩
        return gulp.src(path.jsEnterPath)
            .pipe(browserify())
            .pipe(babel({presets: ['es2015']}))
            .pipe(uglify())
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${type}imagesMin`, function () {//images压缩
        return gulp.src(path.imagesEnterPath)
            .pipe(imagemin())
            .pipe(gulp.dest(path.imagesExitPath))
    });
    //压缩监听
    gulp.task(`${type}min:watch`, function () {
        gulp.watch(path.scssEnterPath, [`${type}scssMin`]);//scss监听
        gulp.watch(path.jsEnterPath, [`${type}jsMin`]);//js监听
        gulp.watch(path.imagesEnterPath, [`${type}imagesMin`]);//images监听
        gulp.watch(path.fontEnterPath, [`${type}font`]);//font监听
        gulp.watch(path.uiEnterPath, [`${type}ui`]);//ui监听
        gulp.watch(path.htmlEnterPath, [`${type}html`]);//html监听
    });
    //执行任务
    gulp.task(`${type}Dev`, [`${type}font`, `${type}ui`, `${type}html`, `${type}scss`, `${type}js`, `${type}images`, `${type}:watch`]);//开发
    gulp.task(`${type}Min`, [`${type}font`, `${type}ui`, `${type}html`, `${type}scssMin`, `${type}jsMin`, `${type}imagesMin`, `${type}min:watch`]);//上线
}
{
    const path = new Path();
    const publicPath = path.publicPath;
    const result = fs.readdirSync(publicPath);
    result.forEach(function (v) {
        var lsTat = fs.lstatSync(`${publicPath}/${v}`);
        if (lsTat.isDirectory()) {
            task({path: new Path({type: v}), type: v});
        }
    });
}