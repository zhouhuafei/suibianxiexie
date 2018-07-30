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
                        <div class="g-gallery-category-item">全部</div>
                        <div class="g-gallery-category-item g-gallery-category-item_active">无分类</div>
                        <div class="g-gallery-category-item">640*640</div>
                    </div>
                    <div class="g-gallery-content">
                        <div class="g-gallery-content-header">
                            <div class="g-display-flex">                            
                                <div class="g-button g-button_small g-button_create g-margin-right-10 g-flex-0">
                                    <div class="g-button-icon iconfont icon-plus"></div>
                                    <div class="g-button-text">上传图片</div>
                                </div>
                                <label class="g-checkbox g-checkbox_small">
                                    <span class="g-checkbox-body">
                                        <input class="g-checkbox-body-checkbox" type="checkbox">
                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>
                                    </span>
                                    <span class="g-checkbox-text">全选</span>
                                </label>
                            </div>
                        </div>
                        <div class="g-gallery-content-body">
                            <div class="g-gallery-content-body-item">
                                <img src="" alt="">                            
                                <label class="g-checkbox g-checkbox_small">
                                    <span class="g-checkbox-body">
                                        <input class="g-checkbox-body-checkbox" type="checkbox">
                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>
                                    </span>
                                    <span class="g-checkbox-text">全选</span>
                                </label>
                            </div>
                        </div>
                        <div class="g-gallery-content-footer">
                            <div class="g-button g-button_small g-button_hollow g-button_cancel g-width-100">取消</div>
                            <div class="g-button g-button_small g-button_hollow g-width-100 g-margin-left-10">确认</div>
                        </div>
                    </div>
                </div>
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
