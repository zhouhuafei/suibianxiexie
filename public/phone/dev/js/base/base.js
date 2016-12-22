/**
 * Created by zhouhuafei on 16/12/4.
 */
var base={};
base.goTop=function(opt){//返回顶部
    var obj=opt.obj;
    if(!obj){
        console.log('parameter error');
        return false;
    }
    var doc=document;
    var scale=6;
    var scrollT=doc.documentElement.scrollTop||doc.body.scrollTop;
    var speed=0;
    var timer=null;
    var fn=function(){
        speed=Math.ceil(scrollT/scale);
        scrollT-=speed;
        window.scrollTo(0,scrollT);
        timer=requestAnimationFrame(fn);
        if(scrollT==0){
            cancelAnimationFrame(timer);
        }
    };
    obj.addEventListener('click',function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        scrollT=doc.documentElement.scrollTop||doc.body.scrollTop;
        requestAnimationFrame(fn);
    });
    doc.addEventListener('touchstart',function(){
        cancelAnimationFrame(timer);
    });
};
base.mask=function(){//普通黑色遮罩
    var doc=document;
    var body=doc.body;
    var mask=doc.createElement('div');
    mask.className='mask';
    mask.style.background='rgba(0,0,0,0.4)';
    mask.style.position='fixed';
    mask.style.left='0';
    mask.style.top='0';
    mask.style.width='100%';
    mask.style.height='100%';
    mask.style.zIndex='500';
    return {
        show:function(){
            body.appendChild(mask);
        },
        hide:function(){
            body.removeChild(mask);
        }
    };
};
base.yesNoScroll=function(){//浏览器禁止滚动
    var doc=document;
    return {
        //阻止冒泡
        stopPropagation:function(ev){
            ev.stopPropagation();
        },
        //阻止默认事件
        preventDefault:function(ev){
            ev.preventDefault();
        },
        //阻止冒泡,阻止默认事件
        returnFalse:function(ev){
            ev.preventDefault();
            ev.stopPropagation();
        },
        //禁止滚动
        noScroll:function(){
            doc.addEventListener('touchmove',this.preventDefault,false);
            doc.documentElement.style.overflow='hidden';
        },
        //解除禁止浏览器滚动
        yesScroll:function(){
            doc.removeEventListener('touchmove',this.preventDefault,false);
            doc.documentElement.style.overflow='auto';
        }
    }
};
base.fillZero=function(opt){//补零函数
    var num=opt.num;
    if(num<10){
        return '0'+num;
    }else{
        return ''+num;
    }
};
base.secondsToTime=function(opt){//秒转时间
    var seconds=opt.seconds;
    var d=Math.floor(seconds/3600/24);//天
    var h=Math.floor(seconds/3600%24);//小时
    var m=Math.floor(seconds%3600/60);//分钟
    var s=Math.floor(seconds%60);//秒数
    return {d:d,h:h,m:m,s:s,a:seconds};
};
base.timeCountDown=function(opt){//倒计时
    var seconds=opt.seconds;
    var runCallback=opt.runCallback;//运行的回调
    var overCallback=opt.overCallback;//结束的回调
    var timeTransform=base.secondsToTime;//时间转换
    if(seconds<=0){//时间小于0秒
        seconds=0;
        runCallback&&runCallback(timeTransform({seconds:seconds}));//运行时的回调
        overCallback&&overCallback();//结束时的回调
    }else{//时间大于0秒
        runCallback&&runCallback(timeTransform({seconds:seconds}));//运行时的回调
        //倒计时走你
        var timer=setInterval(function(){
            seconds--;
            runCallback&&runCallback(timeTransform({seconds:seconds}));//运行时的回调
            if(seconds<0){
                seconds=0;
                clearInterval(timer);
                runCallback&&runCallback(timeTransform({seconds:seconds}));//运行时的回调
                overCallback&&overCallback();//结束时的回调
            }
        },1000);
    }
};
base.htmlToDom=function(opt){//html转成DOM节点
    var html=opt.html;
    var div=document.createElement('div');
    div.innerHTML=html;
    return div.children[0];
};
base.scrollLoadIsBottom=true;//假设到达了底部
base.scrollLoad=function(callback){
    var self=this;
    var fn=callback||function(){console.log('no find callback')};
    var doc=document;
    var re=function(){
        var allH=doc.body.offsetHeight;
        var scrollTop=doc.documentElement.scrollTop||doc.body.scrollTop;
        var clientHieght=doc.documentElement.clientHeight;
        if(scrollTop+clientHieght>=allH-100&&self.scrollLoadIsBottom){
            self.scrollLoadIsBottom=false;
            fn();
            setTimeout(()=>{//假设1000毫秒之后数据加载完毕
                self.scrollLoadIsBottom=true;
            },1000)
        }
    };
    re();
};
module.exports=base;