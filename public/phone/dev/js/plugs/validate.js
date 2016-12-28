/**
 * Created by zhouhuafei on 16/12/4.
 */
//验证
var validate={};
//是不是空
validate.isSpace=function(opt){
    var obj=opt||{};
    var value=obj.value||" ";
    var valueTrim=value.trim();
    var b=false;
    if(valueTrim==''){
        b=true;
    }
    return b;
};
//是不是0
validate.isZero=function(opt){
    var obj=opt||{};
    var value=obj.value||" ";
    var valueTrim=value.trim();
    var b=false;
    if(valueTrim==0){
        b=true;
    }
    return b;
};
//是不是正整数
validate.isPositiveInteger=function(opt){
    var obj=opt||{};
    var value=obj.value||" ";
    var valueTrim=value.trim();
    var re=/^\d+$/;
    var b=false;
    if(re.test(valueTrim)){
        b=true;
    }
    return b;
};
//是不是保留了num位小数
validate.isReservedDecimal=function(opt){
    var obj=opt||{};
    var num=obj.num||2;
    var value=obj.value||" ";
    var valueTrim=value.trim();
    var re=new RegExp("^\\d+\\.\\d{"+num+"}$");
    var b=false;
    if(re.test(valueTrim)){
        b=true;
    }
    return b;
};
module.exports=validate;