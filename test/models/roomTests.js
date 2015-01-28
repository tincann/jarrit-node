var rek = require('rekuire'),
    assert = rek('assert');

var Room = rek('src/models/room'),
    User = rek('src/models/user');

describe('room', function () {
    describe('user management', function(){
        it('should correcly add a user', function(){
            var room = new Room();
            
            room.addUser(new User(1));

            assert.equal(room.getUserCount(), 1);
        });

        it('should correctly add two users', function(){
            var room = new Room()

            room.addUser(new User(1));
            room.addUser(new User(2));

            assert.equal(room.getUserCount(), 2);
        });

        it('should correctly add fifty users', function(){
            var room = new Room();
            
            for(var i = 0; i < 50; i++){
                room.addUser(new User(i + 1));
            }

            assert.equal(room.getUserCount(), 50);
        });

        it('should correctly remove a user', function(){
            var room = new Room();
            
            room.addUser(new User(1));
            room.removeUser(1);

            assert.equal(room.getUserCount(), 0);
        });

        it('should correct get a user by id', function(){
            var room = new Room();

            room.addUser(new User(1));

            assert(room.getUser(1));
        });
    });
});
