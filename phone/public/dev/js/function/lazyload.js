/**
 * Created by zhouhuafei on 16/12/17.
 */
function lazyload(json) {
    var opt = json || {};
    var height = opt.height || 0;//多加载一部分高度的图片
    var interval = opt.interval || 80;//延迟时间
    var doc = document;
    var fn = function () {
        var aImg = [].slice.call(doc.getElementsByClassName('m-lazy-load'));//所有的img元素节点
        var iLen = aImg.length;
        if (!iLen) {
            return false;
        }
        //获取top
        var offsetTop = function (obj) {
            var top = 0;
            while (obj) {
                top += obj.offsetTop;
                obj = obj.offsetParent;
            }
            return top;
        };
        var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
        aImg.forEach(function (v) {
            if (v.tagName.toLowerCase() == 'img') {
                if(!v.getAttribute('src')){
                    v.src = src;
                    v.setAttribute('height', '100%');
                    v.setAttribute('width', '100%');
                    v.style.opacity = '0';
                    v.style.transition = 'opacity 0.4s';
                }
            }
        });
        var iClientH = doc.documentElement.clientHeight;
        var iScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
        var iResultTop = iClientH + iScrollTop + height;
        aImg.forEach(function (v) {
            var iObjTop = offsetTop(v) - height;
            var iObjBottom = offsetTop(v) + v.offsetHeight;
            //height
            if (iResultTop >= iObjTop && iObjTop >= iScrollTop || iObjBottom > iScrollTop && iObjBottom < iResultTop) {
                if (v.tagName.toLowerCase() == 'img') {
                    if (v.getAttribute('src') != v.dataset.src) {
                        v.src = v.dataset.src;
                        v.removeAttribute('height');
                        v.removeAttribute('width');
                    }
                } else {
                    v.style.backgroundImage = 'url(' + v.dataset.src + ')';
                    v.style.backgroundPosition = 'center center';
                    v.style.backgroundRepeat = 'no-repeat';
                }
                v.style.opacity = '1';
                v.classList.add('m-lazy-load-show');
            }
        })
    };
    fn();
    var timer = null;
    var fnScroll = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn();
        }, interval);
    };
    window.addEventListener('scroll', function () {
        fnScroll();
    });
}
module.exports = lazyload;
