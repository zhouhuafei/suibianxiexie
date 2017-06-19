var createElement = require('../function/create-element');//创建元素节点
var constructorInherit = require('../tools/constructor-inherit');//构造函数的继承(拷贝继承)
var SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)
var jsonToArray = require('../tools/json-to-array');

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //容器
        wrap:'.g-footer',
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: {
            /*
             home: {
             link: '/',
             icon: 'icon-shouye',
             txt: '首页',
             isHighlight: false,
             isShowMark: false
             },
             devGlobal: {
             link: '/dev-global',
             icon: 'icon-kaifa',
             txt: 'g-global',
             isHighlight: false,
             isShowMark: false
             },
             devModule: {
             link: '/dev-module',
             icon: 'icon-kaifa',
             txt: 'm-module',
             isHighlight: false,
             isShowMark: false
             },
             devWord: {
             link: '/dev-word',
             icon: 'icon-kaifa',
             txt: '标准词汇',
             isHighlight: false,
             isShowMark: false
             },
             mine: {
             link: '/mine',
             icon: 'icon-wode',
             txt: '我的',
             isHighlight: false,
             isShowMark: false
             }
             */
        }
    }
});

SubType.prototype.moduleDomCreate = function () {
    this.moduleDomClass = `m-footer-nav`;
    var moduleDomHtml = ``;
    var data = jsonToArray({json: this.opts.data});
    data.forEach(function (value) {
        var v = value.value;
        var highlightClass = ``;
        if (v.isHighlight) {
            highlightClass = `m-footer-nav-body-active`;
        }
        var markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="m-footer-nav-body-mark"></div>`;
        }
        moduleDomHtml += `
            <a class="m-footer-nav-body ${highlightClass}" href="${v.link}">
                <div class="m-footer-nav-body-icon iconfont ${v.icon}"></div>
                <div class="m-footer-nav-body-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: `<div class="m-footer-nav-wrap">${moduleDomHtml}</div>`
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;