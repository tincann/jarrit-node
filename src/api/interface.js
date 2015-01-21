
function Interface(socket){
    this.socket = socket;
    _init(this, socket);
}

//
//Incoming
//

/**
 * [roomJoin description]
 * @param  {[type]}
 * @return {[type]}
 */
Interface.prototype.roomJoin = function(roomId) {
    console.log('room joined');
};

Interface.prototype.disconnect = function() {

};

//Bind all socket events to functions in interface
var interfaceMethods = {};
var _init = function(interface, socket) {
    for(var memberName in interface){
        if(typeof interface[memberName] === 'function'){
            socket.on(memberName, interface[memberName].bind(interface));
        }
    }
};

module.exports = Interface;
