/**
 * Created by zhouhuafei on 17/1/1.
 */
//是否禁止浏览器滚动
function isDisableBrowserScrolling() {
    var doc = document;
    return {
        //阻止冒泡
        stopPropagation: function (ev) {
            ev.stopPropagation();
        },
        //阻止默认事件
        preventDefault: function (ev) {
            ev.preventDefault();
        },
        //阻止冒泡,阻止默认事件
        returnFalse: function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        },
        //禁止滚动
        noScroll: function () {
            doc.addEventListener('touchmove', this.preventDefault, false);
            doc.documentElement.style.overflow = 'hidden';
        },
        //解除禁止浏览器滚动
        yesScroll: function () {
            doc.removeEventListener('touchmove', this.preventDefault, false);
            doc.documentElement.style.overflow = 'auto';
        }
    }
}
module.exports = isDisableBrowserScrolling;