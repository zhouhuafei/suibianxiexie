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
            moduleDomType: 0//三种类型 0,1,2
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
    if(this.opt.config.moduleDomType==0){
        this.moduleDomClass=`m-footer m-footer-type0`;
        return `
            <div class="m-footer-wrap">
                <div class="m-footer-header">
                    0
                </div>
                <div class="m-footer-body">
                    body
                </div>
                <div class="m-footer-body">
                    body
                </div>
            </div>
        `;
    }else {
        return ``;
    }
};

SubType.prototype.moduleDomType1=function(){
    if(this.opt.config.moduleDomType==1){
        this.moduleDomClass=`m-footer m-footer-type1`;
    }else {
        return ``;
    }
};

SubType.prototype.moduleDomType2=function(){
    if(this.opt.config.moduleDomType==2){
        this.moduleDomClass=`m-footer m-footer-type2`;
    }else {
        return ``;
    }
};

module.exports = SubType;