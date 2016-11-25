/**
 * Created by zhouhuafei on 2016/11/22.
 */
var Config=require('./libs/config');//配置
var config=new Config();

var express=require('express');//express
var app=express();

var Routes=require('./routes/routes');//路由
new Routes({app:app});

app.use(function(req,res){//404
    res.type('text/plain');
    res.status('404');
    res.send('404 - Not Found');
});

app.use(function(err,req,res,next){//500
    console.log(err.stack);
    res.type('text/plain');
    res.status('500');
    res.send('500 - Server Error');
});

app.set('port',config.getPort());
var server=app.listen(app.get('port'),function(){//端口
    var port=server.address().port;
    console.log('访问地址:http://127.0.0.1:'+port);
});