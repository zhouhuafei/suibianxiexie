//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');


//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        //配置
        config: {
            moduleDomIsShow: false, //内部模块是否显示(默认不显示)
            moduleDomStatus: 'loading', //加载状态  loading(加载中)    over(加载完毕)
            moduleDomPosition: 'center' //模块当位置  'center'(居中)    'bottom'(居底)
        }
    }
});

SubType.prototype.moduleDomCreate = function () {
    var config = this.opt.config;
    var moduleDomHtml = ``;
    var moduleDomClass = ``;
    var moduleDomStatus = config.moduleDomStatus;
    var moduleDomPosition = config.moduleDomPosition;
    //加载中
    if (moduleDomStatus == 'loading') {
        //居中
        if (moduleDomPosition == 'center') {
            moduleDomClass = `m-loading-loading m-loading-center`;
        }
        //居底
        if (moduleDomPosition == 'bottom') {
            moduleDomClass = `m-loading-loading m-loading-bottom`;
        }
    }
    //加载完毕
    if (moduleDomStatus == 'over') {
        //居中
        if (moduleDomPosition == 'center') {
            moduleDomClass = `m-loading-over m-loading-center`;
        }
        //居底
        if (moduleDomPosition == 'bottom') {
            moduleDomClass = `m-loading-over m-loading-bottom`;
        }
    }

    //加载中
    if (moduleDomStatus == 'loading') {
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-loading-icon iconfont icon-jiazaizhong"></div>
            </div>
        `;
    }
    //加载完毕
    if (moduleDomStatus == 'over') {
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

module.exports = SubType;