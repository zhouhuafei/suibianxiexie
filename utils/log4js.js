const log4js = require('log4js'); // 工具方法集合

/*
# appenders
* 配置文件的输出源，一般日志输出type共有console、file、dateFile三种
    - type:console - 将日志输出至控制台，这样可以方便开发人员在开发时接看到所有日志信息，在其他环境不建议设置
    - type:dateFile - 输出到文件内，以pattern属性的时间格式，以时间的生成文件
    - type:file - 输出到文件内，以文件名-文件大小-备份文件个数的形式rolling生成文件
    - alwaysIncludePattern - 如果为true，则每个文件都会按pattern命名，否则最新的文件不会按照pattern命名

# replaceConsole
* 如果为true，则程序中用console.log输出到控制台的信息，也会输出到日志文件中，且格式按照log4js的格式输出，如果为false，则console.log只会输出在控制台。

# category
* 没有看到权威的说明，我的理解category就是一个日志名字，如果没有取应该是默认的。只有当开发人员通过getLogger(category)获得相对应的日志时，才能输出到对应的appender中，否则会发送给所有默认的appender
*/

log4js.configure({
    appenders: {
        ruleConsole: {
            type: 'console',
        },
        ruleDateFile: {
            type: 'dateFile',
            filename: './logs/error',
            pattern: '_yyyy-MM-dd.log',
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
