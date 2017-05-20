//px2rem
function px2rem(json) {
    var opts = json || opts;
    var base = opts.base || '320';
    var px = opts.px || '0';
    return px / base * 10 + 'rem';
}

module.exports = px2rem;