const UserSchema = new mongoose.Schema({
    uuid: String,
    userName: {
        type: String,
        required: [true, 'userName required']
    },
    password: {
        type: String,
        required: [true, 'password required']
    },
    preferredPaymentMethod: {
        type: String,
        enum: ['VENMO', 'CASH'],
        default: 'CASH'
    }
})

const User = mongoose.model('user', UserSchema);

module.exports = User;