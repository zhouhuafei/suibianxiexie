webpackJsonp([2],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1);
var Dialog = __webpack_require__(12);

module.exports = function (json) {
    json.method = json.type || json.method || 'get'; // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    var opts = tools.extend({
        method: 'get', // 请求方式默认get
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        timeout: 8000 // 超时
    }, json);
    /*
    opts.success = function (dataInfo, mark, xhr) {
        if (dataInfo.status === 'failure' && opts.isHandleFailure) {
            new Dialog({
                config: {
                    alert: {
                        content: `失败: ${dataInfo.message}`,
                    },
                },
            });
        }
        if (typeof json.success === 'function') {
            json.success(dataInfo, mark, xhr);
        }
    };
    if (opts.isHandleError) {
        opts.error = function (xhr, mark, message) {
            new Dialog({
                config: {
                    alert: {
                        content: `错误: ${message}`, // 这里的message就是error信息，只是一段普通的字符信息
                    },
                },
            });
        };
    }
    */
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.data = opts.data || opts.params; // 这里和axios是不一样的，这里以前使用axios的习惯传入params
    }
    return $.ajax(opts).catch(function (xhr, mark, message) {
        var response = {
            status: 'error'
        };
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: '\u9519\u8BEF: ' + message // 这里的message就是error信息，只是一段普通的字符信息
                    }
                }
            });
        }
        return response;
    }).then(function (dataInfo, mark, xhr) {
        if (dataInfo.status === 'failure' && opts.isHandleFailure) {
            new Dialog({
                config: {
                    alert: {
                        content: '\u5931\u8D25: ' + dataInfo.message
                    }
                }
            });
        }
        return dataInfo;
    });
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(40);
var Super = __webpack_require__(9);

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
                var validateInput = new ValidateInput({ element: '.js-validate-form' });
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
                var isAllPassValidate = validateInput.isAllPassValidate();
                console.log('isAllPassValidate', isAllPassValidate);

                document.querySelector('.js-upload-input').addEventListener('change', function () {
                    validateInput.validateInput(this);
                });
            })();

            // ajax测试
            var axios = __webpack_require__(17);
            var ajax = __webpack_require__(108);
            axios({
                url: dataInfo.api.list.route,
                method: 'post',
                data: { type: 'axios', obj: { key: 'obj' }, arr: ['a', 2, 'c'] }
            }).then(function (json) {
                console.log('测试axios:->', json);
            });
            ajax({
                url: dataInfo.api.list.route,
                method: 'post',
                data: { type: 'ajax', obj: { key: 'obj' }, arr: ['a', 2, 'c'] }
            }).then(function (json) {
                console.log('测试ajax:->', json);
            });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[39]);