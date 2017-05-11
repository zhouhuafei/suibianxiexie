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
    }, {}] }, {}, [1]);