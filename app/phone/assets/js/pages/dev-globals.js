require('../../scss/pages/dev-globals.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const self = this;
        const applications = self.applications;

        // base函数测试
        (function () {
            // 测试全选
            const SelectAll = applications.SelectAll;
            new SelectAll({
                items: '.g-checkbox-checkbox',
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
            const validateInput = new ValidateInput({element: '.page-validate-form'});
            validateInput.setValidate('no-999', function (value) {
                return Number(value) !== 999;
            });
        }());
    }
}

new Sub();
