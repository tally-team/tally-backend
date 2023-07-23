import mongoose from 'mongoose';

import config from '../config';

const noTypeVariable = 'testing testing';

function addNumbers(a, b) {
  return a + b;
}

const connectDB = async (mode: string) => {
  try {
    await mongoose.connect(config.db[mode], {});
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
