webpackJsonp([3],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(123);
var Super = __webpack_require__(9);
var axios = __webpack_require__(18);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',

        // (功)(覆)功能(覆盖超类型)
        value: function power() {
            var superSelf = this;
            var dataInfo = superSelf.dataInfo;
            var Dialog = superSelf.Dialog;
            var routes = dataInfo.routes;

            // 上传
            $('.js-upload').on('change', function () {
                var self = this;
                var parent = this.parentNode;
                var bg = parent.querySelector('.g-upload-show');
                var text = parent.querySelector('.g-upload-text');
                var files = [].slice.call(self.files);
                var formData = new FormData();
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
                    onUploadProgress: function onUploadProgress(progressEvent) {
                        // 原生获取上传进度的事件
                        if (progressEvent.lengthComputable) {
                            // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                            // 如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                            console.log('上传进度:->', Math.ceil(progressEvent.loaded / progressEvent.total) * 100 + '%');
                        }
                    }
                }).then(function (json) {
                    if (json.status === 'success') {
                        var result = json.result[0];
                        var url = result.url;
                        var w = result.width;
                        var h = result.height;
                        self.dataset.value = url;
                        bg.style.backgroundImage = 'url(\'' + url + '\')';
                        text.innerText = w + '*' + h;
                        parent.querySelector('input[type=hidden]').value = url;
                        parent.classList.add('g-upload-active');
                        validateInput.validateInput(self);
                    }
                });
            });

            // 保存
            document.querySelector('.js-save').addEventListener('click', function () {
                var form = document.querySelector('form');
                if (!validateInput.isAllPassValidate()) {
                    // 如果不是全部都通过验证了，则不能提交。
                    return;
                }
                axios({
                    url: form.action,
                    method: form.method,
                    data: new FormData(form)
                }).then(function (json) {
                    console.log('测试保存:->', json);
                    if (json.status === 'success') {
                        new Dialog({
                            config: {
                                type: 'alert',
                                alert: {
                                    content: json.message || '保存成功'
                                }
                            }
                        });
                    }
                });
            });

            // 验证放在最后是为了保证执行顺序。动态生成的标签，只要重新new一下，element传入dom即可，然后存储实例对象，留着保存时再验证一下。或者不绑定事件，全部都留到保存时再验证，这样只需要保存的时候new一下验证组件，触发一下是否全部验证通过的方法即可。
            var ValidateInput = __webpack_require__(11);
            var validateInput = new ValidateInput({ element: '.js-validate-form' });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[122]);