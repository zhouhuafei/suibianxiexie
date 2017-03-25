//对象的扩展方法
var extend=require('../function/extend.js');

//构造函数的继承(拷贝继承)
function constructorInherit(json){
    var opt=extend({
        default:{
            superType:null,//继承哪个超类(这个必须传的是一个构造函数,或者不传值)
            parameter:{}//默认参数(这个必须传的是一个对象,或者不传值)
        },
        inherit:json
    });
    //超类型(需要是个构造函数)
    var SuperType=opt.superType;
    //子类型的参数(需要是个对象)
    var parameter=opt.parameter;
    //如果超类型不存在
    if(Object.prototype.toString.call(SuperType).toLowerCase().slice(8,-1)!='function'){
        console.log('no find SuperType or SuperType error');
        return false;
    }
    //子类型
    function SupType(json){
        this.opt=extend({
            default:parameter,
            inherit:json
        });
        //子类型继承超类型的属性
        opt.superType.call(this,this.opt);
    }
    //子类型继承超类型的方法
    for(var attr in SuperType.prototype){
        if(SuperType.prototype.hasOwnProperty(attr)){
            SupType.prototype[attr]=SuperType.prototype[attr];
        }
    }
    return SupType;
}
module.exports=constructorInherit;