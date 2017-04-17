//是不是android
function isAndroid() {
    return window.navigator.appVersion.match(/android/gi);
}
module.exports = isAndroid;