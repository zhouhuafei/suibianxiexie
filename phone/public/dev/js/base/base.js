//一些小方法
var base = {
    userAgent: require('../function/user-agent'),//用户代理(判断是否是安卓,苹果,微信,电脑)
    arrayRemoveRepeat: require('../function/array-remove-repeat.js'),//数组去重
    objRemoveQuote: require('../function/obj-remove-quote.js'),//移除对象引用
    Select: require('../function/select.js'),//全选,不选,反选
    offset: require('../function/offset.js'),//获取元素距离文档的left和top
    constructorInherit: require('../function/constructor-inherit.js'),//构造函数继承
    cookie: require('../function/cookie.js'),//cookie操作
    fillZero: require('../function/fill-zero.js'),//补零
    getParent: require('../function/get-parent.js'),//获取父级
    scrollTo: require('../function/scroll-to.js'),//滚动到
    htmlToDom: require('../function/html-to-dom.js'),//html转成dom节点
    whetherDisableScroll: require('../function/whether-disable-scroll.js'),//是否禁止浏览器滚动
    WhenScrollBottom: require('../function/when-scroll-bottom.js'),//当滚动到底部
    objToArray: require('../function/obj-to-array.js'),//把json格式的对象转成数组
    secondsToTime: require('../function/seconds-to-time.js'),//秒转时间
    timeCountDown: require('../function/time-count-down.js'),//倒计时
    strLimit: require('../function/str-limit.js'),//字符串限制
    getDomArray: require('../function/get-dom-array.js'),//获取一组dom节点
    createElement: require('../function/create-element.js'),//创建元素节点
    extend: require('../function/extend.js')//对象扩展
};
module.exports = base;