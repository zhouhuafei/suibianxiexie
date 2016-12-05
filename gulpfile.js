/**
 * Created by zhouhuafei on 16/12/4.
 */
const gulp=require('gulp');
const scss=require('gulp-sass');
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
        this.scssEnterPath=`${this.devPath}/scss/**/*.scss`;
        this.scssExitPath=`${this.distPath}/scss/`;
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
        this.scssEnterPath=`${this.devPath}/scss/**/*.scss`;
        this.scssExitPath=`${this.distPath}/scss/`;
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
    //合并
    gulp.task(`${type}concatScss`,function(){//scss合并
        return gulp.src([`${path.distPath}/scss/base/base.css`,`${path.distPath}/scss/page/index.css`])
            .pipe(concat('common.css'))
            .pipe(gulp.dest(`${path.distPath}/scss/common/`));
    });
    gulp.task(`${type}concatJs`,function(){//js合并
        return gulp.src([`${path.distPath}/js/base/base.js`,`${path.distPath}/js/page/index.js`])
            .pipe(concat('common.js'))
            .pipe(gulp.dest(`${path.distPath}/js/common/`));
    });
    //开发
    gulp.task(`${type}scss`,function(){//scss转移
        return gulp.src(path.scssEnterPath)
            .pipe(scss())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version','safari 5','ie 9','opera 12.1','ios 6','android 4'))
            .pipe(gulp.dest(path.scssExitPath))
    });
    gulp.task(`${type}js`,function(){//js转移
        return gulp.src(path.jsEnterPath)
            .pipe(babel({presets:['es2015']}))
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${type}images`,function(){//images转移
        return gulp.src(path.imagesEnterPath)
            .pipe(gulp.dest(path.imagesExitPath))
    });
    //开发监听
    gulp.task(`${type}:watch`,function(){
        gulp.watch(path.scssEnterPath,[`${type}scss`]);//scss监听
        gulp.watch(path.jsEnterPath,[`${type}js`]);//js监听
        gulp.watch(path.imagesEnterPath,[`${type}images`]);//images监听
    });
    //压缩
    gulp.task(`${type}scssMin`,function(){//scss压缩
        return gulp.src(path.scssEnterPath)
            .pipe(scss())
            .pipe(base64())
            .pipe(autoprefixer('last 2 version','safari 5','ie 9','opera 12.1','ios 6','android 4'))
            .pipe(minifycss())
            .pipe(gulp.dest(path.scssExitPath))
    });
    gulp.task(`${type}jsMin`,function(){//js压缩
        return gulp.src(path.jsEnterPath)
            .pipe(babel({presets:['es2015']}))
            .pipe(uglify())
            .pipe(gulp.dest(path.jsExitPath))
    });
    gulp.task(`${type}imagesMin`,function(){//images压缩
        return gulp.src(path.imagesEnterPath)
            .pipe(imagemin())
            .pipe(gulp.dest(path.imagesExitPath))
    });
    //压缩监听
    gulp.task(`${type}min:watch`,function(){
        gulp.watch(path.scssEnterPath,[`${type}scssMin`]);//scss监听
        gulp.watch(path.jsEnterPath,[`${type}jsMin`]);//js监听
        gulp.watch(path.imagesEnterPath,[`${type}imagesMin`]);//images监听
    });
    //执行任务
    gulp.task(`${type}Dev`,[`${type}scss`,`${type}js`,`${type}images`,`${type}:watch`],function(){//开发
        gulp.start(`${type}concatScss`,`${type}concatJs`);
    });
    gulp.task(`${type}Build`,[`${type}scssMin`,`${type}jsMin`,`${type}imagesMin`,`${type}min:watch`],function(){//上线
        gulp.start(`${type}concatScss`,`${type}concatJs`);
    });
}
task({path:new phone(),type:'phone'});
task({path:new pc(),type:'pc'});