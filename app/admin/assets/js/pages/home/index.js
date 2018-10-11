require('../../../scss/pages/home.scss');
const Super = require('../../pages-super/super');

class Sub extends Super {
    power() {
        // 测试图片库
        const Gallery = require('../../components-dom-business/g-gallery');
        new Gallery();
    }
}

new Sub();
