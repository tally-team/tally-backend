const mongoose = require('mongoose');
const config = require('../config');

const connectDB = async (mode) =>{
    try{
        await mongoose.connect(config.db[mode],{});
    } catch(e){
        console.log(e)
    }
}

module.exports = connectDB