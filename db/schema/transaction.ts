import mongoose, { Schema } from 'mongoose';

import item from './item';
import amountDetail from './amountDetail';
import status from './status';

const transactionSchema: Schema = new mongoose.Schema({
  id: String,
  items: [item],
  people: [String],
  amountDetail: amountDetail,
  status: status,
});

export default transactionSchema;
