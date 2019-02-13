const log4js = require('log4js'); // 工具方法集合
const appConfig = require('../app-config');

log4js.configure({
    appenders: {
        /*
        ruleConsole: {
            type: 'console', // 将日志输出至控制台，这样可以方便开发人员在开发时接看到所有日志信息，在其他环境不建议设置
        },
        ruleFile: {
            type: 'file', // 输出到文件内，以文件名-文件大小-备份文件个数的形式rolling生成文件
            filename: './logs/file.log', // 文件路径加文件名称加文件后缀('../logs/file.log'会导致logs文件夹创建到项目的外部)
            maxLogSize: 10 * 1024 * 1024, // 单位字节(b)
            backups: 10, // 日志文件最多保留几个
        },
        */
        ruleDateFile: {
            type: 'dateFile', // 输出到文件内，以pattern属性的时间格式，以时间的生成文件
            filename: `${appConfig.logsPath}error`, // 文件路径加文件名称前半部分('../logs/error'会导致logs文件夹创建到项目的外部)
            pattern: '_yyyy-MM-dd.log', // 文件名称后半部分加文件后缀
            maxLogSize: 10 * 1024 * 1024, // 单位字节(b)
            backups: 10, // 日志文件最多保留几个
            alwaysIncludePattern: true, // 文件名是否始终包含占位符(如果为true，则每个文件都会按pattern命名，否则最新的文件不会按照pattern命名)
        },
    },
    categories: {
        default: {
            appenders: ['ruleDateFile'],
            level: 'error',
        },
    },
});

const logger = log4js.getLogger();

module.exports = logger;
