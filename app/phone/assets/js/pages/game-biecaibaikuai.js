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
        const step = 6;
        let score = 0;
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
                map.forEach(function (row, index) {
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
                map.forEach(function (row, index) {
                    if (row[0][1] >= h) {
                        map.splice(index, 1);
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
