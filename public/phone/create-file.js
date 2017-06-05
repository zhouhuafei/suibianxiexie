const CreateFile = require('../../libs/function/create-file');
const fileName = process.argv[2];
const publicPath = `${__dirname}/src`;
const file = {
    html: {
        path: `${publicPath}/html/pages/`,
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
        path: `${publicPath}/scss/pages/`,
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
        path: `${publicPath}/js/pages/`,
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