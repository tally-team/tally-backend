const mongoose = require('mongoose');
const user = require('./user');
const transaction = require('./transaction')

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
        enum:['PENDING','PAID', 'CANCELLED'],
        default:'ONGOING'
    }
})

module.exports = itemSchema;
