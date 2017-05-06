//秒转时间
function secondsToTime(json) {
    var options = json || {};
    var seconds = options.seconds;
    //天
    var d = Math.floor(seconds / 3600 / 24);
    //时
    var h = Math.floor(seconds / 3600 % 24);
    //分
    var m = Math.floor(seconds % 3600 / 60);
    //秒
    var s = Math.floor(seconds % 60);
    return {d: d, h: h, m: m, s: s, a: seconds};
}
module.exports = secondsToTime;