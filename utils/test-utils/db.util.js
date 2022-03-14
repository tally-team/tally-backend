const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongo = new MongoMemoryServer;
jest.setTimeout(60000);

const connectDatabase = async () => {
  try {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    await mongoose.connect(uri, mongooseOpts);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

const disconnectDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
    mongo = null;
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDatabase, disconnectDatabase };