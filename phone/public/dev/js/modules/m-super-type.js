//底层方法
var base = require('../base/base.js');

//底层构造函数
function SuperType(json) {
    //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
    this.opt = base.extend({
        default: {
            //父级
            wrap: `.g-page`,//这个仅支持传入选择器和原生dom节点
            //回调
            callback: {
                moduleDomCreateBefore: function () {
                },
                moduleDomCreateAfter: function () {
                },
                moduleDomRenderBefore: function () {
                },
                moduleDomRenderAfter: function () {
                },
                wrapDomCreateBefore: function () {
                },
                wrapDomCreateAfter: function () {
                }
            },
            //配置
            config: {
                moduleDomStyle: ``,//内部模块的样式(写法和css相同)
                moduleDomIsShow: true,//内部模块是否显示(默认显示)
                moduleDomIsClearTimer: true//内部模块是否清除所有定时器(默认清除)
            },
            //数据
            data: {}
        },
        inherit: json
    });
    //函数内部自带的属性
    this.moduleDom = null;//内部的模块
    this.wrapDom = null;//内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.moduleDomTimer = {};//内部模块的定时器存储(假设内部模块有定时器)
    this.init();//初始化
}

//初始化
SuperType.prototype.init = function () {
    this.render();
    this.power();
};

//渲染
SuperType.prototype.render = function () {
    this.moduleDomRender();
    this.wrapDomRender();
};

//功能(这个方法在其他模块的内部需要被重写)
SuperType.prototype.power = function () {
};

//内部模块的创建(这个方法在其他模块的内部需要被重写)
SuperType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        attribute: {
            className: `m-test`,
            innerHTML: `
                <div class="m-test-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
            `
        }
    });
};

//内部模块的渲染
SuperType.prototype.moduleDomRender = function () {
    var callback = this.opt.callback;
    callback.moduleDomCreateBefore(this);
    this.moduleDomCreate();
    callback.moduleDomCreateAfter(this);
};

//内部模块的移除
SuperType.prototype.moduleDomRemove = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
    this.moduleDomClearTimer();
};

//内部模块的定时器清除(假设内部模块有定时器)
SuperType.prototype.moduleDomClearTimer = function () {
    if (this.opt.config.moduleDomIsClearTimer) {
        for (var attr in this.moduleDomTimer) {
            if (this.moduleDomTimer.hasOwnProperty(attr)) {
                clearInterval(this.moduleDomTimer[attr]);
                clearTimeout(this.moduleDomTimer[attr]);
            }
        }
    }
};

//内部模块的显示(显示隐藏和是否清除定时器无关)
SuperType.prototype.moduleDomShow = function () {
    if (this.wrapDom) {
        this.wrapDom.appendChild(this.moduleDom);
    }
};

//内部模块的隐藏(显示隐藏和是否清除定时器无关)
SuperType.prototype.moduleDomHide = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
};

//外部容器的创建
SuperType.prototype.wrapDomCreate=function(){
    this.wrapDom = base.getOneDom({element: this.opt.wrap});
};

//外部容器的渲染
SuperType.prototype.wrapDomRender = function () {
    var callback = this.opt.callback;
    callback.wrapDomCreateBefore(this);
    this.wrapDomCreate();
    callback.wrapDomCreateAfter(this);
    if (this.wrapDom) {
        callback.moduleDomRenderBefore(this);
        if (this.opt.config.moduleDomIsShow) {
            this.wrapDom.appendChild(this.moduleDom);
        }
        callback.moduleDomRenderAfter(this);
    }
};

//外部容器的移除
SuperType.prototype.wrapDomRemove = function () {
    //先移除内部的模块
    this.moduleDomRemove();
    //再移除外部的容器
    if (this.wrapDom) {
        this.wrapDom.parentNode.removeChild(this.wrapDom);
    }
};

module.exports = SuperType;
