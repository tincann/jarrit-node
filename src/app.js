//Require the enhanced requiring mechanism
global.rek = require('rekuire');

//Global app object
var app = {
    config: require('config')
};

module.exports = app;

//Socket io code here
var io = require('socket.io')(app.config.get('port') || 1337);

io.on('connection', function(socket){
    //todo
});
