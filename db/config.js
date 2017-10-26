const dbName = 'suibianxiexie';

module.exports = {
    mongodb: {
        development: {
            host: 'localhost',
            port: '27017',
            db: dbName,
        },
        production: {
            host: 'localhost',
            port: '27017',
            db: dbName,
        },
    },
    redis: {
        development: {
            host: 'localhost',
            port: '6379',
            db: dbName,
        },
        production: {
            host: 'localhost',
            port: '6379',
            db: dbName,
        },
    },
};
