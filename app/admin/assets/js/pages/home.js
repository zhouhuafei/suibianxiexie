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

        // 测试application/x-www-form-urlencoded
        const axios = require('../api/axios');
        const ajax = require('../api/ajax');
        axios({
            url: dataInfo.api.list.route,
            method: 'post',
            data: {type: 'axios', obj: {test: true, key: 'obj', b: {a: 1}}, arr: ['a', 2, 'c', {a: 1}], arr2: []},
        }).then(function (json) {
            console.log('axios测试application/x-www-form-urlencoded测试axios:->', json);
        });
        ajax({
            url: dataInfo.api.list.route,
            method: 'post',
            data: {type: 'ajax', obj: {test: false, key: 'obj', b: {a: 1}}, arr: ['a', 2, 'c', {a: 1}], arr2: []},
        }).then(function (json) {
            console.log('ajax测试application/x-www-form-urlencoded测试ajax:->', json);
        });
        // 测试multipart/form-data
        /*
        const formData = new FormData();
        formData.append('test', 'test');
        axios({
            url: dataInfo.api.list.route,
            method: 'post',
            data: formData,
        }).then(function (json) {
            console.log('axios测试multipart/form-data测试axios:->', json);
        });
        ajax({
            url: dataInfo.api.list.route,
            method: 'post',
            data: formData,
        }).then(function (json) {
            console.log('ajax测试multipart/form-data测试ajax:->', json);
        });
        */
    }
}

new Sub();
