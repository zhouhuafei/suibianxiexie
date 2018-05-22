const Super = require('../pages-super/super'); // 超类型
const WebsiteInfos = require('../../models/mongoose/website-infos');

class Sub extends Super {
    // (处)(覆)处理数据(覆盖超类型)
    handleData() {
        const self = this;
        const dataInfo = self.dataInfo;
        WebsiteInfos.findOne({}, function (error, result) {
            if (error) {
                dataInfo.page = {error};
            }
            dataInfo.page = result || {};
            self.render();// 渲染视图(渲染数据)
        });
    }
}

module.exports = Sub;
