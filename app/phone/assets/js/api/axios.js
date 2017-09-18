const axios = require('axios');
const tools = require('../utils/tools');

module.exports = function (json) {
    const opts = tools.extend({
        defaults: {},
        inherits: json,
    });
    return axios(opts).catch(function (error) {
        console.log('axios error:', error);
    }).then(function (json) {
        const response = json || {};
        console.log('axios response:', response);
        return response.data || {};
    });
};
