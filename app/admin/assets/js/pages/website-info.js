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
                formData.append('files', file);
            });
            axios({
                url: dataInfo.api.uploads.route,
                method: 'post',
                data: formData,
                onUploadProgress: function (progressEvent) { // 原生获取上传进度的事件
                    if (progressEvent.lengthComputable) {
                        // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                        // 如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                    }
                },
            }).then(function (json) {
                console.log('测试formData', json);
            });

            // 测试
            const formData2 = new FormData();
            formData2.append('isOnlyRenderData', 'true');
            axios({
                url: dataInfo.api.uploads.route,
                method: 'post',
                data: formData2,
            }).then(function (json) {
                console.log('测试formData2', json);
            });

            // 测试
            const formData3 = new FormData();
            formData3.append('', files[0]);
            formData3.append(null, files[0]);
            formData3.append(undefined, files[0]);
            formData3.append('list', '789');
            axios({
                url: dataInfo.api.list.route,
                method: 'post',
                data: formData3,
            }).then(function (json) {
                console.log('测试formData3', json);
            });
        });
    }
}

new Sub();
