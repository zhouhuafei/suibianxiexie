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
            confirm: function () {
            },
            //取消
            cancel: function () {
            },
            //关闭
            close: function () {
            }
        },
        //配置
        config: {
            /*
             * 弹窗类型
             * `alert`  提示信息类型
             * `confirm`    确认框类型
             * */
            moduleDomType: `alert`,//默认是提示框
            /*
             * 弹窗位置
             * `center` 居中
             * `bottom` 居下
             * `top` 居上
             * */
            moduleDomPosition: `center`,//默认居中
            moduleDomIsShow: false,//默认不显示
            //提示框
            alert: {
                position: ``,
                isShowIcon: true,
                iconClass: `icon-chenggong`,
                content: `成功`
            },
            //确认框
            confirm: {
                //点击确认是否关闭弹窗
                isShowDialogHeader: true,
                isShowDialogFooter: true,
                isShowCloseBtn: true,
                isShowConfirmBtn: true,
                isShowCancelBtn: true,
                isCustom: false,//是否自定义
                isShowIcon: true
            }
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opt.config;
    this.moduleDomType = `m-dialog-${config.moduleDomType}`;//弹窗类型
    this.moduleDomPosition = `m-dialog-${config.moduleDomPosition}`;//弹窗位置
    //弹窗结构
    var html = `
        ${this.renderAlert()}
        ${this.renderConfirm()}
    `;
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-dialog ${this.moduleDomType} ${this.moduleDomPosition}`,
            innerHTML: html
        }
    });
};

SubType.prototype.renderAlert = function () {
    var config = this.opt.config;
    var htmlIcon = ``;
    if (config.alert.isShowIcon) {
        htmlIcon = `<div class="m-dialog-alert-icon iconfont ${config.alert.iconClass}"></div>`;
    }
    var htmlResult = ``;
    if (config.moduleDomType == `alert`) {
        htmlResult = `
            ${htmlIcon}
            <div class="m-dialog-alert-txt">${config.alert.content}</div>
        `;
    }
    return htmlResult;
};

SubType.prototype.renderConfirm = function () {
    var config = this.opt.config;
    var htmlResult = ``;
    if (config.moduleDomType == `confirm`) {
        htmlResult = `
            <div class="m-dialog-wrap">
                <div class="m-dialog-header"></div>
                <div class="m-dialog-body"></div>
                <div class="m-dialog-footer"></div>   
                <div class="m-dialog-close"></div>     
            </div>
        `;
    }
    return htmlResult;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;