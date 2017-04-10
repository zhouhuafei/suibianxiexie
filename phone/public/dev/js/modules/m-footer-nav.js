//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        //回调
        callback: {
            moduleDomClick: function () {
            }
        },
        //配置
        config: {
            moduleDomType: 1//两种类型 0(微信),1(自定义)
        }
    }
});

SubType.prototype.moduleDomCreate = function () {
    this.moduleDomClass = `m-footer-nav`;
    var moduleDomHtml = `
        ${this.moduleDomType0()}
        ${this.moduleDomType1()}
    `;
    this.moduleDom = base.createElement({
        attribute: {
            className: this.moduleDomClass,
            innerHTML: moduleDomHtml
        }
    });
};

SubType.prototype.moduleDomType0 = function () {
    if (this.opt.config.moduleDomType == 0) {
        this.moduleDomClass = `m-footer-nav m-footer-nav-type0`;
        return `
            <div class="m-footer-nav-wrap">
                <div class="m-footer-nav-header">
                    <div class="m-footer-nav-header-icon iconfont icon-shouye"></div>
                </div>
                <div class="m-footer-nav-body">
                    <div class="m-footer-nav-body-icon iconfont icon-caidan"></div>
                    <div class="m-footer-nav-body-txt">全部商品</div>
                    <div class="m-footer-nav-body-child">
                        <div class="m-footer-nav-body-child-item"><a href="">child</a></div>
                        <div class="m-footer-nav-body-child-item"><a href="">child</a></div>
                    </div>
                </div>
                <a class="m-footer-nav-body" href="">
                    <div class="m-footer-nav-body-txt">上新</div>      
                </a>
                <div class="m-footer-nav-body">
                    <div class="m-footer-nav-body-icon iconfont icon-caidan"></div>
                    <div class="m-footer-nav-body-txt">店铺活动</div>
                    <div class="m-footer-nav-body-child">
                        <div class="m-footer-nav-body-child-item"><a href="">child</a></div>
                        <div class="m-footer-nav-body-child-item"><a href="">child</a></div>
                    </div>
                </div>
            </div>
        `;
    }
    return ``;
};

SubType.prototype.moduleDomType1 = function () {
    if (this.opt.config.moduleDomType == 1) {
        this.moduleDomClass = `m-footer-nav m-footer-nav-type1`;
        return `
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
    }
    return ``;
};

module.exports = SubType;