//底层方法
var base = require('../base/base');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: {}
    }
});

SubType.prototype.moduleDomCreate = function () {
    this.moduleDomClass = `m-footer-nav`;
    var moduleDomHtml = `
        <div class="m-footer-nav-wrap">
            <a class="m-footer-nav-body" href="/">
                <div class="m-footer-nav-body-icon iconfont icon-shouye"></div>
                <div class="m-footer-nav-body-text">首页</div>
            </a>
            <a class="m-footer-nav-body" href="/develop-global">
                <div class="m-footer-nav-body-icon iconfont icon-kaifa"></div>
                <div class="m-footer-nav-body-text">g-global</div>
            </a>
            <a class="m-footer-nav-body" href="/develop-module">
                <div class="m-footer-nav-body-icon iconfont icon-kaifa"></div>
                <div class="m-footer-nav-body-text">m-module</div>
            </a>
            <a class="m-footer-nav-body" href="/develop-word">
                <div class="m-footer-nav-body-icon iconfont icon-kaifa"></div>
                <div class="m-footer-nav-body-text">标准词汇</div>
            </a>
            <a class="m-footer-nav-body" href="/mine">
                <div class="m-footer-nav-body-icon iconfont icon-wode"></div>
                <div class="m-footer-nav-body-text">我的</div>
            </a>
        </div>
    `;
    this.moduleDom = base.createElement({
        style: this.options.config.moduleDomStyle,
        custom: this.options.config.moduleDomCustomAttr,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: moduleDomHtml
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;