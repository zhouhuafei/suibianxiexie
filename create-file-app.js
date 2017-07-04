const CreateFile = require('./libs/function/create-file');//创建文件函数
const pathName = process.argv[2];//目录名字
if (!pathName) {
    console.log('pathName no find');
    return;
}
const fileName = process.argv[3];//文件名字
if (!fileName) {
    console.log('fileName no find');
    return;
}
const routeConfig = require(`./route/${pathName}/config`);//路由的配置
const pageTitle = routeConfig[fileName].title;//页面的标题
const staticPath = `${__dirname}/static/${pathName}/src`;//前端静态文件所处的位置
const controllerPath = `controller/${pathName}/pages/`;//后台控制器文件所处的位置

//创建静态文件
const file = {
    view: {
        path: `${staticPath}/view/pages/`,
        fileName: fileName,
        content: `<!DOCTYPE html>
<html lang="en">
    <head>
        {{>phone/dist/views/partials/head}}
    </head>
    <body>
        <div class="g-wrap">
            {{>phone/dist/views/partials/header}}
            <!--page start-->
            <div class="g-body">
                <!--结构待续...-->
            </div>
            <!--page end-->
            {{>phone/dist/views/partials/footer}}
        </div>
    </body>
</html>`,
        extendName: '.hbs'
    },
    scss: {
        path: `${staticPath}/scss/pages/`,
        fileName: fileName,
        content: `//基础样式
@import "../base/config";

//页面样式
.g-body {
    //样式待续...
}`,
        extendName: '.scss'
    },
    js: {
        path: `${staticPath}/js/pages/`,
        fileName: fileName,
        content: `window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/${fileName}.scss');
        let header = require('../commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //注释待续...
        (function () {
            //功能待续...
        })();

        let footer = require('../commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});`,
        extendName: '.js'
    }
};
for (let attr in file) {
    if (file.hasOwnProperty(attr)) {
        new CreateFile({data: file[attr]});
    }
}

//创建控制器文件
{
    let strToHump = require('./libs/tools/str-to-hump');
    let humpFileName = strToHump({str: `-${fileName}`});
    new CreateFile({
        data: {
            path: controllerPath,
            fileName: fileName,
            content: `//${pageTitle},页面路由的控制器
var Super = require('../super');//超类型

class ${humpFileName} extends Super {
    constructor(json) {
        super(json);
        this.fileName = this.path.basename(__filename, '.js');//覆盖超类型的属性
        this.initData();//调用超类型的初始化数据
        this.handleData();//处理数据pageInfo
    }

    handleData() {
        var req = this.opts.req;
        var query = req.query;
        //pageInfo数据处理待续...
    }
}

module.exports = ${humpFileName};`,
            extendName: '.js'
        }
    });
}