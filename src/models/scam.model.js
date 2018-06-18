import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const scamModel = new MongooseSchema({
  name: String,
  ticker: String,
  comment: String,
  date: Number,
});

export default mongoose.model('scams', scamModel);
