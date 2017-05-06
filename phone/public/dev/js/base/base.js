//一些小方法
var base = {
    px2rem: require('../function/px2rem'),//px2rem
    userAgent: require('../function/user-agent'),//用户代理(判断是否是安卓,苹果,微信,电脑)
    arrayRemoveRepeat: require('../function/array-remove-repeat'),//数组去重
    objectRemoveQuote: require('../function/object-remove-quote'),//移除对象引用
    Select: require('../function/select'),//全选,不选,反选
    offset: require('../function/offset'),//获取元素距离文档的left和top
    constructorInherit: require('../function/constructor-inherit'),//构造函数继承
    cookie: require('../function/cookie'),//cookie操作
    fillZero: require('../function/fill-zero'),//补零
    getParent: require('../function/get-parent'),//获取父级
    scrollTo: require('../function/scroll-to'),//滚动到
    htmlToDom: require('../function/html-to-dom'),//html转成dom节点
    whetherDisableScroll: require('../function/whether-disable-scroll'),//是否禁止浏览器滚动
    WhenScrollBottom: require('../function/when-scroll-bottom'),//当滚动到底部
    objectToArray: require('../function/object-to-array'),//把json格式的对象转成数组
    secondsToTime: require('../function/seconds-to-time'),//秒转时间
    timeCountDown: require('../function/time-count-down'),//倒计时
    strLimit: require('../function/str-limit'),//字符串限制
    getDomArray: require('../function/get-dom-array'),//获取一组dom节点
    createElement: require('../function/create-element'),//创建元素节点
    extend: require('../function/extend')//对象扩展
};
module.exports = base;