const fs = require('fs');
const tools = require('zhf.tools'); // 工具方法集合

module.exports = function (errorInfo, filePath) {
    const nowDate = tools.dateFormat(new Date(), 'year/month/day hours:minutes:seconds:milliseconds week1').result;
    let content = `${errorInfo}\n---------------------------------------- ${nowDate}`;
    fs.readFile(filePath, 'utf-8', function (err, data) {
        if (!err) {
            content += `\n${data || ''}`;
            fs.writeFile(filePath, content);
        }
    });
};
