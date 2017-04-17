//base函数测试
(function () {
    var base = require('../base/base');

    //测试全选
    new base.Select({
        items: '.g-checkbox-checkbox',
        callback: {
            itemsClick: function (obj) {
                console.log(obj);
            }
        }
    });
})();
//加载中
(function () {
    var Loading = require('../modules/m-loading');
    var loading = new Loading({config: {moduleDomStatus: 'loading'}});
    loading.moduleDomShow();
    var over = new Loading({config: {moduleDomStatus: 'over'}});
    over.moduleDomShow();
})();
//超类型模块测试
(function () {
    var SuperType = require('../modules/m-super-type.js');
    new SuperType({wrap: `.main-super-type`});
    var SuperTypeEs6 = require('../modules/m-super-type-es6.js');
    new SuperTypeEs6({wrap: `.main-super-type`});
    var SubTypeEs6 = require('../modules/m-sub-type-es6.js');
    new SubTypeEs6({wrap: `.main-super-type`});
})();
//返回顶部
(function () {
    var GoTop = require('../modules/m-go-top.js');
    new GoTop();
})();
//遮罩
(function () {
    var Mask = require('../modules/m-mask.js');
    var mask = new Mask({
        callback: {
            moduleDomClick: function () {
                mask1.moduleDomHide();
            }
        }
    });
    //mask.moduleDomShow();
})();
//单选开关
(function () {
    const Radio = require('../modules/m-radio-switch.js');
    const main = document.querySelector('.main-radio-switch');
    const radio = new Radio({
        checkTxt: {
            on: '开',
            off: '关'
        },
        status: 'off',
        isHand: false,
        clickCallback: function (result) {
            console.log(result);
        }
    });
    main.appendChild(radio.parentDom);
})();
//表格
(function () {
    const Table = require('../modules/m-table.js');
    const table = new Table({
        wrap: `.main-table`,
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
    const ValidateInput = require('../modules/m-validate-input.js');
    const aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
    aInput.forEach(function (v) {
        var validate = new ValidateInput({input: v});
        validate.validateEventBlur();
    });
})();
//星评
(function () {
    const Star = require('../modules/m-star.js');
    const star = new Star({
        wrap: `.main-star`,
        callback: {
            moduleDomClick: function (json) {
                console.log(json);
            }
        }
    });
})();
//每个页面都要用到的js
require('../common/common.js');