/**
 * Created by zhouhuafei on 16/12/4.
 */

    /*function Fn(json){
        //opt对象上请绑定外部可以传进来的那些数据的键值作为属性
        this.opt=json||{};
        //初始化
        this.init();
    }
    Fn.prototype.init=function(){
        //渲染结构
        this.render();
        //渲染功能
        this.power();
    };
    Fn.prototype.render=function(){
        
    };
    Fn.prototype.power=function(){
        //事件相关
        this.events();
    };
    Fn.prototype.events=function(){
        
    };
    //其他待续(加新的方法,请在下面进行添加)...
    module.exports=Fn;*/

function touchLeft(obj, iWidth){
    if(!obj){ return false; }
    var startPosition, endPosition, iTarget, iLeft;

    obj.on('touchstart', function(e){
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        iLeft = obj.position().left;
    });

    obj.on('touchmove', function(e){
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        iTarget = {
            x: endPosition.x - startPosition.x+iLeft,
            y: endPosition.y - startPosition.y
        };
        obj.css({'left':(iTarget.x > 0 ? 0 : iTarget.x)});
    });

    obj.on('touchend', function(){
        obj.css({'left': (Math.abs(obj.position().left) > iWidth/2 ? -iWidth : 0) });
    });
}
//一些小方法
var base={
    arrToIndex:require('../function/arr-to-index'),
    cookie:require('../function/cookie'),
    fillZero:require('../function/fill-zero'),
    getParent:require('../function/get-parent'),
    goTop:require('../function/go-top'),
    htmlToDom:require('../function/html-to-dom'),
    isScrollNavigator:require('../function/is-scroll-navigator'),
    isScrollNavigatorBottom:require('../function/is-scroll-navigator-bottom'),
    jsonToArray:require('../function/json-to-array'),
    mask:require('../function/mask'),
    secondsToTime:require('../function/seconds-to-time'),
    secondsToTimeCountDown:require('../function/seconds-to-time-count-down'),
    strLimit:require('../function/str-limit')
};
module.exports=base;
