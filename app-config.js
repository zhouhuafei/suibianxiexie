class Config {
    constructor() {
        this.projectDirectory = `${__dirname}/`; // 项目根目录
        this.adminDirectory = `${__dirname}/admin/`; // admin的目录
        this.phoneDirectory = `${__dirname}/phone/`; // phone的目录
        this.pcDirectory = `${__dirname}/pc/`; // pc的目录
        this.staticCacheDirectory = `${__dirname}dist/`; // 静态缓存资源目录
        this.staticNoCacheDirectory = `${__dirname}dist-no-delete-assets-no-cache/`; // 静态非缓存资源目录
        this.isEnabledSingleDeviceLogin = false; // 是否启用单设备登录
    }
}

module.exports = new Config();
