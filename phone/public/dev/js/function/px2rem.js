//px2rem
function px2rem(json) {
    var opt = json || opt;
    var base = opt.base || '320';
    var px = opt.px || '0';
    return px / base * 10 + 'rem';
}
module.exports = px2rem;