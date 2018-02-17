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
            const max = 5;
            const randomRow = tools.getRandom(0, max); // 当随机数等于10的时候,一行两个
            let colNum = 1;
            if (randomRow === max) {
                colNum = 2;
            }
            const randomResult = [];
            // 随机2个时,这2个不允许被随机到同一个位置
            let random = tools.getRandom(0, col - 1); // 当前这个在这一行是第几个
            while (randomResult.indexOf(random) === -1 && randomResult.length < colNum) {
                randomResult.push(random);
                random = tools.getRandom(0, col - 1); // 当前这个在这一行是第几个
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
        const audioWrap = document.querySelector('.audios-wrap');
        const audioDom = applications.createElement({elementName: 'audio'});
        const audioSrc = [];
        for (let i = 0; i < 7; i++) {
            audioSrc.push(require(`../../audios/syllable/${i + 1}.mp3`));
        }
        let hasSound = audioWrap.classList.contains('_on');
        audioWrap.addEventListener('click', function () {
            hasSound = !hasSound;
            this.classList.toggle('_on');
        });

        const isPc = document.querySelector('html').classList.contains('g-pc');

        // 踩黑块
        canvas.addEventListener(`${isPc ? 'click' : 'touchstart'}`, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            ev = isPc ? ev : ev.changedTouches[0];
            const clientX = ev.clientX - applications.offset(canvasWrap).left;
            const clientY = ev.clientY;
            map.forEach(function (row, index) {
                row.forEach(function (v, i) {
                    if (clientX >= v[0] && clientX <= v[0] + item.w && clientY >= v[1] && clientY <= v[1] + item.h) {
                        row.splice(i, 1);
                        score++;
                        // 音乐
                        if (hasSound) {
                            audioDom.setAttribute('src', audioSrc[tools.getRandom(0, audioSrc.length - 1)]);
                            audioDom.play();
                        }
                    } else {
                        hp--;
                        if (hp < 0) {
                            alert(`游戏结束,总积分${score}`);
                            window.location.reload();
                        }
                    }
                });
                if (row.length === 0) {
                    map.splice(index, 1);
                }
            });
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
