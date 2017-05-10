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
//extname扩展名  content内容
//0.到指定目录去查找指定的文件
//1.找不到就进行创建

console.log(path.htmlPath + fileName + '.html');


var extend = require('./public/dev/js/function/extend');
function CreateFile(json) {
    var opts = extend({
        defaults: {
            path: '',//路径
            fileName: '',//文件名
            extname: ''//扩展名
        },
        inherits: json
    });
    var path = opts.path;
    var fileName = opts.fileName;
    var extname = opts.extname;
    if (!path) {
        console.log('路径不存在');
    }
    if (!fileName) {
        console.log('文件名不存在');
    }
    if (!extname) {
        console.log('扩展名不存在');
    }
    fs.readFile(path + fileName + extname, function (err, res) {
        console.log(err, res);
        if (res) {
            console.log('文件已经存在,文件路径:');
        } else {
            //fs.writeFile(`${dirPath + fileName}.${v[0]}`, `${v[1]}`, function (error) {
            //    console.log(`文件创建成功,文件路径:`);
            //});
        }
    });
}
CreateFile({path:'',fileName:'',extname:''});
