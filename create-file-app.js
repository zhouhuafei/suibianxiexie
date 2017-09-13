const tools = require('./utils/tools');// 工具方法集合
const applications = require('./utils/applications');
// 应用方法集合
const CreateFile = applications.createFile();// 创建文件函数
const projectDirname = process.argv[2];// 目录名字
if (!projectDirname) {
    console.log('projectDirname no find');
    return;
}
const fileName = process.argv[3];// 文件名字
if (!fileName) {
    console.log('fileName no find');
    return;
}
const routeConfig = require(`./app/${projectDirname}/routes/pages/config`);// 路由的配置
const pageTitle = routeConfig[fileName].title;// 页面的标题
const staticPath = `${__dirname}/app/${projectDirname}/assets/`;// 前端静态文件所处的位置
const controllerPath = `${__dirname}/app/${projectDirname}/controllers/pages/`;// 后台控制器文件所处的位置

// 创建静态文件
const file = {
    view: {
        path: `${staticPath}views/pages/`,
        fileName: fileName,
        content: `<!DOCTYPE html>
<html lang="en">
    <head>
        {{>${projectDirname}/partials/head}}
    </head>
    <body>
        <div class="g-wrap">
            {{>${projectDirname}/partials/header}}
            <!--page start-->
            <div class="g-body">
                <!--结构待续...-->
            </div>
            <!--page end-->
            {{>${projectDirname}/partials/footer}}
        </div>
    </body>
</html>`,
        extendName: '.hbs',
    },
    scss: {
        path: `${staticPath}scss/pages/`,
        fileName: fileName,
        content: `//基础样式
@import "../base/config";

//页面样式
.g-body {
    //样式待续...
}`,
        extendName: '.scss',
    },
    js: {
        path: `${staticPath}js/pages/`,
        fileName: fileName,
        content: `window.addEventListener('load', function () {
    setTimeout(function () {
        // 注释待续...
        (function () {
            // 功能待续...
        })();

        require('../../scss/pages/${fileName}.scss');// 当前页面用到的样式
        const common = require('../commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
`,
        extendName: '.js',
    },
};
Object.keys(file).forEach(function (attr) {
    new CreateFile({data: file[attr]});
});

// 创建控制器文件
{
    const humpFileName = tools.strToHump({str: `-${fileName}`});
    new CreateFile({
        data: {
            path: controllerPath,
            fileName: fileName,
            content: `// ${pageTitle},页面路由的控制器
let Super = require('./super');// 超类型

class ${humpFileName} extends Super {
    constructor(json) {
        super(json);
        this.fileName = this.path.basename(__filename, '.js');// 覆盖超类型的属性
        this.init();// 调用超类型的初始化数据
        this.render();// 渲染视图(渲染数据)
    }

    // 处理数据dataInfo
    handleData() {
        const req = this.opts.req;
        const query = req.query;
        // dataInfo数据处理待续...
    }
}

module.exports = ${humpFileName};
`,
            extendName: '.js',
        },
    });
}
