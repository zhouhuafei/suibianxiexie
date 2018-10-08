const CreateFile = require('zhf.create-file'); // 创建文件函数
const projectDirname = process.argv[2]; // 目录名字
if (!projectDirname) {
    console.log('projectDirname no find');
    return;
}
const fileName = process.argv[3]; // 文件名字
if (!fileName) {
    console.log('fileName no find');
    return;
}
const assetsPath = `${__dirname}/app/${projectDirname}/assets/`; // 前端资源文件所处的位置
const controllerPath = `${__dirname}/app/${projectDirname}/controllers/pages/`; // 后台控制器文件所处的位置

// 文件内容
let viewContent = '';
if (projectDirname === 'admin') {
    viewContent = `<!DOCTYPE html>
<html lang="en">
    <head>
        <% include ../commons/head.ejs %>
    </head>
    <body>
        <% include ../commons/top.ejs %>
        <div class="g-wrap">
            <% include ../commons/menu.ejs %>
            <div class="g-body">
                <!--page start-->
                <!--page end-->
            </div>
        </div>
        <% include ../commons/bottom.ejs %>
    </body>
</html>
`;
} else if (projectDirname === 'h5') {
    viewContent = `<!DOCTYPE html>
<html lang="en">
    <head>
        <% include ../commons/head.ejs %>
    </head>
    <body>
        <% include ../commons/top.ejs %>
        <div class="g-wrap">
            <% include ../commons/header.ejs %>
            <div class="g-body">
                <!--page start-->
                <!--page end-->
            </div>
            <% include ../commons/footer.ejs %>
        </div>
        <% include ../commons/bottom.ejs %>
    </body>
</html>
`;
} else if (projectDirname === 'pc') {
    console.log('pc undeveloped');
    return;
} else {
    console.log('projectDirname error');
    return;
}

// 创建资源文件
const file = {
    view: {
        path: `${assetsPath}views/pages/`,
        fileName: fileName,
        content: viewContent,
        extendName: '.ejs',
    },
    scss: {
        path: `${assetsPath}scss/pages/`,
        fileName: fileName,
        content: `@import "../config/config";
`,
        extendName: '.scss',
    },
    js: {
        path: `${assetsPath}js/pages/`,
        fileName: fileName,
        content: `require('../../scss/pages/${fileName}.scss');
const Super = require('../pages-super/super');

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
        content: `const Super = require('../pages-super/super'); // 超类型

class Sub extends Super {
}

module.exports = Sub;
`,
        extendName: '.js',
    },
});
