require('../../scss/pages/game-wuziqi.scss');
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
        const padding = 20.5;
        const colNum = 15; // 正规应该是15列
        const game = {
            nextColor: 'black', // 下一颗棋子的颜色
            blackNum: 0, // 黑色棋子个数
            whiteNum: 0, // 白色棋子个数
        };
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
        const drawTxt = function () {
            ctx.save();
            ctx.beginPath();
            ctx.clearRect(0, 0, w, initY / 1.4);
            ctx.font = '16px 微软雅黑';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`请${game.nextColor === 'black' ? '黑色' : '白色'}棋子落子`, w / 2, initY / 2);
            ctx.closePath();
            ctx.restore();
        };
        drawTxt();
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
                drawLine(v.left, v.top, target.left, target.top);
            }
            if (v.y === 0) {
                const target = map[(colNum * colNum - 1) - (colNum - 1) + v.x];
                drawLine(v.left, v.top, target.left, target.top);
            }
            if (i === Math.floor(map.length / 2)) {
                drawCircle(v.left, v.top, v.radius / 4, 'black');
            }
            // drawCoordinate(v); // 画坐标
        });
        // 声音
        const audioWrap = document.querySelector('.audios-wrap');
        const audioSrc = [];
        for (let i = 0; i < 7; i++) {
            audioSrc.push(require(`../../audios/syllable/${i + 1}.mp3`));
        }
        let hasSound = audioWrap.classList.contains('_on');
        audioWrap.addEventListener('click', function () {
            hasSound = !hasSound;
            this.classList.toggle('_on');
        });
        // 落子
        canvas.addEventListener('click', function (ev) {
            const clientX = ev.clientX - applications.offset(canvasWrap).left;
            const clientY = ev.clientY;
            let nowX = null;
            let nowY = null;
            map.forEach(function (v) {
                if (clientX >= v.left - v.radius && clientX <= v.left + v.radius && clientY >= v.top - v.radius && clientY <= v.top + v.radius) {
                    // 判断点击范围是否是正确的区域
                    if (v.type === 'transparent') {
                        // 音乐
                        if (hasSound) {
                            let audioDom = applications.createElement({elementName: 'audio'});
                            // audioDom.setAttribute('src', audioSrc[(game.blackNum + game.whiteNum) % audioSrc.length]);
                            audioDom.setAttribute('src', audioSrc[tools.getRandom(0, audioSrc.length - 1)]);
                            audioDom.play();
                            audioDom = null;
                        }
                        drawCircle(v.left, v.top, v.radius, game.nextColor);
                        v.type = game.nextColor;
                        nowX = v.x;
                        nowY = v.y;
                        if (game.nextColor === 'black') {
                            game.blackNum++;
                            game.nextColor = 'white';
                        } else {
                            game.whiteNum++;
                            game.nextColor = 'black';
                        }
                    }
                }
            });
            // 提示信息
            drawTxt();
            // 判断输赢
            const result = ['', '', '', ''];
            map.forEach(function (v) {
                let str = '';
                if (v.type === 'transparent') {
                    str = 't';
                }
                if (v.type === 'black') {
                    str = 'b';
                }
                if (v.type === 'white') {
                    str = 'w';
                }
                if (v.x === nowX) { //  垂直
                    result[0] += str;
                }
                if (v.y === nowY) { //  水平
                    result[1] += str;
                }
                if (v.x + v.y === nowX + nowY) { // 左斜
                    result[2] += str;
                }
                if (v.x - v.y === nowX - nowY) { // 右斜
                    result[3] += str;
                }
            });
            const victory = [
                {
                    k: 'bbbbb',
                    v: '黑棋获胜',
                },
                {
                    k: 'wwwww',
                    v: '白棋获胜',
                },
            ];
            result.forEach(function (v1) {
                victory.forEach(function (v2) {
                    if (v1.indexOf(v2.k) !== -1) {
                        setTimeout(function () {
                            alert(v2.v);
                            window.location.reload();
                        }, 60);
                    }
                });
            });
        });
        canvasWrap.appendChild(canvas);
    }
}

new Sub();
