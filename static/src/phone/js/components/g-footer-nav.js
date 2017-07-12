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
        data: {
            // home: {
            //     link: '/',
            //     icon: 'icon-shouye',
            //     txt: '首页',
            //     isHighlight: false,
            //     isShowMark: false
            // },
            // devGlobal: {
            //     link: '/dev-global',
            //     icon: 'icon-kaifa',
            //     txt: 'g-global',
            //     isHighlight: false,
            //     isShowMark: false
            // },
            // devModule: {
            //     link: '/dev-components',
            //     icon: 'icon-kaifa',
            //     txt: 'm-module',
            //     isHighlight: false,
            //     isShowMark: false
            // },
            // devWord: {
            //     link: '/dev-words',
            //     icon: 'icon-kaifa',
            //     txt: '标准词汇',
            //     isHighlight: false,
            //     isShowMark: false
            // },
            // mine: {
            //     link: '/mine',
            //     icon: 'icon-wode',
            //     txt: '我的',
            //     isHighlight: false,
            //     isShowMark: false
            // }
        }
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
                <div class="g-footer-nav-body-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
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