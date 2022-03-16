const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uuid:String,
    userName:String,
    password:String
})

module.exports = userSchema;