function uploadImg() {
    var oF = document.querySelector('#fileField');
    var num = 0;
    var limit = 5;
    var box = $('.file-box');
    var input = box.find('.file-label.file-input');
    var file = [];//图片信息
    //添加
    var fn = new Fn({
        input: oF,
        limitNum: 5,
        base64Callback: function (opt) {
            //console.log(opt);
            //console.log(opt.base64);
            //console.log(opt.index);
            if (num < limit) {
                var img = $('<div data-index="' + num + '" class="file-label file-img"><div class="label"><img src="' + opt.base64 + '" alt=""></div></div>');
                img.insertBefore(input);
                file.push(fn.imgData[opt.index]);
                num++;
                //上传图片(这一部分可以再封装一次)
                var oFormData = new FormData();
                oFormData.append('files', fn.imgData[opt.index]);
                var ajax = new XMLHttpRequest();
                ajax.open('post', 'index.php?ctl=module&act=newPic', true);
                ajax.send(oFormData);
                ajax.onload = function () {
                    var d = JSON.parse(ajax.responseText);
                    if (d.res == 'succ') {
                        popup.alert({contentInfo: '上传成功'});
                    } else {
                        popup.alert({contentInfo: '上传失败'});
                    }
                }
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
            contentInfo: '确定删除？', callback: function () {
                $this.remove();
                input.removeClass('file-input-hide');
                file.splice(index, 1);
                num--;
                //popup.alert({contentInfo:'删除成功'});
                //console.log(file);
            }
        })
    });
}

function touchLeft(obj, iWidth) {
    if (!obj) {
        return false;
    }
    var startPosition, endPosition, iTarget, iLeft;

    obj.on('touchstart', function (e) {
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        iLeft = obj.position().left;
    });

    obj.on('touchmove', function (e) {
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        iTarget = {
            x: endPosition.x - startPosition.x + iLeft,
            y: endPosition.y - startPosition.y
        };
        obj.css({'left': (iTarget.x > 0 ? 0 : iTarget.x)});
    });

    obj.on('touchend', function () {
        obj.css({'left': (Math.abs(obj.position().left) > iWidth / 2 ? -iWidth : 0)});
    });
}