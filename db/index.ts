import mongoose from 'mongoose';

import config from '../config';

const connectDB = async (mode: string) => {
  try {
    await mongoose.connect(config.db[mode], {});
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
