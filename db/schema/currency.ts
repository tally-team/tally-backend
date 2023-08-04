import mongoose, { Schema } from 'mongoose';

const currencySchema: Schema = new mongoose.Schema({
  value: {
    type: String,
    enum: ['USD', 'JPY', 'MXN', 'KRW', 'EUR'],
    default: 'USD',
  },
});

export default currencySchema;
