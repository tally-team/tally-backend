import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo: MongoMemoryServer | null = null;

const connectDatabase = async () => {
  try {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    await mongoose.connect(uri);
  } catch(error) {
    throw(error);
  }
}

const disconnectDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    if(mongo){
      await mongo.stop();
      mongo = null;
    }
  } catch(error) {
    throw(error);
  }
};

export { connectDatabase, disconnectDatabase };