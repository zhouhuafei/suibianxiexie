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
            const self = this;
            const parent = this.parentNode;
            const bg = parent.querySelector('.g-upload-show');
            const text = parent.querySelector('.g-upload-text');
            const files = [].slice.call(self.files);
            const formData = new FormData();
            files.forEach(function (file) {
                formData.append('images', file);
            });
            if (!files.length) {
                return;
            }
            axios({
                url: dataInfo.api.galleries.route,
                method: 'post',
                data: formData,
                onUploadProgress: function (progressEvent) { // 原生获取上传进度的事件
                    if (progressEvent.lengthComputable) {
                        // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                        // 如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                        console.log('上传进度:->', `${Math.ceil(progressEvent.loaded / progressEvent.total) * 100}%`);
                    }
                },
            }).then(function (json) {
                console.log('测试formData:->', json);
                if (json.status === 'success') {
                    const result = json.result[0];
                    self.dataset.value = 'no-empty';
                    bg.style.backgroundImage = `url('${result.url}')`;
                    text.innerText = `${result.width}*${result.height}`;
                    parent.classList.add('g-upload-active');
                    parent.querySelector('input[type=hidden]').value = result.url;
                }
            });
        });
    }
}

new Sub();
