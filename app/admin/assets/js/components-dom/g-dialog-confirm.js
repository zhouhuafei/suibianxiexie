const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 确认
        confirm: function () {
        },
        // 取消
        cancel: function () {
        },
        // 关闭
        close: function () {
        },
    },
    // 配置
    config: {
        positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
        isShowHeader: true, // 是否显示头部
        headerContent: '提示:', // 头部内容
        isShowBody: true, // 是否显示主体
        content: '<div>确定要执行这个操作?</div>', // 主体内容
        isShowFooter: true, // 是否显示尾部
        footerContent: '', // 尾部内容
        isShowClose: true, // 是否显示关闭按钮
        closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
        isShowConfirm: true, // 是否显示确认按钮
        confirmContent: '确认', // 确认按钮的内容
        isShowCancel: true, // 是否显示取消按钮
        cancelContent: '取消', // 取消按钮的内容
        isCustom: false, // 是否自定义
        isShowIcon: false, // 是否显示icon
        icon: 'icon-warning', // icon的类型
        isShowMask: true, // 是否显示遮罩
        isHandHide: false, // 是否手动隐藏(一般只用于点击确认时)
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const positionLocation = `g-dialog-confirm_${config.positionLocation}`;// 弹窗的定位位置
    // 弹窗结构
    const html = this.renderConfirm();
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-dialog-confirm ${positionLocation}`,
            innerHTML: html,
        },
    });
};

// 确认框
Sub.prototype.renderConfirm = function () {
    const config = this.opts.config;
    if (config.type !== 'confirm') {
        return '';
    }
    const confirm = config.confirm;
    let htmlHeader = '';
    if (confirm.isShowHeader) {
        htmlHeader = `<div class="g-dialog-confirm-header">${confirm.headerContent}</div>`;
    }
    let htmlBody = '';
    if (confirm.isShowBody) {
        let htmlIcon = '';
        if (confirm.isShowIcon) {
            htmlIcon = `<div class="g-dialog-confirm-body-system-icon iconfont ${confirm.icon}"></div>`;
        }
        let bodyClass = 'g-dialog-confirm-body-system';
        let bodyContent = `
            ${htmlIcon}
            <div class="g-dialog-confirm-body-system-text">${confirm.content}</div>
        `;
        if (confirm.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = confirm.content;
        }
        htmlBody = `
            <div class="g-dialog-confirm-body">
                <div class="${bodyClass}">
                    ${bodyContent}
                </div>
            </div>
        `;
    }
    let htmlFooter = '';
    if (confirm.isShowFooter) {
        let htmlCancel = '';
        if (confirm.isShowCancel) {
            htmlCancel = `<div class="g-button g-button-cancel g-dialog-confirm-footer-cancel">${confirm.cancelContent}</div>`;
        }
        let htmlConfirm = '';
        if (confirm.isShowConfirm) {
            htmlConfirm = `<div class="g-button g-dialog-confirm-footer-confirm">${confirm.confirmContent}</div>`;
        }
        htmlFooter = `<div class="g-dialog-confirm-footer">${htmlCancel}${htmlConfirm}</div>`;
    }
    let htmlClose = '';
    if (confirm.isShowClose) {
        htmlClose = `<div class="g-dialog-confirm-close">${confirm.closeContent}</div>`;
    }
    return `
        ${htmlHeader}
        ${htmlBody}
        ${htmlFooter}
        ${htmlClose} 
    `;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    const config = this.opts.config;
    // 确认框
    if (config.type === 'confirm') {
        const close = this.moduleDom.querySelector('.g-dialog-confirm-close');
        if (close) {
            close.addEventListener('click', function () {
                self.moduleDomHide();
                self.opts.callback.close();
            });
        }
        const cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
        if (cancel) {
            cancel.addEventListener('click', function () {
                self.moduleDomHide();
                self.opts.callback.cancel();
            });
        }
        const confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
        if (confirm) {
            confirm.addEventListener('click', function () {
                if (!self.opts.config.confirm.isHandHide) {
                    self.moduleDomHide();
                }
                self.opts.callback.confirm();
            });
        }
    }
};

module.exports = Sub;
