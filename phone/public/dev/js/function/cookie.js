/**
 * Created by zhouhuafei on 17/1/1.
 */
//设置cookie
function setCookie(json){
    var opt=json||{};
    var name=opt.name;
    var value=opt.value;
    var expires=opt.expires;
    var myDate=new Date();
    var myTime=myDate.getTime();
    myDate.setTime(myTime+expires*24*60*60*1000);
    document.cookie=name+'='+value+'; expires='+myDate;
}
//获取cookie
function getCookie(json){
    var opt=json||{};
    var name=opt.name;
    var cookie=document.cookie;
    var arr=cookie.split('; ');
    var value='';
    arr.forEach(function(v){
        var arr2=v.split('=');
        if(arr2[0]==name){
            value=arr2[1];
            return false;
        }
    });
    return value;
}
//清除cookie
function removeCookie(json){
    var opt=json||{};
    var name=opt.name;
    setCookie(name,'',-1);
}
var obj={
    setCookie:setCookie,
    getCookie:getCookie,
    removeCookie:removeCookie
};
module.exports=obj;