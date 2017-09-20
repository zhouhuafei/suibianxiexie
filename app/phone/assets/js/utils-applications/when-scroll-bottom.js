const extend = require('../utils-tools/extend');
/**
 * @description 当滚动到浏览器底部
 * @constructor
 * @param {Object} json
 * */
function WhenScrollBottom(json) {
    this.opts = extend({
        callback: {
            // 已经滚动到底部的回调
            success: function () {
            },
            // 尚未滚动到底部的回调
            failure: function () {
            },
        },
        isInitRender: true, // 是否初始化的时候就进行渲染
        interval: 80, // 函数节流时间(延迟时间)
        errorHeight: 0, // 滚动到底部上面一定高度就算是滚动到底部了(误差高度)
    }, json);
    this.isLoadOver = false;// 数据是否加载完毕
    this.init();
}

WhenScrollBottom.prototype.init = function () {
    if (this.opts.isInitRender) {
        this.render();
    }
    this.power();
};

WhenScrollBottom.prototype.render = function () {
    const callback = this.opts.callback;
    const allH = document.body.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= allH - this.opts.errorHeight && !this.isLoadOver) {
        callback.success(this);
    } else {
        callback.failure();
    }
};

// 数据加载完毕
WhenScrollBottom.prototype.dataLoadOver = function () {
    this.isLoadOver = true;
    // 数据加载完毕,手动调用这个方法,或者手动把isLoadOver属性变成true,建议掉方法
};

WhenScrollBottom.prototype.power = function () {
    const self = this;
    let timer = null;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            self.render();
        }, self.opts.interval);
    });
};

module.exports = WhenScrollBottom;
