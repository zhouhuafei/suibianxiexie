function sku(arr) {
    const length = arr.length;
    let num = 0;
    let result = [];
    if (length !== 0) {
        arr[0].forEach(function (v) {
            result.push([v]);
        });
        fn(arr);
    }

    function fn(arr) {
        num++;
        if (num < length) {
            const r = [];
            result.forEach(function (v1) {
                arr[num].forEach(function (v2) {
                    r.push(v1.concat(v2));
                });
            });
            result = r;
            fn(arr);
        }
    }

    return result;
}

// 目标数组(一维数组和二维数组的长度都是不固定的)
const target = [
    ['a', 'b', 'c'], // 一级规格
    [1, 2, 3], // 二级规格
    ['77', '88', '99'], // 三级规格
];

// 结果数组
const result = [
    ['a', 1, '77'],
    ['a', 1, '88'],
    ['a', 1, '99'],
    ['a', 2, '77'],
    ['a', 2, '88'],
    ['a', 2, '99'],
    ['a', 3, '77'],
    ['a', 3, '88'],
    ['a', 3, '99'],
    ['b', 1, '77'],
    ['b', 1, '88'],
    ['b', 1, '99'],
    ['b', 2, '77'],
    ['b', 2, '88'],
    ['b', 2, '99'],
    ['b', 3, '77'],
    ['b', 3, '88'],
    ['b', 3, '99'],
    ['c', 1, '77'],
    ['c', 1, '88'],
    ['c', 1, '99'],
    ['c', 2, '77'],
    ['c', 2, '88'],
    ['c', 2, '99'],
    ['c', 3, '77'],
    ['c', 3, '88'],
    ['c', 3, '99'],
];

console.log(sku(target));

module.exports = sku;
