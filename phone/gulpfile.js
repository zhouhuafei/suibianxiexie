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
const del = require('del');
const fs = require('fs');
class Path {
    constructor() {
        this.publicPath = `${__dirname}/public`;
        this.devPath = `${this.publicPath}/dev`;
        this.minPath = `${this.publicPath}/min`;
        this.scssEnterPath = `${this.devPath}/scss/**/*.scss`;
        this.scssExitPath = `${this.minPath}/css/`;
        this.jsEnterPath = `${this.devPath}/js/**/*.js`;
        this.jsExitPath = `${this.minPath}/js/`;
        this.imagesEnterPath = `${this.devPath}/images/**/*.*`;
        this.imagesExitPath = `${this.minPath}/images/`;
        this.fontEnterPath = `${this.devPath}/font/**/*.*`;
        this.fontExitPath = `${this.minPath}/font/`;
        this.uiEnterPath = `${this.devPath}/ui/**/*.*`;
        this.uiExitPath = `${this.minPath}/ui/`;
        this.htmlEnterPath = `${this.devPath}/html/**/*.html`;
        this.htmlExitPath = `${this.minPath}/html/`;
    }
}
const path = new Path();
//清空dist目录
gulp.task(`del`, function () {
    return del.sync([`${path.minPath}`]);
});
//html
gulp.task(`html`, function () {//html转移并压缩
    return gulp.src(path.htmlEnterPath)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest(path.htmlExitPath))
});
//css
gulp.task(`scssMin`, function () {//scss压缩
    return gulp.src(path.scssEnterPath)
        .pipe(scss())
        .pipe(base64())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(gulp.dest(path.scssExitPath))
});
//js
gulp.task(`js`, function () {//js编译
    return gulp.src(path.jsEnterPath)
        .pipe(browserify())
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest(path.jsExitPath))
});
gulp.task(`jsMin`, function () {//js压缩
    return gulp.src(path.jsEnterPath)
        .pipe(browserify())
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(gulp.dest(path.jsExitPath))
});
//images
gulp.task(`images`, function () {//images转移
    return gulp.src(path.imagesEnterPath)
        .pipe(gulp.dest(path.imagesExitPath))
});
gulp.task(`imagesMin`, function () {//images压缩
    return gulp.src(path.imagesEnterPath)
        .pipe(imagemin())
        .pipe(gulp.dest(path.imagesExitPath))
});
//font
gulp.task(`font`, function () {//font转移
    return gulp.src(path.fontEnterPath)
        .pipe(gulp.dest(path.fontExitPath))
});
//ui
gulp.task(`ui`, function () {//ui转移
    return gulp.src(path.uiEnterPath)
        .pipe(gulp.dest(path.uiExitPath))
});
//监听
gulp.task(`dev:watch`, function () {//开发
    gulp.watch(path.htmlEnterPath, [`html`]);//html监听
    gulp.watch(path.scssEnterPath, [`scssMin`]);//scss监听
    gulp.watch(path.jsEnterPath, [`js`]);//js监听
    gulp.watch(path.imagesEnterPath, [`images`]);//images监听
    gulp.watch(path.fontEnterPath, [`font`]);//font监听
    gulp.watch(path.uiEnterPath, [`ui`]);//ui监听
});
gulp.task(`min:watch`, function () {//压缩
    gulp.watch(path.htmlEnterPath, [`html`]);//html监听
    gulp.watch(path.scssEnterPath, [`scssMin`]);//scss监听
    gulp.watch(path.jsEnterPath, [`jsMin`]);//js监听
    gulp.watch(path.imagesEnterPath, [`imagesMin`]);//images监听
    gulp.watch(path.fontEnterPath, [`font`]);//font监听
    gulp.watch(path.uiEnterPath, [`ui`]);//ui监听
});
//执行任务
gulp.task(`dev`, [`del`, `html`, `scssMin`, `js`, `images`, `font`, `ui`, `dev:watch`]);//开发
gulp.task(`min`, [`del`, `html`, `scssMin`, `jsMin`, `imagesMin`, `font`, `ui`, `min:watch`]);//上线