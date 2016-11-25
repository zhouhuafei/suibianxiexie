/**
 * Created by zhouhuafei on 2016/11/22.
 */
function Mysql(opt){
    this.opt=opt||{};
    this.opt.isLocal=this.opt.isLocal&&true;
    if(this.opt.isLocal){//本地
        this.host='127.0.0.1';
        this.port='3306';
        this.user='root';
        this.password='zhouhuafei';
        this.database='test';
    }else{//远程
        this.host='192.168.10.12';
        this.port='3307';
        this.user='b2b_platform';
        this.password='bpf_zova_hspt';
        this.database='zhouhuafei';
    }
    this.init();
}
Mysql.prototype.getHost=function(){
    return this.host;
};
Mysql.prototype.getPort=function(){
    return this.port;
};
Mysql.prototype.getUser=function(){
    return this.user;
};
Mysql.prototype.getPassword=function(){
    return this.password;
};
Mysql.prototype.getDatabase=function(){
    return this.database;
};
Mysql.prototype.init=function(){
    var self=this;
    this.mysql=require('mysql2');
    this.connection=this.mysql.createConnection({
        host:self.getHost(),
        port:self.getPort(),
        user:self.getUser(),
        password:self.getPassword(),
        database:self.getDatabase()
    });
};
module.exports=Mysql;