import '../../scss/base/global.scss';//全局的样式
import Vue from 'vue';//vue框架
import axios from 'axios';//axios(数据请求)
let tools = require('../base/tools');

module.exports.Vue = Vue;
module.exports.tools = tools;
module.exports.axios = (function () {
    return function (opts) {
        return axios(opts);
    }
})();