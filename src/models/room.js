function Room(){
    this._users = {};
}

Room.prototype.addUser = function(user) {
    this._users[user.id] = user;
};

Room.prototype.removeUser = function(userId) {
    delete this._users[userId];
};

Room.prototype.getUser = function(userId) {
    return this._users[userId];
};

Room.prototype.getUserCount = function() {
    return Object.keys(this._users).length;
};

module.exports = Room;
