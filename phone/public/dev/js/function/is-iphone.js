//是不是iphone
function isIphone() {
    return window.navigator.appVersion.match(/iphone/gi);
}
module.exports = isIphone;