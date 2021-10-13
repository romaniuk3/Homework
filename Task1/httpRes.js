//task 2)HTTP send file in response using streams

let http = require('http');
let fileSystem = require('fs');
let path = require('path');

http.createServer(function(req, res){
    let filePath = path.join(__dirname, 'myfile.html');
    let stat = fileSystem.statSync(filePath);

    res.writeHead(200, {
        'Content-type': 'text/html',
        'Content-Length': stat.size
    });

    let readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
}).listen(2000);

