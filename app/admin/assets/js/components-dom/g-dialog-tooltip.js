const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
        content: '建议尺寸：640*640',
        elementDom: null,
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const positionLocation = config.positionLocation;
    const positionLocationClass = `g-dialog-tooltip_${positionLocation}`;// 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-dialog-tooltip ${positionLocationClass}`,
            innerHTML: config.content,
        },
    });
    const moduleDom = this.moduleDom;
    const elementDom = config.elementDom;
    if (!elementDom) {
        return;
    }
    if (positionLocation === 'top-left') {
        $(moduleDom).css({
            left: $(elementDom).offset().left,
            top: $(elementDom).offset().top - moduleDom.offsetHeight,
        });
    }
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

function Sub2(opts) {
    this.opts = tools.extend({
        element: '.js-g-tooltip',
        eventType: 'click',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
    }, opts);
    this.init();
}

Sub2.prototype.init = function () {
    const self = this;
    const opts = self.opts;
    if (opts.eventType === 'mouseover' || opts.eventType === 'mouseenter') {
        $(document).on('mouseenter', opts.element, function (ev) {
            ev.preventDefault();
            this.gDialogTooltipMouseenter = new Sub({
                config: {
                    positionLocation: opts.positionLocation,
                    content: this.dataset.title,
                    elementDom: this,
                },
            });
        });
        $(document).on('mouseleave', opts.element, function (ev) {
            ev.preventDefault();
            this.gDialogTooltipMouseenter.moduleDomHide();
        });
    }
    if (opts.eventType === 'click') {
        $(document).on('click', opts.element, function (ev) {
            ev.preventDefault();
            if (!this.gDialogTooltipClick) {
                this.gDialogTooltipClick = new Sub({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: this.dataset.title,
                        elementDom: this,
                    },
                });
            } else {
                if (this.gDialogTooltipClick.moduleDom.offsetWidth === 0) {
                    this.gDialogTooltipClick.moduleDomShow();
                } else {
                    this.gDialogTooltipClick.moduleDomHide();
                }
            }
        });
    }
};

module.exports = Sub2;
