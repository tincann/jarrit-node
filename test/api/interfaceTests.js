var rek = require('rekuire'),
    util = rek('util'),
    EventEmitter = rek('events').EventEmitter,
    sion = rek('sinon'),
    assert = rek('assert');

var Interface = rek('src/api/interface');

describe('interface', function () {
    it('all events of socket should call all interface methods', function(){       
        var spies = [];
        var apiMethods = getMethods(Interface.prototype);

        //get all methods
        apiMethods.forEach(function(method){        
            var spy = sion.spy();
            Interface.prototype[method] = spy;
            spies.push(spy); 
        });

        var interface = new Interface(newDummySocket());

        var interfaceMethods = getMethods(interface);
        interfaceMethods.forEach(function(method){
            interface.socket.emit(method);
        });

        spies.forEach(function(spy){
            assert(spy.called, 'Interface method was not called');
        });
    });  

    function getMethods(object) {
        var methods = [];
        for(var memberName in object){
            var member = object[memberName];
            if(typeof member === 'function'){
                methods.push(member);
            }
        }
        return methods;
    }

    function newDummySocket(){
        var Socket = function(){};
        util.inherits(Socket, EventEmitter);
        return new Socket;
    }
});
