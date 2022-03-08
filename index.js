const app = require('./app');
const PORT = process.env.PORT || 8080;
const connectDB = require('./db')
const mongoose = require('mongoose');

const init = () =>{
    try{
        connectDB(app.settings.env);
        mongoose.connection.once('open', () =>{
            console.log("Connected to mongoDB");
            app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));
        })
        
    } catch(e){
        console.log(e)
    }
};

init();
