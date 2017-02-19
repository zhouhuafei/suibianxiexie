/**
 * Created by zhouhuafei on 16/12/4.
 */
//验证
(function () {
    const ValidateInput = require('../modules/m-validate-input');
    const aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
    aInput.forEach(function (v) {
        var validate = new ValidateInput({input: v});
        validate.validateEventBlur();
    });
})();
//星评
(function () {
    const Star = require('../modules/m-star');
    const main = document.querySelector('.main-star');
    const star = new Star({
        eventCallback: function (json) {
            console.log(`有点意思${json.index}`);
        }
    });
    main.appendChild(star.parentDom);
})();

require('../function/lazyload')();//延迟加载