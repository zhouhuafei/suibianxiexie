let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合
let SuperType = require('../components/g-super-type');//超类型(子类型继承的对象)

//子类型
let SubType = tools.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //容器
        wrap: '.g-footer',
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: [
            // {
            //     routeName: 'home',
            //     link: '/',
            //     text: '首页',
            //     icon: 'icon-shouye',
            //     isHighlight: false,
            //     isShowMark: false
            // }
        ]
    }
});

SubType.prototype.moduleDomCreate = function () {
    this.moduleDomClass = `g-footer-nav`;
    let moduleDomHtml = ``;
    let data = tools.jsonToArray({json: this.opts.data});
    data.forEach(function (value) {
        let v = value.value;
        let highlightClass = ``;
        if (v.isHighlight) {
            highlightClass = `g-footer-nav-body-active`;
        }
        let markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="g-footer-nav-body-mark"></div>`;
        }
        moduleDomHtml += `
            <a class="g-footer-nav-body ${highlightClass}" href="${v.link}">
                <div class="g-footer-nav-body-icon iconfont ${v.icon}"></div>
                <div class="g-footer-nav-body-text">${v.text}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: `<div class="g-footer-nav-wrap">${moduleDomHtml}</div>`
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;