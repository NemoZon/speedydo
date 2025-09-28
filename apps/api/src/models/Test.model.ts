import { InferSchemaType, Schema, model } from 'mongoose';

const TestSchema = new Schema({
  testId: { type: Schema.Types.ObjectId, alias: '_id' },
  successCondition: {
    type: Schema.Types.ObjectId,
    ref: 'SuccessCondition',
    required: true,
  },
  level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
});

export type TestType = InferSchemaType<typeof TestSchema>;
export const Test = model('Test', TestSchema);
