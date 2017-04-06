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
    //加载完毕(没有更多数据)
    if (config.moduleDomStatus == 'over') {
        moduleDomHtml = `
            <div class="m-loading-over">
                <div class="m-loading-over-icon iconfont icon-shoucang"></div>
            </div>
        `;
    }
    //加载中
    if (config.moduleDomStatus == 'loading') {
        moduleDomHtml = `
            <div class="m-loading-loading">
                <div class="m-loading-loading-icon iconfont icon-jiazaizhong"></div>
            </div>
        `;
    }
    //居中
    if (config.moduleDomPosition == 'center') {
        moduleDomClass = `m-loading m-loading-center`;
    }
    //居底
    if (config.moduleDomPosition == 'bottom') {
        moduleDomClass = `m-loading m-loading-bottom`;
    }
    //模块创建
    this.moduleDom = base.createElement({
        attribute: {
            className: moduleDomClass,
            innerHTML: moduleDomHtml
        }
    });
};

SubType.prototype.power=function(){

};

module.exports = SubType;