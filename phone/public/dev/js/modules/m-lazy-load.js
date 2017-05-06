//底层方法
var base = require('../base/base');

//延迟加载
function LazyLoad(json) {
    this.options = base.extend({
        defaults: {
            element: '.m-lazy-load',
            moreHeight: 0,//多加载一部分高度的图片
            interval: 80//函数节流时间(延迟时间)
        },
        inherits: json
    });
    this.clientHeight = document.documentElement.clientHeight;
    this.init();
}
LazyLoad.prototype.init = function () {
    this.render();
    this.power();
};
LazyLoad.prototype.render = function () {
    var moreHeight = this.options.moreHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var minTop = scrollTop - moreHeight;
    var maxTop = this.clientHeight + minTop + moreHeight;
    var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
    var aDom = base.getDomArray({element:this.options.element});
    aDom.forEach(function (v) {
        if (v.tagName.toLowerCase() == 'img') {
            if (!v.getAttribute('src')) {
                v.src = src;
            }
            v.setAttribute('height', '100%');
            v.setAttribute('width', '100%');
        }
    });
    aDom.forEach(function (v) {
        //排除那些被none掉的元素(被none掉的元素,通过offsetWidth和offsetHeight获取到的值是0)
        if (v.offsetWidth) {
            var elementTop = base.offset({element: v}).top;
            var elementBottom = elementTop + v.offsetHeight;
            //出现在可视区才进行处理
            if (elementBottom >= minTop && elementTop <= maxTop) {
                if (v.tagName.toLowerCase() == 'img') {
                    if (v.dataset.src) {
                        v.src = v.dataset.src;
                    }
                    v.removeAttribute('height');
                    v.removeAttribute('width');
                } else {
                    if (v.dataset.src) {
                        v.style.backgroundImage = 'url(' + v.dataset.src + ')';
                    }
                }
                v.classList.remove('m-lazy-load');
                v.classList.add('m-lazy-load-active');
            }
        }
    })
};
LazyLoad.prototype.power = function () {
    var self = this;
    var timer = null;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            self.render();
        }, self.options.interval);
    })
};
module.exports = LazyLoad;