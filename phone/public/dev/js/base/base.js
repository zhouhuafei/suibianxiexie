/**
 * Created by zhouhuafei on 16/12/4.
 */
//一些小方法
var base = {
    constructorInherit: require('../function/constructor-inherit.js'),
    isIPhone:function(){return window.navigator.appVersion.match(/iphone/gi);},
    isAndroid:function(){return window.navigator.appVersion.match(/android/gi);},
    isPc: require('../function/is-pc.js'),
    cookie: require('../function/cookie.js'),
    fillZero: require('../function/fill-zero.js'),
    getParent: require('../function/get-parent.js'),
    goTop: require('../function/go-top.js'),
    htmlToDom: require('../function/html-to-dom.js'),
    whetherDisableScroll: require('../function/whether-disable-scroll.js'),
    whenScrollBottom: require('../function/when-scroll-bottom.js'),
    jsonToArray: require('../function/json-to-array.js'),
    secondsToTime: require('../function/seconds-to-time.js'),
    timeCountDown: require('../function/time-count-down.js'),
    strLimit: require('../function/str-limit.js'),
    getOneDom: require('../function/get-one-dom.js'),
    createElement: require('../function/create-element.js'),
    extend: require('../function/extend.js')
};
module.exports = base;
