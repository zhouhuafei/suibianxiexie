class Config {
    constructor() {
        this.env = process.env.NODE_ENV; // 开发环境 or 生产环境
        this.isProduction = this.env !== 'development'; // 是否是生产环境
        this.projectDirectory = `${__dirname}/`; // 项目根目录
        this.adminDirectory = `${__dirname}/admin/`; // admin的目录
        this.phoneDirectory = `${__dirname}/phone/`; // phone的目录
        this.pcDirectory = `${__dirname}/pc/`; // pc的目录
        this.staticCacheDirectory = `${__dirname}/dist/`; // 静态缓存资源目录
        this.staticNoCacheDirectory = `${__dirname}/dist-no-delete-assets-no-cache/`; // 静态非缓存资源目录
        this.utilsDirectory = `${__dirname}/utils/`; // utils目录
        this.isEnabledSingleDeviceLogin = true; // 是否启用单设备登录
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