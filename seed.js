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
            password: 'userAPass',
            preferredPaymentMethod: 'CASH'
        },
        {
            uuid: '2',
            userName: 'userB',
            password: 'userBPass',
            preferredPaymentMethod: 'CASH'
        },
        {
            uuid: '3',
            userName: 'userC',
            password: 'userCPass',
            preferredPaymentMethod: 'CASH'
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