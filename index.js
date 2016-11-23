/**
 * Created by zhouhuafei on 2016/11/22.
 */
var Config=require('./libs/config');//配置
var config=new Config();

var express=require('express');//express
var app=express();

var Routes=require('./routes/routes');//路由
new Routes({app:app});

var server=app.listen(config.getPort(),function(){//监听
    var port=server.address().port;
    console.log('访问地址:http://127.0.0.1:'+port);
});