import mongoose from 'mongoose';

const transaction = require('./transaction')
const user = require('./user')

const itemSchema = new mongoose.Schema({
    uuid: String,
    transaction: transaction,
    currency: {
        type: String,
        default: 'USD'
    },
    itemName: String,
    people: [user],
    cost: Number,
    status: {
        type: String,
        enum:['PAID', 'PENDING', 'CANCELLED'],
        default:'PENDING'
    }
})

module.exports = itemSchema;
