//一些小方法
var base = {
    offset:require('../function/offset.js'),
    constructorInherit: require('../function/constructor-inherit.js'),
    isIPhone:function(){return window.navigator.appVersion.match(/iphone/gi);},
    isAndroid:function(){return window.navigator.appVersion.match(/android/gi);},
    isPc: require('../function/is-pc.js'),
    cookie: require('../function/cookie.js'),
    fillZero: require('../function/fill-zero.js'),
    getParent: require('../function/get-parent.js'),
    scrollTo: require('../function/scroll-to.js'),
    htmlToDom: require('../function/html-to-dom.js'),
    whetherDisableScroll: require('../function/whether-disable-scroll.js'),
    WhenScrollBottom: require('../function/when-scroll-bottom.js'),
    jsonToArray: require('../function/json-to-array.js'),
    secondsToTime: require('../function/seconds-to-time.js'),
    timeCountDown: require('../function/time-count-down.js'),
    strLimit: require('../function/str-limit.js'),
    getOneDom: require('../function/get-one-dom.js'),
    createElement: require('../function/create-element.js'),
    extend: require('../function/extend.js')
};
module.exports = base;
