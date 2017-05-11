//底层方法
var base = require('../base/base');
var getDomArray = require('../function/get-dom-array');

//底层构造函数
class SuperType {
    constructor(json) {
        //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
        this.opts = base.extend({
            //内部默认参数
            defaults: {
                //父级
                wrap: `.g-wrap`,//这个仅支持传入选择器和原生dom节点
                //回调
                callback: {
                    //内部模块创建之前
                    moduleDomCreateBefore(self) {
                        //内部模块创建之前的回调待续...
                    },
                    //内部模块创建之后
                    moduleDomCreateAfter(self) {
                        //内部模块创建之后的回调待续...
                    },
                    //内部模块渲染之前
                    moduleDomRenderBefore(self) {
                        //内部模块渲染之前的回调待续...
                    },
                    //内部模块渲染之后
                    moduleDomRenderAfter(self) {
                        //内部模块渲染之后的回调待续...
                    },
                    //内部模块移除之前
                    moduleDomRemoveBefore(self) {
                        //内部模块移除之前的回调待续...
                    },
                    //内部模块移除之后
                    moduleDomRemoveAfter(self) {
                        //内部模块移除之后的回调待续...
                    },
                    //内部模块显示之前
                    moduleDomShowBefore(self) {
                        //内部模块显示之前的回调待续...
                    },
                    //内部模块显示之后
                    moduleDomShowAfter(self) {
                        //内部模块显示之后的回调待续...
                    },
                    //内部模块隐藏之前
                    moduleDomHideBefore(self) {
                        //内部模块隐藏之前的回调待续...
                    },
                    //内部模块隐藏之后
                    moduleDomHideAfter(self) {
                        //内部模块隐藏之后的回调待续...
                    },
                    //外部容器创建之前
                    wrapDomCreateBefore(self) {
                        //外部容器创建之前的回调待续...
                    },
                    //外部容器创建之后
                    wrapDomCreateAfter(self) {
                        //外部容器创建之后的回调待续...
                    },
                    //外部容器渲染之前
                    wrapDomRenderBefore(self) {
                        //外部容器渲染之前的回调待续...
                    },
                    //外部容器渲染之后
                    wrapDomRenderAfter(self) {
                        //外部容器渲染之后的回调待续...
                    },
                    //外部容器移除之前
                    wrapDomRemoveBefore(self) {
                        //外部容器移除之前的回调待续...
                    },
                    //外部容器移除之后
                    wrapDomRemoveAfter(self) {
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
        this.init();//初始化
    }

    //初始化
    init() {
        this.render();
        this.power();
    }

    //渲染
    render() {
        this.moduleDomRender();
        this.wrapDomRender();
    }

    //功能(这个方法在其他模块的内部需要被重写)
    power() {
        //功能待续...
    }

    //内部模块的创建(这个方法在其他模块的内部需要被重写)
    moduleDomCreate() {
        this.moduleDom = base.createElement({
            style: this.opts.config.moduleDomStyle,
            custom: this.opts.config.moduleDomCustomAttr,
            attribute: {
                className: `m-super-type-es6`,
                innerHTML: `
                    <div class="m-super-type-es6-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
                `
            }
        });
    }

    //内部模块的渲染
    moduleDomRender() {
        this.moduleDomRemove();
        var callback = this.opts.callback;
        callback.moduleDomCreateBefore(this);
        this.moduleDomCreate();
        callback.moduleDomCreateAfter(this);
    }

    //内部模块的移除
    moduleDomRemove() {
        var callback = this.opts.callback;
        callback.moduleDomRemoveBefore(this);
        if (this.moduleDom&&this.moduleDom.parentNode) {
            this.moduleDom.parentNode.removeChild(this.moduleDom);
        }
        this.moduleDomClearTimer();
        callback.moduleDomRemoveAfter(this);
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
            this.wrapDomRenderMethod();
        }
        callback.moduleDomShowAfter(this);
    }

    //内部模块的隐藏(显示隐藏和是否清除定时器无关)
    moduleDomHide() {
        var callback = this.opts.callback;
        callback.moduleDomHideBefore(this);
        if (this.moduleDom.parentNode) {
            this.moduleDom.parentNode.removeChild(this.moduleDom);
            this.opts.config.moduleDomIsShow = false;
        }
        callback.moduleDomHideAfter(this);
    }

    //外部容器的创建
    wrapDomCreate() {
        this.wrapDom = getDomArray({element: this.opts.wrap})[0];
    }

    //外部容器的渲染
    wrapDomRender() {
        var callback = this.opts.callback;
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
    }

    //外部容器的渲染方式
    wrapDomRenderMethod() {
        var config = this.opts.config;
        if (config.moduleDomIsShow) {
            var renderMethod = config.moduleDomRenderMethod;
            if (renderMethod.method == 'insertBefore') {
                var dom = getDomArray({element: renderMethod.child})[0];
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
    }

    //外部容器的移除
    wrapDomRemove() {
        var callback = this.opts.callback;
        callback.wrapDomRemoveBefore(this);
        //先移除内部的模块
        this.moduleDomRemove();
        //再移除外部的容器
        if (this.wrapDom) {
            this.wrapDom.parentNode.removeChild(this.wrapDom);
        }
        callback.wrapDomRemoveAfter(this);
    }

    //获取内部模块的整体html结构
    getModuleDomHtml() {
        return this.moduleDom.outerHTML;
    }
}

module.exports = SuperType;