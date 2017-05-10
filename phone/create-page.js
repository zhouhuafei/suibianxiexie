var fileName = process.argv[2];
var fs = require('fs');
var filePath = `./src/pages/`;
var dirPath = `${filePath + fileName + '/'}`;
fs.mkdirSync(dirPath);

//路径
class Path {
    constructor() {
        this.nowPath = __dirname;//当前路径
        this.htmlPath = `${__dirname}/public/dev/html/pages/`;//html的路径
        this.scssPath = `${__dirname}/public/dev/scss/pages/`;//scss的路径
        this.jsPath = `${__dirname}/public/dev/js/pages/`;//js的路径
    }
}
const path = new Path();

//extname扩展名  content内容
//0.到指定目录去查找指定的文件
//1.找不到就进行创建


fs.readFile(dirPath, function (err, res) {
    arr.forEach(function (v) {
        fs.writeFile(`${dirPath + fileName}.${v[0]}`, `${v[1]}`);
    })
});