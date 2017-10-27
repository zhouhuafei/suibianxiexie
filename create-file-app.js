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
const assetsPath = `${__dirname}/app/${projectDirname}/assets/`;// 前端资源文件所处的位置
const controllerPath = `${__dirname}/app/${projectDirname}/controllers/pages/`;// 后台控制器文件所处的位置

// 创建资源文件
const file = {
    view: {
        path: `${assetsPath}views/pages/`,
        fileName: fileName,
        content: `<!DOCTYPE html>
<html lang="en">
    <head>
        {{>${projectDirname}/partials/head}}
    </head>
    <body>
        <div class="g-wrap">
            {{>${projectDirname}/partials/header}}            
            <div class="g-body">
                <!--page start-->
                <!--page end-->
            </div>
            {{>${projectDirname}/partials/footer}}
        </div>
    </body>
</html>
`,
        extendName: '.hbs',
    },
    scss: {
        path: `${assetsPath}scss/pages/`,
        fileName: fileName,
        content: `@import "../config/config";

.g-body {
}
`,
        extendName: '.scss',
    },
    js: {
        path: `${assetsPath}js/pages/`,
        fileName: fileName,
        content: `require('../../scss/pages/${fileName}.scss');
const Super = require('./super');

class Sub extends Super {
}

new Sub();
`,
        extendName: '.js',
    },
};
Object.keys(file).forEach(function (attr) {
    new CreateFile({data: file[attr]});
});

// 创建控制器文件
new CreateFile({
    data: {
        path: controllerPath,
        fileName: fileName,
        content: `const Super = require('./super'); // 超类型

class Sub extends Super {
}

module.exports = Sub;
`,
        extendName: '.js',
    },
});
