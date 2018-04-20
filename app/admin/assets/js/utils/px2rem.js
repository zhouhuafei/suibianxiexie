function px2rem(px, psd = 750) {
    return `${px / psd * 10}rem`;
}

module.exports = px2rem;
