import mongoose, { Schema } from 'mongoose';

import user from './user';
import item from './item';

const transactionSchema: Schema = new mongoose.Schema({
  uuid: String,
  date: String,
  items: [item],
  tax: Number,
  tip: Number,
  currency: {
    type: String,
    default: 'USD',
  },
  total: Number,
  creator: user,
  people: [user],
  status: {
    type: String,
    enum: ['COMPLETED', 'ONGOING', 'DELETED'],
    default: 'ONGOING',
  },
});

export default transactionSchema;
