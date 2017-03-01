/**
 * Created by zhouhuafei on 16/12/4.
 */
//表格
(function () {
    const Table = require('../modules/m-table');
    const main = document.querySelector('.main-table');
    const table = new Table({
        header:[
            {
                html:`<div>header0</div>`
            },
            {
                html:`<div>header1</div>`
            },
            {
                html:`<div>header2</div>`
            }
        ],
        body:[
            [
                {
                    html:`<div>body0-0</div>`
                },
                {
                    html:`<div>body1-0</div>`
                },
                {
                    html:`<div>body2-0</div>`
                }
            ],
            [
                {
                    html:`<div>body0-1</div>`
                },
                {
                    html:`<div>body1-1</div>`
                },
                {
                    html:`<div>body2-1</div>`
                }
            ],
            [
                {
                    html:`<div>body0-2</div>`
                },
                {
                    html:`<div>body1-2</div>`
                },
                {
                    html:`<div>body2-2</div>`
                }
            ]
        ],
        footer:``,
    });
    main.appendChild(table.parentDom);
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
//列表
(function () {
    const Product = require('../modules/m-product');
    const main = document.querySelector('.main-product');
    const product = new Product({
        configData: {
            isShowGoodsName: true,
            isShowPrice: true,
            isVipCustom: true,
            isShowLikeNum: true,
            //isShowCart:true,
            isShowSeckillMark: true,
            isShowSeckillLogo: true,
            //isShowSeckillWillBeginBtn:true,
            //isShowSeckillWillBeginTime:true,
            //isShowSeckillHintBtn:true,
            //isShowSeckillHintBtnSetOk:true,
            isShowSeckillNowGetBtn: true,
            isShowSeckillWillEndTime: true
        },
        ajaxData: {
            goodsName: '商品名称商品名称商品名称商品名称商品名称商品名称',
            marketPrice: '200.00',
            nowPrice: '100.00',
            vipPrice: '10.00',
            seckillPrice: '1.00',
            likeNum: '300',
            imgSrc: 'http://qmfx-s84664.s3.fy.shopex.cn/gpic/20160627/be7c4eafe8063a94bf2da631299bec6b.jpg?imageView2/2/w/600/h/600/interlace/1',
            aHref: 'http://www.baidu.com',
            seckillWillBeginTime: '6',
            seckillWillBeginBtnShowTime: '3',
            seckillWillEndTime: '300'
        }
    });
    main.appendChild(product.parentDom);
})();
require('../function/lazyload')();//延迟加载
