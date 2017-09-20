// 验证
module.exports = {
    // 是不是空字符串
    isEmpty: function (value) {
        return value.toString().trim() === '';
    },
    // 是不是数字0
    isZero: function (value) {
        return Number(value) === 0;
    },
    // 是不是正整数
    isPositiveInteger: function (value) {
        const reg = /^[1-9]\d*$/;
        return reg.test(value);
    },
    // 是不是保留了place位小数(默认两位)
    isKeepDecimal: function (num, place = 2) {
        const reg = new RegExp(`^\\d+\\.\\d{${place}}$`);
        return reg.test(num);
    },
    // 是不是手机号
    isPhoneNum: function (value) {
        const reg = /^1[3458][0-9]\d{4,8}$/;
        return reg.test(value);
    },
    // 是不是邮箱
    isEmail: function (value) {
        const reg = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        return reg.test(value);
    },
};
