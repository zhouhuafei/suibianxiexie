//对象的扩展方法
function extend(json) {
    var opt = json || {};
    opt.defaults = opt.defaults || {};//默认对象
    opt.inherits = opt.inherits || {};//继承对像
    opt.isDeep = opt.isDeep == false ? opt.isDeep : true;//是否进行深拷贝(默认进行深拷贝)
    var defaultsType = Object.prototype.toString.call(opt.defaults).slice(8, -1).toLowerCase();
    var inheritsType = Object.prototype.toString.call(opt.inherits).slice(8, -1).toLowerCase();
    if (defaultsType == inheritsType && opt.isDeep) {
        if (defaultsType == 'object' || defaultsType == 'array') {
            for (var attr in opt.inherits) {
                if (opt.inherits.hasOwnProperty(attr)) {
                    var attrDefaultsType = Object.prototype.toString.call(opt.defaults[attr]).slice(8, -1).toLowerCase();
                    var attrInheritsType = Object.prototype.toString.call(opt.inherits[attr]).slice(8, -1).toLowerCase();
                    if (attrDefaultsType == attrInheritsType && opt.isDeep) {//类型相同
                        if (attrDefaultsType == 'object') {//当为对象
                            extend({defaults: opt.defaults[attr], inherits: opt.inherits[attr]});
                        } else if (attrDefaultsType == 'array') {//当为数组时
                            opt.inherits[attr].forEach(function (v, i) {
                                var vDefaultsType = Object.prototype.toString.call(opt.defaults[attr][i]).slice(8, -1).toLowerCase();
                                var vInheritsType = Object.prototype.toString.call(opt.inherits[attr][i]).slice(8, -1).toLowerCase();
                                if (vInheritsType == vDefaultsType && opt.isDeep) {
                                    if (vDefaultsType == 'object') {
                                        extend({defaults: opt.defaults[attr][i], inherits: opt.inherits[attr][i]});
                                    } else {
                                        opt.defaults[attr][i] = opt.inherits[attr][i];
                                    }
                                } else {
                                    opt.defaults[attr][i] = opt.inherits[attr][i];
                                }
                            });
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
// console.log(obj1);//{ a: 0, b: { b1: 'b1', b2: 1, b3: { c1: 'c1', c2: 2 } } }
// var obj2 = extend({
//     defaults: {
//         b: [
//             {a1: 'a1'},
//             {a2: 'a2'}
//         ]
//     },
//     inherits: {
//         b: [
//             'what?',
//             {b1: 'b1'},
//             {b2: 'b2'}
//         ]
//     }
// });
// console.log(obj2);//{ b: [ 'what?', { a2: 'a2', b1: 'b1' }, { b2: 'b2' } ] }
module.exports = extend;