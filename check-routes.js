// 检查路由对应的文件是否全部存在
const fs = require('fs');
// check - phone
const phoneApiConfig = require('./app/phone/routes/api/config');
const phonePagesConfig = require('./app/phone/routes/pages/config');
const phoneApiFilesPath = './app/phone/controllers/api/';
const phonePagesFilesPath = './app/phone/controllers/pages/';
const phonePagesViewsPath = './app/phone/assets/views/pages/';
const phonePagesScssPath = './app/phone/assets/scss/pages/';
const phonePagesJsPath = './app/phone/assets/js/pages/';
const phoneApiFiles = fs.readdirSync(phoneApiFilesPath);
const phonePagesFiles = fs.readdirSync(phonePagesFilesPath);
const phonePagesViews = fs.readdirSync(phonePagesViewsPath);
const phonePagesScss = fs.readdirSync(phonePagesScssPath);
const phonePagesJs = fs.readdirSync(phonePagesJsPath);
Object.keys(phoneApiConfig).forEach(function (k) {
    const name = `${k}.js`;
    if (phoneApiFiles.indexOf(name) === -1) {
        console.log(`文件缺失 ${phoneApiFilesPath}${name}`);
    }
});
Object.keys(phonePagesConfig).forEach(function (k) {
    let name = `${k}.js`;
    if (phonePagesFiles.indexOf(name) === -1) {
        console.log(`文件缺失 ${phonePagesFilesPath}${name}`);
    }
    if (phonePagesJs.indexOf(name) === -1) {
        console.log(`文件缺失 ${phonePagesJsPath}${name}`);
    }
    name = `${k}.ejs`;
    if (phonePagesViews.indexOf(name) === -1) {
        console.log(`文件缺失 ${phonePagesViewsPath}${name}`);
    }
    name = `${k}.scss`;
    if (phonePagesScss.indexOf(name) === -1) {
        console.log(`文件缺失 ${phonePagesScssPath}${name}`);
    }
});
// check - admin
const adminApiConfig = require('./app/admin/routes/api/config');
const adminPagesConfig = require('./app/admin/routes/pages/config');
const adminApiFilesPath = './app/admin/controllers/api/';
const adminPagesFilesPath = './app/admin/controllers/pages/';
const adminPagesViewsPath = './app/admin/assets/views/pages/';
const adminPagesScssPath = './app/admin/assets/scss/pages/';
const adminPagesJsPath = './app/admin/assets/js/pages/';
const adminApiFiles = fs.readdirSync(adminApiFilesPath);
const adminPagesFiles = fs.readdirSync(adminPagesFilesPath);
const adminPagesViews = fs.readdirSync(adminPagesViewsPath);
const adminPagesScss = fs.readdirSync(adminPagesScssPath);
const adminPagesJs = fs.readdirSync(adminPagesJsPath);
Object.keys(adminApiConfig).forEach(function (k) {
    const name = `${k}.js`;
    if (adminApiFiles.indexOf(name) === -1) {
        console.log(`文件缺失 ${adminApiFilesPath}${name}`);
    }
});
Object.keys(adminPagesConfig).forEach(function (k) {
    let name = `${k}.js`;
    if (adminPagesFiles.indexOf(name) === -1) {
        console.log(`文件缺失 ${adminPagesFilesPath}${name}`);
    }
    if (adminPagesJs.indexOf(name) === -1) {
        console.log(`文件缺失 ${adminPagesJsPath}${name}`);
    }
    name = `${k}.ejs`;
    if (adminPagesViews.indexOf(name) === -1) {
        console.log(`文件缺失 ${adminPagesViewsPath}${name}`);
    }
    name = `${k}.scss`;
    if (adminPagesScss.indexOf(name) === -1) {
        console.log(`文件缺失 ${adminPagesScssPath}${name}`);
    }
});
