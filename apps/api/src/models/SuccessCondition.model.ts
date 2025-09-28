import { InferSchemaType, Schema, model } from 'mongoose';

const SuccessConditionSchema = new Schema({
  scId: { type: Schema.Types.ObjectId, alias: '_id' },
  scGold: { type: Number, required: true },
  scSilver: { type: Number, required: true },
  scBronze: { type: Number, required: true },
});

export type SuccessConditionType = InferSchemaType<typeof SuccessConditionSchema>;
export const SuccessCondition = model('SuccessCondition', SuccessConditionSchema);
