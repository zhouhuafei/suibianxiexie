//秒转时间
function secondsToTime(json) {
    var opts = json || {};
    var seconds = opts.seconds;
    //天
    var day = Math.floor(seconds / 3600 / 24);
    //时
    var hour = Math.floor(seconds / 3600 % 24);
    //分
    var minute = Math.floor(seconds % 3600 / 60);
    //秒
    var second = Math.floor(seconds % 60);
    return {day: day, hour: hour, minute: minute, second: second, seconds: seconds};
}
module.exports = secondsToTime;