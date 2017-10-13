window.addEventListener('load', function () {
    setTimeout(function () {
        // 京选加cookie进行统计(凡是需要登录的地方都要加cookie统计)
        (function () {
            /**
             * @param {String} eventType 事件的类型
             * @param {String} el - 选择器只支持传入class   例:.page-collect
             * @param {Function} cb - 回调
             */
            function eventDelegate(eventType, el, cb) {
                eventType = eventType || 'click';
                var domEl = document.querySelector(el);
                if (domEl) {
                    document.addEventListener(eventType, function (ev) {
                        var ev = ev || window.event;
                        var target = ev.target || ev.srcElement;
                        var isContains = false;
                        while (target !== document && isContains === false) {
                            isContains = target.classList.contains(el.substring(1));
                            target = target.parentNode;
                        }
                        if (isContains) {
                            if (cb) {
                                cb(ev);
                            }
                        }
                    });
                }
            }

            var site = 'http://192.168.51.93:5555';
            var expires = 7;
            var domain = '192.168.51.93';
            var path = '/';
            var iframeSrc = site + '/html/cookie.html';
            var iframe = document.createElement('iframe');
            var cookieName = 'click';
            var enentCollection = {
                pc: [
                    // 详情页 - 收藏
                    {
                        el: '.js-page-shoucang',
                        val: 'shoucang',
                    },
                    // 登录
                    {
                        el: '.js-page-login',
                        val: 'denglu',
                    },
                    // 我的订单(我的)
                    {
                        el: '.js-page-wodedingdan',
                        val: 'wodedingdan',
                    },
                    // 立即购买
                    {
                        el: '.js-page-lijigoumai',
                        val: 'lijigoumai',
                    },
                ],
                phone: [
                    // 底部快捷入口 - 会员中心
                    {
                        el: '.js-huiyuanzhongxin',
                        val: 'huiyuanzhongxin',
                    },
                    // 底部快捷入口 - 店铺认证
                    {
                        el: '.js-dianpurenzheng',
                        val: 'dianpurenzheng',
                    },
                    // 底部快捷入口 - 线下门店
                    {
                        el: '.js-xianxiamendian',
                        val: 'xianxiamendian',
                    },
                    // 底部快捷入口 - 关注我们
                    {
                        el: 'js-guanzhuwomen',
                        val: 'guanzhuwomen',
                    },
                    // 底部导航 - 我要开店
                    {
                        el: '.m-footer-body-woyaokaidian',
                        val: 'woyaokaidian',
                    },
                    // 底部导航 - 我的
                    {
                        el: '.m-footer-body-wode',
                        val: 'wode',
                    },
                    // 详情页 - 收藏
                    {
                        el: '.js-collect',
                        val: 'shoucang',
                    },
                    // 立即购买
                    {
                        el: '.buy-now-js',
                        val: 'lijigoumai',
                    },
                ],
            };
            iframe.style.display = 'none';
            iframe.addEventListener('load', function () {
                Object.keys(enentCollection).forEach(function (attr) {
                    enentCollection[attr].forEach(function (item) {
                        eventDelegate(item.eventType || 'click', item.el, function () {
                            iframe.contentWindow.postMessage({
                                name: cookieName,
                                value: attr + '-' + item.val,
                                expires: expires,
                                domain: domain,
                                path: path,
                            }, site);
                        });
                    })
                });
            });
            iframe.src = iframeSrc;
            document.body.appendChild(iframe);
        }());
        // 京选加当前页面统计
        (function () {
            var params = {
                domain: document.domain || '', // 获取域名
                url: document.URL || '', // 获取URL
                title: document.title || '', // 页面标题
                referrer: document.referrer || '', // referrer
            };
            var str = '';
            for (var attr in  params) {
                if (str !== '') {
                    str += '&';
                }
                str += attr + '=' + params[attr];
            }
            var img = new Image(1, 1);
            img.src = 'http://analytics.codinglabs.org/1.gif?' + str;
        })();
    }, 0);
});
