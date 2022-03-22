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
            uuid: 'abc123',
            userName: 'userA',
            password: 'userAPass'
        },
        {
            uuid: 'def456',
            userName: 'userB',
            password: 'userBPass'
        },
        {
            uuid: 'ghi789',
            userName: 'userC',
            password: 'userCPass'
        }
    ]

    const seedDB = async () => {
        await User.deleteMany({});
        await User.insertMany({userSeed});
        console.log('DB seed complete!')
    }

    seedDB().then(()=>{
        console.log('closing connection to mongoDB')
        mongoose.connection.close();
    })
    
}

runSeed();