const axios = require('axios');
const tools = require('../utils/tools');
const Dialog = require('../components/g-dialog');

module.exports = function (json) {
    const opts = tools.extend({
        defaults: {},
        inherits: json,
    });
    return axios(opts).catch(function (error) {
        new Dialog({
            config: {
                alert: {
                    content: `错误 : ${error}`,
                },
            },
        });
    }).then(function (response) {
        let dataInfo = null;
        let result = null;
        if (response) {
            dataInfo = response.data;
            if (dataInfo.status === 'success') {
                result = dataInfo.result;
            }
            if (dataInfo.status === 'failure') {
                new Dialog({
                    config: {
                        alert: {
                            content: `失败 : ${dataInfo.message}`,
                        },
                    },
                });
            }
        }
        return result;
    });
};
