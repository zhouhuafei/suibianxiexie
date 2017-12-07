webpackJsonp([9],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(104);
var Super = __webpack_require__(3);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',
        value: function power() {
            var self = this;
            var dataInfo = self.dataInfo;
            var axios = self.axios;

            // 获取验证码
            var domForm = document.querySelector('#form');
            var domUsername = document.querySelector('#username');
            var domPassword = document.querySelector('#password');
            var domVerifyCode = document.querySelector('#verify-code');
            var domGetVerifyCode = document.querySelector('.get-verify-code');
            var domGetVerifyCodeHtml = domGetVerifyCode.innerHTML;
            var domGetVerifyCodeInactive = 'get-verify-code-inactive';
            var isCanGetVerifyCode = true;
            domGetVerifyCode.addEventListener('click', function (ev) {
                var domSelf = this;
                ev.preventDefault();
                if (isCanGetVerifyCode) {
                    isCanGetVerifyCode = false;
                    var username = domUsername.value;
                    var formData = new FormData();
                    formData.append('username', username);
                    formData.append('accountnum', 123456); // 数字 123456 会被立即转换成字符串 "123456"
                    axios({
                        url: dataInfo.api['verify-code-register-random'].route,
                        method: 'get',
                        data: {
                            username: username
                        }
                    }).then(function (json) {
                        if (json.status === 'success') {
                            var Dialog = __webpack_require__(10);
                            new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '验证码已发送' } } });
                            domSelf.classList.add(domGetVerifyCodeInactive);
                            self.tools.timeCountDown({
                                seconds: 90,
                                isToTime: false,
                                callback: {
                                    run: function run(obj) {
                                        domGetVerifyCode.innerHTML = '<span class="g-button">' + obj.seconds + '\u79D2</span>';
                                    },
                                    over: function over() {
                                        isCanGetVerifyCode = true;
                                        domGetVerifyCode.innerHTML = domGetVerifyCodeHtml;
                                        domSelf.classList.remove(domGetVerifyCodeInactive);
                                    }
                                }
                            });
                        } else {
                            isCanGetVerifyCode = true;
                        }
                    });
                }
            });

            // 立即注册
            document.querySelector('.register').addEventListener('click', function () {
                var isFormData = false;
                var userInfo = new FormData(domForm);
                if (!isFormData) {
                    userInfo = {
                        username: domUsername.value,
                        password: domPassword.value,
                        verifyCode: domVerifyCode.value
                    };
                }
                axios({
                    url: dataInfo.api.register.route,
                    method: 'post',
                    data: userInfo
                }).then(function (json) {
                    if (json.status === 'success') {
                        window.location.href = dataInfo.routes.login.route;
                    }
                });
            });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/node-sass/vendor/darwin-x64-57/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 6.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:635:30)\n    at Object.Module._extensions..js (module.js:646:10)\n    at Module.load (module.js:554:32)\n    at tryModuleLoad (module.js:497:12)\n    at Function.Module._load (module.js:489:3)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:635:30)\n    at Object.Module._extensions..js (module.js:646:10)\n    at Module.load (module.js:554:32)\n    at tryModuleLoad (module.js:497:12)\n    at Function.Module._load (module.js:489:3)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModule.js:275:15)\n    at runLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/Compilation.js:151:10)\n    at moduleFactory.create (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/Compilation.js:456:10)\n    at factory (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModuleFactory.js:241:5)\n    at applyPluginsAsyncWaterfall (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModuleFactory.js:94:13)\n    at /Users/zhouhuafei/Desktop/suibianxiexie/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/tapable/lib/Tapable.js:272:13)\n    at resolver (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModuleFactory.js:69:10)\n    at process.nextTick (/Users/zhouhuafei/Desktop/suibianxiexie/node_modules/webpack/lib/NormalModuleFactory.js:194:7)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })

},[103]);