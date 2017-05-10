var fileName = process.argv[2];
var fs = require('fs');
class Path {
    constructor() {
        this.nowPath = __dirname;//当前路径
        this.htmlPath = `${__dirname}/public/dev/html/pages/`;//html的路径
        this.scssPath = `${__dirname}/public/dev/scss/pages/`;//scss的路径
        this.jsPath = `${__dirname}/public/dev/js/pages/`;//js的路径
    }
}
const path = new Path();//路径

var extend = require('./public/dev/js/function/extend');

function CreateFile(json) {
    var opts = extend({
        defaults: {
            config: {
                isCover: false,//是否覆盖已有文件
            },
            data: {
                path: '',//路径
                fileName: '',//文件名
                extendName: ''//扩展名
            }
        },
        inherits: json
    });
    this.init();
}
CreateFile.prototype.init=function () {
    var data = opts.data;
    var path = data.path;
    var fileName = data.fileName;
    var extendName = data.extendName;
    var file = path + fileName + extendName;
    if (!path) {
        console.log('路径不存在');
    }
    if (!fileName) {
        console.log('文件名不存在');
    }
    if (!extendName) {
        console.log('扩展名不存在');
    }
    fs.readFile(file, function (err, res) {
        if (opts.config.isCover) {

        } else {
            if (res) {
                console.log(`文件已经存在,文件路径:${file}`);
            } else {
                fs.writeFile(file, `123`, function (err) {
                    if (err) {
                        console.log(`错误信息:${err}`);
                    } else {
                        console.log(`文件创建成功,文件路径:${file}`);
                    }
                });
            }
        }
    });
};
CreateFile.prototype.writeFile=function () {

};
new CreateFile({
    data: {
        path: `${__dirname}/`, fileName: 'haha', extendName: '.txt'
    }
});