//验证
var validate = {
    //是不是空
    isSpace: function (json) {
        var opts = json || {};
        var success = opts.success || function () {
                console.log('no find success callback');
            };
        var fail = opts.fail || function () {
                console.log('no find fail callback');
            };
        var value = opts.value || " ";
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
        var opts = json || {};
        var success = opts.success || function () {
                console.log('no find success callback');
            };
        var fail = opts.fail || function () {
                console.log('no find fail callback');
            };
        var value = opts.value || " ";
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
        var opts = json || {};
        var success = opts.success || function () {
                console.log('no find success callback');
            };
        var fail = opts.fail || function () {
                console.log('no find fail callback');
            };
        var value = opts.value || " ";
        var valueTrim = value.trim();
        var reg = /^\d+$/;
        var b = false;
        if (reg.test(valueTrim)) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是保留了num位小数点
    isReservedDecimal: function (json) {
        var opts = json || {};
        var success = opts.success || function () {
                console.log('no find success callback');
            };
        var fail = opts.fail || function () {
                console.log('no find fail callback');
            };
        var num = opts.num || 2;
        var value = opts.value || " ";
        var valueTrim = value.trim();
        var reg = new RegExp("^\\d+\\.\\d{" + num + "}$");
        var b = false;
        if (reg.test(valueTrim)) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    }
};
module.exports = validate;