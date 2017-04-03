var secondsToTime = require('../function/seconds-to-time.js');

//倒计时
function timeCountDown(json) {
    var opt = json || {};
    var seconds = opt.seconds;
    //运行的回调
    var runCallback = opt.runCallback;
    //结束的回调
    var overCallback = opt.overCallback;
    //时间转换
    if (seconds <= 0) {//时间小于等于0秒
        seconds = 0;
        runCallback && runCallback(secondsToTime({seconds: seconds}));//运行时的回调
        overCallback && overCallback();//结束时的回调
    } else {//时间大于0秒
        runCallback && runCallback(secondsToTime({seconds: seconds}));//运行时的回调
        //倒计时走你
        var timer = setInterval(function () {
            seconds--;
            runCallback && runCallback(secondsToTime({seconds: seconds}));//运行时的回调
            if (seconds < 0) {
                seconds = 0;
                clearInterval(timer);
                runCallback && runCallback(secondsToTime({seconds: seconds}));//运行时的回调
                overCallback && overCallback();//结束时的回调
            }
        }, 1000);
    }
}
module.exports = timeCountDown;