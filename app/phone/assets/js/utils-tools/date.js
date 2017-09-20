/**
 * 日期格式化
 * @param {Number} date - 毫秒数
 * @param {String} result = 'year/month/date hour:minute:second day' - 格式
 * */
function format(date = 0, result = 'year/month/date hour:minute:second day') {
    const myDate = new Date();
    if ({}.toString.call(date).slice(8, -1).toLowerCase() === 'date') {
        date = date.getTime();
    }
    myDate.setTime(date);
    const obj = {
        year: myDate.getFullYear(), // 年
        month: myDate.getMonth() + 1, // 月
        date: myDate.getDate(), // 日
        hour: myDate.getHours(), // 时
        minute: myDate.getMinutes(), // 分
        second: myDate.getSeconds(), // 秒
        millisecond: myDate.getMilliseconds(), // 毫秒
        day: `星期${['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()]}`, // 星期
    };
    Object.keys(obj).forEach(function (key) {
        result = result.replace(new RegExp(key), obj[key]);
    });
    obj.result = result;
    return obj;
}

// 秒转时间
function secondsToTime(seconds = 0) {
    // 天
    const nowDay = Math.floor(seconds / 3600 / 24);
    // 时
    const nowHours = Math.floor(seconds / 3600 % 24);
    // 分
    const nowMinutes = Math.floor(seconds % 3600 / 60);
    // 秒
    const nowSeconds = Math.floor(seconds % 60);
    return {nowDay: nowDay, nowHours: nowHours, nowMinutes: nowMinutes, nowSeconds: nowSeconds};
}

// 倒计时
function timeCountDown() {
}

module.exports.format = format;
module.exports.secondsToTime = secondsToTime;
module.exports.timeCountDown = timeCountDown;
