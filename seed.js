const mongoose = require('mongoose');
const User = require('./db/schema/user');
const connectDB = require('./db');

const runSeed = () =>{
    connectDB('development')
    .then(()=>{
        console.log('connected to mongoDB');
    })

    const userSeed = [
        {
            uuid: '1',
            userName: 'userA',
            password: 'userAPass'
        },
        {
            uuid: '2',
            userName: 'userB',
            password: 'userBPass'
        },
        {
            uuid: '3',
            userName: 'userC',
            password: 'userCPass'
        }
    ]

    const seedDB = async () => {
        try{
            await User.deleteMany({});
            await User.insertMany(userSeed);
            console.log('DB seed complete!')
        }
        catch(e){
            console.error(e);
        }
        
    }

    seedDB().then(()=>{
        console.log('closing connection to mongoDB')
        mongoose.connection.close();
    })
    
}

runSeed();