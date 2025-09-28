import { InferSchemaType, Schema, model } from 'mongoose';

const ChapterAccessControlSchema = new Schema({
  chacId: { type: Schema.Types.ObjectId, alias: '_id' },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter', required: true },
});

export type ChapterAccessControlType = InferSchemaType<typeof ChapterAccessControlSchema>;
export const ChapterAccessControl = model('ChapterAccessControl', ChapterAccessControlSchema);
