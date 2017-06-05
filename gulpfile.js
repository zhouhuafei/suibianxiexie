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
const inlinesource = require('gulp-inline-source');
const del = require('del');
const fs = require('fs');
function fn(type) {
    var mark = type;
    class Path {
        constructor() {
            this.dirname = __dirname;
            this.publicPath = `${this.dirname}/public/${mark}/`;
            this.devPath = `${this.publicPath}src/`;
            this.minPath = `${this.publicPath}dist/`;
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
    var path = new Path();
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
    //css
    gulp.task(`${mark}ScssMin`, function () {//scss压缩
        return gulp.src(path.scssEnterPath)
            .pipe(scss())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(minifycss())
            .pipe(gulp.dest(path.scssExitPath))
    });
    //js
    gulp.task(`${mark}Js`, function () {//js编译
        return gulp.src(path.jsEnterPath)
            .pipe(browserify())
            .pipe(babel({presets: ['es2015']}))
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${mark}JsMin`, function () {//js压缩
        return gulp.src(path.jsEnterPath)
            .pipe(browserify())
            .pipe(babel({presets: ['es2015']}))
            .pipe(uglify())
            .pipe(gulp.dest(path.jsExitPath))
    });
    //images
    gulp.task(`${mark}Images`, function () {//images转移
        return gulp.src(path.imagesEnterPath)
            .pipe(gulp.dest(path.imagesExitPath))
    });
    gulp.task(`${mark}ImagesMin`, function () {//images压缩
        return gulp.src(path.imagesEnterPath)
            .pipe(imagemin())
            .pipe(gulp.dest(path.imagesExitPath))
    });
    //font
    gulp.task(`${mark}Font`, function () {//font转移
        return gulp.src(path.fontEnterPath)
            .pipe(gulp.dest(path.fontExitPath))
    });
    //ui
    gulp.task(`${mark}Ui`, function () {//ui转移
        return gulp.src(path.uiEnterPath)
            .pipe(gulp.dest(path.uiExitPath))
    });
    //监听
    gulp.task(`${mark}Dev:watch`, function () {//开发
        gulp.watch(path.htmlEnterPath, [`${mark}Html`]);//html监听
        gulp.watch(path.scssEnterPath, [`${mark}ScssMin`]);//scss监听
        gulp.watch(path.jsEnterPath, [`${mark}Js`]);//js监听
        gulp.watch(path.imagesEnterPath, [`${mark}Images`]);//images监听
        gulp.watch(path.fontEnterPath, [`${mark}Font`]);//font监听
        gulp.watch(path.uiEnterPath, [`${mark}Ui`]);//ui监听
    });
    gulp.task(`${mark}Min:watch`, function () {//压缩
        gulp.watch(path.htmlEnterPath, [`${mark}Html`]);//html监听
        gulp.watch(path.scssEnterPath, [`${mark}ScssMin`]);//scss监听
        gulp.watch(path.jsEnterPath, [`${mark}JsMin`]);//js监听
        gulp.watch(path.imagesEnterPath, [`${mark}ImagesMin`]);//images监听
        gulp.watch(path.fontEnterPath, [`${mark}Font`]);//font监听
        gulp.watch(path.uiEnterPath, [`${mark}Ui`]);//ui监听
    });
    //执行任务
    gulp.task(`${mark}Dev`, [`${mark}Del`, `${mark}Html`, `${mark}ScssMin`, `${mark}Js`, `${mark}Images`, `${mark}Font`, `${mark}Ui`, `${mark}Dev:watch`]);//开发
    gulp.task(`${mark}Min`, [`${mark}Del`, `${mark}Html`, `${mark}ScssMin`, `${mark}JsMin`, `${mark}ImagesMin`, `${mark}Font`, `${mark}Ui`, `${mark}Min:watch`]);//压缩
    gulp.task(`${mark}Build`, [`${mark}Del`, `${mark}Html`, `${mark}ScssMin`, `${mark}JsMin`, `${mark}ImagesMin`, `${mark}Font`, `${mark}Ui`]);//上线
}
fn('phone');
fn('pc');