let axios = require('axios');
let tools = require('./tools');

module.exports = function (json) {
    let opts = tools.extend({
        defaults: {},
        inherits: json,
    });
    return axios(opts);
};
