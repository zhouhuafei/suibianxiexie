/**
 * Created by zhouhuafei on 16/12/4.
 */
const gulp=require('gulp');
const sass=require('gulp-sass');
const autoprefixer=require('gulp-autoprefixer');
const minifycss=require('gulp-minify-css');
const babel=require('gulp-babel');
const concat=require('gulp-concat');
const uglify=require('gulp-uglify');
const imagemin=require('gulp-imagemin');
const base64=require('gulp-base64');
class phone {
    constructor(){
        this.basePath=`${__dirname}/public/phone`;
        this.devPath=`${this.basePath}/dev`;
        this.distPath=`${this.basePath}/dist`;
        this.sassEnterPath=`${this.devPath}/sass/**/*.scss`;
        this.sassExitPath=`${this.distPath}/sass/`;
        this.jsEnterPath=`${this.devPath}/js/**/*.js`;
        this.jsExitPath=`${this.distPath}/js/`;
        this.imagesEnterPath=`${this.devPath}/images/**/*.*`;
        this.imagesExitPath=`${this.distPath}/images/`
    }
}
class pc {
    constructor(){
        this.basePath=`${__dirname}/public/pc`;
        this.devPath=`${this.basePath}/dev`;
        this.distPath=`${this.basePath}/dist`;
        this.sassEnterPath=`${this.devPath}/sass/**/*.scss`;
        this.sassExitPath=`${this.distPath}/sass/`;
        this.jsEnterPath=`${this.devPath}/js/**/*.js`;
        this.jsExitPath=`${this.distPath}/js/`;
        this.imagesEnterPath=`${this.devPath}/images/**/*.*`;
        this.imagesExitPath=`${this.distPath}/images/`
    }
}
function task(opt){
    if(!opt){
        return false;
    }
    const path=opt.path;
    const type=opt.type;
    //sass
    gulp.task(`${type}sass`,function(){
        return gulp.src(path.sassEnterPath)
            .pipe(sass())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version','safari 5','ie 9','opera 12.1','ios 6','android 4'))
            .pipe(gulp.dest(path.sassExitPath))
    });
    gulp.task(`${type}sass:watch`,function(){
        gulp.watch(path.sassEnterPath,[`${type}sass`]);
    });
    gulp.task(`${type}sassmin`,function(){
        return gulp.src(path.sassEnterPath)
            .pipe(sass())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version','safari 5','ie 9','opera 12.1','ios 6','android 4'))
            .pipe(minifycss())
            .pipe(gulp.dest(path.sassExitPath))
    });
    gulp.task(`${type}sassmin:watch`,function(){
        gulp.watch(path.sassEnterPath,[`${type}sassmin`]);
    });
    //js
    gulp.task(`${type}js`,function(){
        return gulp.src(path.jsEnterPath)
            .pipe(babel({presets:['es2015']}))
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${type}js:watch`,function(){
        gulp.watch(path.jsEnterPath,[`${type}js`]);
    });
    gulp.task(`${type}jsmin`,function(){
        return gulp.src(path.jsEnterPath)
            .pipe(babel({presets:['es2015']}))
            .pipe(uglify())
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${type}jsmin:watch`,function(){
        gulp.watch(path.jsEnterPath,[`${type}jsmin`]);
    });
    //images
    gulp.task(`${type}images`,function(){
        return gulp.src(path.imagesEnterPath)
            .pipe(gulp.dest(path.imagesExitPath))
    });
    gulp.task(`${type}images:watch`,function(){
        gulp.watch(path.imagesEnterPath,[`${type}images`]);
    });
    gulp.task(`${type}imagesmin`,function(){
        return gulp.src(path.imagesEnterPath)
            .pipe(imagemin())
            .pipe(gulp.dest(path.imagesExitPath))
    });
    gulp.task(`${type}imagesmin:watch`,function(){
        gulp.watch(path.imagesEnterPath,[`${type}imagesmin`]);
    });

    //concat(有问题待续...前台和后台怎么分...应该是两个项目)
    gulp.task(`${type}concat`,function(){
        return gulp.src([`${path.distPath}/js/base/base.js`,`${path.distPath}/js/page/index.js`])
            .pipe(concat('common.js'))
            .pipe(gulp.dest(`${path.distPath}/js/`));
    });
    gulp.task(`${type}concat:watch`,function(){
        //gulp.watch(path.sassEnterPath,[`${type}concat`]);
    });
    //task
    gulp.task(`${type}Dev`,[`${type}sass`,`${type}sass:watch`,`${type}js`,`${type}js:watch`,`${type}images`,`${type}images:watch`,`${type}concat`,`${type}concat:watch`]);
    gulp.task(`${type}Build`,[`${type}sassmin`,`${type}sassmin:watch`,`${type}jsmin`,`${type}jsmin:watch`,`${type}imagesmin`,`${type}imagesmin:watch`,`${type}concat`,`${type}concat:watch`]);
}
task({path:new phone(),type:'phone'});
task({path:new pc(),type:'pc'});