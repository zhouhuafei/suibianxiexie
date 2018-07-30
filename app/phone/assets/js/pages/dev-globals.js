require('../../scss/pages/dev-globals.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const self = this;
        const applications = self.applications;

        // base函数测试
        (function () {
            // 测试全选
            const SelectAll = applications.SelectAll;
            new SelectAll({
                items: '.g-checkbox-body-main',
                callback: {
                    click: function (obj) {
                        console.log(obj);
                    },
                },
            });
        }());

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            const validateInput = new ValidateInput({element: '.js-validate-form'});
            validateInput.setValidate('no-999', function (value) {
                return Number(value) !== 999;
            });
        }());

        // 弹窗测试
        (function () {
            const DialogConfirm = require('../components-dom/g-dialog-confirm');
            const Message = require('../components-dom/g-message');
            document.querySelector('.js-button-dialog').addEventListener('click', function () {
                new DialogConfirm({
                    callback: {
                        confirm: function () {
                            new Message({config: {icon: 'icon-success', content: '已确认'}});
                        },
                        cancel: function () {
                            new Message({config: {icon: 'icon-success', content: '已取消'}});
                        },
                        close: function () {
                            new Message({config: {icon: 'icon-success', content: '已关闭'}});
                        },
                    },
                });
            });
        }());
    }
}

new Sub();
