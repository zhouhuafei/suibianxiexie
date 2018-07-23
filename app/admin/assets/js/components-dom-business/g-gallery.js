const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
    // 容器
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-gallery-wrap',
            innerHTML: `
                <div class="g-mask"></div>
                <div class="g-gallery">
                    <div class="g-gallery-category">
                        <div class="g-gallery-category-item">默认</div>
                        <div class="g-gallery-category-item"></div>
                    </div>
                    <div class="g-gallery-content">
                        <div class="g-gallery-content-header"></div>
                        <div class="g-gallery-content-body"></div>
                        <div class="g-gallery-content-footer"></div>
                    </div>
                    <div class="g-gallery-options"></div>                                        
                </div>
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
