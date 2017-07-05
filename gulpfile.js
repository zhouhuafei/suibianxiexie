const myConfig = process.env.myConfig.split('-');
myConfig.forEach(function (v, i, a) {
    a[i] = v.trim();
});
const isProduction = myConfig[0] === 'production';//是否是生产环境
const projectDir = myConfig[1];//项目目录
const del = require('del');
const gulp = require('gulp');
class ConfigPath {
    constructor() {
        this.projectDir = projectDir;//项目目录
        this.projectPath = `${__dirname}/static/${this.projectDir}/`;//项目的路径
        this.devPath = `${this.projectPath}src/`;//开发的目录
        this.buildPath = `${this.projectPath}dist/`;//生产的目录
    }
}
let configPath = new ConfigPath();
//清空dist目录
gulp.task(`del`, function () {
    return del.sync([`${configPath.buildPath}`]);
});
//执行任务
if (isProduction) {
    gulp.task(`default`, [`del`]);
} else {
    gulp.task(`default`, []);
}