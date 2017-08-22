let axios = require('axios');
let tools = require('../utils/tools');

module.exports = function (json) {
    let opts = tools.extend({
        defaults: {},
        inherits: json,
    });
    return axios(opts);
};
