const app = require('./app');
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');

const init = async () =>{
    try{
        //await mongoose.connect(`mongodb://localhost:${PORT}/test`)
        app.listen(PORT,()=> console.log(`Listening on port ${PORT}`))
    } catch(e){
        console.log('errorrrrr')
    }
};

init();