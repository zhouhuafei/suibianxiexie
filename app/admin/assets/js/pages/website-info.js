require('../../scss/pages/website-info.scss');
const Super = require('../pages-super/super');
const axios = require('../api/axios');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const Dialog = superSelf.Dialog;
        const routes = dataInfo.routes;

        // 上传
        $('.js-upload').on('change', function () {
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
                if (json.status === 'success') {
                    const result = json.result[0];
                    const url = result.url;
                    const w = result.width;
                    const h = result.height;
                    self.dataset.value = url;
                    bg.style.backgroundImage = `url('${url}')`;
                    text.innerText = `${w}*${h}`;
                    parent.querySelector('input[type=hidden]').value = url;
                    parent.classList.add('g-upload-active');
                    validateInput.validateInput(self);
                }
            });
        });

        // 保存
        document.querySelector('.js-save').addEventListener('click', function () {
            const form = document.querySelector('form');
            if (!validateInput.isAllPassValidate()) { // 如果不是全部都通过验证了，则不能提交。
                return;
            }
            axios({
                url: form.action,
                method: form.method,
                data: new FormData(form),
            }).then(function (json) {
                console.log('测试保存:->', json);
                if (json.status === 'success') {
                    new Dialog({
                        config: {
                            type: 'alert',
                            alert: {
                                content: json.message || '保存成功',
                            },
                        },
                    });
                }
            });
        });

        // 验证放在最后是为了保证执行顺序。动态生成的标签，只要重新new一下，element传入dom即可，然后保存实例对象，留着保存的再验证一下。jq的事件委托是没用的，因为dom上没绑定该有的东西，验证组件可能需要改写待续...。
        const ValidateInput = require('../components-dom/g-validate-form-hint');
        const validateInput = new ValidateInput({element: '.js-validate-form'});
    }
}

new Sub();
