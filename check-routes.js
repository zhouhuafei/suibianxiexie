/**
 * 检测路由对应的文件是否有所缺失
 * */

const fs = require('fs');

class Phone {
    constructor(opt = {
        apiConfig: require('./app/h5/routes/api/config'),
        pagesConfig: require('./app/h5/routes/pages/config'),
        apiControllersPath: './app/h5/controllers/api/',
        pagesControllersPath: './app/h5/controllers/pages/',
        pagesViewsPath: './app/h5/assets/views/pages/',
        pagesScssPath: './app/h5/assets/scss/pages/',
        pagesJsPath: './app/h5/assets/js/pages/',
    }) {
        this.apiConfig = opt.apiConfig;
        this.pagesConfig = opt.pagesConfig;
        this.apiControllersPath = opt.apiControllersPath;
        this.pagesControllersPath = opt.pagesControllersPath;
        this.pagesViewsPath = opt.pagesViewsPath;
        this.pagesScssPath = opt.pagesScssPath;
        this.pagesJsPath = opt.pagesJsPath;
        this.apiControllers = fs.readdirSync(this.apiControllersPath);
        this.pagesControllers = fs.readdirSync(this.pagesControllersPath);
        this.pagesViews = fs.readdirSync(this.pagesViewsPath);
        this.pagesScss = fs.readdirSync(this.pagesScssPath);
        this.pagesJs = fs.readdirSync(this.pagesJsPath);
    }
}

/*
class Pc extends Phone {
    constructor() {
        super({
            apiConfig: require('./app/pc/routes/api/config'),
            pagesConfig: require('./app/pc/routes/pages/config'),
            apiControllersPath: './app/pc/controllers/api/',
            pagesControllersPath: './app/pc/controllers/pages/',
            pagesViewsPath: './app/pc/assets/views/pages/',
            pagesScssPath: './app/pc/assets/scss/pages/',
            pagesJsPath: './app/pc/assets/js/pages/',
        });
    }
}
*/

class Admin extends Phone {
    constructor() {
        super({
            apiConfig: require('./app/admin/routes/api/config'),
            pagesConfig: require('./app/admin/routes/pages/config'),
            apiControllersPath: './app/admin/controllers/api/',
            pagesControllersPath: './app/admin/controllers/pages/',
            pagesViewsPath: './app/admin/assets/views/pages/',
            pagesScssPath: './app/admin/assets/scss/pages/',
            pagesJsPath: './app/admin/assets/js/pages/',
        });
    }
}

function check(obj) {
    Object.keys(obj.apiConfig).forEach(function (k) {
        const name = `${k}.js`;
        if (obj.apiControllers.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.apiControllersPath}${name}`);
        }
    });
    Object.keys(obj.pagesConfig).forEach(function (k) {
        let name = `${k}.js`;
        if (obj.pagesControllers.indexOf(name) === -1) {
            console.log(`文件缺失 ${obj.pagesControllersPath}${name}`);
        }
        name = k;
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
// check(new Pc());
