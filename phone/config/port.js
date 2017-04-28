function Config() {
    this.port = '5555';
}
Config.prototype.getPort = function () {
    return this.port;
};
module.exports = Config;