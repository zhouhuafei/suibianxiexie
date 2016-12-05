var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpScss = require('gulp-sass');
var gulpCssMin = require('gulp-cssmin');
var gulpImagemin = require('gulp-imagemin');
var gulpUglify = require('gulp-uglify');
var gulpBabel = require('gulp-babel');
var del = require('del');
var PATH = 'dist';

gulp.task('clean-all', function (cb) {
    return del([PATH], cb);
});

gulp.task('dev-js-all', function() {
    return gulp.src(['src/js/**/*.js', '!src/js/base/**/*.js'])
    // .pipe(gulpBabel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('dev-js-base', function() {
    return gulp.src(['src/js/base/zepto.min.js', 'src/js/base/base.js', 'src/js/base/sea.js'])
    // .pipe(gulpBabel({ presets: ['es2015'] }))
        .pipe(gulpConcat('base.js'))
        .pipe(gulp.dest(PATH+ '/js'));
});

gulp.task('dev-scss', function() {
    return gulp.src(['src/sass/**/*.scss'])
    .pipe(gulpScss({outputStyle:'expanded'}))
    .pipe(gulp.dest(PATH + '/css'));
});

gulp.task('dev-img', function() {
    return gulp.src(['src/images/**/*.{jpg,png,jpeg,gif}'], { base: './src/images/' })
    .pipe(gulp.dest(PATH + '/images'));
});

gulp.task('dev-fonts',function(){
    return gulp.src(['src/sass/font/fonts/**/*.{woff,eot,svg,ttf}'])
    .pipe(gulp.dest(PATH + '/css/fonts'));
});

gulp.task('min-css', ['dev-scss'], function(){
    return gulp.src('dist/css/**/*.css')
    .pipe(gulpCssMin())
    .pipe(gulp.dest(PATH + '/css'));
});

gulp.task('min-img', ['dev-img'], function(){
    return gulp.src(['dist/images/**/*.{jpg,png,jpeg,gif}'])
    .pipe(gulpImagemin())
    .pipe(gulp.dest(PATH + '/images'));
});

gulp.task('min-js', ['dev-js-base', 'dev-js-all'], function(){
    return gulp.src(['dist/js/**/*.js'])
    .pipe(gulpUglify({
        mangle: {
            except: ['require', 'exports', 'module']
        }
    }))
    .pipe(gulp.dest(PATH + '/js'));
});

gulp.task('watch', function(){
    gulp.watch(['src/sass/**/*.scss'], ['dev-scss', 'dev-fonts']);
    gulp.watch(['src/js/base/**/*.js'], ['dev-js-base']);
    gulp.watch(['src/js/**/*.js', '!src/js/base/**/*.js'], ['dev-js-all']);
    gulp.watch(['src/images/**/*.{jpg,png,jpeg,gif}'], ['dev-img']);
});

gulp.task('dev', function(){
    gulp.start('dev-fonts', 'dev-js-all', 'dev-js-base', 'dev-scss', 'dev-img', 'watch');
});

gulp.task('build', ['clean-all'], function(){
    gulp.start('dev-fonts', 'min-css', 'min-img', 'min-js');
});