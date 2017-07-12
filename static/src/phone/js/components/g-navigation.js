let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合
let SuperType = require('../components/g-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: {
            items: [
                {
                    link: '/',
                    icon: 'icon-shouye',
                    txt: '首页',
                    isShowMark: false
                },
                {
                    link: '/dev-global',
                    icon: 'icon-kaifa',
                    txt: '开发全局',
                    isShowMark: false
                },
                {
                    link: '/dev-components',
                    icon: 'icon-kaifa',
                    txt: '开发组件',
                    isShowMark: false
                },
                {
                    link: '/dev-words',
                    icon: 'icon-kaifa',
                    txt: '标准词汇',
                    isShowMark: false
                },
                {
                    link: '/mine',
                    icon: 'icon-wode',
                    txt: '我的',
                    isShowMark: false
                }
            ]
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var items = data.items;
    var html = ``;
    items.forEach(function (v) {
        var markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="g-navigation-mark"></div>`;
        }
        html += `
            <a href="${v.link}" class="g-navigation-wrap">
                <div class="g-navigation-icon iconfont ${v.icon}"></div>
                <div class="g-navigation-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `g-navigation`,
            innerHTML: html
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;