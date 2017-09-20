const tools = require('../utils/tools');// 工具方法集合
const applications = require('../utils/applications');// 应用方法集合
const SuperType = require('../components/g-super-type');
// 超类型(子类型继承的对象)
const route = '/phone/';

// 子类型
const SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {},
        // 数据
        data: {
            items: [
                {
                    href: route,
                    icon: 'icon-shouye',
                    text: '首页',
                    isShowMark: false,
                },
                {
                    href: `${route}dev-globals/`,
                    icon: 'icon-kaifa',
                    text: '开发全局',
                    isShowMark: false,
                },
                {
                    href: `${route}dev-components/`,
                    icon: 'icon-kaifa',
                    text: '开发组件',
                    isShowMark: false,
                },
                {
                    href: `${route}dev-words/`,
                    icon: 'icon-kaifa',
                    text: '标准词汇',
                    isShowMark: false,
                },
                {
                    href: `${route}mine/`,
                    icon: 'icon-wode',
                    text: '我的',
                    isShowMark: false,
                },
            ],
        },
    },
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    const data = this.opts.data;
    const items = data.items;
    let html = '';
    items.forEach(function (v) {
        let markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-navigation-mark"></div>';
        }
        html += `
            <a href="${v.href}" class="g-navigation-item">
                <div class="g-navigation-icon iconfont ${v.icon}"></div>
                <div class="g-navigation-text">${v.text}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-navigation',
            innerHTML: html,
        },
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;