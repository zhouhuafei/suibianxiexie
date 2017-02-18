var fileName = process.argv[2];
var fs = require('fs');
var filePath = `./src/pages/`;
var dirPath = `${filePath+fileName+'/'}`;
fs.mkdirSync(dirPath);
fs.readFile(dirPath,function(err,res){
    var arr=[
        [
            'wxml',
            '',
        ],
        [
            'wxss',
            '',
        ],
        [
            'json',
            '{}',
        ],
        [
            'js',
            '',
        ],
    ];
    arr.forEach(function(v){
        fs.writeFile(`${dirPath+fileName}.${v[0]}`,`${v[1]}`);
    })
});