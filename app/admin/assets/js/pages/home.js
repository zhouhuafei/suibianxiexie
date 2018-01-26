require('../../scss/pages/home.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const superSelf = this;

        // 导航
        (function () {
            const Navigation = require('../components-dom/g-navigation');
            new Navigation({wrap: '.page-navigation'});
        }());
    }
}

new Sub();
