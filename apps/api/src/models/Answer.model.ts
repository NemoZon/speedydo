import { InferSchemaType, Schema, model } from 'mongoose';

const AnswerSchema = new Schema({
  answerId: { type: Schema.Types.ObjectId, alias: '_id' },
  question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  answerTitle: { type: String, required: true },
  answersValid: { type: Boolean, required: true },
});

export type AnswerType = InferSchemaType<typeof AnswerSchema>;
export const Answer = model('Answer', AnswerSchema);
