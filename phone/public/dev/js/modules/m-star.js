//底层方法
var base = require('../base/base.js');

//构造函数
function Fn(json) {
    //外部传进来的参数
    this.opt = base.extend({
        defaults: {
            //父级
            parent: `body`,//这个仅支持传入选择器和原生dom节点
            //回调
            callback: {
                click: function () {
                }
            },
            //配置
            config: {
                moduleStyle: ``,//内部模块的样式(写法和css相同)
                isEvent: true,//默认具备事件
                isClearTimer: true,//是否清除所有定时器(默认清除)
                isShowModule: true//是否显示模块(默认显示)
            },
            //数据
            data: {
                allStarNum: 5,
                nowStarNum: 5
            }
        },
        inherits: json
    });
    //内部的一些属性
    this.moduleDom = null;//内部的模块
    this.parentDom = null;//内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.timer = {};//假设内部有定时器
    this.init();//初始化
}

//初始化
Fn.prototype.init = function () {
    this.render();
    this.power();
};

//渲染
Fn.prototype.render = function () {
    this.renderModuleDom();
    this.renderParentDom();
};

//内部的模块
Fn.prototype.renderModuleDom = function () {
    var html = ``;
    for (var i = 0; i < this.opt.data.allStarNum; i++) {
        var className = '';
        if (i < this.opt.data.nowStarNum) {
            className = 'm-star-item-active';
        }
        html += `<div data-index="${i}" class="iconfont icon-xingping m-star-item ${className}"></div>`;
    }
    this.moduleDom = base.createElement({
        attribute: {
            className: `m-star`,
            innerHTML: html
        }
    });
    this.opt.star = this.moduleDom.children;
};

//外部的容器
Fn.prototype.renderParentDom = function () {
    this.parentDom = base.getOneDom({dom: this.opt.parent});
    if (!this.parentDom) {
        return false;
    }
    if (this.parentDom) {
        if (this.opt.config.isShowModule) {
            this.parentDom.appendChild(this.moduleDom);
        }
    }
};

//移除内部的模块
Fn.prototype.removeModuleDom = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
    //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
    this.clearTimer();
};

//清除内部的定时器
Fn.prototype.clearTimer = function () {
    if (this.opt.config.isClearTimer) {
        for (var attr in this.timer) {
            if (this.timer.hasOwnProperty(attr)) {
                clearInterval(this.timer[attr]);
                clearTimeout(this.timer[attr]);
            }
        }
    }
};

//移除外部的容器
Fn.prototype.removeParentDom = function () {
    //先移除内部的模块
    this.removeModuleDom();
    //再移除外部的容器
    if (this.parentDom) {
        this.parentDom.parentNode.removeChild(this.parentDom);
    }
};

//模块显示(显示隐藏和是否清除定时器无关)
Fn.prototype.show = function () {
    if (this.parentDom) {
        this.parentDom.appendChild(this.moduleDom);
    }
};

//模块隐藏(显示隐藏和是否清除定时器无关)
Fn.prototype.hide = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
};

//功能
Fn.prototype.power = function () {
    this.events();
};

//事件
Fn.prototype.events = function () {
    var self = this;
    if (this.opt.config.isEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target.classList.contains('m-star-item')) {
                var index = target.dataset.index;
                for (var j = 0; j < self.opt.data.allStarNum; j++) {
                    if (j <= index) {
                        self.opt.star[j].classList.add('m-star-item-active');
                    } else {
                        self.opt.star[j].classList.remove('m-star-item-active');
                    }
                }
                self.opt.callback.click({index: index});
            }
        })
    }
};

module.exports = Fn;