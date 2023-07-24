import app from './app';
import connectDB from './db';
import config from './config';
import mongoose from 'mongoose';

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
        throw(e);
    }
};

init();
