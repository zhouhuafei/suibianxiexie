//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            //确认
            confirm:function(){},
            //取消
            cancel:function(){},
            //关闭
            close:function(){}
        },
        //配置
        config: {
            //提示框
            alert:{

            },
            //确认框
            confirm:{
                //点击确认是否关闭
                
            }
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-dialog m-dialog-alert m-dialog-center`,
            innerHTML: `
                <div class="m-dialog-wrap">
                    <div class="m-dialog-header"></div>
                    <div class="m-dialog-body"></div>
                    <div class="m-dialog-footer"></div>   
                    <div class="m-dialog-close"></div>     
                </div>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;