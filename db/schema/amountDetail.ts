import mongoose, { Schema } from 'mongoose';

import currency from './currency';

const amountDetailSchema: Schema = new mongoose.Schema({
  id: String,
  transactionId: {
    type: 'string',
    nullable: true,
  },
  transactionPersonId: {
    type: 'string',
    nullable: true,
  },
  amount: Number,
  subAmount: Number,
  tax: Number,
  currency: currency,
});

export default amountDetailSchema;
