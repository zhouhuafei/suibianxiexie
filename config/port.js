function Config() {
    this.port = '8088';
}
Config.prototype.getPort = function () {
    return this.port;
};
module.exports = Config;