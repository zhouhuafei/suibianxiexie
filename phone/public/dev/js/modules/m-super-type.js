//底层方法
var base = require('../base/base.js');

//底层构造函数
function SuperType(json) {
    //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
    this.opt = base.extend({
        //内部默认参数
        default: {
            //父级
            wrap: `.g-page`,//这个仅支持传入选择器和原生dom节点
            //回调
            callback: {
                //内部模块创建之前
                moduleDomCreateBefore: function (self) {
                },
                //内部模块创建之后
                moduleDomCreateAfter: function (self) {
                },
                //内部模块渲染之前
                moduleDomRenderBefore: function (self) {
                },
                //内部模块渲染之后
                moduleDomRenderAfter: function (self) {
                },
                //内部模块移除之前
                moduleDomRemoveBefore: function (self) {
                },
                //内部模块移除之后
                moduleDomRemoveAfter: function (self) {
                },
                //内部模块显示之前
                moduleDomShowBefore: function (self) {
                },
                //内部模块显示之后
                moduleDomShowAfter: function (self) {
                },
                //内部模块隐藏之前
                moduleDomHideBefore: function (self) {
                },
                //内部模块隐藏之后
                moduleDomHideAfter: function (self) {
                },
                //外部容器创建之前
                wrapDomCreateBefore: function (self) {
                },
                //外部容器创建之后
                wrapDomCreateAfter: function (self) {
                },
                //外部容器渲染之前
                wrapDomRenderBefore: function (self) {
                },
                //外部容器渲染之后
                wrapDomRenderAfter: function (self) {
                },
                //外部容器移除之前
                wrapDomRemoveBefore: function (self) {
                },
                //外部容器移除之后
                wrapDomRemoveAfter: function (self) {
                }
            },
            //配置
            config: {
                //内部模块插入到外部容器的方式
                moduleDomRenderMethod: {
                    method: 'appendChild',//'appendChild','insertBefore'
                    child: null
                },
                moduleDomStyle: ``,//内部模块的样式(写法和css相同)
                moduleDomIsShow: true,//内部模块是否显示(默认显示)
                moduleDomIsClearTimer: true//内部模块是否清除所有定时器(默认清除)
            },
            //数据
            data: {}
        },
        //外部传入参数
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
    var callback = this.opt.callback;
    callback.moduleDomRemoveBefore(this);
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
    this.moduleDomClearTimer();
    callback.moduleDomRemoveAfter(this);
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
    var callback = this.opt.callback;
    callback.moduleDomShowBefore(this);
    if (this.wrapDom) {
        this.opt.config.moduleDomIsShow = true;
        this.wrapDomRenderMethod();
    }
    callback.moduleDomShowAfter(this);
};

//内部模块的隐藏(显示隐藏和是否清除定时器无关)
SuperType.prototype.moduleDomHide = function () {
    var callback = this.opt.callback;
    callback.moduleDomHideBefore(this);
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        this.opt.config.moduleDomIsShow = false;
    }
    callback.moduleDomHideAfter(this);
};

//外部容器的创建
SuperType.prototype.wrapDomCreate = function () {
    this.wrapDom = base.getDomArray({element: this.opt.wrap})[0];
};

//外部容器的渲染
SuperType.prototype.wrapDomRender = function () {
    var callback = this.opt.callback;
    callback.wrapDomCreateBefore(this);
    this.wrapDomCreate();
    callback.wrapDomCreateAfter(this);
    if (this.wrapDom) {
        callback.moduleDomRenderBefore(this);
        callback.wrapDomRenderBefore(this);
        this.wrapDomRenderMethod();
        callback.wrapDomRenderAfter(this);
        callback.moduleDomRenderAfter(this);
    }
};

//外部容器的渲染方式
SuperType.prototype.wrapDomRenderMethod = function () {
    var config = this.opt.config;
    if (config.moduleDomIsShow) {
        var renderMethod = config.moduleDomRenderMethod;
        if (renderMethod.method == 'insertBefore') {
            var dom = base.getDomArray({element: renderMethod.child})[0];
            if (dom) {
                this.wrapDom.insertBefore(this.moduleDom, dom);
            } else {
                this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
            }
        }
        if (renderMethod.method == 'appendChild') {
            this.wrapDom.appendChild(this.moduleDom);
        }
    }
};

//外部容器的移除
SuperType.prototype.wrapDomRemove = function () {
    var callback = this.opt.callback;
    callback.wrapDomRemoveBefore(this);
    //先移除内部的模块
    this.moduleDomRemove();
    //再移除外部的容器
    if (this.wrapDom) {
        this.wrapDom.parentNode.removeChild(this.wrapDom);
    }
    callback.wrapDomRemoveAfter(this);
};

//获取内部模块的整体html结构
SuperType.prototype.getModuleDomHtml=function(){
    return this.moduleDom.outerHTML;
};

module.exports = SuperType;