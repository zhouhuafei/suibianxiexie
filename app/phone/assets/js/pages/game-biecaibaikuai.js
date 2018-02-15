require('../../scss/pages/game-biecaibaikuai.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        // 横屏的时候 90 -190 , 横屏的时候 0 180
        if (window.orientation === 90 || window.orientation === -90) {
            alert('请竖屏之后，刷新页面进行游戏');
        }
        const tools = this.tools;
        const applications = this.applications;
        const canvasWrap = document.querySelector('.canvas-wrap');
        const w = canvasWrap.offsetWidth;
        const h = document.documentElement.clientHeight;
        const canvas = applications.createElement({
            elementName: 'canvas',
            attribute: {
                width: w,
                height: h,
            },
        });
        canvas.addEventListener('click', function () {

        });
        canvasWrap.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const col = 4;
        const row = 4;
        const gap = 10;
        const item = {
            w: (w - (col - 1) * gap) / col,
            h: (h - (row - 1) * gap) / row,
            bg: '#000',
        };
        const map = [];

        function randomMap() {
            const result = [];
            const random = tools.getRandom(0, col - 1);
            result.push([random * item.w + random * gap, -item.h, item.w, item.h]);
            return result;
        }

        setInterval(function () {
            if (map.length === 0) {
                map.push(randomMap());
            } else {
                if (map[map.length - 1][0][1] >= gap) {
                    map.push(randomMap());
                }
            }
        }, 60);

        function drawRect(row, index, array) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#000';
            row.forEach(function (v) {
                ctx.rect(...v);
                if (v[1] >= h) {
                    array.splice(index, 1);
                    console.log(map);
                } else {
                    v[1] += 10;
                }
            });
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }

        function step() {
            requestAnimationFrame(() => {
                ctx.clearRect(0, 0, w, h);
                map.forEach(function (row, index, array) {
                    drawRect(row, index, array);
                });
                step();
            });
        }

        step();
    }
}

new Sub();
