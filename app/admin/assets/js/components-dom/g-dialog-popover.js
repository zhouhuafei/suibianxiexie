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
        element: '.js-popover',
        eventType: 'mouseover',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
        content: 'no popover content',
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const positionLocation = `g-dialog-popover_${config.positionLocation}`;// 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-dialog-popover ${positionLocation}`,
            innerHTML: `
                <div class="g-dialog-popover-content">${config.content}</div>
                <div class="g-dialog-popover-icon"></div>                
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
