/**
 * Created by zhouhuafei on 16/12/4.
 */
var base={}
base.fillZero=function(num){
    if(num<10){
        return '0'+num;
    }else{
        return ''+num;
    }
};
base.timeCountDown=function(opt){
  var seconds=opt.seconds;
  var runCallback=opt.runCallback;
  var overCallback=opt.overCallback;
  //时间转换
  var timeTransform=function(seconds){
      return {
          d:Math.floor(seconds/3600/24),//天
          h:Math.floor(seconds/3600%24),//小时
          m:Math.floor(seconds%3600/60),//分钟
          s:Math.floor(seconds%60),//秒数
            a:seconds//剩余秒数
      }
  };
  if(seconds<=0){//时间小于0秒
      seconds=0;
      runCallback&&runCallback(timeTransform(seconds));//运行时的回调
      overCallback&&overCallback();//结束时的回调
  }else{//时间大于0秒
      runCallback&&runCallback(timeTransform(seconds));//运行时的回调
      //倒计时走你
      var timer=setInterval(function(){
          seconds--;
          runCallback&&runCallback(timeTransform(seconds));//运行时的回调
          if(seconds<=0){
              clearInterval(timer);
              overCallback&&overCallback();//结束时的回调
          }
      },1000);
  }
};
module.exports=base;
