/**
 * Created by zhouhuafei on 17/1/1.
 */
//字符数量限制
function strLimit(json){
    var opt=json||{};
    var max=opt.max;
    var str=opt.str;
    if(!str){
        return '';
    }
    var length=str.length;
    if(length>max){
        str=str.substring(0,max);
    }
    return str;
}
module.exports=strLimit;