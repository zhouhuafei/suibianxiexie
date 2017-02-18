/**
 * Created by zhouhuafei on 17/1/1.
 */
//倒计时
function secondsToTimeCountDown(json){
    var opt=json||{};
    var seconds=opt.seconds;
    //运行的回调
    var runCallback=opt.runCallback;
    //结束的回调
    var overCallback=opt.overCallback;
    //时间转换
    var timeTransform=function(opt){
        var seconds=opt.seconds;
        //天
        var d=Math.floor(seconds/3600/24);
        //时
        var h=Math.floor(seconds/3600%24);
        //分
        var m=Math.floor(seconds%3600/60);
        //秒
        var s=Math.floor(seconds%60);
        return {d:d,h:h,m:m,s:s,a:seconds};
    };
    if(seconds<=0){//时间小于等于0秒
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
}
module.exports=secondsToTimeCountDown;