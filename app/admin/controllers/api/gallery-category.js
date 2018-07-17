const Super = require('../api-super/super'); // 超类型
const GalleryCategory = require('../../models/mongoose/gallery-category'); // 图片库里图片分类的数据模型

class Sub extends Super {
    // (处)(覆)处理数据(覆盖超类型)
    handleData() {
        const data = this.opts.req.data;
        data.name = (data.name || '').trim();
        data._id = (data._id || '').trim();
    }

    // (增)(覆)增加数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const name = (data.name || '').trim();
        if (name === '') {
            self.render({message: '分类名称不能为空'});
            return;
        }
        GalleryCategory.findOne({name}, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库查询出现错误',
                    failureInfo: error,
                });
            }
            if (result) {
                self.render({message: '分类名称已存在'});
            } else {
                const galleryCategory = new GalleryCategory({name});
                galleryCategory.save(function (error, result) {
                    if (error) {
                        self.render({
                            message: '数据库插入出现错误',
                            failureInfo: error,
                        });
                        return;
                    }
                    self.render({
                        status: 'success',
                        message: '成功',
                        result,
                    });
                });
            }
        });
    }

    // (删)(覆)删除数据(覆盖超类型)
    deleteData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const _id = (data._id || '').trim();
        if (_id === '') {
            self.render({message: '分类id不能为空'});
            return;
        }
        GalleryCategory.deleteOne({_id}, function (error, result) {
            if (error) {
                self.render({
                    message: '删除分类出现错误',
                    failureInfo: error,
                });
            } else {
                self.render({
                    status: 'success',
                    message: '删除成功',
                    result,
                });
            }
        });
    }

    // (改)(覆)修改数据(覆盖超类型)
    putData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const name = (data.name || '').trim();
        const _id = (data._id || '').trim();
        if (name === '') {
            self.render({message: '分类名称不能为空'});
            return;
        }
        if (_id === '') {
            self.render({message: '分类id不能为空'});
            return;
        }
        GalleryCategory.findOne({name}, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库查询出现错误',
                    failureInfo: error,
                });
            }
            if (result) {
                self.render({message: '分类名称已存在'});
            } else {
                GalleryCategory.updateOne({_id}, {name}, function (error, result) {
                    if (error) {
                        self.render({
                            message: '数据库更新出现错误',
                            failureInfo: error,
                        });
                    } else {
                        self.render({
                            status: 'success',
                            message: '更新成功',
                            result,
                        });
                    }
                });
            }
        });
    }

    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        GalleryCategory.find({}, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库查询出现错误',
                    failureInfo: error,
                });
            } else {
                self.render({
                    status: 'success',
                    message: '查询成功',
                    result,
                });
            }
        });
    }
}

module.exports = Sub;
