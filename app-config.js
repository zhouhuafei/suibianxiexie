class Config {
    constructor() {
        this.env = process.env.NODE_ENV; // 开发环境 or 生产环境
        this.isProduction = this.env !== 'development'; // 是否是生产环境
        this.projectDir = `${__dirname}/`; // 项目根目录
        this.adminDir = `${__dirname}/admin/`; // admin的目录
        this.phoneDir = `${__dirname}/phone/`; // phone的目录
        this.pcDir = `${__dirname}/pc/`; // pc的目录
        this.staticCacheDir = `${__dirname}/dist/`; // 静态缓存资源目录
        this.staticNoCacheDir = `${__dirname}/static-no-cache-wrap/`; // 静态非缓存资源目录
        this.utilsDir = `${__dirname}/utils/`; // utils目录
        this.bowerComponentsDir = `/static-cache/bower_components/`; // bower_components的目录
        // 目录区分开为后端给require使用的目录，以及前端使用的绝对目录/
        this.isEnabledSingleDeviceLoginUser = true; // 前台站点是否启用单设备登录。
        this.isEnabledSingleDeviceLoginAdmin = true; // 后台管理系统是否启用单设备登录。
        // mongodb数据库
        this.mongodb = {
            development: {
                host: 'localhost',
                port: '27017',
                db: 'suibianxiexie',
            },
            production: {
                host: 'localhost',
                port: '27017',
                db: 'suibianxiexie',
            },
        };
        // redis数据库
        this.redis = {
            development: {
                host: 'localhost',
                port: '6379',
                db: 11,
            },
            production: {
                host: 'localhost',
                port: '6379',
                db: 11,
            },
        };
    }
}

module.exports = new Config();
