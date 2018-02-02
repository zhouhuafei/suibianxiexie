require('../../scss/pages/game-wuziqi.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const applications = this.applications;
        const canvasWrap = document.querySelector('.canvas-wrap');
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        const size = w - 30;
        const lineNum = 15;
        const gap = size / 15;
        canvasWrap.style.width = `${w}px`;
        canvasWrap.style.height = `${h}px`;
        const canvas = applications.createElement({
            elementName: 'canvas',
            attribute: {
                width: size,
                height: size,
            },
        });
        const ctx = canvas.getContext('2d');
        canvasWrap.appendChild(canvas);
    }
}

new Sub();
