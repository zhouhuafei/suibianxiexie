//express
const ms = require('ms');//转成毫秒数
const compression = require('compression');//gzip压缩
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(compression());//gzip压缩
app.use(express.static('static', {maxAge: ms('1y')}));//托管静态文件(一年缓存)
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json

//模版引擎(handlebars)
const handlebars = require('express-handlebars');
app.engine('hbs', handlebars({
    partialsDir: `${__dirname}/views/`,//设置页面布局模块文件的路径
    layoutsDir: `${__dirname}/views/`,//设置页面布局模版文件的路径(本项目没有使用到页面布局模板文件)
    defaultLayout: '',//设置页面的布局模版文件(本项目没有使用到页面布局模板文件)
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views/`);

//pc的路由待续...


//phone的路由
const RoutePhonePages = require('./routes/phone/pages/route');
new RoutePhonePages({app: app});
const RoutePhoneApi = require('./routes/phone/api/route');
new RoutePhoneApi({app: app});

//404
app.use(function (req, res, next) {
    res.status(404).send('404 - not found');
});
//500
// app.use(function (err, req, res, next) {
//     res.status(500).send('500 - server error');
// });

//mysql
// var Mysql = require('./config/mysql');
// var oMysql = new Mysql({isLocal: true});
// oMysql.init();
// var mysql = oMysql.connection;
// var tableName = 'user';
// mysql.query(
//     'SELECT * FROM ' + tableName,
//     function selectCb(err, results, fields) {
//         if (err) {
//             throw err;
//         }
//         if (results) {
//             console.log(results);
//         }
//         mysql.end();
//     }
// );

//端口
const server = app.listen('5555', function () {
    console.log(`访问地址:\nhttp://127.0.0.1:${server.address().port}`);
});