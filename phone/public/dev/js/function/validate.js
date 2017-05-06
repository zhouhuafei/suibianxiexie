//验证
var validate = {
    //是不是空
    isSpace: function (json) {
        var options = json || {};
        var success = options.success || function () {
                console.log('no find success callback');
            };
        var fail = options.fail || function () {
                console.log('no find fail callback');
            };
        var value = options.value || " ";
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
        var options = json || {};
        var success = options.success || function () {
                console.log('no find success callback');
            };
        var fail = options.fail || function () {
                console.log('no find fail callback');
            };
        var value = options.value || " ";
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
        var options = json || {};
        var success = options.success || function () {
                console.log('no find success callback');
            };
        var fail = options.fail || function () {
                console.log('no find fail callback');
            };
        var value = options.value || " ";
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
    //是不是保留了number位小数点
    isReservedDecimal: function (json) {
        var options = json || {};
        var success = options.success || function () {
                console.log('no find success callback');
            };
        var fail = options.fail || function () {
                console.log('no find fail callback');
            };
        var number = options.number || 2;
        var value = options.value || " ";
        var valueTrim = value.trim();
        var reg = new RegExp("^\\d+\\.\\d{" + number + "}$");
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