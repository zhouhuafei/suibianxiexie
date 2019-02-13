require('../../../scss/pages/website-info.scss');
const Super = require('../../pages-super/super');
const axios = require('../../api/axios');
const Gallery = require('../../components_dom-business/g-gallery');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;

        // 测试图片库
        $('.g-upload').on('click', function () {
            new Gallery();
        });

        // 上传
        /*
        $('.js-upload').on('change', function () {
            const self = this;
            const parent = this.parentNode;
            const bg = parent.querySelector('.g-upload-show');
            const text = parent.querySelector('.g-upload-text');
            const files = [].slice.call(self.files);
            const formData = new FormData();
            files.forEach(function (file) {
                formData.append('file', file);
            });
            if (!files.length) {
                return;
            }
            axios({
                url: dataInfo.api.gallery.route,
                method: 'POST',
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
                    const resultStr = JSON.stringify(result);
                    const url = result.url;
                    const w = result.width;
                    const h = result.height;
                    self.dataset.value = 'no-empty';
                    bg.style.backgroundImage = `url('${url}')`;
                    // text.innerText = `${w}*${h}`;
                    parent.querySelector('input[type=hidden]').value = resultStr;
                    parent.classList.add('g-upload_active');
                    superSelf.validateInput.validateInput(self);
                }
            });
        });
        */
    }
}

new Sub();
