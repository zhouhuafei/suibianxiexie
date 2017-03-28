/**
 * Created by zhouhuafei on 16/12/4.
 */
//测试
(function () {
    var Test = require('../modules/m-super-type.js');
    var test = new Test({
        parent: document.querySelector(`.main-test`),
        config: {
            moduleDomIsClearTimer: true
        }
    });
})();
//底部
(function(){
    var Footer = require('../modules/m-footer.js');
    new Footer();
})();
//遮罩
(function () {
    var Mask = require('../modules/m-mask.js');
    var mask = new Mask({
        callback:{
            moduleDomClick:function(){
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
        parent: `.main-table`,
        data:{
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
        parent:`.main-star`,
        callback:{
            moduleDomClick:function (json) {
                console.log(json);
            }
        }
    });
})();
//延迟加载
require('../function/lazyload.js')();