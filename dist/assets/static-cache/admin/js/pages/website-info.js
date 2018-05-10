webpackJsonp([2],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(115);
var Super = __webpack_require__(9);
var axios = __webpack_require__(24);

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
            var routes = dataInfo.routes;

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(11);
                new ValidateInput({ element: '.js-validate-form' });
            })();

            // 上传
            document.querySelector('.js-upload').addEventListener('change', function () {
                var files = [].slice.call(this.files);
                var formData = new FormData();
                files.forEach(function (file) {
                    formData.append('files', file);
                });
                axios({
                    url: dataInfo.api.uploads.route,
                    method: 'post',
                    data: formData,
                    onUploadProgress: function onUploadProgress(progressEvent) {
                        // 原生获取上传进度的事件
                        if (progressEvent.lengthComputable) {
                            // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                            // 如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                        }
                    }
                }).then(function (json) {
                    console.log('测试formData', json);
                });

                // 测试
                var formData2 = new FormData();
                formData2.append('isOnlyRenderData', 'true');
                axios({
                    url: dataInfo.api.uploads.route,
                    method: 'post',
                    data: formData2
                }).then(function (json) {
                    console.log('测试formData2', json);
                });

                // 测试
                var formData3 = new FormData();
                // formData3.append('', files[0]);
                // formData3.append(null, files[0]);
                // formData3.append(undefined, files[0]);
                formData3.append('list', '789');
                axios({
                    url: dataInfo.api.list.route,
                    method: 'post',
                    data: formData3
                }).then(function (json) {
                    console.log('测试formData3', json);
                });
            });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[114]);