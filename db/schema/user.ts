import {Schema, Types, model} from 'mongoose'

enum preferredPaymentMethod{
    VENMO = 'VENMO',
    CASH = 'CASH'
}

interface User {
    uuid:String,
    userName: String,
    password: String,
    preferredPaymentMethod: preferredPaymentMethod.CASH
}

const UserSchema = new Schema<User>({
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
        enum: Object.values(preferredPaymentMethod),
        default: preferredPaymentMethod.CASH
    }
})

const User = mongoose.model('user', UserSchema);

module.exports = User;