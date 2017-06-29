const del = require('del');
const gulp = require('gulp');
function fn(projectDir) {
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
    gulp.task(`${configPath.projectDir}Del`, function () {
        return del.sync([`${configPath.buildPath}`]);
    });
    //执行任务
    gulp.task(`${configPath.projectDir}Dev`, [`${configPath.projectDir}Del`]);
    gulp.task(`${configPath.projectDir}Build`, [`${configPath.projectDir}Del`]);
}
fn('phone');
fn('pc');
fn('admin');