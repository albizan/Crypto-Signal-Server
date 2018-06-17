import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;

const signalModel = new MongooseSchema({
  name: String,
  ticker: String,
  exchanges: [String],
  timeFrame: String,
  riskFactor: String,
  comment: String,
  buyPrice: Number,
  stopLoss: Number,
  targets: [Number],
  coinAgainst: String,
  isGem: Boolean,
  success: Boolean,
  date: Number,
});

export default mongoose.model('signals', signalModel);
