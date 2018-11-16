require('../../../scss/pages/dev-globals.scss');
const Super = require('../../pages-super/super');
const SelectAll = require('zhf.select-all');
const {
    Message,
    Confirm,
    Validate,
    GoTop,
    TooltipApp,
    Copyright,
    LazyLoad,
} = require('zhf.g-ui/dist/js/commons_dom/g-common/index.js');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const self = this;

        // base函数测试
        (function () {
            // 测试全选
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
            const validateInput = new Validate({element: '.js-validate-form'});
            validateInput.setValidate('no-999', function (value) {
                return Number(value) !== 999;
            });
        }());

        // 弹窗测试
        (function () {
            document.querySelector('.js-button-dialog').addEventListener('click', function () {
                new Confirm({
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
