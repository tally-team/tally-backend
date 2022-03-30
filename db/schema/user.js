const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uuid: String,
    userName: String,
    password: String,
    preferredPaymentMethod: {
        type: String,
        enum: ['VENMO', 'CASH'],
        default: 'CASH'
    }
})

const User = mongoose.model('user', UserSchema);

module.exports = User;