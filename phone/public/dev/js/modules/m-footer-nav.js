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
            <a class="m-footer-nav-body" href="">
                <div class="m-footer-nav-body-icon iconfont icon-shouye"></div>
                <div class="m-footer-nav-body-txt">首页</div>
            </a>
            <a class="m-footer-nav-body" href="">
                <div class="m-footer-nav-body-icon iconfont icon-fenxiao"></div>
                <div class="m-footer-nav-body-txt">我要开店</div>
            </a>
            <a class="m-footer-nav-body" href="">
                <div class="m-footer-nav-body-icon iconfont icon-gouwuche"></div>
                <div class="m-footer-nav-body-txt">购物车</div>
            </a>
            <a class="m-footer-nav-body" href="">
                <div class="m-footer-nav-body-icon iconfont icon-kefu"></div>
                <div class="m-footer-nav-body-txt">客服</div>
            </a>
            <a class="m-footer-nav-body" href="">
                <div class="m-footer-nav-body-icon iconfont icon-wode"></div>
                <div class="m-footer-nav-body-txt">我的</div>
            </a>
        </div>
    `;
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
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