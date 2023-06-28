import mongoose from 'mongoose';

const user = require('./user');
const item = require('./item');

const transactionSchema = new mongoose.Schema({
    uuid: String,
    date: String,
    items: [item],
    tax: Number,
    tip: Number,
    currency: {
        type: String,
        default: "USD"
    },
    total: Number,
    creator: user,
    people: [user],
    status: {
        type: String,
        enum:['COMPLETED','ONGOING','DELETED'],
        default:'ONGOING'
    }
})

module.exports = transactionSchema;
