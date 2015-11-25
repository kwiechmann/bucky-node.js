var http = require('http');

function onRequest(request, response) {
    console.log('Request: ', request);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world!!');
    response.end();
}

console.log('Application initializing...');
http.createServer(onRequest).listen(8888, 'localhost');
console.log('Application ready...');
