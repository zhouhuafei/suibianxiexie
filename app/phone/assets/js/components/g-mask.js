const tools = require('../utils/tools');// 工具方法集合
const applications = require('../utils/applications');// 应用方法集合
const SuperType = require('../components/g-super-type');// 超类型(子类型继承的对象)

// 子类型
const SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        wrap: '.g-wrap',
        // 回调
        callback: {
            click: function () {
            },
            moduleDomRenderBefore: function (self) {
                if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            },
        },
        // 配置
        config: {
            isTransparent: false, // 是不是透明的(默认不透明)
            moduleDomIsShow: false, // 内部模块是否显示(默认不显示)
        },
        // 数据
        data: {},
    },
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    let isTransparent = '';
    if (this.opts.config.isTransparent) {
        isTransparent = 'g-mask-transparent';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-mask ${isTransparent}`,
            innerHTML: '',
        },
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    const self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = SubType;
