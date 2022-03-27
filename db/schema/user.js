const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uuid: String,
    userName: String,
    password: String
})

const User = mongoose.model('user', UserSchema);

module.exports = User;