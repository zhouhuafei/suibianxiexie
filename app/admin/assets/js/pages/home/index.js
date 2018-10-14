require('../../../scss/pages/home.scss');
const Super = require('../../pages-super/super');
const Gallery = require('../../components_dom-business/g-gallery');

class Sub extends Super {
    power() {
        // 测试图片库
        new Gallery();
    }
}

new Sub();
