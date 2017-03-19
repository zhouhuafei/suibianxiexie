/**
 * Created by zhouhuafei on 16/12/4.
 */
//测试
(function () {
    var Test = require('../modules/m-test');
    var test = new Test({
        parent: document.querySelector(`.main-test`),
        config: {
            isClearTimer: true,
            isShowModule: true
        },
        data: {
            info: `侯丽杰爱周华飞`
        }
    });
    setTimeout(function () {
        test.opt.data.info = `周华飞爱侯丽杰`;
        test.removeModuleDom();
        test.init();
    }, 3000);
    setTimeout(function () {
        test.hide();
        setTimeout(function () {
            test.show();
        }, 2000);
    }, 5000);
})();
//遮罩
(function () {
    var Mask = require('../modules/m-mask');
    var mask = new Mask({
        callback:{
            click:function(){
                console.log('m-mask click callback');
                mask.hide();
            }
        },
        config: {
            isTransparent: false
        }
    });
    //mask.show();
})();
//单选开关
(function () {
    const Radio = require('../modules/m-radio-switch');
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
    const Table = require('../modules/m-table');
    const table = new Table({
        parentSelector: `.main-table`,
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
    });
})();
//验证
(function () {
    const ValidateInput = require('../modules/m-validate-input');
    const aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
    aInput.forEach(function (v) {
        var validate = new ValidateInput({input: v});
        validate.validateEventBlur();
    });
})();
//星评
(function () {
    const Star = require('../modules/m-star');
    const main = document.querySelector('.main-star');
    const star = new Star({
        eventCallback: function (json) {
            console.log(`有点意思${json.index}`);
        }
    });
    main.appendChild(star.parentDom);
})();
require('../function/lazyload')();//延迟加载