const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () =>{
    try{
        await mongoose.connect(config.db.development,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch(e){
        console.log(e)
    }
}

module.exports = connectDB