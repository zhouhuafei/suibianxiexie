//express
const ms = require('ms');//转成毫秒数
const compression = require('compression');//gzip压缩
const express = require('express');
const app = express();

//gzip压缩
app.use(compression());

//托管静态文件
app.use(express.static('static', {maxAge: ms('1y')}));//一年缓存

//模版引擎(handlebars)
const handlebars = require('express-handlebars');
app.engine('hbs', handlebars({
    partialsDir: `${__dirname}/static/`,//设置页面布局模块文件的路径
    layoutsDir: `${__dirname}/static/`,//设置页面布局模版文件的路径(本项目没有使用到页面布局模板文件)
    defaultLayout: '',//设置页面的布局模版文件(本项目没有使用到页面布局模板文件)
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/static/`);

//pc的路由待续...
//phone的路由
const RoutePhone = require('./route/phone/route');
new RoutePhone({app: app});
//error的路由
const RouteError = require('./route/error/route');
new RouteError({app: app});

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