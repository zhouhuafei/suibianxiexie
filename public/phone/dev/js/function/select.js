/**
 * Created by zhouhuafei on 2017/1/6.
 */
define(function (require, exports, module) {
    function Select(json){
        this.opt=json||{};
        this.selectAllButton=this.opt.selectAllButton;
        this.radioButton=this.opt.radioButton;
        if(this.selectAllButton&&this.radioButton){
            this.init();
        }else{
            console.log('did not find the correct parameters');
        }
    }
    Select.prototype.init=function(){
        this.events();
    };
    Select.prototype.events=function(){
        this.selectAllClick();
        this.selectOneToAll();
    };
    Select.prototype.selectAllYes=function(){//全选
        var dom1=document.querySelector(this.selectAllButton);
        var dom2=[].slice.call(document.querySelectorAll(this.radioButton));
        if(dom1&&dom2.length>=1){
            dom1.checked=true;
            dom2.forEach(function(v){
                v.checked=true;
            })
        }
    };
    Select.prototype.selectAllNo=function(){//反选
        var dom1=document.querySelector(this.selectAllButton);
        var dom2=[].slice.call(document.querySelectorAll(this.radioButton));
        if(dom1&&dom2.length>=1){
            dom1.checked=false;
            dom2.forEach(function(v){
                v.checked=false;
            })
        }
    };
    Select.prototype.selectAllClick=function(){//全选反选事件
        var dom1=document.querySelector(this.selectAllButton);
        var dom2=[].slice.call(document.querySelectorAll(this.radioButton));
        var self=this;
        if(dom1&&dom2.length>=1){
            dom1.addEventListener('click',function(){
                if(this.checked==true){
                    self.selectAllYes();
                }else{
                    self.selectAllNo();
                }
            })
        }
    };
    Select.prototype.selectOneToAll=function(){//单选导致全选
        var dom1=document.querySelector(this.selectAllButton);
        var dom2=[].slice.call(document.querySelectorAll(this.radioButton));
        var self=this;
        if(dom1&&dom2.length>=1){
            dom2.forEach(function(v){
                v.addEventListener('click',function(){
                    var isAll=true;//假设全部都被选中了
                    var dom3=[].slice.call(document.querySelectorAll(self.radioButton));
                    dom3.forEach(function(v2){
                        if(v2.checked!=true){
                            isAll=false;
                            return false;
                        }
                    });
                    dom1.checked=false;
                    isAll&&(dom1.checked=true);
                })
            })
        }
    };
    module.exports=Select;
});