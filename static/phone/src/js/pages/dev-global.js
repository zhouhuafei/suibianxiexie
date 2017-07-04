window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/dev-global.scss');
        let header = require('../commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //base函数测试
        (function () {
            var Select = require('../function/select');
            //测试全选
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
            const ValidateInput = require('../modules/m-validate-form');
            const aInput = [].slice.call(document.querySelectorAll('.m-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({element: v});
            });
        })();

        let footer = require('../commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});