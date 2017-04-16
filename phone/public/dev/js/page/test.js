//base函数测试
(function () {
    var base = require('../base/base');
    //测试待续...

    //测试全选
    // new base.Select({
    //     items: '.g-checkbox-checkbox',
    //     callback: {
    //         itemsClick: function (obj) {
    //             console.log(obj);
    //         }
    //     }
    // });

    //测试移除对象引用
    // var obj = {obj: {c1: 'c1', d: {d1: 'd1'}, e: null}, array: ['d1', ['c1', {a: 1}]]};
    // var obj2 = base.objRemoveQuote({obj: obj});
    // obj2.obj.d.d2 = 'zzz';
    // obj2.array[1][1].b = 2;
    // console.log(obj, obj2, 99);
})();
//es6
(function () {
    // var SubType = require('../modules/m-sub-es6');
    // var o1 = new SubType({
    //     wrap: '.main-test-es6',
    //     callback: {
    //         moduleDomClick(self){
    //             console.log(self);
    //         }
    //     },
    //     config: {
    //         moduleDomStyle: 'color:#00f;'
    //     },
    //     data: {}
    // });
    // var o2 = new SubType({
    //     wrap: '.main-test-es6',
    //     callback: {
    //         moduleDomClick(self){
    //             console.log(self);
    //         }
    //     },
    //     config: {
    //         moduleDomStyle: 'color:#0ff;'
    //     },
    //     data: {
    //         default: 'default2'
    //     }
    // });
    // console.log(o1, o2);//测试对象有没有被引用,测试结果是:没被引用,没毛病
})();
//加载中
(function () {
    var Loading = require('../modules/m-loading');
    var loading = new Loading({
        config: {
            moduleDomStatus: 'loading',
            moduleDomPosition: 'bottom'
        }
    });
    loading.moduleDomShow();
    var over = new Loading({
        config: {
            moduleDomMaskIsShow: true,
            moduleDomStatus: 'over'
        }
    });
    over.moduleDomShow();
})();
//超类模块测试
(function () {
    var Test = require('../modules/m-super-type.js');
    var test = new Test({
        wrap: `.main-test`
    });
})();
//返回顶部
(function () {
    var GoTop = require('../modules/m-go-top.js');
    new GoTop();
})();
//遮罩
(function () {
    // var Mask1 = require('../modules/m-mask.js');
    // var mask1=new Mask1({
    //     callback: {
    //         moduleDomClick: function () {
    //             console.log('m-mask click callback');
    //             mask1.moduleDomHide();
    //         }
    //     },
    //     config:{
    //         moduleDomIsClearTimer:1,
    //         moduleDomIsShow:true
    //     },
    //     data:{
    //         a:1
    //     }
    // });
    // var Mask2 = require('../modules/m-mask.js');
    // var mask2 = new Mask2();
    // console.log(mask1,mask2);//测试对象有没有被引用,测试结果是:没被引用,没毛病
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