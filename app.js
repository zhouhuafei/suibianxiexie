// express应用
const express = require('express'); // express
const app = express(); // app

// app的配置
const appConfig = require('./app-config');
app.appConfig = appConfig;

// http
const http = require('http');
const httpServer = http.createServer(app);

// https
const fs = require('fs');
const https = require('https');
const privateKey = fs.readFileSync('./https/index.key', 'utf8');
const certificate = fs.readFileSync('./https/index.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app);

// 环境以及配置
const env = process.env.NODE_ENV; // 开发环境 or 生产环境
const isProduction = appConfig.isProduction; // 是否是生产环境
const configDb = require('./db/config'); // 数据库配置
const configRedis = configDb.redis[env]; // redis的配置
const ms = require('ms'); // 转成毫秒数
const getClientIp = require('zhf.get-client-ip'); // 获取客户端的ip
const blacklistIp = require('./blacklist/ip'); // 黑名单 - ip

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
if (isProduction) {
    app.use(express.static('dist/assets', {maxAge: ms('1y')})); // 托管资源文件(一年缓存)
} else {
    app.use(express.static('dist/assets')); // 托管资源文件(无缓存)
}
app.use(express.static('static-cache-wrap', {maxAge: ms('1y')})); // 托管资源文件(一年缓存)
app.use(express.static('static-no-cache-wrap')); // 托管资源文件(无缓存)

// 数据解析
const bodyParser = require('body-parser'); // 可以对POST,PUT,DELETE请求方式进行数据解析
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded extended为true,可以解析$.ajax传入的对象
app.use(bodyParser.json()); // parse application/json

// cookie以及session
const cookieParser = require('cookie-parser'); // cookie数据解析
const session = require('express-session'); // session
const RedisStore = require('connect-redis')(session); // session存redis
const cookieSecret = appConfig.cookieSecret; // sessionID cookie的密钥
app.use(cookieParser(cookieSecret)); // 初始化中间件，第一个参数是签名秘钥。后续如果使用签名cookie，则可以使用res.cookie(key,val,{signed:true})中的signed字段开启签名cookie功能。
app.use(session({
    resave: false, // 是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    saveUninitialized: false, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标识为 connect.sid
    secret: cookieSecret, // 用于签署sessionID cookie的密钥
    cookie: {
        maxAge: ms('7 days'), // cookie过期时间
        domain: isProduction ? '.sbxx.top' : undefined, // 可以跨子域做单点登录，共享session。
    },
    store: new RedisStore(configRedis), // session默认存在服务器端的内存中。此处存redis是为了持久化存储。否则程序重启session也会被重置。
}));

// 模版引擎(ejs)
const ejs = require('ejs');
app.set('views', 'dist/views/');
app.set('view engine', 'ejs');
/*
# 开启模板缓存(true)时：
* pm2不忽略dist/views目录。views更新时有效。
* nodemon不忽略dist/views目录。views更新时无效。
* 所以开发环境时就不进行模板的缓存了。
*/
app.set('view cache', isProduction);

/*
设置跨域访问：此处配置的是全部请求('*')都允许跨域，其实应该指定某些接口允许跨域。
可以去api-super里，响应之前设置某一类接口都允许跨域。
也可以去某一个控制器里，单独对某一个接口设置跨域。
app.all的第一个参数'*'号换成特定的路由，也是可以的。例如：'/admin/'，'/admin/*'，'/admin/log*n/'，'/a*n/login/'。
app.all的第一个参数'*'号换成数组匹配多个路由，也是可以的。例如：['/admin/', '/admin/login/']。
app.all的第一个参数'*'号表示任意可有可无的单个或多个字符。
*/
app.all('*', function (req, res, next) {
    /*
    # Access-Control-Allow-Origin：允许指定域名跨域，本地开发需配置域名。*号表示全部域名。
    * 线上配置被允许跨域的域名案例：
        - http://s438520.m.whd.weishangye.com
    * 本地配置被允许跨域的域名案例：
        - http://127.0.0.1:5552
        - http://m.fy.shopex.loc.whd.cn:9056
    * 本地如果配置了虚拟域名，绑定了host，那么把这个虚拟域名填入即可。
    */
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5552');
    // res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    res.header('Access-Control-Allow-Credentials', true); // 允许带cookie(则Access-Control-Allow-Origin不允许是*号)(亲测Firefox浏览器支持，Chrome浏览器不支持)
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 路由
[
    './app/h5/routes/pages/route',
    './app/h5/routes/api/route',
    // './app/pc/routes/pages/route',
    // './app/pc/routes/api/route',
    './app/admin/routes/pages/route',
    './app/admin/routes/api/route',
].forEach(function (v) {
    const Route = require(v);
    new Route({app: app});
});

// 404
app.use(function (req, res, next) {
    res.status(404).send('404 - not found'); // 我觉的这里返回json会不会更好一点？如此前端不就可以统一管理响应！{status: 'error'}
});

// 500
app.use(function (err, req, res, next) {
    if (err) {
        console.error(err.stack);
        res.status(500).send(`500 - server error\n${err.stack}`); // 我觉的这里返回json会不会更好一点？如此前端不就可以统一管理响应！{status: 'error'}
    }
});

const multipleCalls = require('zhf.multiple-calls');
const server = multipleCalls(2, function () {
    // http
    const serverHttp = httpServer.listen('5551', function () {
        console.log('server connection open to:\n', `http://localhost:${serverHttp.address().port}`);
    });
    // https
    const serverHttps = httpsServer.listen('55551', function () {
        console.log('server connection open to:\n', `https://localhost:${serverHttps.address().port}`);
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
