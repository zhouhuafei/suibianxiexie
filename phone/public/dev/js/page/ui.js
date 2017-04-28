//base函数测试
(function () {
    var base = require('../base/base');
    //测试滚动到底部loading
    new base.WhenScrollBottom({
        callback: {
            success: function () {
                var Loading = require('../modules/m-loading');
                var loading = new Loading({
                    wrap: '.page-wrap',
                    config: {
                        status: 'loading'
                    }
                });
                loading.moduleDomShow();
            }
        }
    });
    //测试全选
    new base.Select({
        items: '.g-checkbox-checkbox',
        callback: {
            click: function (obj) {
                console.log(obj);
            }
        }
    });
})();
//弹窗测试
(function () {
    var Dialog = require('../modules/m-dialog');
    //new Dialog();
    // new Dialog({
    //     config: {
    //         type:'confirm'
    //     }
    // });
})();
//分页测试
(function () {
    var Pagination = require('../modules/m-pagination');
    new Pagination({wrap: '.page-pagination'});
})();
//没有数据
(function () {
    var NoData = require('../modules/m-no-data');
    new NoData({wrap: '.page-no-data'});
})();
//加载中
(function () {
    var Loading = require('../modules/m-loading');
    var loading = new Loading({
        config: {
            status: 'loading'
        }
    });
    loading.moduleDomShow();
    var over = new Loading({
        config: {
            status: 'over'
        }
    });
    over.moduleDomShow();
})();
//超类型模块测试
(function () {
    var SuperType = require('../modules/m-super-type');
    new SuperType({wrap: `.page-super-type`});
    var SubType = require('../modules/m-sub-type');
    new SubType({wrap: `.page-super-type`});
    var SuperTypeEs6 = require('../modules/m-super-type-es6');
    new SuperTypeEs6({wrap: `.page-super-type`});
    var SubTypeEs6 = require('../modules/m-sub-type-es6');
    new SubTypeEs6({wrap: `.page-super-type`});
})();
//返回顶部
(function () {
    var GoTop = require('../modules/m-go-top');
    new GoTop();
})();
//遮罩
(function () {
    var Mask = require('../modules/m-mask');
    var mask = new Mask({
        callback: {
            click: function () {
                mask.moduleDomHide();
            }
        }
    });
    //mask.moduleDomShow();
})();
//单选开关
(function () {
    const Radio = require('../modules/m-radio-switch');
    new Radio({
        wrap: '.page-radio-switch',
        callback: {
            click: function (obj) {
                console.log(obj);
            }
        }
    });
})();
//表格
(function () {
    const Table = require('../modules/m-table');
    const table = new Table({
        wrap: `.page-table`,
        data: {
            header: [
                {
                    html: `<div>header0</div>`
                },
                {
                    html: `<div>header1</div>`
                },
                {
                    html: `<div>header2</div>`
                }
            ],
            body: [
                [
                    {
                        html: `<div>body0-0</div>`
                    },
                    {
                        html: `<div>body1-0</div>`
                    },
                    {
                        html: `<div>body2-0</div>`
                    }
                ],
                [
                    {
                        html: `<div>body0-1</div>`
                    },
                    {
                        html: `<div>body1-1</div>`
                    },
                    {
                        html: `<div>body2-1</div>`
                    }
                ],
                [
                    {
                        html: `<div>body0-2</div>`
                    },
                    {
                        html: `<div>body1-2</div>`
                    },
                    {
                        html: `<div>body2-2</div>`
                    }
                ]
            ],
            footer: ``
        }
    });
})();
//验证
(function () {
    const ValidateInput = require('../modules/m-validate-form');
    const aInput = [].slice.call(document.querySelectorAll('.m-validate-form'));
    aInput.forEach(function (v) {
        v.validate = new ValidateInput({form: v});
        v.validate.validateEventBlur();
        //v.validate.validateSave();
    });
})();
//星评
(function () {
    const Star = require('../modules/m-star');
    const star = new Star({
        wrap: `.page-star`,
        callback: {
            click: function (json) {
                console.log(json);
            }
        }
    });
})();
//每个页面都要用到的js
require('../common/common');