let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合

//底层构造函数
class SuperType {
    constructor(json) {
        //函数外部传来的参数
        // (这个属性在其他模块的内部需要被重写)
        this.opts = tools.extend({
            //内部默认参数
            defaults: {
                //父级
                wrap: `.g-body`,//这个仅支持传入选择器和原生dom节点
                //回调
                callback: {
                    //内部模块创建之前
                    moduleDomCreateBefore: function (self) {
                        //内部模块创建之前的回调待续...
                    },
                    //内部模块创建之后
                    moduleDomCreateAfter: function (self) {
                        //内部模块创建之后的回调待续...
                    },
                    //内部模块渲染之前
                    moduleDomRenderBefore: function (self) {
                        //内部模块渲染之前的回调待续...
                    },
                    //内部模块渲染之后
                    moduleDomRenderAfter: function (self) {
                        //内部模块渲染之后的回调待续...
                    },
                    //内部模块移除之前
                    moduleDomRemoveBefore: function (self) {
                        //内部模块移除之前的回调待续...
                    },
                    //内部模块移除之后
                    moduleDomRemoveAfter: function (self) {
                        //内部模块移除之后的回调待续...
                    },
                    //内部模块显示之前
                    moduleDomShowBefore: function (self) {
                        //内部模块显示之前的回调待续...
                    },
                    //内部模块显示之后
                    moduleDomShowAfter: function (self) {
                        //内部模块显示之后的回调待续...
                    },
                    //内部模块隐藏之前
                    moduleDomHideBefore: function (self) {
                        //内部模块隐藏之前的回调待续...
                    },
                    //内部模块隐藏之后
                    moduleDomHideAfter: function (self) {
                        //内部模块隐藏之后的回调待续...
                    },
                    //外部容器获取之前
                    wrapDomGetBefore: function (self) {
                        //外部容器获取之前的回调待续...
                    },
                    //外部容器获取之后
                    wrapDomGetAfter: function (self) {
                        //外部容器获取之后的回调待续...
                    },
                    //外部容器移除之前
                    wrapDomRemoveBefore: function (self) {
                        //外部容器移除之前的回调待续...
                    },
                    //外部容器移除之后
                    wrapDomRemoveAfter: function (self) {
                        //外部容器移除之后的回调待续...
                    }
                },
                //配置
                config: {
                    //内部模块的自定义属性
                    moduleDomCustomAttr: {},
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
            inherits: json
        });
        //函数内部自带的属性
        this.moduleDom = null;//内部的模块
        this.wrapDom = null;//内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
        this.moduleDomTimer = {};//内部模块的定时器存储(假设内部模块有定时器)
        //this.init();//初始化(用es6继承的话,在超类里调初始化没有意义,因为子类的参数还没有被赋予新值,建议不要在超类里初始化,在子类里初始化)
    }

    //初始化
    init() {
        this.render();
        this.power();
    }

    //渲染
    render() {
        this.moduleDomRemove();//内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

        var callback = this.opts.callback;
        callback.moduleDomCreateBefore(this);
        this.moduleDomCreate();//内部模块的创建
        callback.moduleDomCreateAfter(this);

        this.wrapDomGet();//外部容器的获取
        this.moduleDomRender();//内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
    }

    //功能(这个方法在其他模块的内部需要被重写)
    power() {
        //功能待续...
    }

    //内部模块的创建(这个方法在其他模块的内部需要被重写)
    moduleDomCreate() {
        this.moduleDom = applications.createElement({
            style: this.opts.config.moduleDomStyle,
            custom: this.opts.config.moduleDomCustomAttr,
            attribute: {
                className: `g-super-type-es6`,
                innerHTML: `
                    <div class="g-super-type-es6-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
                `
            }
        });
    }

    //内部模块的渲染
    moduleDomRender() {
        var callback = this.opts.callback;
        var config = this.opts.config;
        if (config.moduleDomIsShow && this.wrapDom) {
            callback.moduleDomRenderBefore(this);
            var renderMethod = config.moduleDomRenderMethod;
            if (renderMethod.method == 'insertBefore') {
                var dom = applications.getDomArray({element: renderMethod.child})[0];
                if (dom) {
                    this.wrapDom.insertBefore(this.moduleDom, dom);
                } else {
                    this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
                }
            }
            if (renderMethod.method == 'appendChild') {
                this.wrapDom.appendChild(this.moduleDom);
            }
            callback.moduleDomRenderAfter(this);
        }
    }

    //内部模块的移除
    moduleDomRemove() {
        var callback = this.opts.callback;
        if (this.moduleDom && this.moduleDom.parentNode) {
            callback.moduleDomRemoveBefore(this);
            this.moduleDom.parentNode.removeChild(this.moduleDom);
            callback.moduleDomRemoveAfter(this);
        }
        this.moduleDomClearTimer();
    }

    //内部模块的定时器清除(假设内部模块有定时器)
    moduleDomClearTimer() {
        if (this.opts.config.moduleDomIsClearTimer) {
            for (var attr in this.moduleDomTimer) {
                if (this.moduleDomTimer.hasOwnProperty(attr)) {
                    clearInterval(this.moduleDomTimer[attr]);
                    clearTimeout(this.moduleDomTimer[attr]);
                }
            }
        }
    }

    //内部模块的显示(显示隐藏和是否清除定时器无关)
    moduleDomShow() {
        var callback = this.opts.callback;
        callback.moduleDomShowBefore(this);
        if (this.wrapDom) {
            this.opts.config.moduleDomIsShow = true;
            this.moduleDomRender();
        }
        callback.moduleDomShowAfter(this);
    }

    //内部模块的隐藏(显示隐藏和是否清除定时器无关)
    moduleDomHide() {
        var callback = this.opts.callback;
        if (this.moduleDom.parentNode) {
            this.opts.config.moduleDomIsShow = false;
            callback.moduleDomHideBefore(this);
            this.moduleDom.parentNode.removeChild(this.moduleDom);
            callback.moduleDomHideAfter(this);
        }
    }

    //外部容器的获取
    wrapDomGet() {
        var callback = this.opts.callback;
        callback.wrapDomGetBefore(this);
        this.wrapDom = applications.getDomArray({element: this.opts.wrap})[0];
        callback.wrapDomGetAfter(this);
    }

    //外部容器的移除
    wrapDomRemove() {
        var callback = this.opts.callback;
        //先移除内部的模块
        this.moduleDomRemove();
        //再移除外部的容器
        if (this.wrapDom) {
            callback.wrapDomRemoveBefore(this);
            this.wrapDom.parentNode.removeChild(this.wrapDom);
            callback.wrapDomRemoveAfter(this);
        }
    }

    //获取内部模块的整体html结构
    getModuleDomHtml() {
        return this.moduleDom.outerHTML;
    }
}

module.exports = SuperType;