//配置
var Config = require(`./config/port`);
var config = new Config();
//express
var express = require(`express`);
var app = express();
//托管静态文件
app.use(express.static(`public`));
//模版引擎(handlebars)
var handlebars = require(`express-handlebars`);
app.engine(`html`, handlebars({
    partialsDir: `${__dirname}/public/dist/html/common`,//模块文件的路径{{>header_common}}
    layoutsDir: `${__dirname}/public/dist/html/views`,//设置布局模版文件的目录
    defaultLayout: `layout`,//设置默认的页面布局模版文件
    extname: `.html`
}));
app.set(`view engine`, `html`);
app.set(`views`, `${__dirname}/public/dist/html`);

//路由
var Routes = require(`./router/router`);
new Routes({app: app});
//404
app.use(function (req, res) {
    res.type(`text/plain`);
    res.status(`404`);
    res.send(`404 - Not Found`);
});
//500
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.type(`text/plain`);
    res.status(`500`);
    res.send(`500 - Server Error`);
});
//mysql
// var Mysql = require(`./config/mysql`);
// var oMysql = new Mysql({isLocal: true});
// oMysql.init();
// var mysql = oMysql.connection;
// var tableName = `user`;
// mysql.query(
//     `SELECT * FROM ` + tableName,
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
app.set(`port`, config.getPort());
var server = app.listen(app.get(`port`), function () {
    var port = server.address().port;
    console.log(`>>>>>>>>>>>>>>>>>>>>访问地址:http://127.0.0.1:${port}<<<<<<<<<<<<<<<<<<<<`);
});