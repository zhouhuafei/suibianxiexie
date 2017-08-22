let tools = require('../utils/tools');// 工具方法集合
let applications = require('../utils/applications');// 应用方法集合
let SuperType = require('../components/g-super-type');// 超类型(子类型继承的对象)
let route = `/phone/`;

// 子类型
let SubType = tools.constructorInherit({
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
                    txt: '首页',
                    isShowMark: false,
                },
                {
                    href: `${route}dev-global`,
                    icon: 'icon-kaifa',
                    txt: '开发全局',
                    isShowMark: false,
                },
                {
                    href: `${route}dev-components`,
                    icon: 'icon-kaifa',
                    txt: '开发组件',
                    isShowMark: false,
                },
                {
                    href: `${route}dev-words`,
                    icon: 'icon-kaifa',
                    txt: '标准词汇',
                    isShowMark: false,
                },
                {
                    href: `${route}mine`,
                    icon: 'icon-wode',
                    txt: '我的',
                    isShowMark: false,
                },
            ],
        },
    },
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    let data = this.opts.data;
    let items = data.items;
    let html = ``;
    items.forEach(function (v) {
        let markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="g-navigation-mark"></div>`;
        }
        html += `
            <a href="${v.href}" class="g-navigation-item">
                <div class="g-navigation-icon iconfont ${v.icon}"></div>
                <div class="g-navigation-text">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-navigation`,
            innerHTML: html,
        },
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;
