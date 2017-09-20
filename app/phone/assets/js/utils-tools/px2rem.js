// px转rem
module.exports = function (px, base = 320) {
    return `${px / base * 10}rem`;
};
