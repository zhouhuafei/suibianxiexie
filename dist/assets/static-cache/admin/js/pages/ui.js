webpackJsonp([4],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(143);
var Super = __webpack_require__(4);

var _require = __webpack_require__(22),
    Message = _require.Message,
    Confirm = _require.Confirm,
    Validate = _require.Validate,
    GoTop = _require.GoTop,
    TooltipApp = _require.TooltipApp,
    Copyright = _require.Copyright,
    LazyLoad = _require.LazyLoad,
    Popover = _require.Popover;

$('.js-popover').each(function () {
    new Popover({
        config: {
            element: this,
            content: '建议尺寸：640*640',
            eventType: 'click',
            positionLocation: 'top-center'
        }
    });
});

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
                var validateInput = superSelf.validateInput;
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
                document.querySelector('.js-save').addEventListener('click', function () {
                    // 测试确认框和提示框
                    new Confirm({
                        callback: {
                            cancel: function cancel() {
                                new Message({
                                    config: {
                                        time: 3000, // 展示的时间
                                        isShowIcon: false, // 是否显示icon
                                        isShowClose: true, // 是否显示关闭按钮
                                        icon: 'icon-success', // icon的class
                                        content: '已取消', // 内容信息
                                        positionLocation: 'top' // 弹窗的定位位置    positionMethod定位方式强制fixed
                                    }
                                });
                            },
                            confirm: function confirm() {
                                var isAllPassValidate = validateInput.isAllPassValidate();
                                new Message({
                                    config: {
                                        time: 3000, // 展示的时间
                                        isShowIcon: false, // 是否显示icon
                                        isShowClose: true, // 是否显示关闭按钮
                                        icon: 'icon-success', // icon的class
                                        content: isAllPassValidate ? '验证已通过，可执行保存操作' : '验证尚未通过，不可执行保存操作', // 内容信息
                                        positionLocation: 'top' // 弹窗的定位位置    positionMethod定位方式强制fixed
                                    }
                                });
                            },
                            close: function close() {
                                new Message({
                                    config: {
                                        time: 3000, // 展示的时间
                                        isShowIcon: false, // 是否显示icon
                                        isShowClose: true, // 是否显示关闭按钮
                                        icon: 'icon-success', // icon的class
                                        content: '已关闭', // 内容信息
                                        positionLocation: 'top' // 弹窗的定位位置    positionMethod定位方式强制fixed
                                    }
                                });
                            }
                        },
                        config: {
                            positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
                            isShowClose: true, // 是否显示关闭按钮
                            closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
                            isShowHeader: true, // 是否显示头部
                            headerContent: '提示:', // 头部内容
                            isShowBody: true, // 是否显示主体
                            isShowIcon: false, // 是否显示icon
                            icon: 'icon-warning', // icon的类型
                            isCustom: false, // 是否自定义
                            content: '<div>确定要执行这个操作?</div>', // 主体内容
                            isShowFooter: true, // 是否显示尾部
                            isShowConfirm: true, // 是否显示确认按钮
                            confirmContent: '确认', // 确认按钮的内容
                            isShowCancel: true, // 是否显示取消按钮
                            cancelContent: '取消', // 取消按钮的内容
                            isShowMask: true, // 是否显示遮罩
                            isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
                        }
                    });
                });
            })();

            // 测试application/x-www-form-urlencoded
            var axios = __webpack_require__(17);
            var ajax = __webpack_require__(23);
            axios({
                url: dataInfo.api.list.route,
                method: 'POST',
                data: { type: 'axios', obj: { test: true, key: 'obj', b: { a: 1 } }, arr: ['a', 2, 'c', { a: 1 }], arr2: [] }
            }).then(function (json) {
                console.log('axios测试application/x-www-form-urlencoded测试axios:->', json);
            });
            ajax({
                url: dataInfo.api.list.route,
                method: 'POST',
                data: { type: 'ajax', obj: { test: true, key: 'obj', b: { a: 1 } }, arr: ['a', 2, 'c', { a: 1 }], arr2: [] }
            }).then(function (json) {
                console.log('ajax测试application/x-www-form-urlencoded测试ajax:->', json);
            });
            // 测试multipart/form-data
            {
                var formData = new FormData();
                formData.append('json', JSON.stringify({ a: 1, b: 2, obj: { arr: ['a', 'b', 'c'] } }));
                formData.append('type', 'axios');
                axios({
                    url: dataInfo.api.list.route,
                    method: 'POST',
                    data: formData
                }).then(function (json) {
                    console.log('axios测试multipart/form-data测试axios:->', json);
                });
            }
            {
                var _formData = new FormData();
                _formData.append('json', JSON.stringify({ a: 1, b: 2, obj: { arr: ['a', 'b', 'c'] } }));
                _formData.append('type', 'ajax');
                ajax({
                    url: dataInfo.api.list.route,
                    method: 'POST',
                    data: _formData
                }).then(function (json) {
                    console.log('ajax测试multipart/form-data测试ajax:->', json);
                });
            }
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[142]);