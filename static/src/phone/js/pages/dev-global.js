window.addEventListener('load', function () {
    setTimeout(function () {
        let applications = require('../utils/applications');

        // base函数测试
        (function () {
            // 测试全选
            let Select = applications.select();
            new Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    click: function (obj) {
                        console.log(obj);
                    },
                },
            });
        })();

        // 验证
        (function () {
            const ValidateInput = require('../components/g-validate-form-hint');
            const aInput = [].slice.call(document.querySelectorAll('.g-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({element: v});
            });
        })();

        require('../../scss/pages/dev-global.scss');// 当前页面用到的样式
        let common = require('../pages-commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
