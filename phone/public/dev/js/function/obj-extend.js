function extend(json) {
    var opt = json || {};
    var defaults = opt.defaults || {};
    var inherits = opt.inherits || {};
    var isDeep = true;//默认进行深拷贝
    for (var attr in inherits) {
        if (inherits.hasOwnProperty(attr)) {
            var defaultsType = Object.prototype.toString.call(defaults[attr]).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(inherits[attr]).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && isDeep) {//类型相同
                if (defaultsType == 'object') {//当为对象
                    extend({defaults: defaults[attr], inherits: inherits[attr]});
                } else if (defaultsType == 'array') {//当为数组时
                    inherits[attr].forEach(function (v, i) {
                        var vDefaultsType = Object.prototype.toString.call(defaults[attr][i]).slice(8, -1).toLowerCase();
                        var vInheritsType = Object.prototype.toString.call(inherits[attr][i]).slice(8, -1).toLowerCase();
                        if (vInheritsType == vDefaultsType && isDeep) {
                            if (vDefaultsType == 'object') {
                                extend({defaults: defaults[attr][i], inherits: inherits[attr][i]});
                            } else {
                                defaults[attr][i] = JSON.parse(JSON.stringify(inherits[attr][i]));
                            }
                        } else {
                            defaults[attr][i] = JSON.parse(JSON.stringify(inherits[attr][i]));
                        }
                    });
                } else {
                    defaults[attr] = JSON.parse(JSON.stringify(inherits[attr]));
                }
            } else {//类型不同,直接后面的覆盖前面的
                defaults[attr] = JSON.parse(JSON.stringify(inherits[attr]));
            }
        }
    }
    return defaults;
}
var obj1 = extend({
    defaults: {
        a: 'a',
        b: {
            b1: 'b1',
            b2: 'b2',
            b3: {
                c1: 'c1'
            }
        }
    },
    inherits: {
        a: 0,
        b: {
            b2: 1,
            b3: {
                c2: 2
            }
        }
    }
});
console.log(obj1);//{ a: 0, b: { b1: 'b1', b2: 1, b3: { c1: 'c1', c2: 2 } } }
var obj2 = extend({
    defaults: {
        b: [
            {a1: 'a1'},
            {a2: 'a2'}
        ]
    },
    inherits: {
        b: [
            'what?',
            {b1: 'b1'},
            {b2: 'b2'}
        ]
    }
});
console.log(obj2);//{ b: [ 'what?', { a2: 'a2', b1: 'b1' }, { b2: 'b2' } ] }
module.exports = extend;