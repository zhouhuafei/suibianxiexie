//滚动到指定位置
function scrollTo(json) {
    var opts = json || {};
    var to = opts.to || '0';
    var scale = 6;
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = 0;
    var timer = null;
    var fn = function () {
        speed = Math.ceil((scrollT - to) / scale);
        scrollT -= speed;
        window.scrollTo(0, scrollT);
        timer = requestAnimationFrame(fn);
        if (scrollT <= to * 1) {
            cancelAnimationFrame(timer);
        }
    };
    requestAnimationFrame(fn);
}
module.exports = scrollTo;