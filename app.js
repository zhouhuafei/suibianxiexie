// express
const isProduction = process.env.NODE_ENV !== 'development'; // 是否是生产环境
const ms = require('ms'); // 转成毫秒数
const compression = require('compression'); // gzip压缩
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const secret = 'suibianxiexie'; // sessionID cookie的密钥
app.use(compression());// gzip压缩
if (isProduction) {
    app.use(express.static('dist/assets', {maxAge: ms('1y')})); // 托管资源文件(一年缓存)
} else {
    app.use(express.static('dist/assets')); // 托管资源文件(无缓存)
}
app.use(express.static('dist-no-delete-assets-no-cache')); // 托管资源文件(无缓存)
app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser(secret)); // cookie
// session
app.use(session({
    resave: false, // 是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    saveUninitialized: false, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
    secret: secret, // 用于签署sessionID cookie的密钥
    cookie: {
        maxAge: ms('7 days'), // cookie过期时间
    },
}));

// 模版引擎(ejs)
const ejs = require('ejs');
app.set('views', 'dist/views/');
app.set('view engine', 'ejs');

// pc的路由待续...
// phone的路由
const RoutePhonePages = require('./app/phone/routes/pages/route');
new RoutePhonePages({app: app});
const RoutePhoneApi = require('./app/phone/routes/api/route');
new RoutePhoneApi({app: app});

// 404
app.use(function (req, res, next) {
    res.status(404).send('404 - not found');
});

// 500
app.use(function (err, req, res) {
    if (err) {
        res.status(500).send('500 - server error');
    }
});

// mongodb数据库链接
const mongoose = require('./config/mongoose');
mongoose.connection.on('connected', function () {
    // 监听端口
    const server = app.listen('5555', function () {
        console.log(`server address port:\nhttp://127.0.0.1:${server.address().port}`);
    });
});
