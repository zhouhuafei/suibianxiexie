function Config() {
    this.port = '9999';
}
Config.prototype.getPort = function () {
    return this.port;
};
module.exports = Config;