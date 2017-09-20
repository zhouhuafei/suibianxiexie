// 日期格式化
module.exports = function (date, format = 'year-month-date hour:minute:second day') {
    const myDate = new Date();
    let time = 0;
    if ({}.toString.call(date).slice(8, -1).toLowerCase() === 'date') {
        time = date.getTime();
    } else {
        time = date;
    }
    myDate.setTime(time);
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
        format.replace(new RegExp(key), obj[key]);
    });
    return format;
};
