require('../../scss/pages/home.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            const validateInput = new ValidateInput({element: '.js-validate-form'});
            validateInput.setValidate('no-999', function (value) {
                return Number(value) !== 999;
            });
            const isAllPassValidate = validateInput.isAllPassValidate();
            console.log('isAllPassValidate', isAllPassValidate);

            document.querySelector('.js-upload-input').addEventListener('change', function () {
                validateInput.validateInput(this);
            });
        }());

        // ajax测试
        const axios = require('../api/axios');
        const ajax = require('../api/ajax');
        axios({
            url: dataInfo.api.list.route,
            method: 'post',
            data: {type: 'axios', obj: {key: 'obj'}, arr: ['a', 2, 'c']},
        }).then(function (json) {
            console.log('测试axios:->', json);
        });
        ajax({
            url: dataInfo.api.list.route,
            method: 'post',
            data: {type: 'ajax', obj: {key: 'obj'}, arr: ['a', 2, 'c']},
        }).then(function (json) {
            console.log('测试ajax:->', json);
        });
    }
}

new Sub();
