const Canvas = require('canvas');
const fnRandomNum = require('zhf.random-num');

module.exports = function () {
    const randomNum = fnRandomNum(100000, 999999);
    const width = 640;
    const height = 160;
    const centerX = width / 2;
    const centerY = height / 2;
    const fontSize = height * 0.8;
    const lineH = height / 10;
    const skew = (height - lineH * 2) / 10;
    const canvas = new Canvas(width, height);
    const ctx = canvas.getContext('2d');
    // 文字
    ctx.save();
    ctx.beginPath();
    ctx.font = `${fontSize}px Impact`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = `rgba(${fnRandomNum(0, 255)}, ${fnRandomNum(0, 255)}, ${fnRandomNum(0, 255)}, ${fnRandomNum(4, 10) / 10})`;
    ctx.fillText(randomNum, centerX, centerY);
    ctx.closePath();
    ctx.restore();
    // 划线
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(${fnRandomNum(0, 255)}, ${fnRandomNum(0, 255)}, ${fnRandomNum(0, 255)}, ${fnRandomNum(4, 10) / 10})`;
    ctx.fillRect(0, centerY - lineH - skew, width, lineH);
    ctx.fillRect(0, centerY + skew, width, lineH);
    ctx.closePath();
    ctx.restore();

    return {
        text: `${randomNum}`,
        base64: canvas.toDataURL(),
        width: width,
        height: height,
        widthHeightScale: width / height,
    };
};
