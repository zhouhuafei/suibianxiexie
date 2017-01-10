/**
 * Created by zhouhuafei on 17/1/1.
 */
//对象转数组
function jsonToArray(json){
    var opt=json||{};
    var obj=opt.obj;
    if(obj instanceof Array){
        return obj;
    }
    var arr=[];
    for(var attr in obj){
        if(obj.hasOwnProperty(attr)){
            arr.push(obj[attr]);
        }
    }
    return arr;
}
module.exports=jsonToArray;
