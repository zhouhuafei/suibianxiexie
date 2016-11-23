/**
 * Created by zhouhuafei on 2016/11/22.
 */
function Config(){
    this.port='9999';
}
Config.prototype.getPort=function(){
    return this.port;
};
module.exports=Config;