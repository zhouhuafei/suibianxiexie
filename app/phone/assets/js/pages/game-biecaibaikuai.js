require('../../scss/pages/game-biecaibaikuai.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
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
        canvasWrap.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const col = 4;
        const row = 4;
        const gap = 10;
        const step = 10;
        let score = 0;
        let hp = 100;
        const item = {
            w: (w - (col - 1) * gap) / col,
            h: (h - (row - 1) * gap) / row,
            bg: '#000',
        };
        const map = [];

        function randomMap() {
            const result = [];
            const max = 10;
            const randomRow = tools.randomNum(0, max);
            let colNum = 1;
            if (randomRow === max) { // 当随机数等于max的时候,一行3个
                colNum = 3;
            }
            if (randomRow === max / 2) { // 当随机数等于max/2的时候,一行2个
                colNum = 2;
            }
            const randomResult = [];
            // 随机2个时,这2个不允许被随机到同一个位置
            let random = tools.randomNum(0, col - 1); // 当前这个在这一行是第几个
            while (randomResult.indexOf(random) === -1 && randomResult.length < colNum) {
                randomResult.push(random);
                random = tools.randomNum(0, col - 1); // 当前这个在这一行是第几个
            }
            randomResult.forEach(function (v) {
                result.push([v * item.w + v * gap, -item.h, item.w, item.h]);
            });
            return result;
        }

        const drawTxt = function () {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#f00';
            ctx.font = '12px 微软雅黑';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`积分:${score},生命值:${hp}`, w / 2, 20);
            ctx.closePath();
            ctx.restore();
        };

        function move() {
            requestAnimationFrame(() => {
                if (map.length === 0) {
                    map.push(randomMap());
                } else {
                    if (map[map.length - 1][0][1] >= gap) {
                        map.push(randomMap());
                    }
                }
                ctx.clearRect(0, 0, w, h);
                map.forEach(function (row) {
                    row.forEach(function (v) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.fillStyle = '#000';
                        ctx.rect(...v);
                        v[1] += step;
                        ctx.fill();
                        ctx.closePath();
                        ctx.restore();
                    });
                });
                if (hp < 0) {
                    setTimeout(function () {
                        alert(`游戏结束,总积分${score}`);
                        window.location.reload();
                    }, 60);
                    return;
                }
                drawTxt();
                map.forEach(function (row, index) {
                    if (row[0][1] >= h) {
                        map.splice(index, 1);
                        hp--;
                    }
                });
                move();
            });
        }

        // 声音
        const audioWrap = document.querySelector('.g-audio');
        const audioSrc = [];
        for (let i = 0; i < 7; i++) {
            audioSrc.push(require(`../../audios/syllable/${i + 1}.mp3`));
        }
        let hasSound = audioWrap.classList.contains('g-audio-on');
        audioWrap.addEventListener('click', function () {
            hasSound = !hasSound;
            this.classList.toggle('g-audio-on');
        });

        const isPc = document.querySelector('html').classList.contains('g-pc');

        // 踩黑块
        canvas.addEventListener(`${isPc ? 'click' : 'touchstart'}`, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            ev = isPc ? ev : ev.changedTouches[0];
            const clientX = ev.clientX - applications.offset(canvasWrap).left;
            const clientY = ev.clientY;
            let isClickSuccess = false;
            map.forEach(function (row, index) {
                row.forEach(function (v, i) {
                    if (clientX >= v[0] && clientX <= v[0] + item.w && clientY >= v[1] && clientY <= v[1] + item.h) {
                        row.splice(i, 1);
                        score++;
                        // 音乐
                        if (hasSound) {
                            let audioDom = applications.createElement({elementName: 'audio'});
                            // audioDom.setAttribute('src', audioSrc[score % audioSrc.length]);
                            audioDom.setAttribute('src', audioSrc[tools.randomNum(0, audioSrc.length - 1)]);
                            audioDom.play();
                            audioDom = null;
                        }
                        isClickSuccess = true;
                    }
                });
                if (row.length === 0) {
                    map.splice(index, 1);
                }
            });
            if (!isClickSuccess) {
                hp--;
                if (hp < 0) {
                    alert(`游戏结束,总积分${score}`);
                    window.location.reload();
                }
            }
        });

        // 游戏开始
        document.querySelector('.game-start').addEventListener('click', function () {
            this.style.display = 'none';
            audioWrap.style.display = 'none';
            move();
        });
    }
}

new Sub();
