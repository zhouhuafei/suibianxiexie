/*

.ui-radio-switch{
  cursor: pointer;
  display: -webkit-box;
  height: 20px;
  line-height: 20px;
  .ui-radio-switch-box{
    position: relative;
    width: 40px;
    height: 100%;
    text-align: center;
    line-height: 20px;
    border-radius: 100px;
    background: #bbbbbb;
  }
  .ui-radio-switch-run{
    width: 18px;
    height: 18px;
    background: #ffffff;
    border-radius: 100px;
    position: absolute;
    left: 1px;
    top: 1px;
    transition: 0.4s;
  }
  .ui-radio-switch-txt{
    margin-left: 4px;
  }
  &.ui-radio-switch-active{
    .ui-radio-switch-box{
      background: $color-success;
    }
    .ui-radio-switch-run{
      position: absolute;
      left: calc(100% - 19px);
    }
    .ui-radio-switch-txt{
      color: #1fce69;
    }
  }
}


function Fn(json){
        this.opts=$.extend(true,{
            checkTxt:{
                on:'已开启',
                off:'已关闭',
            },
            status:'off',//'off'关  'on'开
            isHand:true,//默认手动触发划过去
            clickCallback:function(){
                console.log('点击的回调');
            }
        },json);
        this.onClass='ui-radio-switch-active';//打开时对应状态的class
        this.init();
    }
    Fn.prototype.init=function(){
        this.render();
        this.events();
    };
    Fn.prototype.render=function(){
        var className=``;
        var status=this.opts.status;
        if(status=='on'){
            className=this.onClass;
        }
        this.parent=$(`<div class="ui-radio-switch ${className}"></div>`);
        var html=`            
            <div class="ui-radio-switch-box">
                <div class="ui-radio-switch-run"></div>
            </div>
            <div class="ui-radio-switch-txt">${this.opts.checkTxt[status]}</div>            
        `;
        this.parent.html(html);
    };
    Fn.prototype.on=function(){//开
        this.parent.addClass(this.onClass);
        this.opts.status='on';
        this.changeTxt();
    };
    Fn.prototype.off=function(){//关
        this.parent.removeClass(this.onClass);
        this.opts.status='off';
        this.changeTxt();
    };
    Fn.prototype.changeTxt=function(){
        this.parent.find('.ui-radio-switch-txt').html(this.opts.checkTxt[this.opts.status]);
    };
    Fn.prototype.clickFn=function(){
        var self=this;
        if(!self.opts.isHand){
            if(self.opts.status=='off'){
                self.on();
            }else{
                self.off();
            }
        }
        self.opts.clickCallback({
            parent:this.parent,
            status:self.opts.status,
        });
    };
    Fn.prototype.events=function(){
        var self=this;
        this.parent.on('click',function(){
            self.clickFn();
        })
    };
    Fn.prototype.remove=function(){
        this.parent.remove();
    };
    module.exports = Fn;
*/



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
