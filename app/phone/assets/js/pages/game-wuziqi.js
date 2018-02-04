require('../../scss/pages/game-wuziqi.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const applications = this.applications;
        const canvasWrap = document.querySelector('.canvas-wrap');
        const w = canvasWrap.offsetWidth;
        const h = document.documentElement.clientHeight;
        const padding = 20.5;
        const colNum = 15 - 4; // 正规应该是15列
        let gobangColor = 'black'; // 五子棋的颜色
        const colWidth = (w - padding * 2) / (colNum - 1);
        const initX = padding;
        const initY = (h - w) / 2 + padding;
        const map = [];
        for (let i = 0; i < Math.pow(colNum, 2); i++) {
            const x = i % colNum;
            const y = Math.floor(i / colNum);
            map.push({
                x: x,
                y: y,
                left: x * colWidth + initX,
                top: y * colWidth + initY,
                radius: colWidth / 2.4,
                type: 'transparent',
            });
        }
        const canvas = applications.createElement({
            elementName: 'canvas',
            attribute: {
                width: w,
                height: h,
            },
        });
        const ctx = canvas.getContext('2d');
        const drawLine = function (startX, startY, endX, endY) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = '#000';
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        };
        const drawCircle = function (x, y, r, fillStyle) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = fillStyle;
            ctx.arc(x, y, r, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        };
        map.forEach(function (v, i) {
            if (v.x === 0) {
                const target = map[i + colNum - 1];
                drawLine(v.left, v.top, target.left, target.top);
            }
            if (v.y === 0) {
                const target = map[(colNum * colNum - 1) - (colNum - 1) + v.x];
                drawLine(v.left, v.top, target.left, target.top);
            }
            if (i === Math.floor(map.length / 2)) {
                drawCircle(v.left, v.top, v.radius / 4, 'black');
            }
        });
        canvas.addEventListener('click', function (ev) {
            const clientX = ev.clientX - applications.offset(canvasWrap).left;
            const clientY = ev.clientY;
            map.forEach(function (v) {
                if (clientX >= v.left - v.radius && clientX <= v.left + v.radius && clientY >= v.top - v.radius && clientY <= v.top + v.radius) {
                    // 判断点击范围是否是正确的区域
                    if (v.type === 'transparent') {
                        drawCircle(v.left, v.top, v.radius, gobangColor);
                        v.type = gobangColor;
                        gobangColor = gobangColor === 'black' ? 'white' : 'black';
                    }
                }
            });
            // 判断输赢
            map.forEach(function (v) {

            });
        });
        canvasWrap.appendChild(canvas);
    }
}

new Sub();
