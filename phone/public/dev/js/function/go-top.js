/**
 * Created by zhouhuafei on 17/1/1.
 */
//返回顶部
function goTop(json) {
    var opt = json || {};
    var obj = opt.obj;
    if (!obj) {
        console.log('parameter error');
        return false;
    }
    var doc = document;
    var scale = 6;
    var scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
    var speed = 0;
    var timer = null;
    var fn = function () {
        speed = Math.ceil(scrollT / scale);
        scrollT -= speed;
        window.scrollTo(0, scrollT);
        timer = requestAnimationFrame(fn);
        if (scrollT == 0) {
            cancelAnimationFrame(timer);
        }
    };
    obj.addEventListener('click', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
        requestAnimationFrame(fn);
    });
    doc.addEventListener('touchstart', function () {
        cancelAnimationFrame(timer);
    });
}
module.exports = goTop;