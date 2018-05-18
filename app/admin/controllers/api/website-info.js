const Super = require('../api-super/super'); // 超类型
const WebsiteInfos = require('../../models/mongoose/website-infos');

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        this.render({message: '请求方式请使用put'});
    }

    // (改)(覆)修改数据(覆盖超类型)
    putData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const name = (data.name || '').trim();
        const phone = (data.phone || '').trim();
        const logo = (data.logo || '').trim();
        const favicon = (data.favicon || '').trim();
        if (name === '') {
            self.render({message: '网站名不能为空'});
            return;
        }
        if (phone === '') {
            self.render({message: '联系电话不能为空'});
            return;
        }
        if (logo === '') {
            self.render({message: '网站logo不能为空'});
            return;
        }
        if (favicon === '') {
            self.render({message: '网站favicon不能为空'});
            return;
        }
        WebsiteInfos.updateOne({}, {name, phone, logo, favicon}, {upsert: true}, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库更新失败',
                    failureInfo: error,
                });
            }
            self.render({
                status: 'success',
                message: '保存成功',
                result,
            });
        });
    }

    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        WebsiteInfos.findOne({}, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库查询失败',
                    failureInfo: error,
                });
            }
            if (result) {
                self.render({
                    status: 'success',
                    message: '查询成功',
                    result,
                });
            } else {
                self.render({message: '数据不存在'});
            }
        });
    }
}

module.exports = Sub;
