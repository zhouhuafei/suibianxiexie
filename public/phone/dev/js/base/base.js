/**
 * Created by zhouhuafei on 16/12/4.
 */
function arrToIndex(json){
    var opt=json||{};
    var arr=opt.arr||[];
    var info=opt.info;
    var index=null;
    arr.forEach(function(v,i){
        if(v==info){
            index=i;
            return false;
        }
    });
    return index;
}
//一些小方法
var base={
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
