// express
const ms = require('ms');// 转成毫秒数
const compression = require('compression');// gzip压缩
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(compression());// gzip压缩
app.use(express.static('static', {maxAge: ms('1y')}));// 托管静态文件(一年缓存)
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json
app.use(cookieParser());// cookie
app.use(session({
    resave: true, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'love', // 这里是我的一个疑问
}));// session

// 模版引擎(handlebars)
const handlebars = require('express-handlebars');
app.engine('hbs', handlebars({
    partialsDir: `${__dirname}/views/`, // 设置页面布局模块文件的路径
    layoutsDir: `${__dirname}/views/`, // 设置页面布局模版文件的路径(本项目没有使用到页面布局模板文件)
    defaultLayout: '', // 设置页面的布局模版文件(本项目没有使用到页面布局模板文件)
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views/`);

// pc的路由待续...
// phone的路由
const RoutePhonePages = require('./routes/phone/pages/route');
new RoutePhonePages({app: app});
const RoutePhoneApi = require('./routes/phone/api/route');
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

// mongodb
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/dbname';
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected correctly to server');
        db.close();
    }
});

// 端口
const server = app.listen('5555', function () {
    console.log(`访问地址:\nhttp://127.0.0.1:${server.address().port}`);
});
