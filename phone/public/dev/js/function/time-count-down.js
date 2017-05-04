var extend = require('../function/extend');
var secondsToTime = require('../function/seconds-to-time');//时间转换

//倒计时
function timeCountDown(json) {
    var opt = extend({
        defaults: {
            seconds: 0,
            callback: {
                run: function () {
                },
                over: function () {
                }
            }
        },
        inherits: json
    });
    var seconds = opt.seconds;//秒数
    var run = opt.callback.run;//运行的回调
    var over = opt.callback.over;//结束的回调
    //时间大于等于0秒
    if (seconds >= 0) {
        run(secondsToTime({seconds: seconds}));//运行时的回调
        //倒计时走你
        var timer = setInterval(function () {
            seconds--;
            if (seconds >= 0) {
                run(secondsToTime({seconds: seconds}));//运行时的回调
            } else {
                over();//结束时的回调
                clearInterval(timer);
            }
        }, 1000);
    }
    //时间小于0秒
    if (seconds < 0){
        console.log('倒计时的秒数不能小于0');
    }
}
module.exports = timeCountDown;