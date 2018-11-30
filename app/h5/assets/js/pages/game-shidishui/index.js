require('../../../scss/pages/game-shidishui.scss');
const Super = require('../../pages-super/super');
const offset = require('zhf.offset');
const createElement = require('zhf.create-element');
const randomNum = require('zhf.random-num');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        // 横屏的时候 90 -190 , 横屏的时候 0 180
        if (window.orientation === 90 || window.orientation === -90) {
            alert('请竖屏之后，刷新页面进行游戏');
        }
        const canvasWrap = document.querySelector('.canvas-wrap');
        const w = canvasWrap.offsetWidth;
        const h = document.documentElement.clientHeight;
        const padding = 20.5;
        const colNum = 6; // 6*6
        const colWidth = (w - padding * 2) / (colNum - 1);
        const initX = padding;
        const initY = (h - w) / 2 + padding;
        const map = [];
        for (let i = 0; i < Math.pow(colNum, 2); i++) {
            const x = i % colNum;
            const y = Math.floor(i / colNum);
            const left = x * colWidth + initX;
            const top = y * colWidth + initY;
            map.push({
                x: x,
                y: y,
                left: left,
                top: top,
            });
        }
        const gameMap = [];
        const gameColNum = colNum - 1;
        for (let i = 0; i < Math.pow(gameColNum, 2); i++) {
            const x = i % gameColNum;
            const y = Math.floor(i / gameColNum);
            const left = x * colWidth + initX;
            const top = y * colWidth + initY;
            gameMap.push({
                x: x,
                y: y,
                left: left,
                top: top,
                type: 1,
            });
        }
        const canvas = createElement({
            elementName: 'canvas',
            attribute: {
                width: w,
                height: h,
            },
        });
        const ctx = canvas.getContext('2d');
        const drawBg = function () {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#b8e2f6';
            ctx.rect(0, 0, w, h);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        };
        drawBg();
        const drawLine = function (startX, startY, endX, endY) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = '#66ccff';
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        };
        const drawDrip = function (x, y, type = 0) {
            const img = document.createElement('img');
            img.addEventListener('load', function () {
                ctx.save();
                ctx.beginPath();
                ctx.drawImage(img, x, y, colWidth, colWidth);
                ctx.closePath();
                ctx.restore();
            });
            img.src = require(`../../../images/game-shidishui/${type}.png`);
        };
        const drawCoordinate = function (v) {
            ctx.save();
            ctx.beginPath();
            ctx.font = '10px 微软雅黑';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${v.x},${v.y}`, v.left, v.top);
            ctx.closePath();
            ctx.restore();
        };
        map.forEach(function (v, i) {
            if (v.x === 0) {
                const target = map[i + colNum - 1];
                drawLine(parseInt(v.left) + 0.5, parseInt(v.top) + 0.5, parseInt(target.left) + 0.5, parseInt(target.top) + 0.5);
            }
            if (v.y === 0) {
                const target = map[(colNum * colNum - 1) - (colNum - 1) + v.x];
                drawLine(parseInt(v.left) + 0.5, parseInt(v.top) + 0.5, parseInt(target.left) + 0.5, parseInt(target.top) + 0.5);
            }
            drawCoordinate(v); // 画坐标
        });
        gameMap.forEach(function (v) {
            drawDrip(v.left, v.top, v.type);
        });
        canvasWrap.appendChild(canvas);
    }
}

new Sub();
