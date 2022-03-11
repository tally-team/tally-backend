const app = require('./app');
const connectDB = require('./db');
const config = require('./config');
const mongoose = require('mongoose');

const init = () =>{
    const MODE = app.settings.env
    const PORT = config.port[MODE]

    try{
        connectDB(MODE);
        mongoose.connection.once('open', () =>{
            console.log("Connected to mongoDB");
            app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));
        })
    } catch(e){
        console.log(e)
    }
};

init();
