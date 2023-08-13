import mongoose, { Schema } from 'mongoose';

import transaction from './transaction';
import amountDetail from './amountDetail';
import item from './item';
import status from './status';

const transactionPersonSchema: Schema = new mongoose.Schema({
  id: String,
  person: String,
  transaction: transaction,
  amountDetail: amountDetail,
  items: [item],
  status: status,
});

export default transactionPersonSchema;
