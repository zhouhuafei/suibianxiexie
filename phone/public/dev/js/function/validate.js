/**
 * Created by zhouhuafei on 16/12/4.
 */
//验证
var validate = {
    //是不是空
    isSpace: function (json) {
        var opt = json || {};
        var success = opt.success || function () {
                console.log('no find success callback');
            };
        var fail = opt.fail || function () {
                console.log('no find fail callback');
            };
        var value = opt.value || " ";
        var valueTrim = value.trim();
        var b = false;
        if (valueTrim == '') {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是0
    isZero: function (json) {
        var opt = json || {};
        var success = opt.success || function () {
                console.log('no find success callback');
            };
        var fail = opt.fail || function () {
                console.log('no find fail callback');
            };
        var value = opt.value || " ";
        var valueTrim = value.trim();
        var b = false;
        if (valueTrim == 0) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是整数(包含0)
    isInteger: function (json) {
        var opt = json || {};
        var success = opt.success || function () {
                console.log('no find success callback');
            };
        var fail = opt.fail || function () {
                console.log('no find fail callback');
            };
        var value = opt.value || " ";
        var valueTrim = value.trim();
        var re = /^\d+$/;
        var b = false;
        if (re.test(valueTrim)) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是保留了num位小数点
    isReservedDecimal: function (json) {
        var opt = json || {};
        var success = opt.success || function () {
                console.log('no find success callback');
            };
        var fail = opt.fail || function () {
                console.log('no find fail callback');
            };
        var num = opt.num || 2;
        var value = opt.value || " ";
        var valueTrim = value.trim();
        var re = new RegExp("^\\d+\\.\\d{" + num + "}$");
        var b = false;
        if (re.test(valueTrim)) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    }
};
module.exports = validate;