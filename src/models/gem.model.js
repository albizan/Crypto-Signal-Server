import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const gemModel = new MongooseSchema({
  name: String,
  ticker: String,
  exchanges: [String],
  comment: String,
  date: Number,
});

export default mongoose.model('gems', gemModel);
