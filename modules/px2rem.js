function px2rem(px, base = 750) {
    return `${px / base * 10}rem`;
}

module.exports = px2rem;
