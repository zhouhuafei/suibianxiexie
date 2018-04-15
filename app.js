// 环境以及配置
const env = process.env.NODE_ENV; // 开发环境 or 生产环境
const isProduction = env !== 'development'; // 是否是生产环境
const configDb = require('./db/config'); // 数据库配置
const configRedis = configDb.redis[env]; // redis的配置
const ms = require('ms');// 转成毫秒数
const getClientIp = require('zhf.get-client-ip'); // 获取客户端的ip
const blacklistIp = require('./blacklist/ip'); // 黑名单 - ip

// express应用
const express = require('express'); // express
const app = express(); // app

// 屏蔽ip
app.use(function (req, res, next) {
    const ip = getClientIp(req, isProduction ? 'nginx' : '');
    if (blacklistIp.indexOf(ip) !== -1) {
        res.status(403).send('403 - forbidden');
    } else {
        next();
    }
});

// gzip压缩
const compression = require('compression'); // gzip压缩
app.use(compression()); // gzip压缩

// 静态资源
app.use(express.static('dist/assets', {maxAge: ms('1y')})); // 托管资源文件(一年缓存)
app.use(express.static('dist-no-delete-assets-no-cache')); // 托管资源文件(无缓存)

// 数据解析
const bodyParser = require('body-parser'); // 可以对post delete update请求方式进行数据解析
app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// cookie以及session
const cookieParser = require('cookie-parser'); // cookie数据解析
const session = require('express-session'); // session
const RedisStore = require('connect-redis')(session); // session存redis
const secret = 'suibianxiexie'; // sessionID cookie的密钥
app.use(cookieParser(secret)); // cookie
app.use(session({
    resave: false, // 是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    saveUninitialized: false, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
    secret: secret, // 用于签署sessionID cookie的密钥
    cookie: {
        maxAge: ms('7 days'), // cookie过期时间
    },
    store: new RedisStore(configRedis), // session存redis
}));

// 模版引擎(ejs)
const ejs = require('ejs');
app.set('views', 'dist/views/');
app.set('view engine', 'ejs');
app.set('view cache', true);

// 路由
[
    './app/phone/routes/pages/route',
    './app/phone/routes/api/route',
    // './app/pc/routes/pages/route',
    // './app/pc/routes/api/route',
    // './app/admin/routes/pages/route',
    // './app/admin/routes/api/route',
].forEach(function (v) {
    const Route = require(v);
    new Route({app: app});
});

// 404
app.use(function (req, res, next) {
    res.status(404).send('404 - not found');
});

// 500
app.use(function (err, req, res, next) {
    if (err) {
        console.error(err.stack);
        res.status(500).send(`500 - server error\n${err.stack}`);
    }
});

const multipleCalls = require('zhf.multiple-calls');
const server = multipleCalls(2, function () {
    const server = app.listen('5551', function () {
        console.log('server connection open to:\n', `http://localhost:${server.address().port}`);
    });
});

// mongodb数据库链接
const mongoose = require('./db/mongoose');
mongoose.connection.on('connected', function () {
    server();
});

// redis数据库链接
const redisClient = require('./db/redis');
redisClient.on('connect', function () {
    // 把redis的客户端应用到全局的app上使用
    app.redisClient = redisClient;
    server();
});
