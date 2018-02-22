/**
 * 检测路由对应的文件是否有所缺失
 * */

const fs = require('fs');

class Phone {
    constructor() {
        this.apiConfig = require('./app/phone/routes/api/config');
        this.pagesConfig = require('./app/phone/routes/pages/config');
        this.apiFilesPath = './app/phone/controllers/api/';
        this.pagesFilesPath = './app/phone/controllers/pages/';
        this.pagesViewsPath = './app/phone/assets/views/pages/';
        this.pagesScssPath = './app/phone/assets/scss/pages/';
        this.pagesJsPath = './app/phone/assets/js/pages/';
        this.apiFiles = fs.readdirSync(this.apiFilesPath);
        this.pagesFiles = fs.readdirSync(this.pagesFilesPath);
        this.pagesViews = fs.readdirSync(this.pagesViewsPath);
        this.pagesScss = fs.readdirSync(this.pagesScssPath);
        this.pagesJs = fs.readdirSync(this.pagesJsPath);
    }
}

class Admin {
    constructor() {
        this.apiConfig = require('./app/admin/routes/api/config');
        this.pagesConfig = require('./app/admin/routes/pages/config');
        this.apiFilesPath = './app/admin/controllers/api/';
        this.pagesFilesPath = './app/admin/controllers/pages/';
        this.pagesViewsPath = './app/admin/assets/views/pages/';
        this.pagesScssPath = './app/admin/assets/scss/pages/';
        this.pagesJsPath = './app/admin/assets/js/pages/';
        this.apiFiles = fs.readdirSync(this.apiFilesPath);
        this.pagesFiles = fs.readdirSync(this.pagesFilesPath);
        this.pagesViews = fs.readdirSync(this.pagesViewsPath);
        this.pagesScss = fs.readdirSync(this.pagesScssPath);
        this.pagesJs = fs.readdirSync(this.pagesJsPath);
    }
}

function check(obj) {
    Object.keys(obj.apiConfig).forEach(function (k) {
        const name = `${k}.js`;
        if (obj.apiFiles.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.apiFilesPath}${name}`);
        }
    });
    Object.keys(obj.pagesConfig).forEach(function (k) {
        let name = `${k}.js`;
        if (obj.pagesFiles.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.pagesFilesPath}${name}`);
        }
        if (obj.pagesJs.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.pagesJsPath}${name}`);
        }
        name = `${k}.ejs`;
        if (obj.pagesViews.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.pagesViewsPath}${name}`);
        }
        name = `${k}.scss`;
        if (obj.pagesScss.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.pagesScssPath}${name}`);
        }
    });
}

check(new Phone());
check(new Admin());
