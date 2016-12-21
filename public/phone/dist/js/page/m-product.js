"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/4.
         */
        var base = {};
        base.goTop = function (opt) {
            //返回顶部
            var obj = opt.obj;
            if (!obj) {
                console.log('parameter error');
                return false;
            }
            var doc = document;
            var scale = 6;
            var scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
            var speed = 0;
            var timer = null;
            var fn = function fn() {
                speed = Math.ceil(scrollT / scale);
                scrollT -= speed;
                window.scrollTo(0, scrollT);
                timer = requestAnimationFrame(fn);
                if (scrollT == 0) {
                    cancelAnimationFrame(timer);
                }
            };
            obj.addEventListener('click', function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
                requestAnimationFrame(fn);
            });
            doc.addEventListener('touchstart', function () {
                cancelAnimationFrame(timer);
            });
        };
        base.mask = function () {
            //普通黑色遮罩
            var doc = document;
            var body = doc.body;
            var mask = doc.createElement('div');
            mask.className = 'mask';
            mask.style.background = 'rgba(0,0,0,0.4)';
            mask.style.position = 'fixed';
            mask.style.left = '0';
            mask.style.top = '0';
            mask.style.width = '100%';
            mask.style.height = '100%';
            mask.style.zIndex = '500';
            return {
                show: function show() {
                    body.appendChild(mask);
                },
                hide: function hide() {
                    body.removeChild(mask);
                }
            };
        };
        base.yesNoScroll = function () {
            //浏览器禁止滚动
            var doc = document;
            return {
                //阻止冒泡
                stopPropagation: function stopPropagation(ev) {
                    ev.stopPropagation();
                },
                //阻止默认事件
                preventDefault: function preventDefault(ev) {
                    ev.preventDefault();
                },
                //阻止冒泡,阻止默认事件
                returnFalse: function returnFalse(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                },
                //禁止滚动
                noScroll: function noScroll() {
                    doc.addEventListener('touchmove', this.preventDefault, false);
                    doc.documentElement.style.overflow = 'hidden';
                },
                //解除禁止浏览器滚动
                yesScroll: function yesScroll() {
                    doc.removeEventListener('touchmove', this.preventDefault, false);
                    doc.documentElement.style.overflow = 'auto';
                }
            };
        };
        base.fillZero = function (opt) {
            //补零函数
            var num = opt.num;
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
        };
        base.secondsToTime = function (opt) {
            //秒转时间
            var seconds = opt.seconds;
            var d = Math.floor(seconds / 3600 / 24); //天
            var h = Math.floor(seconds / 3600 % 24); //小时
            var m = Math.floor(seconds % 3600 / 60); //分钟
            var s = Math.floor(seconds % 60); //秒数
            return { d: d, h: h, m: m, s: s, a: seconds };
        };
        base.timeCountDown = function (opt) {
            //倒计时
            var seconds = opt.seconds;
            var runCallback = opt.runCallback; //运行的回调
            var overCallback = opt.overCallback; //结束的回调
            var timeTransform = base.secondsToTime; //时间转换
            if (seconds <= 0) {
                //时间小于0秒
                seconds = 0;
                runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                overCallback && overCallback(); //结束时的回调
            } else {
                //时间大于0秒
                runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                //倒计时走你
                var timer = setInterval(function () {
                    seconds--;
                    runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                    if (seconds < 0) {
                        seconds = 0;
                        clearInterval(timer);
                        runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                        overCallback && overCallback(); //结束时的回调
                    }
                }, 1000);
            }
        };
        base.htmlToDom = function (opt) {
            //html转成DOM节点
            var html = opt.html;
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.children[0];
        };
        module.exports = base;
    }, {}], 2: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/17.
         */
        var Product = require('../modules/m-product');
        var product = new Product({
            configData: {
                isShowGoodsName: true,
                isShowPrice: true,
                isVipCustom: true,
                isShowLikeNum: true,
                //isShowCart:true,
                isShowSeckillMark: true,
                isShowSeckillLogo: true,
                //isShowSeckillWillBeginBtn:true,
                isShowSeckillWillBeginTime: true,
                isShowSeckillHintBtn: true
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
                seckillWillEndTime: '3'
            }
        });
        product.render(function (dom) {
            document.querySelector('.main').appendChild(dom);
        });
    }, { "../modules/m-product": 3 }], 3: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/17.
         */
        function ProductList(opt) {
            this.opt = opt || {};
            this.configData = this.opt.configData || {}; //配置信息
            this.ajaxData = this.opt.ajaxData || {}; //商品信息
            this.configData = {
                showType: this.configData.showType || 'm-product-window', //默认的展现形式(默认为列表式:'m-product-list',橱窗式:'m-product-window',海报式:'m-product-placard')
                isShowLong: this.configData.isShowLong == true ? this.configData.isShowLong : false, //是否显示为长方形(默认不显示)
                isShowCart: this.configData.isShowCart == true ? this.configData.isShowCart : false, //是否显示购物车(默认不显示)
                isShowGoodsName: this.configData.isShowGoodsName == true ? this.configData.isShowGoodsName : false, //是否显示商品名称(默认不显示)
                isShowPrice: this.configData.isShowPrice == true ? this.configData.isShowPrice : false, //是否显示商品价格(默认不显示)
                isVipCustom: this.configData.isVipCustom == true ? this.configData.isVipCustom : false, //是否是VIP客户(默认不显示)
                isShowLikeNum: this.configData.isShowLikeNum == true ? this.configData.isShowLikeNum : false, //是否显示多少人想买(默认不显示)
                isShowSeckillMark: this.configData.isShowSeckillMark == true ? this.configData.isShowSeckillMark : false, //是否显示秒杀标识(默认不显示)
                isShowSeckillLogo: this.configData.isShowSeckillLogo == true ? this.configData.isShowSeckillLogo : false, //是否显示秒杀logo(默认不显示)
                isShowSeckillWillBeginBtn: this.configData.isShowSeckillWillBeginBtn == true ? this.configData.isShowSeckillWillBeginBtn : false, //是否显示秒杀即将开始按钮(默认不显示)
                isShowSeckillWillBeginTime: this.configData.isShowSeckillWillBeginTime == true ? this.configData.isShowSeckillWillBeginTime : false, //是否显示秒杀即将开始的时间(默认不显示)
                isShowSeckillHintBtn: this.configData.isShowSeckillHintBtn == true ? this.configData.isShowSeckillHintBtn : false, //是否显示秒杀提醒按钮(默认不显示)
                isShowSeckillHintBtnSetOk: this.configData.isShowSeckillHintBtnSetOk == true ? this.configData.isShowSeckillHintBtnSetOk : false, //是否显示已设置秒杀提醒按钮(默认不显示)
                isShowSeckillNowGetBtn: this.configData.isShowSeckillNowGetBtn == true ? this.configData.isShowSeckillNowGetBtn : false, //是否显示秒杀马上抢按钮(默认不显示)
                isShowSeckillWillEndTime: this.configData.isShowSeckillWillEndTime == true ? this.configData.isShowSeckillWillEndTime : false //是否显示秒杀即将结束的倒计时(默认不显示)
            };
            this.ajaxData = {
                goodsName: this.ajaxData.goodsName || '商品名称', //商品名称
                gid: this.ajaxData.gid, //商品的id
                marketPrice: this.ajaxData.marketPrice || '66666.66', //市场价格
                nowPrice: this.ajaxData.nowPrice || '6666.66', //现在的价格
                vipPrice: this.ajaxData.vipPrice || '666.66', //会员价格
                seckillPrice: this.ajaxData.seckillPrice || '66.66', //秒杀价格
                likeNum: this.ajaxData.likeNum || '66', //多少人喜欢
                imgSrc: this.ajaxData.imgSrc || '', //图片的地址
                aHref: this.ajaxData.aHref || '', //商品详情的链接
                seckillWillBeginTime: this.ajaxData.seckillWillBeginTime || '6', //秒杀即将开始的时间
                seckillWillBeginBtnShowTime: this.ajaxData.seckillWillBeginBtnShowTime || '60', //秒杀即将开始按钮出现的时间(剩余最后60秒的时候出现)
                seckillWillEndTime: this.ajaxData.seckillWillEndTime || '6' //秒杀即将结束的时间
            };
        }
        //以下是渲染结构
        ProductList.prototype.renderParent = function () {
            //渲染父级容器
            var div = document.createElement('div');
            div.classList.add("m-product");
            div.classList.add("" + this.configData.showType);
            this.parentDom = div;
            this.parentDom.innerHTML = "            \n        " + this.renderImg() + "        \n        " + this.renderTxt() + "\n    ";
            this.parentDomImg = this.parentDom.querySelector('.m-product-img a');
            this.parentDomTxt = this.parentDom.querySelector('.m-product-txt');
        };
        ProductList.prototype.renderImg = function () {
            //渲染图片区域
            return "\n        <div class=\"m-product-img\">\n            <a href=\"" + this.ajaxData.aHref + "\">\n                <img src=\"" + this.ajaxData.imgSrc + "\" alt=\"\">\n                " + this.renderSeckillLogo() + "\n            </a>\n        </div>\n    ";
        };
        ProductList.prototype.renderTxt = function () {
            //渲染文字区域
            return "\n        <div class=\"m-product-txt\">\n            " + this.renderGoodsName() + "\n            " + this.renderPrice() + "\n            " + this.renderLikeNum() + "\n            " + this.renderCart() + "\n            " + this.renderSeckillMark() + "\n            " + this.renderSeckillWillBeginBtn() + "\n            " + this.renderSeckillWillBeginTime() + "\n            " + this.renderSeckillHintBtn() + "\n            " + this.renderSeckillNowGetBtn() + "\n            " + this.renderSeckillWillEndTime() + "\n            " + this.renderSeckillHintBtnSetOk() + "\n        </div>\n    ";
        };
        ProductList.prototype.renderGoodsName = function () {
            //渲染商品名称
            if (this.configData.isShowGoodsName) {
                return "<div class=\"m-product-goods-name\">" + this.ajaxData.goodsName + "</div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderGoodsNameAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowGoodsName',
                renderName: 'renderGoodsName',
                className: '.m-product-goods-name'
            });
        };
        ProductList.prototype.renderGoodsNameRemove = function () {
            this.domRemove({
                className: '.m-product-goods-name'
            });
        };
        ProductList.prototype.renderPrice = function () {
            //渲染商品价格
            if (this.configData.isShowPrice) {
                var isVip = this.configData.isVipCustom;
                var ajaxData = this.ajaxData;
                var nowPrice = ajaxData.nowPrice;
                if (isVip) {
                    nowPrice = ajaxData.vipPrice;
                }
                var nowPrice0 = nowPrice.split('.')[0];
                var nowPrice1 = nowPrice.split('.')[1];
                var marketPrice = ajaxData.marketPrice;
                var VipHtml = "";
                if (isVip) {
                    VipHtml = "<span class=\"m-product-price-vip-money\">\u4F1A\u5458\u4EF7</span>";
                }
                return "\n            <div class=\"m-product-price\">\n                " + VipHtml + "\n                <span class=\"m-product-price-now-money-symbol\">\uFFE5</span>\n                <span class=\"m-product-price-now-money-big\">" + nowPrice0 + "</span>\n                <span class=\"m-product-price-now-money-point\">.</span>\n                <span class=\"m-product-price-now-money-small\">" + nowPrice1 + "</span>\n                <span class=\"m-product-price-market-money-symbol\">\uFFE5</span>\n                <span class=\"m-product-price-market-money-small\">" + marketPrice + "</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderPriceAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowPrice',
                renderName: 'renderPrice',
                className: '.m-product-price'
            });
        };
        ProductList.prototype.renderPriceRemove = function () {
            this.domRemove({
                className: '.m-product-price'
            });
        };
        ProductList.prototype.renderLikeNum = function () {
            //渲染多少人喜欢
            if (this.configData.isShowLikeNum) {
                return "\n            <div class=\"m-product-price-like-num\">\n                <span class=\"m-product-price-like-num-people\">" + this.ajaxData.likeNum + "</span>\n                <span>\u4EBA\u60F3\u4E70</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderLikeNumAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowLikeNum',
                renderName: 'renderLikeNum',
                className: '.m-product-price-like-num'
            });
        };
        ProductList.prototype.renderLikeNumRemove = function () {
            this.domRemove({
                className: '.m-product-price-like-num'
            });
        };
        ProductList.prototype.renderCart = function () {
            //渲染购物车
            if (this.configData.isShowCart) {
                return "<div class=\"m-product-cart\"><span class=\"iconfont icon-gouwuche\"></span></div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderCartAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowCart',
                renderName: 'renderCart',
                className: '.m-product-cart'
            });
        };
        ProductList.prototype.renderCartRemove = function () {
            this.domRemove({
                className: '.m-product-cart'
            });
        };
        ProductList.prototype.renderSeckillLogo = function () {
            //渲染秒杀Logo
            if (this.configData.isShowSeckillLogo) {
                return "\n            <div class=\"m-product-seckill-logo\">\n                <div class=\"m-product-seckill-img\"></div>\n                <div class=\"m-product-seckill-price\">\n                    <span class=\"m-product-seckill-price-money-symbol\">\uFFE5</span>\n                    <span class=\"m-product-seckill-price-money-big\">66</span>\n                    <span class=\"m-product-seckill-price-money-point\">.</span>\n                    <span class=\"m-product-seckill-price-money-small\">66</span>\n                </div>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillLogoAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillLogo',
                renderName: 'renderSeckillLogo',
                className: '.m-product-seckill-logo',
                parent: this.parentDomImg
            });
        };
        ProductList.prototype.renderSeckillLogoRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-logo',
                parent: this.parentDomImg
            });
        };
        ProductList.prototype.renderSeckillMark = function () {
            //渲染秒杀标识
            if (this.configData.isShowSeckillMark) {
                this.parentDom.classList.add('m-product-seckill');
                return "\n            <div class=\"m-product-seckill-mark\">\n                <span class=\"iconfont icon-naozhong\"></span>\n                <span>\u79D2\u6740</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillMarkAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillMark',
                renderName: 'renderSeckillMark',
                className: '.m-product-seckill-mark'
            });
        };
        ProductList.prototype.renderSeckillMarkRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-mark'
            });
            this.parentDom.classList.remove('m-product-seckill');
        };
        ProductList.prototype.renderSeckillWillBeginBtn = function () {
            //渲染秒杀即将开始的按钮
            if (this.configData.isShowSeckillWillBeginBtn) {
                return "\n            <div class=\"m-product-seckill-will-begin-btn\">\n                <div>\u79D2\u6740</div>\n                <div>\u5373\u5C06\u5F00\u59CB</div>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillWillBeginBtnAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillWillBeginBtn',
                renderName: 'renderSeckillWillBeginBtn',
                className: '.m-product-seckill-will-begin-btn'
            });
        };
        ProductList.prototype.renderSeckillWillBeginBtnRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-will-begin-btn'
            });
        };
        ProductList.prototype.renderSeckillWillBeginTime = function () {
            //渲染秒杀即将开始的时间
            if (this.configData.isShowSeckillWillBeginTime) {
                var seconds = this.ajaxData.seckillWillBeginTime;
                var o = this.secondsToTime({ seconds: seconds });
                var d = o.d;
                var h = o.h;
                var m = o.m;
                var s = o.s;
                return "\n            <div class=\"m-product-seckill-will-begin-time\">\n                <span class=\"m-product-seckill-will-begin-time-des\">\u8DDD\u5F00\u59CB</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + d + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u5929</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + h + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u65F6</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + m + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u5206</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + s + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u79D2</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillWillBeginTimeAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillWillBeginTime',
                renderName: 'renderSeckillWillBeginTime',
                className: '.m-product-seckill-will-begin-time'
            });
        };
        ProductList.prototype.renderSeckillWillBeginTimeRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-will-begin-time'
            });
        };
        ProductList.prototype.renderSeckillHintBtn = function () {
            //渲染秒杀提醒按钮
            if (this.configData.isShowSeckillHintBtn) {
                return "<div class=\"m-product-seckill-hint-btn\">\u63D0\u9192\u6211</div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillHintBtnAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillHintBtn',
                renderName: 'renderSeckillHintBtn',
                className: '.m-product-seckill-hint-btn'
            });
        };
        ProductList.prototype.renderSeckillHintBtnRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-hint-btn'
            });
        };
        ProductList.prototype.renderSeckillHintBtnSetOk = function () {
            //渲染已设置秒杀提醒按钮
            if (this.configData.isShowSeckillHintBtnSetOk) {
                return "\n            <div class=\"m-product-seckill-hint-btn-set-ok\">\n                <div>\u5DF2\u8BBE\u7F6E</div>\n                <div>\u63D0\u9192</div>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillHintBtnSetOkAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillHintBtnSetOk',
                renderName: 'renderSeckillHintBtnSetOk',
                className: '.m-product-seckill-hint-btn-set-ok'
            });
        };
        ProductList.prototype.renderSeckillHintBtnSetOkRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-hint-btn-set-ok'
            });
        };
        ProductList.prototype.renderSeckillNowGetBtn = function () {
            //渲染秒杀马上抢按钮
            if (this.configData.isShowSeckillNowGetBtn) {
                return "<div class=\"m-product-seckill-now-get-btn\"><a href=\"javascript:;\">\u9A6C\u4E0A\u62A2</a></div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillNowGetBtnAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillNowGetBtn',
                renderName: 'renderSeckillNowGetBtn',
                className: '.m-product-seckill-now-get-btn'
            });
        };
        ProductList.prototype.renderSeckillNowGetBtnRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-now-get-btn'
            });
        };
        ProductList.prototype.renderSeckillWillEndTime = function () {
            //渲染秒杀结束倒计时
            if (this.configData.isShowSeckillWillEndTime) {
                var seconds = this.ajaxData.seckillWillEndTime;
                var o = this.secondsToTime({ seconds: seconds });
                var d = o.d;
                var h = o.h;
                var m = o.m;
                var s = o.s;
                return "\n            <div class=\"m-product-seckill-will-end-time\">\n                <span class=\"m-product-seckill-will-end-time-des\">\u8DDD\u7ED3\u675F</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + d + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u5929</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + h + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u65F6</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + m + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u5206</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + s + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u79D2</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillWillEndTimeAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillWillEndTime',
                renderName: 'renderSeckillWillEndTime',
                className: '.m-product-seckill-will-end-time'
            });
        };
        ProductList.prototype.renderSeckillWillEndTimeRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-will-end-time'
            });
        };
        ProductList.prototype.domAdd = function (opt) {
            //添加结构
            if (!opt) {
                console.log('no find param');
                return false;
            }
            var isRepeat = opt.isRepeat == true ? opt.isRepeat : false;
            var parent = opt.parent || this.parentDomTxt;
            var className = opt.className;
            this.configData[opt.isShowName] = true;
            var dom = this.htmlToDom({ html: this[opt.renderName]() });
            if (isRepeat) {
                parent.appendChild(dom);
            } else {
                if (!parent.querySelector(className)) {
                    parent.appendChild(dom);
                }
            }
        };
        ProductList.prototype.domRemove = function (opt) {
            //移除结构
            if (!opt) {
                console.log('no find param');
                return false;
            }
            var parent = opt.parent || this.parentDomTxt;
            var dom = parent.querySelector(opt.className);
            if (dom) {
                parent.removeChild(dom);
            }
        };
        ProductList.prototype.render = function (callback) {
            //渲染整个结构
            this.requireBase();
            this.renderParent();
            this.init();
            callback && callback(this.parentDom);
        };
        //以下是渲染功能
        ProductList.prototype.init = function () {
            //初始化
            this.events();
            this.seckillWillBeginTime();
            this.seckillWillEndTime();
        };
        ProductList.prototype.requireBase = function () {
            //需要用到的小功能函数
            this.base = require("../base/base.js"); //base小功能
            this.timeCountDown = this.base.timeCountDown; //倒计时
            this.htmlToDom = this.base.htmlToDom; //html转成DOM
            this.secondsToTime = this.base.secondsToTime; //秒转时间
        };
        ProductList.prototype.events = function () {
            //事件集合
            this.cartClick();
            this.seckillHintClick();
        };
        ProductList.prototype.cartClick = function () {
            //购物车的点击
            var self = this;
            self.parentDom.addEventListener('click', function (ev) {
                var target = ev.target;
                if (target.classList.contains('m-product-cart')) {
                    self.cartFn();
                }
            });
        };
        ProductList.prototype.cartFn = function () {
            //购物车的功能
            var self = this;
            console.log(123, self);
        };
        ProductList.prototype.seckillHintClick = function () {
            //秒杀提醒我的点击
            var self = this;
            self.parentDom.addEventListener('click', function (ev) {
                var target = ev.target;
                if (target.classList.contains('m-product-seckill-hint-btn')) {
                    self.seckillHintFn();
                }
            });
        };
        ProductList.prototype.seckillHintFn = function () {
            //秒杀提醒我的功能
            var self = this;
            self.renderSeckillHintBtnRemove();
            self.renderSeckillHintBtnSetOkAdd();
        };
        ProductList.prototype.seckillWillBeginTime = function () {
            //秒杀即将开始的倒计时功能
            if (this.configData.isShowSeckillWillBeginTime) {
                var self = this;
                var aSpan = [].slice.call(self.parentDom.querySelectorAll('.m-product-seckill-will-begin-time-num'));
                var ajaxData = self.ajaxData;
                var seconds = ajaxData.seckillWillBeginTime;
                var hintTime = ajaxData.seckillWillBeginBtnShowTime;
                self.configData.isShowSeckillWillBeginBtn = true;
                self.timeCountDown({
                    seconds: seconds,
                    runCallback: function runCallback(obj) {
                        aSpan[0].innerHTML = obj.d;
                        aSpan[1].innerHTML = obj.h;
                        aSpan[2].innerHTML = obj.m;
                        aSpan[3].innerHTML = obj.s;
                        if (hintTime >= obj.a) {
                            self.renderSeckillWillBeginBtnAdd();
                            self.renderSeckillHintBtnRemove();
                        }
                    },
                    overCallback: function overCallback() {
                        self.renderSeckillWillBeginTimeRemove();
                        self.renderSeckillWillEndTimeAdd();
                        self.renderSeckillWillBeginBtnRemove();
                        self.renderSeckillNowGetBtnAdd();
                        self.renderSeckillHintBtnSetOkRemove();
                        self.seckillWillEndTime();
                    }
                });
            }
        };
        ProductList.prototype.seckillWillEndTime = function () {
            //秒杀即将结束的倒计时功能
            if (this.configData.isShowSeckillWillEndTime) {
                var self = this;
                var aSpan = [].slice.call(self.parentDom.querySelectorAll('.m-product-seckill-will-end-time-num'));
                var seconds = self.ajaxData.seckillWillEndTime;
                self.timeCountDown({
                    seconds: seconds,
                    runCallback: function runCallback(obj) {
                        aSpan[0].innerHTML = obj.d;
                        aSpan[1].innerHTML = obj.h;
                        aSpan[2].innerHTML = obj.m;
                        aSpan[3].innerHTML = obj.s;
                    },
                    overCallback: function overCallback() {
                        self.renderSeckillMarkRemove();
                        self.renderSeckillWillEndTimeRemove();
                        self.renderSeckillLogoRemove();
                        self.renderSeckillNowGetBtnRemove();
                        self.renderCartAdd();
                    }
                });
            }
        };
        module.exports = ProductList;
    }, { "../base/base.js": 1 }] }, {}, [2]);