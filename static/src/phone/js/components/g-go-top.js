let tools = require('../base/tools');// 工具方法集合
let applications = require('../base/applications');// 应用方法集合
let SuperType = require('../components/g-super-type');// 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {
            showHeight: 200,
        },
        // 数据
        data: {},
    },
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-go-top`,
            innerHTML: `<div class="g-go-top-icon iconfont icon-shangjiantou"></div>`,
        },
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function () {
        applications.scrollTo({to: '0'});
    });
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opts.config.showHeight) {
            self.moduleDom.classList.add('g-go-top-active');
        } else {
            self.moduleDom.classList.remove('g-go-top-active');
        }
    });
};

module.exports = SubType;
