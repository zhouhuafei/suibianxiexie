var extend = require('../function/extend');//对象的扩展方法
var objectRemoveQuote = require('../function/object-remove-quote');//对象移除引用

//构造函数的继承(拷贝继承)
function constructorInherit(json) {
    var options = extend({
        defaults: {
            superType: null,//继承哪个超类(这个必须传的是一个构造函数,或者不传值)
            parameter: {}//默认参数(这个必须传的是一个对象,或者不传值)
        },
        inherits: json
    });
    //超类型(需要是个构造函数)
    var SuperType = options.superType;
    //子类型的默认参数(需要是个对象)
    var parameter = options.parameter;
    //如果超类型不存在
    if (Object.prototype.toString.call(SuperType).toLowerCase().slice(8, -1) != 'function') {
        console.log('no find SuperType or SuperType error');
        return false;
    }
    //子类型
    function SubType(json) {
        //子类型自身的属性
        /*
         * 注意:
         * defaults要防止对象的引用(如果不防止的话,会出现BUG)
         * 例如 wrap的默认值是'.g-wrap'
         * 第一次   var object1=new Sub({wrap:'body'});   wrap的值是'body'
         * 第二次   var object2=new Sub();    这里按理说wrap的值应该是默认值'.g-wrap'
         * 但是由于对象引用的原因,这里的值会变成'body'
         * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
         * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
         * 所以我就封装了一个移除对象引用的函数
         * */
        this.options = extend({
            defaults: objectRemoveQuote({object:parameter}),
            inherits: json
        });
        //子类型继承超类型的属性
        options.superType.call(this, this.options);
    }

    //子类型继承超类型的方法
    for (var attr in SuperType.prototype) {
        if (SuperType.prototype.hasOwnProperty(attr)) {
            SubType.prototype[attr] = SuperType.prototype[attr];
        }
    }
    return SubType;
}
module.exports = constructorInherit;