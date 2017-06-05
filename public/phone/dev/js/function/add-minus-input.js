//加减操作
function addMinusInput(json) {//购物加减商品系列
    if (!json) {
        console.log('no find parameter');
        return false;
    }
    var noActiveClass = json.noActiveClass || 'on';//不能点的时候的class
    var minNum = json.minNum || 1;//最小数量
    var add = json.add;//加的按钮
    var addCallback = json.addCallback;//加的回调
    var minus = json.minus;//减少的按钮
    var minusCallback = json.minusCallback;//减少的回调
    var overMinCallback = json.overMinCallback || function () {
        };//减少到最小值之后继续减少
    var input = json.input;//输入框的按钮
    var blurCallback = json.blurCallback;//失去焦点的回调
    var inventoryNum = parseInt(json.inventoryNum);//商品库存
    var space = function () {
        if (input["value"].trim() == '') {
            input["value"] = minNum;
        }
    };
    //增加
    add.onclick = function () {
        space();
        var num = parseInt(input.value);
        num++;
        input["value"] = num;
        if (num >= inventoryNum) {
            if (inventoryNum == 0) {
                input["value"] = minNum;
            } else {
                input["value"] = inventoryNum;
            }
            add.classList.add(noActiveClass);
        }
        minus.classList.remove(noActiveClass);
        addCallback && addCallback();
    };
    //减少
    minus.onclick = function () {
        space();
        var num = parseInt(input.value);
        num--;
        input["value"] = num;
        if (num < minNum) {
            input["value"] = minNum;
            minus.classList.add(noActiveClass);
            overMinCallback();
        }
        add.classList.remove(noActiveClass);
        minusCallback && minusCallback();
    };
    //获取焦点
    input["onfocus"] = function () {
        input.select();
    };
    //失去焦点
    input["onblur"] = function () {
        space();
        var num = parseInt(input.value);
        if (isNaN(num)) {
            num = minNum;
        }
        minus.classList.remove(noActiveClass);
        add.classList.remove(noActiveClass);
        if (num >= inventoryNum) {
            input["value"] = inventoryNum;
            add.classList.add(noActiveClass);
        }
        if (num <= minNum) {
            input["value"] = minNum;
            minus.classList.add(noActiveClass);
        }
        blurCallback && blurCallback();
    };
}

module.exports = addMinusInput;