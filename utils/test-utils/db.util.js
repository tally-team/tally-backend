const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongo = new MongoMemoryServer;

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
    throw(error);
  }
}

const disconnectDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
    mongo = null;
  } catch(error) {
    throw(error);
  }
};

module.exports = { connectDatabase, disconnectDatabase };