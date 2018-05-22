const log4js = require('log4js'); // 工具方法集合

log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: './logs/cheese.log',
        },
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error',
        },
    },
});

const logger = log4js.getLogger('cheese');
logger.error(new Error('error'));

module.exports = logger;
