/**
 * Created by zhouhuafei on 17/1/2.
 */
function ValidateInput(json){
    this.opt=json||{};
    this.input=this.opt.input;
    this.validateType=this.input.dataset.validate||[];
    this.inputClassError=this.opt.inputClassError||'m-validate-input-error';
    this.init();
}
ValidateInput.prototype.init=function(){
    this.require();
    this.render();
};
ValidateInput.prototype.require=function(){
    this.validate=require('../function/validate');
};
ValidateInput.prototype.render=function(){
    this.renderParent();
    this.renderHint();
};
ValidateInput.prototype.renderParent=function(){
    this.parentDom=this.input.parentNode;
    this.parentDom.classList.add('m-validate-input-parent');
};
ValidateInput.prototype.renderHint=function(){
    this.hintDom=document.createElement('em');
    this.hintDom.classList.add('m-validate-input-hint');
};
ValidateInput.prototype.renderHintAdd=function(json){
    var opt=json||{};
    this.hintDom.innerHTML=opt.txt||'本项必填';
    this.parentDom.appendChild(this.hintDom);
    this.input.classList.add(this.inputClassError);
};
ValidateInput.prototype.renderHintRemove=function(){
    this.parentDom.removeChild(this.hintDom);
    this.input.classList.remove(this.inputClassError);
};
ValidateInput.prototype.validateSave=function(){
    var self=this;
    var type=self.validateType.split(' ');
    var value=this.input.value;
    type.forEach(function(v){
        if(v=='no-space'){//非空
            self.validate.isSpace({
                value:value,
                success:function(){//空
                    self.renderHintAdd();
                },
                fail:function(){//非空
                    self.renderHintRemove();
                }
            });
        }
        if(v=='no-zero'){//非零
            self.validate.isZero({success:function(){//零
                
            },fail:function(){//非零

            }});
        }
        if(v=='yes-integer'){//整数
            self.validate.isInteger({success:function(){//整数

            },fail:function(){//非整数

            }});
        }
    });
};
ValidateInput.prototype.validateEventBlur=function(){
    var self=this;
    if(self.input){
        self.input.addEventListener('blur',function(){
            self.validateSave();
        });
    }
};

module.exports=ValidateInput;