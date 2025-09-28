import { InferSchemaType, Schema, model } from 'mongoose';

const LevelTestResultSchema = new Schema({
  ltrId: { type: Schema.Types.ObjectId, alias: '_id' },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
  ltrPoints: { type: Number, default: 0 },
  ltrDate: { type: Date, default: Date.now },
  ltrAttempt: { type: Number, default: 1 },
});

export type LevelTestResultType = InferSchemaType<typeof LevelTestResultSchema>;
export const LevelTestResult = model('LevelTestResult', LevelTestResultSchema);
