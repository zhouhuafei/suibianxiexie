//配置
var Port = require('./app/config/port');
var port = new Port();

//express
var express = require('express');
var app = express();

//托管静态文件
app.use(express.static('public'));

//模版引擎(handlebars)
var handlebars = require('express-handlebars');
app.engine('html', handlebars({
    partialsDir: `${__dirname}/public/min/html/partials`,//设置页面布局模块文件的路径
    layoutsDir: `${__dirname}/public/min/html/layouts`,//设置页面布局模版文件的路径(本项目没有使用到页面布局模板文件)
    defaultLayout: '',//设置页面的布局模版文件(本项目没有使用到页面布局模板文件)
    extname: '.html'
}));
app.set('view engine', 'html');
app.set('views', `${__dirname}/public/min/html/pages/`);

//路由
var Route = require('./app/route/route');
new Route({app: app});

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
app.set('port', port.getPort());
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log(`访问地址:\nhttp://127.0.0.1:${port}`);
});