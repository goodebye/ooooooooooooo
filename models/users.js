var crypto = require('crypto');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	role: {
        type: String,
        default: "user"
    },
    username: {
        type: String,
        required: true;
    },
    hashed_password: String,
    salt: String
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;
