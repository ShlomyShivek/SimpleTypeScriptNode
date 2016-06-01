
import http = require('http');
import Comp = require('./test');

http.createServer(function (req, res) {
    let a = new Comp.Mod.MyTest();
    a.isOk("aaa");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
