var connect = require('connect');
var http = require('http');

var app = connect();

function handleProfile(request, response, next) {
    console.log('profile requested');
    console.log('request.uri: ', request.url);
    next();
}

function handleProfile2(request, response, next) {
    console.log('profile2 requested');
    console.log('request.uri: ', request.url);
    next();
}

function handleForum(request, response, next) {
    console.log('forum requested');
    console.log('request.uri: ', request.url);
    next();
}

console.log('Server initializing...');

app.use('/profile', handleProfile);
app.use('/profile', handleProfile2);
app.use('/forum', handleForum);

http.createServer(app).listen(8888, 'localhost');

console.log('Server running...');
