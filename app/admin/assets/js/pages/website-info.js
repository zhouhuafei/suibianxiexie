require('../../scss/pages/website-info.scss');
const Super = require('../pages-super/super');
const axios = require('../api/axios');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            new ValidateInput({element: '.js-validate-form'});
        }());

        // 上传
        document.querySelector('.js-upload').addEventListener('change', function () {
            const files = [].slice.call(this.files);
            const formData = new FormData();
            files.forEach(function (file) {
                formData.append('upload', file);
            });
            axios({
                url: dataInfo.api.upload.route,
                method: 'post',
                data: formData,
            }).then(function (json) {
                console.log(json);
            });
        });
    }
}

new Sub();
