//px2rem
function px2rem(json) {
    var options = json || options;
    var base = options.base || '320';
    var px = options.px || '0';
    return px / base * 10 + 'rem';
}
module.exports = px2rem;