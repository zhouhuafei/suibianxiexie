//对象的扩展方法
function extend(json) {
    var options = json || {};
    options.defaults = options.defaults || {};//默认对象
    options.inherits = options.inherits || {};//继承对像
    options.isDeep = options.isDeep == false ? options.isDeep : true;//是否进行深拷贝(默认进行深拷贝)
    var defaultsType = Object.prototype.toString.call(options.defaults).slice(8, -1).toLowerCase();
    var inheritsType = Object.prototype.toString.call(options.inherits).slice(8, -1).toLowerCase();
    if (defaultsType == inheritsType && options.isDeep) {
        if (defaultsType == 'object' || defaultsType == 'array') {//当为对象或者为数组
            for (var attr in options.inherits) {
                if (options.inherits.hasOwnProperty(attr)) {
                    var attrDefaultsType = Object.prototype.toString.call(options.defaults[attr]).slice(8, -1).toLowerCase();
                    var attrInheritsType = Object.prototype.toString.call(options.inherits[attr]).slice(8, -1).toLowerCase();
                    if (attrDefaultsType == attrInheritsType && options.isDeep) {//类型相同
                        if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {//当为对象或者为数组
                            extend({defaults: options.defaults[attr], inherits: options.inherits[attr]});
                        } else {
                            options.defaults[attr] = options.inherits[attr];
                        }
                    } else {//类型不同,直接后面的覆盖前面的
                        options.defaults[attr] = options.inherits[attr];
                    }
                }
            }
        } else {
            options.defaults = options.inherits;
        }
    } else {
        options.defaults = options.inherits;
    }
    return options.defaults;
}
// var object1 = extend({
//     defaults: {
//         a: 'a',
//         b: {
//             b1: 'b1',
//             b2: 'b2',
//             b3: {
//                 c1: 'c1'
//             }
//         }
//     },
//     inherits: {
//         a: 0,
//         b: {
//             b2: 1,
//             b3: {
//                 c2: 2
//             }
//         }
//     }
// });
// console.log(object1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
// var object2 = extend({
//     defaults: {
//         a: [
//             0,
//             [9, 8, 7],
//             {
//                 arr: [
//                     1,
//                     2,
//                     3,
//                     [7, 9, 10],
//                     {good: 'good'}
//                 ]
//             }
//         ],
//         b: [
//             {a1: 'a1'},
//             {a2: 'a2'}
//         ]
//     },
//     inherits: {
//         a: [
//             1,
//             [3, 1],
//             {
//                 arr: [
//                     8,
//                     8,
//                     8,
//                     [6, 8]
//                 ]
//             }
//         ],
//         b: [
//             'what?',
//             {b1: 'b1'},
//             {b2: 'b2'}
//         ]
//     }
// });
// console.log(object2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}
module.exports = extend;