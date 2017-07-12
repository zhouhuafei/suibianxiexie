window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/dev-global.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)
        let applications = header.applications;

        //base函数测试
        (function () {
            //测试全选
            let Select = applications.select();
            new Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    click: function (obj) {
                        console.log(obj);
                    }
                }
            });
        })();

        //验证
        (function () {
            const ValidateInput = require('../components/g-validate-form');
            const aInput = [].slice.call(document.querySelectorAll('.g-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({element: v});
            });
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});