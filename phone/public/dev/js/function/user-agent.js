//是不是PC
function isPc() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
//是不是微信
function isWeiXin() {
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/ig);
}
//是不是iphone
function isIphone() {
    return window.navigator.appVersion.match(/iphone/ig);
}
//是不是android
function isAndroid() {
    return window.navigator.appVersion.match(/android/ig);
}
module.exports.isPc = isPc;
module.exports.isWeiXin = isWeiXin;
module.exports.isIphone = isIphone;
module.exports.isAndroid = isAndroid;