//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');
var Mask = require('../modules/m-mask.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            moduleDomRenderBefore: function (self) {
                if (self.opt.config.type == 'confirm') {
                    if (self.opt.config.confirm.isShowMask) {
                        new Mask({
                            wrap: self.opt.wrap,
                            config: {
                                moduleDomIsShow: true,
                                moduleDomRenderMethod: {method: 'insertBefore'}
                            }
                        });
                    }
                    if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                        self.wrapDom.style.position = 'relative';
                    }
                }
            },
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
                headerContent: `提示:`,//头部内容
                isShowBody: true,//是否显示主体
                bodyContent: `确定要执行这个操作?`,//主体内容
                isShowFooter: true,//是否显示尾部
                footerContent: ``,//尾部内容
                isShowClose: true,//是否显示关闭按钮
                closeContent: `<div class="iconfont icon-guanbi"></div>`,//关闭按钮的内容
                isShowConfirm: true,//是否显示确认按钮
                confirmContent: `确认`,//确认按钮的内容
                isShowCancel: true,//是否显示取消按钮
                cancelContent: `取消`,//取消按钮的内容
                isCustom: false,//是否自定义
                customContent: ``,//自定义的内容
                isShowIcon: true,//是否显示icon
                iconType: `icon-jinggao`,//icon的类型
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
    var alert = config.alert;
    var htmlIcon = ``;
    if (alert.isShowIcon) {
        htmlIcon = `<div class="m-dialog-alert-icon iconfont ${alert.iconType}"></div>`;
    }
    var htmlResult = ``;
    if (config.type == `alert`) {
        htmlResult = `
            ${htmlIcon}
            <div class="m-dialog-alert-txt">${alert.content}</div>
        `;
    }
    return htmlResult;
};

//确认框
SubType.prototype.renderConfirm = function () {
    var config = this.opt.config;
    var confirm = config.confirm;
    var htmlHeader = ``;
    if (confirm.isShowHeader) {
        htmlHeader = `<div class="m-dialog-header">${confirm.headerContent}</div>`;
    }
    var htmlBody = ``;
    if (confirm.isShowBody) {
        var bodyClass = `m-dialog-body-system`;
        if (config.isCustom) {
            bodyClass = `m-dialog-body-custom`;
        }
        var htmlIcon = ``;
        if (confirm.isShowIcon) {
            htmlIcon = `<div class="m-dialog-icon iconfont ${confirm.iconType}"></div>`;
        }
        htmlBody = `
            <div class="m-dialog-body">
                <div class="${bodyClass}">
                    ${htmlIcon}
                    <div class="m-dialog-txt">${confirm.bodyContent}</div>
                </div>
            </div>
        `;
    }
    var htmlFooter = ``;
    if (confirm.isShowFooter) {
        var htmlCancel = ``;
        if (confirm.isShowCancel) {
            htmlCancel = `<div class="g-button g-button-default m-dialog-cancel">${confirm.cancelContent}</div>`;
        }
        var htmlConfirm = ``;
        if (confirm.isShowConfirm) {
            htmlConfirm = `<div class="g-button g-button-highlight m-dialog-confirm">${confirm.confirmContent}</div>`;
        }
        htmlFooter = `<div class="m-dialog-footer">${htmlCancel}${htmlConfirm}</div>`;
    }
    var htmlClose = ``;
    if (confirm.isShowClose) {
        htmlClose = `<div class="m-dialog-close">${confirm.closeContent}</div>`;
    }
    var htmlResult = ``;
    if (config.type == `confirm`) {
        htmlResult = `
            <div class="m-dialog-wrap">
                ${htmlHeader}
                ${htmlBody}
                ${htmlFooter}
                ${htmlClose} 
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