//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType:SuperType,
    parameter:{
        //回调
        callback: {
            moduleDomClick: function () {
            }
        },
        //配置
        config: {
            moduleDomType: 0//两种类型 0(微信),1(自定义)
        }
    }
});

SubType.prototype.moduleDomCreate = function () {
    this.moduleDomClass=`m-footer`;
    var moduleDomHtml=`
        ${this.moduleDomType0()}
        ${this.moduleDomType1()}
        ${this.moduleDomType2()}
    `;
    this.moduleDom = base.createElement({
        attribute: {
            className: this.moduleDomClass,
            innerHTML: moduleDomHtml
        }
    });
};

SubType.prototype.moduleDomType0=function(){
    if(this.opt.config.moduleDomType=='0'){
        this.moduleDomClass=`m-footer m-footer-type0`;
        return `
            <div class="m-footer-header">
                <div class="m-footer-header-icon icons icons-store"></div>
            </div>
            <div class="m-footer-body m-footer-body-active">
                <div class="m-footer-body-icon icons icons-jifen"></div>
                <div class="m-footer-body-txt">全部商品</div>
                <div class="m-footer-body-child">
                    <div class="m-footer-body-child-item"><a href="">child-item</a></div>
                    <div class="m-footer-body-child-item"><a href="">child-item</a></div>
                </div>
            </div>
            <a href="" class="m-footer-body">
                <div class="m-footer-body-txt">上新</div>      
            </a>
            <div class="m-footer-body">
                <div class="m-footer-body-icon icons icons-jifen"></div>
                <div class="m-footer-body-txt">店铺活动</div>
                <div class="m-footer-body-child">
                    <div class="m-footer-body-child-item"><a href="">child-item</a></div>
                    <div class="m-footer-body-child-item"><a href="">child-item</a></div>
                </div>
            </div>
        `;
    }
    return ``;
};

SubType.prototype.moduleDomType1=function(){
    if(this.opt.config.moduleDomType=='1'){
        this.moduleDomClass=`m-footer m-footer-type1`;        
        return `
            <a class="m-footer-body m-footer-body-active">
                <div class="m-footer-body-icon icons icons-santiaogang"></div>
                <div class="m-footer-body-txt">首页</div>
            </a>
            <a class="m-footer-body">
                <div class="m-footer-body-icon icons icons-shoucang"></div>
                <div class="m-footer-body-txt">我要开店</div>
            </a>
            <a class="m-footer-body">
                <div class="m-footer-body-icon icons icons-shouji"></div>
                <div class="m-footer-body-txt">购物车</div>
            </a>
            <a class="m-footer-body">
                <div class="m-footer-body-icon icons icons-cart"></div>
                <div class="m-footer-body-txt">客服</div>
            </a>
            <a class="m-footer-body">
                <div class="m-footer-body-icon icons icons-jifen"></div>
                <div class="m-footer-body-txt">我的</div>
            </a>
        `;
    }
    return ``;    
};

SubType.prototype.moduleDomType2=function(){
    if(this.opt.config.moduleDomType=='2'){
        this.moduleDomClass=`m-footer m-footer-type2`;   
        return `
            <div class="m-footer-body">
                待续...
            </div>
            <div class="m-footer-body">
                待续...
            </div>
            <div class="m-footer-body">
                待续...
            </div>
        `;
    }
    return ``;    
};

module.exports = SubType;
