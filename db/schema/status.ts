import mongoose, { Schema } from 'mongoose';

const statusSchema: Schema = new mongoose.Schema({
  value: {
    type: String,
    enum: ['COMPLETED', 'ONGOING', 'DELETED'],
    default: 'ONGOING',
  },
});

export default statusSchema;
