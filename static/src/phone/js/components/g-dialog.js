let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合
let SuperType = require('../components/g-super-type');//超类型(子类型继承的对象)
let Mask = require('../components/g-mask');//遮罩

//子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            moduleDomRenderBefore: function (self) {
                if (self.opts.config.type == 'confirm') {
                    if (self.opts.config.confirm.isShowMask) {
                        self.mask = new Mask({
                            wrap: self.opts.wrap,
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
            positionLocation: `center`,//弹窗的定位位置    positionMethod定位方式强制fixed
            //提示框
            alert: {
                time: 2000,//展示的时间
                isShowIcon: true,//是否显示icon
                icon: `icon-chenggong`,//icon的class
                content: `成功`//内容信息
            },
            //确认框
            confirm: {
                //点击确认是否关闭弹窗
                isShowHeader: true,//是否显示头部
                headerContent: `提示:`,//头部内容
                isShowBody: true,//是否显示主体
                bodyContent: `<div>确定要执行这个操作?</div>`,//主体内容
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
                icon: `icon-jinggao`,//icon的类型
                isShowMask: true,//是否显示遮罩
                isHandHide: false//是否手动隐藏(一般只用于点击确认时)
            }
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var type = `g-dialog-${config.type}`;//弹窗类型
    var positionLocation = `g-dialog-${config.positionLocation}`;//弹窗的定位位置
    //弹窗结构
    var html = `
        ${this.renderAlert()}
        ${this.renderConfirm()}
    `;
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `g-dialog ${type} ${positionLocation}`,
            innerHTML: html
        }
    });
};

//提示框
SubType.prototype.renderAlert = function () {
    var config = this.opts.config;
    if (config.type != `alert`) {
        return ``;
    }
    var alert = config.alert;
    var htmlIcon = ``;
    if (alert.isShowIcon) {
        htmlIcon = `<div class="g-dialog-alert-icon iconfont ${alert.icon}"></div>`;
    }
    return `
        ${htmlIcon}
        <div class="g-dialog-alert-txt">${alert.content}</div>
    `;
};

//确认框
SubType.prototype.renderConfirm = function () {
    var config = this.opts.config;
    if (config.type != `confirm`) {
        return ``;
    }
    var confirm = config.confirm;
    var htmlHeader = ``;
    if (confirm.isShowHeader) {
        htmlHeader = `<div class="g-dialog-header">${confirm.headerContent}</div>`;
    }
    var htmlBody = ``;
    if (confirm.isShowBody) {
        var htmlIcon = ``;
        if (confirm.isShowIcon) {
            htmlIcon = `<div class="g-dialog-icon iconfont ${confirm.icon}"></div>`;
        }
        var bodyClass = `g-dialog-body-system`;
        var bodyContent = `
            ${htmlIcon}
            <div class="g-dialog-txt">${confirm.bodyContent}</div>
        `;
        if (confirm.isCustom) {
            bodyClass = `g-dialog-body-custom`;
            bodyContent = confirm.bodyContent;
        }
        htmlBody = `
            <div class="g-dialog-body">
                <div class="${bodyClass}">
                    ${bodyContent}
                </div>
            </div>
        `;
    }
    var htmlFooter = ``;
    if (confirm.isShowFooter) {
        var htmlCancel = ``;
        if (confirm.isShowCancel) {
            htmlCancel = `<div class="g-button g-button-cancel g-dialog-cancel">${confirm.cancelContent}</div>`;
        }
        var htmlConfirm = ``;
        if (confirm.isShowConfirm) {
            htmlConfirm = `<div class="g-button g-button-confirm g-dialog-confirm">${confirm.confirmContent}</div>`;
        }
        htmlFooter = `<div class="g-dialog-footer">${htmlCancel}${htmlConfirm}</div>`;
    }
    var htmlClose = ``;
    if (confirm.isShowClose) {
        htmlClose = `<div class="g-dialog-close">${confirm.closeContent}</div>`;
    }
    return `
        ${htmlHeader}
        ${htmlBody}
        ${htmlFooter}
        ${htmlClose} 
    `;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    //提示框
    if (config.type == `alert`) {
        setTimeout(function () {
            self.hide();
        }, config.alert.time);
    }
    //确认框
    if (config.type == `confirm`) {
        var close = this.moduleDom.querySelector('.g-dialog-close');
        close && close.addEventListener('click', function () {
            self.hide();
            self.opts.callback.close();
        });
        var cancel = this.moduleDom.querySelector('.g-dialog-cancel');
        cancel && cancel.addEventListener('click', function () {
            self.hide();
            self.opts.callback.cancel();
        });
        var confirm = this.moduleDom.querySelector('.g-dialog-confirm');
        confirm && confirm.addEventListener('click', function () {
            if (!self.opts.config.confirm.isHandHide) {
                self.hide();
            }
            self.opts.callback.confirm();
        })
    }
};

SubType.prototype.hide = function () {
    this.moduleDomHide();
    this.mask && this.mask.moduleDomHide();
};

module.exports = SubType;