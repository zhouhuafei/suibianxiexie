// 检查路由对应的文件是否全部存在
const routesFilePath = [
    `${__dirname}/app/phone/routes/api/`,
    `${__dirname}/app/phone/routes/pages/`,
    `${__dirname}/app/admin/routes/pages/`,
    `${__dirname}/app/admin/routes/pages/`,
];
const phoneApiConfig = require('./app/phone/routes/api/config');
const phoneRoutesConfig = require('./app/phone/routes/pages/config');
const adminApiConfig = require('./app/admin/routes/api/config');
const adminRoutesConfig = require('./app/admin/routes/pages/config');
// 未完待续...
