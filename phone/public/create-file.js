const CreateFile = require('../libs/function/create-file');
const fileName = process.argv[2];
const file = {
    html: {
        path: `${__dirname}/dev/html/pages/`,
        fileName: fileName,
        content: `<!DOCTYPE html>
<html lang="en">
    <head>
        {{>head}}
        <link rel="stylesheet" href="../../../min/css/pages/sample.css">
    </head>
    <body>
        <div class="g-wrap">
            {{>header}}
            <!--page start-->
            <div class="g-page">
                <!--结构待续...-->
            </div>
            <!--page end-->
            {{>footer}}
            <script src="../../../min/js/pages/sample.js"></script>
        </div>
    </body>
</html>`,
        extendName: '.html'
    },
    scss: {
        path: `${__dirname}/dev/scss/pages/`,
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
        path: `${__dirname}/dev/js/pages/`,
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