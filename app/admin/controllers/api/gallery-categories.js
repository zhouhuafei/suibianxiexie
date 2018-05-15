const Super = require('../api-super/super'); // 超类型
const GalleryCategories = require('../../models/mongoose/gallery-categories'); // 图片库里图片分类的数据模型

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const name = data.name || '';
        if (name === '') {
            self.render({message: '分类名称不能为空'});
            return;
        }

        GalleryCategories.findOne({name}, function (error, result) {
            // 数据库查询出现错误
            if (error) {
                self.render({
                    message: '数据库查询出现错误',
                    failureInfo: error,
                });
            }
            if (result) {
                self.render({message: '分类名称已存在'});
            } else {
                const galleryCategories = new GalleryCategories({name});
                galleryCategories.save(function (error, result) {
                    // 数据库插入出现错误
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
        const name = data.name || '';
        const id = data.id || '';
        if (name === '' && id === '') {
            self.render({message: '分类名称和分类id至少存在一个'});
            return;
        }
        self.render({
            status: 'success',
            message: '成功',
        });
    }

    // (改)(覆)修改数据(覆盖超类型)
    putData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        self.render({
            status: 'success',
            message: '成功',
        });
    }

    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        self.render({
            status: 'success',
            message: '成功',
        });
    }
}

module.exports = Sub;
