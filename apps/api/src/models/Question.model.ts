import { InferSchemaType, Schema, model } from 'mongoose';

const QuestionSchema = new Schema({
  questionId: { type: Schema.Types.ObjectId, alias: '_id' },
  test: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
  questionTitle: { type: String, required: true, maxlength: 100 },
  questionImage: { type: String },
  questionDetails: { type: String, maxlength: 1000 },
  questionPoints: { type: Number, default: 0 },
});

export type QuestionType = InferSchemaType<typeof QuestionSchema>;
export const Question = model('Question', QuestionSchema);
