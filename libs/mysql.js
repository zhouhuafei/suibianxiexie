/**
 * Created by zhouhuafei on 2016/11/22.
 */
function Mysql(){
    this.host='127.0.0.1';
    this.port='3306';
    this.user='root';
    this.password='root';
    this.database='zhouhuafei';
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
module.exports=Mysql;