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
            type: `alert`,//默认是提示框
            /*
             * 弹窗位置
             * `center` 居中
             * `bottom` 居下
             * `top` 居上
             * */
            position: `center`,//默认居中
            moduleDomIsShow: false,//默认不显示
            //提示框
            alert: {
                isShowIcon: true,//是否显示icon
                iconType: `icon-chenggong`,//icon的class
                content: `成功`//内容信息
            },
            //确认框
            confirm: {
                //点击确认是否关闭弹窗
                isShowHeader: true,//是否显示头部
                headerContent: ``,//头部内容
                isShowBody: true,//是否显示主体
                contendBody: `确定?`,//主体内容
                isShowFooter: true,//是否显示尾部
                footerContent: ``,//尾部内容
                isShowCloseBtn: true,//是否显示关闭按钮
                closeContent: ``,//关闭按钮的内容
                isShowConfirmBtn: true,//是否显示确认按钮
                confirmBtnContent: ``,//确认按钮的内容
                isShowCancelBtn: true,//是否显示取消按钮
                cancelBtnContent: ``,//取消按钮的内容
                isCustom: false,//是否自定义
                customContent: ``,//自定义的内容
                isShowIcon: true,//是否显示icon
                IconType: `icon-jinggao`,//icon的类型
                isShowMask: true//是否显示遮罩
            }
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opt.config;
    this.type = `m-dialog-${config.type}`;//弹窗类型
    this.position = `m-dialog-${config.position}`;//弹窗位置
    //弹窗结构
    var html = `
        ${this.renderAlert()}
        ${this.renderConfirm()}
    `;
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-dialog ${this.type} ${this.position}`,
            innerHTML: html
        }
    });
};

//提示框
SubType.prototype.renderAlert = function () {
    var config = this.opt.config;
    var htmlIcon = ``;
    if (config.alert.isShowIcon) {
        htmlIcon = `<div class="m-dialog-alert-icon iconfont ${config.alert.iconType}"></div>`;
    }
    var htmlResult = ``;
    if (config.type == `alert`) {
        htmlResult = `
            ${htmlIcon}
            <div class="m-dialog-alert-txt">${config.alert.content}</div>
        `;
    }
    return htmlResult;
};

//确认框
SubType.prototype.renderConfirm = function () {
    var config = this.opt.config;
    var htmlHeader = ``;

    var htmlBody = ``;
    var htmlFooter = ``;
    var htmlClose = ``;
    var htmlResult = ``;
    if (config.type == `confirm`) {
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
    var self = this;
    var config = this.opt.config;
    //提示框
    if (config.type == `alert`) {
        setTimeout(function () {
            self.moduleDomHide();
        }, 2000);
    }
    //确认框
    if (config.type == `confirm`) {

    }
};

module.exports = SubType;