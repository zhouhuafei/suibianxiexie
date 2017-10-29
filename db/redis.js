// process.env.NODE_ENV
const env = process.env.NODE_ENV;

// config
const config = require('./config');
const configRedis = config.redis[env];


// redis
const redis = require('redis');
const client = redis.createClient(configRedis.port, configRedis.host);

client.on('error', function (error) {
    console.log('redis connection error:\n', error);
});

module.exports = client;
