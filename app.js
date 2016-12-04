/**
 * Created by zhouhuafei on 2016/11/22.
 */
//配置
var Config=require('./libs/config');
var config=new Config();
//express
var express=require('express');
var app=express();
//路由
var Routes=require('./routes/routes');
new Routes({app:app});
//404
app.use(function(req,res){
    res.type('text/plain');
    res.status('404');
    res.send('404 - Not Found');
});
//500
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.type('text/plain');
    res.status('500');
    res.send('500 - Server Error');
});
//mysql
var Mysql=require('./libs/mysql');
var oMysql=new Mysql({isLocal:true});
oMysql.init();
var mysql=oMysql.connection;
var tableName='user';
mysql.query(
    'SELECT * FROM '+tableName,
    function selectCb(err,results,fields){
        if(err){
            throw err;
        }
        if(results){
            console.log(results);
        }
        mysql.end();
    }
);
//端口
app.set('port',config.getPort());
var server=app.listen(app.get('port'),function(){
    var port=server.address().port;
    console.log('>>>>>>>>>>>>>>>>>>>>访问地址:http://127.0.0.1:'+port+'<<<<<<<<<<<<<<<<<<<<');
});