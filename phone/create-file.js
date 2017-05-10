const fileName = process.argv[2];
const fs = require('fs');
class Path {
    constructor() {
        this.nowPath = __dirname;//当前路径
        this.htmlPath = `${__dirname}/public/dev/html/pages/`;//html的路径
        this.scssPath = `${__dirname}/public/dev/scss/pages/`;//scss的路径
        this.jsPath = `${__dirname}/public/dev/js/pages/`;//js的路径
    }
}
const path = new Path();//路径

const CreateFile = require('./libs/function/create-file');
new CreateFile({
    data: {
        path: `${__dirname}/`,
        fileName: 'haha',
        extendName: '.txt',
        content: '888'
    }
});

//创建html scss js文件待续...