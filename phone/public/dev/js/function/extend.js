//对象的扩展方法
function extend(json) {
    var opt = json || {};
    opt.defaults = opt.defaults || {};//默认对象
    opt.inherits = opt.inherits || {};//继承对像
    opt.isDeep = opt.isDeep == false ? opt.isDeep : true;//是否进行深拷贝(默认进行深拷贝)
    var defaultsType = Object.prototype.toString.call(opt.defaults).slice(8, -1).toLowerCase();
    var inheritsType = Object.prototype.toString.call(opt.inherits).slice(8, -1).toLowerCase();
    if (defaultsType == inheritsType && opt.isDeep) {
        if (defaultsType == 'object' || defaultsType == 'array') {//当为对象或者为数组
            for (var attr in opt.inherits) {
                if (opt.inherits.hasOwnProperty(attr)) {
                    var attrDefaultsType = Object.prototype.toString.call(opt.defaults[attr]).slice(8, -1).toLowerCase();
                    var attrInheritsType = Object.prototype.toString.call(opt.inherits[attr]).slice(8, -1).toLowerCase();
                    if (attrDefaultsType == attrInheritsType && opt.isDeep) {//类型相同
                        if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {//当为对象或者为数组
                            extend({defaults: opt.defaults[attr], inherits: opt.inherits[attr]});
                        } else {
                            opt.defaults[attr] = opt.inherits[attr];
                        }
                    } else {//类型不同,直接后面的覆盖前面的
                        opt.defaults[attr] = opt.inherits[attr];
                    }
                }
            }
        } else {
            opt.defaults = opt.inherits;
        }
    } else {
        opt.defaults = opt.inherits;
    }
    return opt.defaults;
}
// var obj1 = extend({
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
// console.log(obj1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
// var obj2 = extend({
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
// console.log(obj2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}
module.exports = extend;