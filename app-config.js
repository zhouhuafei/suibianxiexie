class Config {
    constructor() {
        // 不可配置
        this.env = process.env.NODE_ENV; // 开发环境 or 生产环境
        this.isProduction = this.env !== 'development'; // 是否是生产环境
        this.projectDir = `${__dirname}/`; // 项目根目录
        this.utilsDir = `${this.projectDir}utils/`; // utils目录
        // 可配置
        this.logsDir = `${this.projectDir}logs/`; // 日志的目录
        this.isEnabledSingleDeviceLoginUser = true; // 前台站点是否启用单设备登录
        this.isEnabledSingleDeviceLoginAdmin = true; // 后台管理系统是否启用单设备登录
        // 邮箱(短信)验证码，目前使用的qq邮箱进发送邮件，账号和授权码都是在qq邮箱申请的。
        this.verifyCodeRandomUser = 'this-is-a-code@foxmail.com'; // 发送者
        this.verifyCodeRandomPass = 'paudrqaxbntmigfe'; // 授权码
    }
}

module.exports = new Config();
