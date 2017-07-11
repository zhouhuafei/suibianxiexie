import '../../scss/base/global.scss';//全局的样式
import Vue from 'vue';//vue框架
import axios from 'axios';//axios(数据请求)
let tools = require('../base/tools');//工具方法
let applications = require('../base/applications');//应用方法

module.exports.Vue = Vue;
module.exports.axios = function (opts) {
    return axios(opts);
};
module.exports.tools = tools;
module.exports.applications = applications;