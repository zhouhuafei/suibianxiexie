//底层方法
var base = require('../base/base');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type');
var Mask = require('../modules/m-mask');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            moduleDomRenderBefore: function (self) {
                if (self.opt.config.isShowMask) {
                    new Mask({
                        wrap: self.moduleDom.querySelector('.m-loading-wrap'),
                        config: {
                            moduleDomIsShow: true,
                            moduleDomRenderMethod: {method: 'insertBefore'}
                        }
                    });
                }
                if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        //配置
        config: {
            isShowMask: false,  //是否显示遮罩(默认不显示)
            status: 'loading',  //加载状态 loading(加载中) over(加载完毕)
            position: 'relative',   //模块的位置 'fixed'(相对文档居中) 'absolute'(相对容器居中) 'relative'(直接填入容器)
            moduleDomIsShow: false  //内部模块是否显示(默认不显示)
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opt.config;
    var moduleDomHtml = ``;
    var moduleDomClass = ``;
    var status = config.status;
    var position = config.position;
    //加载中
    if (status == 'loading') {
        moduleDomClass = `m-loading-loading `;
        //相对文档居中
        if (position == 'fixed') {
            moduleDomClass += `m-loading-fixed`;
        }
        //相对容器居中
        if (position == 'absolute') {
            moduleDomClass += `m-loading-absolute`;
        }
        //直接填入容器(不进行居中处理)
        if (position == 'relative') {
            moduleDomClass += `m-loading-relative`;
        }
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-loading-icon iconfont icon-jiazaizhong"></div>
            </div>
        `;
    }
    //加载完毕
    if (status == 'over') {
        moduleDomClass = `m-loading-over `;
        //相对文档居中
        if (position == 'fixed') {
            moduleDomClass += `m-loading-fixed`;
        }
        //相对容器居中
        if (position == 'absolute') {
            moduleDomClass += `m-loading-absolute`;
        }
        //直接填入容器(不进行居中处理)
        if (position == 'relative') {
            moduleDomClass += `m-loading-relative`;
        }
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-over-icon iconfont icon-meiyoushuju"></div>
                <div class="m-loading-over-txt">没有数据了</div>
            </div>
        `;
    }
    //模块创建
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-loading ${moduleDomClass}`,
            innerHTML: moduleDomHtml
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;