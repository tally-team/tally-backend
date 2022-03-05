const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://testUser:testing123@cluster0.q2lr0.mongodb.net/TallyDB?retryWrites=true&w=majority'

const connectDB = async () =>{
    try{
        await mongoose.connect(mongodb,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch(e){
        console.log(e)
    }
}

module.exports = connectDB