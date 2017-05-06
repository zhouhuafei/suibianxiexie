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
        function dataSrcHandle(json) {
            var returnObject = {};
            if (!json.image) {
                return returnObject;
            }
            var webp = '';
            if (base.utils.isAndroid()) {
                webp = "format/webp";
            }
            var replace = "?imageMogr2/thumbnail/" + json.image.offsetWidth + "x" + json.image.offsetHeight + "/strip/quality/80/" + webp;
            var opts = $.extend(true, {
                image: null, //默认的图片dom(默认无)
                rule: /\?.*/g, //默认规则(?号以及？号之后的一切)
                replace: replace, //默认替换为
                isPinjie: true, //如果没有匹配到规则rule,图片data-src末尾是否拼接上replace(默认拼接)
                domainRule: /\./g, //域名规则(默认没有规则)
                isDomainRule: false //是否开启域名规则限制(默认不开启)
            }, json);
            var image = opts.image;
            var rule = opts.rule;
            replace = opts.replace;
            var search = image.dataset.src.match(rule);
            if (search) {
                //image.dataset.src=image.dataset.src.replace(rule,replace);
                returnObject.src = image.dataset.src.replace(rule, replace);
            } else {
                if (opts.isPinjie) {
                    //image.dataset.src=image.dataset.src+replace;
                    returnObject.src = image.dataset.src + replace;
                }
            }
        }

        function uploadImg() {
            var oF = document.querySelector('#fileField');
            var num = 0;
            var limit = 5;
            var box = $('.file-box');
            var input = box.find('.file-label.file-input');
            var file = []; //图片信息
            //添加
            var fn = new Fn({
                input: oF,
                limitNum: 5,
                base64Callback: function base64Callback(opts) {
                    //console.log(opts);
                    //console.log(opts.base64);
                    //console.log(opts.index);
                    if (num < limit) {
                        var img = $('<div data-index="' + num + '" class="file-label file-img"><div class="label"><img src="' + opts.base64 + '" alt=""></div></div>');
                        img.insertBefore(input);
                        file.push(fn.imgData[opts.index]);
                        num++;
                        //上传图片(这一部分可以再封装一次)
                        var oFormData = new FormData();
                        oFormData.append('files', fn.imgData[opts.index]);
                        var ajax = new XMLHttpRequest();
                        ajax.open('post', 'index.php?ctl=module&act=newPic', true);
                        ajax.send(oFormData);
                        ajax.onload = function () {
                            var d = JSON.parse(ajax.responseText);
                            if (d.res == 'succ') {
                                popup.alert({ contentInfo: '上传成功' });
                            } else {
                                popup.alert({ contentInfo: '上传失败' });
                            }
                        };
                    }
                    if (num >= limit) {
                        input.addClass('file-input-hide');
                    }
                }
            });
            //删除
            $('.file-box').on('click', '.file-img', function () {
                var $this = $(this);
                var index = $this.data('index');
                popup.confirm({
                    contentInfo: '确定删除？', callback: function callback() {
                        $this.remove();
                        input.removeClass('file-input-hide');
                        file.splice(index, 1);
                        num--;
                        //popup.alert({contentInfo:'删除成功'});
                        //console.log(file);
                    }
                });
            });
        }

        function touchLeft(object, iWidth) {
            if (!object) {
                return false;
            }
            var startPosition, endPosition, iTarget, iLeft;

            object.on('touchstart', function (e) {
                var touch = e.touches[0];
                startPosition = {
                    x: touch.pageX,
                    y: touch.pageY
                };
                iLeft = object.position().left;
            });

            object.on('touchmove', function (e) {
                var touch = e.touches[0];
                endPosition = {
                    x: touch.pageX,
                    y: touch.pageY
                };
                iTarget = {
                    x: endPosition.x - startPosition.x + iLeft,
                    y: endPosition.y - startPosition.y
                };
                object.css({ 'left': iTarget.x > 0 ? 0 : iTarget.x });
            });

            object.on('touchend', function () {
                object.css({ 'left': Math.abs(object.position().left) > iWidth / 2 ? -iWidth : 0 });
            });
        }
    }, {}] }, {}, [1]);