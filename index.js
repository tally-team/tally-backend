const app = require('./app');
const PORT = process.env.PORT || 8080;
const connectDB = require('./mongoose')
const mongoose = require('mongoose');

const init = async () =>{
    try{
        connectDB();
        mongoose.connection.once('open', () =>{
            console.log("Connected to mongoDB");
            app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));
        })
        
    } catch(e){
        console.log(e)
    }
};

init();