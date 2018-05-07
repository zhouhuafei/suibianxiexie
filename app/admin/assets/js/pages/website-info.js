require('../../scss/pages/website-info.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            const validateInput = new ValidateInput({element: '.page-validate-form'});
            validateInput.setValidate('no-999', function (value) {
                return Number(value) !== 999;
            });
            const isAllPassValidate = validateInput.isAllPassValidate();
            console.log('isAllPassValidate', isAllPassValidate);
        }());
    }
}

new Sub();
