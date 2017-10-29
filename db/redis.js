// process.env.NODE_ENV
const env = process.env.NODE_ENV;

// config
const config = require('./config');
const configRedis = config.redis[env];

// redis
const redis = require('redis');

module.exports = redis;
