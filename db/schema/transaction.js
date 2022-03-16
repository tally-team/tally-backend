const mongoose = require('mongoose');
const user = require('user.js')

const transactionSchema = new mongoose.Schema({
    uuid:String,
    date:String,
    items:Array,
    tax:Number,
    tip:Number,
    currency:{String, default:"USD"},
    total:Number,
    creator:user,
    people:Array,
    status:{
        enum:['COMPLETED','ONGOING','DELETED'],
        default:'ONGOING'
    }
})

module.exports = transactionSchema;