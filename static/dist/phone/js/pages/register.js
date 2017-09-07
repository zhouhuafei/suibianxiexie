webpackJsonp([6],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('load', function () {
    setTimeout(function () {
        var axios = __webpack_require__(48);

        // 注释待续...
        (function () {
            // 功能待续...

            // 获取验证码
            var form = document.querySelector('#form');
            var inputUsername = document.querySelector('#username');
            var inputPassword = document.querySelector('#password');
            var inputVerifyCode = document.querySelector('#verify-code');
            var btnGetVerifyCode = document.querySelector('.get-verify-code');

            function getVerifyCode(username) {
                var formData = new FormData();
                formData.append('username', username);
                formData.append('accountnum', 123456); // 数字 123456 会被立即转换成字符串 "123456"
                axios({
                    url: '/phone/api/verify-code/',
                    method: 'post',
                    data: {
                        username: username
                    }
                });
            }

            btnGetVerifyCode.addEventListener('click', function () {
                getVerifyCode(inputUsername.value);
            });

            // 立即注册
            document.querySelector('.register').addEventListener('click', function () {
                var isFormData = true;
                var userInfo = new FormData(form);
                if (!isFormData) {
                    userInfo = {
                        username: inputUsername.value,
                        password: inputPassword.value,
                        verifyCode: inputVerifyCode.value
                    };
                }
                axios({
                    url: '/phone/api/register/',
                    method: 'post',
                    data: userInfo
                });
            });
        })();

        __webpack_require__(50); // 当前页面用到的样式
        var common = __webpack_require__(3); // 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(11);
var tools = __webpack_require__(1);

module.exports = function (json) {
    var opts = tools.extend({
        defaults: {},
        inherits: json
    });
    return axios(opts);
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[47]);