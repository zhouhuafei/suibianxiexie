dataSrcHandle:function(json){
    var returnObj={};
    if(!json.image){
        return false;
    }
    var webp='';
    if(base.utils.isAndroid()){webp=`format/webp`;}
    var replace=`?imageMogr2/thumbnail/${json.image.offsetWidth}x${json.image.offsetHeight}/strip/quality/80/`+webp;
    var opt=$.extend(true,{
        image:null,//默认的图片dom(默认无)
        rule:/\?.*/g,//默认规则(?号以及？号之后的一切)
        replace:replace,//默认替换为
        isPinjie:true,//如果没有匹配到规则rule,图片data-src末尾是否拼接上replace(默认拼接)
        domainRule:/\./g//域名规则(默认没有规则)
        isDomainRule:false//是否开启域名规则限制(默认不开启)
    },json);
    var image=opt.image;
    var rule=opt.rule;
    replace=opt.replace;
    var search=image.dataset.src.match(rule);
    if(search){
        //image.dataset.src=image.dataset.src.replace(rule,replace);
returnObj.src=image.dataset.src.replace(rule,replace);
    }else{
        if(opt.isPinjie){
            //image.dataset.src=image.dataset.src+replace;
    returnObj.src=image.dataset.src+replace;
        }
    }
}


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
