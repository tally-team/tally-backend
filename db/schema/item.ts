import mongoose, { Schema } from 'mongoose';

import currency from './currency';

const itemSchema: Schema = new mongoose.Schema({
  id: String,
  currency: currency,
  name: String,
  people: [String],
  cost: Number,
});

export default itemSchema;
