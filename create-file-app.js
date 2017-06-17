const CreateFile = require('./libs/function/create-file');
const pathName = process.argv[2];
if (!pathName) {
    console.log('pathName no find');
    return;
}
const fileName = process.argv[3];
if (!fileName) {
    console.log('fileName no find');
    return;
}
const staticPath = `${__dirname}/static/${pathName}/dev`;//前端的静态文件所处的位置
const controllerPath = `controller/${pathName}/`;//控制器文件的位置

//创建静态文件
const file = {
    html: {
        path: `${staticPath}/html/pages/`,
        fileName: fileName,
        content: `<!DOCTYPE html>
<html lang="en">
    <head>
        {{>phone/min/html/partials/head}}
        <link rel="stylesheet" href="/phone/dist/css/pages/${fileName}.css">
    </head>
    <body>
        <div class="g-wrap">
            {{>phone/min/html/partials/header}}
            <!--page start-->
            <div class="g-page">
                <!--结构待续...-->
            </div>
            <!--page end-->
            {{>phone/min/html/partials/footer}}
            <script src="/phone/dist/js/pages/${fileName}.js"></script>
        </div>
    </body>
</html>`,
        extendName: '.html'
    },
    scss: {
        path: `${staticPath}/scss/pages/`,
        fileName: fileName,
        content: `//基础样式
@import "../base/base";

//页面样式
.g-page {
    //样式待续...
}`,
        extendName: '.scss'
    },
    js: {
        path: `${staticPath}/js/pages/`,
        fileName: fileName,
        content: `window.addEventListener('load', function () {
    setTimeout(function () {

        //注释待续...
        (function () {
            //功能待续...
        })();
        
        require('../commons/common');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});`,
        extendName: '.js'
    }
};
for (var attr in file) {
    if (file.hasOwnProperty(attr)) {
        new CreateFile({data: file[attr]});
    }
}

//创建控制器文件
{
    var strToHump = require('./libs/tools/str-to-hump');
    let humpFileName = strToHump({str: fileName});
    new CreateFile({
        data: {
            path: controllerPath,
            fileName: fileName,
            content: `class ${humpFileName} {
    constructor(json) {
        this.opts = extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
        this.handleData();
    }

    handleData() {
        this.pageInfo = {
            config: new PageConfig(this.opts).result,
            data: {
                title: new PageTitle(this.opts).result,
                footerNav: new PageFooterNav(this.opts).result
            }
        };
        var data = this.pageInfo.data;
        if (data.footerNav && data.footerNav.data && data.footerNav.data[fileName]) {
            data.footerNav.data[fileName].isHighlight = true;
        }
    }

    render() {
        this.opts.res.render(page[fileName].view, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }

    getPageInfo() {
        this.opts.res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        this.opts.res.end(JSON.stringify(this.pageInfo));
    }
}

module.exports = ${humpFileName};`,
            extendName: '.js'
        }
    });
}