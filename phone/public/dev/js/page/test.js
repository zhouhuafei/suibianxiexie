//测试
(function () {
    var Test = require('../modules/m-super-type.js');
    var test = new Test({
        wrap: document.querySelector(`.main-test`),
        config: {
            moduleDomIsClearTimer: true
        }
    });
})();
//当滚动到了浏览器底部
(function () {
    var base = require('../base/base.js');
    var whenScrollBottom = new base.WhenScrollBottom({
        callback: {
            success: function (obj) {
                obj.isLoadOver = true;
                //console.log(obj,whenScrollBottom);
            },
            fail: function () {
                //console.log('fail');
            }
        }
    });
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
                console.log('m-mask click callback');
                mask.moduleDomHide();
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