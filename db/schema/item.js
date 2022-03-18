const mongoose = require('mongoose');
const user = require('./user');

const itemSchema = new mongoose.Schema({
    id: String,
    date: String,
    tax: Number,
    tip: Number,
    currency: {
        type: String,
        default: 'USD'
    },
    total: Number,
    creator: user,
    status: String
})

module.exports = itemSchema;