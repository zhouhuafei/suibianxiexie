//存数据
function postData(name, data) {
    sessionStorage[name] = JSON.stringify(data);
}

//取数据
function getData(name) {
    var sess = sessionStorage[name];
    if (!sess) {
        return false;
    }
    try {
        return JSON.parse(sess);
    } catch (err) {
        return sess;
    }
}

module.exports.postData = postData;
module.exports.getData = getData;