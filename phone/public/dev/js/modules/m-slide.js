//底层方法
var base = require('../base/base');
var TouchSlide = require('../plugs/touch-slide');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            startFun: function () {
            },
            endFun: function () {
            }
        },
        //配置
        config: {
            isShowHref: true,//是否有跳转
            touchSlide: {
                slideCell: '',//外部容器,必须是id,这个值会在底部进行覆盖,因为在这里没办法获取this
                mainCell: '.m-slide-body',//切换元素的包裹层对象
                titCell: '.m-slide-header .m-slide-item',//导航元素对象
                effect: "leftLoop",//效果
                autoPlay: true,//自动播放
                delayTime: 200,//切换一次的持续时间
                interTime: 300000,//多久切换一次
                startFun: function () {
                },
                endFun: function () {

                },
                defaultIndex: 0//默认的当前位置索引
            }
        },
        //数据
        data: {
            items: [
                {
                    src: '',
                    href: ''
                }
            ]
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-slide`,
            innerHTML: `
                ${this.renderHeader()}
                ${this.renderBody()}
            `
        }
    });
};

SubType.prototype.renderHeader = function () {
    var self = this;
    var html = ``;
    var data = self.opt.data;
    var className = ``;
    data.items.forEach(function (v, i) {
        if (i == self.opt.config.touchSlide.defaultIndex) {
            className = `on`;
        }
        html += `<div class="m-slide-item ${className}"></div>`;
    });
    return `<div class="m-slide-header">${html}</div>`;
};

SubType.prototype.renderBody = function () {
    var self = this;
    var html = ``;
    var data = self.opt.data;
    data.items.forEach(function (v) {
        if (self.opt.config.isShowHref) {
            html += `<a href="${v.href || 'javascript:;'}" class="m-slide-item"><img data-src="${v.src}" src="" alt=""></a>`;
        } else {
            html += `<a class="m-slide-item"><img data-src="${v.src}" src="" alt=""></a>`;
        }
    });
    return `<div class="m-slide-body">${html}</div>`;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var callback = self.opt.callback;
    var config = self.opt.config;
    var touchSlide = config.touchSlide;
    touchSlide.slideCell = self.opt.wrap;//外部容器,必须是id
    touchSlide.startFun = function (i) {
        var allImg = self.moduleDom.querySelectorAll('.m-slide-body img');
        var nowIndex = ( i + 1);
        if (touchSlide.effect == 'left') {
            nowIndex = i;
        }
        var nowImg = allImg[nowIndex];
        var prevImg = allImg[nowIndex - 1];
        var nextImg = allImg[nowIndex + 1];
        nowImg.src = nowImg.dataset.src;
        prevImg.src = prevImg.dataset.src;
        nextImg.src = nextImg.dataset.src;
        callback.startFun({self: self, index: i});
    };
    touchSlide.endFun = function (i) {
        callback.endFun({self: self, index: i});
    };
    TouchSlide(self.opt.config.touchSlide);
};

module.exports = SubType;