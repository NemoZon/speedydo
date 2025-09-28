import { InferSchemaType, Schema, model } from 'mongoose';

const ChapterSchema = new Schema({
  chapterId: { type: Schema.Types.ObjectId, alias: '_id' },
  chapterTitle: { type: String, required: true, maxlength: 100 },
  chapterDesc: { type: String, maxlength: 1000 },
});

export type ChapterType = InferSchemaType<typeof ChapterSchema>;
export const Chapter = model('Chapter', ChapterSchema);
