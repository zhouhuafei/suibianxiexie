const axios = require('axios');
const tools = require('../utils/tools');

module.exports = function (json) {
    const opts = tools.extend({
        defaults: {},
        inherits: json,
    });
    return axios(opts);
};
