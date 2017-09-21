const axios = require('axios');
const tools = require('../utils/tools');

module.exports = function (json) {
    const opts = tools.extend({
        defaults: {},
        inherits: json,
    });
    return axios(opts).catch(function (error) {
        console.log('axios error:', error);
    }).then(function (response) {
        console.log('axios response:', response); // 这个是axios的响应
        let data = null; // 这个是node后台的响应的数据 整体
        let result = null; // 这个是node后台响应的数据 结果
        if (response) {
            data = response.data;
            if (data.status === 'success') {
                result = data.result;
            }
            if (data.status === 'failure') {
                console.log('错误信息:', data.message);
            }
        }
        return result;
    });
};
