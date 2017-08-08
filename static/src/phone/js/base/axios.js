let axios = require('axios');
let tools = require('./tools');

export default function (json) {
    let opts = tools.extend({
        defaults: {},
        inherits: json
    });
    return axios(opts);
};