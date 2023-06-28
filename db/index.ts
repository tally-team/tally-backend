import mongoose from 'mongoose';

module.exports =  async (mode: string) =>{
    try{
        await mongoose.connect(config.db[mode],{});
    } catch(e){
        console.log(e)
    }
}
