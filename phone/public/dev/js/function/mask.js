/**
 * Created by zhouhuafei on 17/1/1.
 */
//遮罩
function mask(json){
    var opt=json||{};
    var status=opt.status;
    var bg='rgba(0,0,0,0.4)';
    var zIndex=500;
    var className='g-mask';
    if(status=='transparent'){//如果是透明遮罩
        bg='rgba(0,0,0,0)';
        zIndex=1000;
        className='g-mask-transparent';
    }
    var doc=document;
    var body=doc.body;
    var mask=doc.createElement('div');
    mask.className=className;
    mask.setAttribute('style',`background-color:${bg};position:fixed;left:0;top:0;width:100%;height:100%;z-index:${zIndex};`);
    return {
        show:function(){
            body.appendChild(mask);
        },
        hide:function(){
            body.removeChild(mask);
        }
    };
}
module.exports=mask;