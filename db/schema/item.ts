import mongoose, { Schema } from 'mongoose';

import transaction from './transaction';
import user from './user';

const itemSchema: Schema = new mongoose.Schema({
  uuid: String,
  transaction: transaction,
  currency: {
    type: String,
    default: 'USD',
  },
  itemName: String,
  people: [user],
  cost: Number,
  status: {
    type: String,
    enum: ['PAID', 'PENDING', 'CANCELLED'],
    default: 'PENDING',
  },
});

export default itemSchema;
