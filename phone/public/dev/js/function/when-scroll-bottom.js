var extend = require('../function/extend.js');

//当滚动到了浏览器的底部
function WhenScrollBottom(json) {
    this.opt = extend({
        default: {
            callback: {
                success: function () {
                },
                fail: function () {
                }
            },
            interval: 80,//函数节流时间(延迟时间)
            errorHeight: 0//滚动到底部上面一定高度就算是滚动到底部了(误差高度)
        },
        inherit: json
    });
    this.isLoadOver = false;//数据是否加载完毕
    this.init();
}

WhenScrollBottom.prototype.init = function () {
    this.render();
    this.power();
};

WhenScrollBottom.prototype.render = function () {
    var callback = this.opt.callback;
    var allH = document.body.scrollHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= allH - this.opt.errorHeight && !this.isLoadOver) {
        this.isLoadOver = true;
        callback.success(this);
        /*
         * 条件:当你拿到请求的数据之后
         * 可能性:1.如果你的数据加载完毕了,你需要手动把isLoadOver开关变成true
         * 可能性:2.如果你的数据尚未加载完毕,你需要手动把isLoadOver开关变成false
         * */
    } else {
        callback.fail();
    }
};

WhenScrollBottom.prototype.power = function () {
    var self = this;
    var timer = null;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            self.render();
        }, self.opt.interval);
    });
};
module.exports = WhenScrollBottom;